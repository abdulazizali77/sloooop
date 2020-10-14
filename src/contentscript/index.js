import './jquery-global';
import 'jqueryui';

import * as webextensionpolyfill from 'webextension-polyfill';
import * as winjs from 'winjs';
import querystring from "querystring";
import playerSeek from '../shared/spotifyPlayer';
//import getLoginUrl from "../shared/spotifyauth";


console.log("start content.js");
const SPOTIFY_PLAYER_EP = 'https://api.spotify.com/v1/me/player';
//TODO: should have a state machine
var enabled;
var containerDiv;
var dialogDiv;
var bearertoken;
var currentTrackId;
var rangeMin = 0;
var rangeMax = 1;
var currentPlayingPosition;
var currentTrackIdDuration;
var playbackController;

function injectCssToHead(cssFile) {
    injectLinkToHead(cssFile, "text/css").rel = "stylesheet";
}

function injectLinkToHead(filePath, type) {
    let link = document.createElement("LINK");

    link.type = type;
    if (chrome != undefined && chrome.runtime != undefined) {
        link.href = chrome.runtime.getURL(filePath);
    } else {
        link.href = browser.runtime.getURL(filePath);
    }
    document.head.appendChild(link);
    return link;
}

function setupWinJsDialog() {
    //add link
    //<link href="scripts/winjs/css/ui-light.css" rel="stylesheet"/>
    injectCssToHead("css/ui-light.css");

    let data_win_options = {
        title: 'Main instruction',
        primaryCommandText: 'button1',
        secondaryCommandText: 'button2'

    };
    dialogDiv = document.createElement("DIV");
    dialogDiv.setAttribute("data-win-control", "WinJS.UI.ContentDialog");
    dialogDiv.setAttribute("data-win-options", JSON.stringify(data_win_options));
    dialogDiv.innerText = "stuff";

    //dialogDiv.style.cssText = "position: fixed; right: 150px; top:0px; z-index: 100; width: 150px; height: 100%;";
    dialogDiv.id = "dialogDiv1";
    document.body.appendChild(dialogDiv);

    try {
        //$("#" + dialogDiv.id + "").draggable();
        //$("#" + dialogDiv.id + "").resizable();
    } catch (e) {
        alert("error " + e);
        console.log("error " + e);
    }
}

function rangeSliderStartHandler(event, ui) {
    console.log(event.target.id);
}

function rangeSliderChangeHandler(event, ui) {

    console.log("POOP USER CHANGED SLIDERS" + ui.values[0] + " " + ui.values[1] + " ");

    let rangeEvt = new CustomEvent("sloop_range_change", {
        detail: {
            min: ui.values[0],
            max: ui.values[1],
        }
    });
    window.dispatchEvent(rangeEvt);
    let timePos = secondsToTime(ui.value);
    ui.handle.innerText = timePos;
}

function setupRangeSlider() {
    injectCssToHead("css/jquery-ui.css");
    injectCssToHead("css/jquery-ui.structure.css");
    injectCssToHead("css/jquery-ui.theme.css");

    //how to change colour, theme of slider?
    //.ui-widget-header
    //
    //.ui-widget-header
    //width: 2.2em;

    let options = {
        range: true,
        min: 0,
        max: 1,
        step: 1,
        values: [0, 1],
        start: rangeSliderStartHandler,
        change: rangeSliderChangeHandler
    };
    containerDiv = document.createElement("DIV");
    //containerDiv.style.cssText = "position: fixed; top:0px; z-index: 100; height: 20px; border: 1px solid red;";
    containerDiv.style.cssText = "position: fixed; top:0px; z-index: 100; height: 8px";
    containerDiv.id = "sloopContainer";

    dialogDiv = document.createElement("DIV");
    dialogDiv.id = "looperSelection";
    dialogDiv.setAttribute("width", "100%");
    dialogDiv.setAttribute("height", "100%");

    containerDiv.appendChild(dialogDiv);
    document.body.appendChild(containerDiv);
    try {
        $("#" + dialogDiv.id).slider(options);
        //FIXME: unsure best way to do this
        $(".ui-slider-handle").css('width', '2.2em');
        $(".ui-slider-handle").css('font-size', 'smallest');
    } catch (e) {
        console.log(e);
    }
}

function setupOverlay() {
    return new Promise((resolve, reject) => {
        //setupWinJsDialog();
        setupRangeSlider();
        resolve();
        //FIXME reject?

    });
}

function teardownOverlay(sendResponse) {
    document.body.removeChild(containerDiv);
    if (sendResponse != undefined) {
        sendResponse(true);
    }
}

//TODO: add window or document change to reposition resize container
function adjustContainer() {
    try {
        let playbarRect = document.getElementsByClassName("playback-bar")[0].getClientRects()[0];
        containerDiv.style.left = playbarRect.left + "px";
        containerDiv.style.width = playbarRect.width + "px";
        //FIXME: uses 'px'
        let h = Number.parseFloat(containerDiv.style.height.substring(0, containerDiv.style.height.length - 2));
        containerDiv.style.top = (playbarRect.top - h) + "px";
    } catch (e) {

    }
}

//decided not to use momentjs
function timeToSeconds(timeStr) {
    //expects something like xx:xx
    //no milliseconds
    let minutes;
    let seconds;
    let totalSeconds;
    let timeArr = timeStr.split(":");
    if (timeArr.length == 2) {
        minutes = Number.parseInt(timeArr[0]);
        seconds = Number.parseInt(timeArr[1]);
        totalSeconds = (minutes * 60) + seconds;
    } else {
        //assert, how?
    }
    return totalSeconds;
}

function secondsToTime(seconds) {
    //FIXME: not accounting for hours!
    let leftover = new String(seconds % 60).padStart(2, 0);
    let minutes = new String((seconds - leftover) / 60);
    return minutes + ":" + leftover;
}

var trackChangeObserver;
var playbackPositionObserver;


//FIXME: some redundant
const moinit = {
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    attributes: true,
    subtree: true
};

function trackMutationCallback(mutationList, observer) {
    // mutatation.target.data
    // mutatation.target.nodeType
    // mutatation.target.nodeValue
    // mutatation.target.wholeText
    // mutatation.target.textContent
    //currentTrackId = undefined;
    mutationList.forEach((mutation) => {
        console.log("TRACK CHANGE TRIGGER mutationCallback " + mutation.type + " " + mutation.target + " " + mutation.target.textContent + " " + mutation.target.nodeValue);
        //make api call
        //TODO: check validity of token
        spotifyInitTrack(bearertoken);
    });
}

function positionMutationCallback(mutationList, observer) {
    //hard to figure out the source
    mutationList.forEach((mutation) => {
        let position = timeToSeconds(mutation.target.textContent);
        console.log("mutationCallback " + mutation.type + " " + mutation.target + " " + mutation.target.textContent + " " + mutation.target.nodeValue);
        //change the range values

        var event = new CustomEvent("sloop_position_change", {
            detail: {
                position: position
            }
        });
        window.dispatchEvent(event);
    });
}

function observePlaybackPosition() {
    //current time
    let pbpos = document.getElementsByClassName("playback-bar__progress-time")[0];
    playbackPositionObserver = new MutationObserver(positionMutationCallback);
    playbackPositionObserver.observe(pbpos, moinit);
}

function observeTracks() {
    //a[data-testid="nowplaying-track-link"]
    //FIXME: unsure what the second one is
    let nowt1 = document.querySelectorAll('a[data-testid="nowplaying-track-link"]')[0];
    trackChangeObserver = new MutationObserver(trackMutationCallback);
    trackChangeObserver.observe(nowt1, moinit);
}

function setupObservers() {
    observePlaybackPosition();
    observeTracks();
}
function teardownObservers() {
    playbackPositionObserver.disconnect();
    trackChangeObserver.disconnect();
}

function handleDurationChange(event) {
    console.log("POOP SLIDER INIT START handleDurationChange " + event.detail.duration + "" + event.detail.min + " " + event.detail.max);
    //FIXME: bit of a kludge here, the sequence of events arent really streamlined
    //so we have to invalidate the currentTrack
    //    currentTrackId = undefined;

    let options = {
        range: true,
        step: 1,
        start: rangeSliderStartHandler,
        change: rangeSliderChangeHandler
    };
    //if has duration set duration
    if (event.detail.duration != undefined) {
        options.min = 0;
        options.max = event.detail.duration;
    }

    if (event.detail.min != undefined) {
        options.values = new Array();
        options.values[0] = event.detail.min;
    }

    if (event.detail.max != undefined) {
        options.values[1] = event.detail.max;
    }
    $("#" + dialogDiv.id).slider(options);

    console.log("POOP SLIDER INIT END");
    adjustContainer();
}

function handlePositionChange(event) {
    console.log("handlePositionChange " + event.detail.position);
    //check position and compare against
    //get slider positions
    //$("#" + dialogDiv.id).slider(options);
    currentPlayingPosition = event.detail.position;
    checkPlayingPosition();
}

function handleRangeChange(event) {
    console.log("POOP handleRangeChange " + event.detail.min + " " + event.detail.max);
    rangeMin = event.detail.min;
    rangeMax = event.detail.max;

    //FIXME:bit of a kludge here
    if (currentTrackId != undefined) {
        saveTrack(currentTrackId, rangeMin, rangeMax);

    }
}

function checkPlayingPosition() {


    //if rangeMax is default or unset then dont care
    if (!(rangeMin == 0 && (rangeMax == currentTrackIdDuration || rangeMax == 1))) {
        //NB: if the max is not set but the min is, the playback cant seek back if it reaches the end
        //so we have to offset against 1second, however this is a bit iffy and buggy
        let offset = 0;
        if(rangeMax == currentTrackIdDuration){
            offset = 1;
        }
        if (currentPlayingPosition < rangeMin || currentPlayingPosition >= (rangeMax - offset)) {
            console.log("currentPlayingPosition is outside!" + currentPlayingPosition + " " + rangeMin + " " + rangeMax + " " + (rangeMax - offset));
            //TODO: a flag to disable jumping to min if less than minimum
            seek(Number.parseInt(rangeMin) * 1000);
        } else {
            //console.log("currentPlayingPosition within range!" + currentPlayingPosition + " " + rangeMin+" "+rangeMin);
        }
    } else {
        if (currentPlayingPosition < rangeMin || currentPlayingPosition > rangeMax) {
            console.log("ASSERT shouldnt happen " + currentPlayingPosition + " " + rangeMin + " " + rangeMax);
        }
    }
}


function spotifyInitTrack(token) {
    let qs = {};
    let fetchOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        }

    };
    let uri = SPOTIFY_PLAYER_EP + querystring.stringify(qs);
    fetch(uri, fetchOptions).then((result) => {

        console.log(result.status);
        if (result.status == 200) {
            result.json().then(resp => {
                if (resp.item.id != undefined) {
                    let trackid = resp.item.id;
                    let trackname = resp.item.name;
                    let trackduration = resp.item.duration_ms;
                    let trackduration_s = Math.ceil(Number.parseInt(resp.item.duration_ms) / 1000);
                    let trackprogress = resp.progress_ms;
                    console.log("POOP API CALLED " + trackid + " " + trackname + " " + trackduration + " " + trackprogress);

                    currentTrackId = trackid;
                    currentTrackIdDuration = trackduration_s;
                    getTrack(trackid).then((result) => {
                        let detail = {
                            duration: trackduration_s,
                            min: 0,
                            max: trackduration_s
                        };

                        if (result != undefined) {
                            console.log(result.min + " " + result.max);
                            //emit event
                            if (result.min != undefined) {
                                detail.min = result.min;
                            }
                            if (result.max != undefined) {
                                detail.max = result.max;
                            }
                        }

                        var event = new CustomEvent("sloop_slider_init", {detail: detail});
                        window.dispatchEvent(event);

                    }).catch((error) => {
                        //FIXME: necessary?
                        saveTrack(trackid, 0, trackduration_s);
                    });
                }


            });
        }
        if (result.status == 204) {
            console.log(" " + result.status);
            //fetch value from playbar
        }
    });
}

function saveTrack(trackId, min, max) {
    let trackValues = {
        min: min,
        max: max
    };
    console.log("POOP SAVE TRACK! " + trackId + " " + min + " " + max);
    let item = {};
    item[trackId] = trackValues;
    chrome.storage.local.set(item, function () {
        console.log('SAVE TRACK Value for ' + trackId + ' is set to ' + trackValues.min + " " + trackValues.max);
    });

}

function getTrack(trackId) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(trackId, function (trackValues) {
            if (chrome.runtime.lastError == undefined) {
                console.log("POOP GOT VALUES " + trackId + " trackValues[trackId]=" + trackValues[trackId]);
                resolve(trackValues[trackId]);
            } else {
                reject();
            }
        });
    });
}


function getPlaybackBar() {
    let pb = document.getElementsByClassName("playback-bar");
    return pb[0];
}

function getPlaybackController() {
    //let bar = getPlaybackBar();
    let bars = document.getElementsByClassName("playback-bar");
    for (let bar of bars) {
        for (let i in bar) {
            if (i.startsWith("__reactEventHandlers")) {
                alert(i);
                let handlers = bar[i].children;
                for (let j of handlers) {
                    alert(j);
                    if (j.props != undefined && j.props.onStepBackward != undefined) {
                        playbackController = j.props;
                        alert(playbackController);

                    }
                }
            }
        }
    }

}

function seek(ms) {
    console.log("seeking to " + ms + " bearertoken=" + bearertoken);
    if (bearertoken != undefined && bearertoken != '') {
        if (ms != undefined) {
            playerSeek(bearertoken, ms).then((result) => {
                console.log(result);
            }).catch((e) => {
                console.log(e);
            });
        } else {
            console.log("ASSERT seek ms=" + ms);
        }

    }
}

function moveBackwards() {
    if (playbackController != undefined) {
        playbackController.onStepBackward();
    } else {
        getPlaybackController();
    }
}

function moveForward() {
    if (playbackController != undefined) {
        playbackController.onStepForward();
    } else {
        getPlaybackController();
    }

}

if (chrome) {
    if (chrome.tabs) {
        console.log("chrome.tabs=" + chrome.tabs);
    }
    if (chrome.runtime) {
        console.log("chrome.runtime=" + chrome.runtime);
        chrome.runtime.onMessage.addListener(onMessageHandler);
    }
    if (chrome.pageAction) {
        console.log("chrome.pageAction=" + chrome.pageAction);
    }

}

try {
    if (browser) {
        if (browser.tabs) {
            alert("browser.tabs=" + browser.tabs);
        }
        if (browser.runtime) {
            alert("browser.runtime=" + browser.runtime);
            browser.runtime.onMessage.addListener(onMessageHandler);
        }
        if (browser.pageAction) {
            alert("browser.pageAction=" + browser.pageAction);
        }
    }

} catch (e) {

}

window.addEventListener('resize', adjustContainer);
window.addEventListener('sloop_position_change', handlePositionChange, false);
window.addEventListener('sloop_range_change', handleRangeChange, false);
window.addEventListener('sloop_slider_init', handleDurationChange, false);


function onMessageHandler(msg, sender, sendResponse) {
    if (msg.text === 'enable_extension') {
        //open tab
        //1. setup overlay
        //2. check if playing
        //3. call api if playing
        // "is_playing": false
        setupOverlay().then(() => {

            adjustContainer();
            //FIXME: check if setup first
            //the track mutation will call spotifyInitTrack inevitably
            setupObservers();

            //getPlaybackController();
            spotifyInitTrack(bearertoken);
            //if 204
            enabled = true;
            sendResponse(true);
        });
    }
    if (msg.text === 'disable_extension') {
        if(enabled == true){
            teardownOverlay(sendResponse);
            teardownObservers();
            enabled = false;
        }
    }

    //called by authflow
    if (msg.text === 'set_bearer') {
        console.log("POOP msg.payload.bearer " + msg.payload.bearer);

        bearertoken = msg.payload.bearer;
        sendResponse(true);
    }

    return true;
}

console.log("end content.js");
// if (chrome != undefined && chrome.runtime != undefined) {
//     chrome.runtime.onMessage.addListener(onMessageHandler);
// } else if (browser != undefined && browser.runtime != undefined) {
//     browser.runtime.onMessage.addListener(onMessageHandler);
// } else {
//     alert("assert");
// }

// export default function SloopContentScript(){
//     function stuff(){
//         console.log("stuff");
//     }
// }
//somehow script starts but fetch not executing, try tab executeScript
//import './InterceptFetch';
