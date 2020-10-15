//pageAction
//show content dialog

//import $ from 'jquery';
//import * as jqueryui from 'jqueryui';
import getLoginUrl from "../shared/spotifyAuth";
//import browserpolyfill from 'browser-polyfill';
import querystring from 'querystring';

//console.log("start bg.js");
const CALLBACK_URL = 'https://www.example.com';

export default function init() {
    //alert("bg init");
}
var enabledMap = {};
var lastTabId = -1;
var lastWindowId = -1;
var lastTabIndex = -1;
var expectingBearer = false;
var bearerFetchTimeStamp;
var bearerFetchTimeStampExpire;
var bearerToken;

function hasToken() {
    let res = false;
    if ((bearerToken != undefined && bearerToken != '')) {

        //check if date expired
        let diff = (bearerFetchTimeStampExpire - Date.now());
        if (diff > 0) {
            res = true;
        }
    }
    return res;
}

function isTokenValid() {
    let res = false;
    //check if date expired
    let diff = tokenTimeLeft();
    if (diff > 0) {
        res = true;
    }
    return res;
}

function tokenTimeLeft() {
    return (bearerFetchTimeStampExpire - Date.now());
}

function installExtension() {
    //alert(chrome.runtime.id);
    chrome.runtime.getPlatformInfo((platformInfo) => {
        //alert(platformInfo);
    });
    //document.querySelectorAll("button[data-testid='login-button']")
// <button class="_3f37264be67c8f40fa9f76449afdb4bd-scss _1f2f8feb807c94d2a0a7737b433e19a8-scss" type="button" data-testid="login-button">Log in</button>
    if (chrome.declarativeContent != undefined && chrome.declarativeContent.onPageChanged != undefined) {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
            // With a new rule ...
            chrome.declarativeContent.onPageChanged.addRules([
                {
                    // That fires when a page's URL contains a 'g' ...
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {hostEquals: 'open.spotify.com', schemes: ['https']},
                            css: ["div[class='playback-bar']"]
                        })
                    ],
                    // And shows the extension's page action.
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }
            ]);
        });
    }
}

function pageActionClick(thistab) {

    if (enabledMap[thistab.id] == undefined) {
        enabledMap[thistab.id] = false;
    }

    if (enabledMap[thistab.id] == false) {

        lastTabId = thistab.id;
        lastTabIndex = thistab.index;
        lastWindowId = thistab.windowId;
        if (!hasToken()) {
            expectingBearer = true;
            chrome.tabs.create({url: getLoginUrl()}, function (tab) {
                console.log("tab=" + tab.id + "\n" +
                    tab.url + "\n" +
                    tab.pendingUrl + "\n"
                );
            });
        } else {
            //do we actually have the token?
            //theres no way ot know whether we have the token here at all
            //we should just check the global
            //FIXME: dupe
            console.log("hasToken=" + hasToken() + " isTokenValid=" + isTokenValid());
            console.log("tokenTimeLeft=" + tokenTimeLeft());
            chrome.tabs.sendMessage(lastTabId,
                {
                    "text": 'set_bearer',
                    "payload": {bearer: bearerToken}
                },
                (result2) => {
                    console.log("finished set bearer" + result2);
                    chrome.tabs.highlight({windowId: lastWindowId, tabs: lastTabIndex}, (window) => {
                        console.log("DEBUG  focused lastTabId=" + lastTabId);
                        //FIXME: callback hell
                        chrome.tabs.sendMessage(lastTabId,
                            {
                                "text": 'enable_extension',
                                "tabId": lastTabId
                            },
                            (result2) => {
                                console.log("finished enabling message " + result2);
                            });
                        enabledMap[lastTabId] = true;
                    });
                });
            enabledMap[lastTabId] = true;
        }
        //race condition
        //after we get the key pass it to the content script
        // chrome.tabs.sendMessage(thistab.id,
        //     {
        //         "text": 'enable_extension'
        //     },
        //     (result2) => {
        //         console.log("finished enabling message " + result2);
        //     });
        // enabledMap[thistab.id] = true;

    } else {
        chrome.tabs.sendMessage(thistab.id,
            {
                "text": 'disable_extension'
            },
            (result2) => {
                console.log("finished disabling message " + result2);
            });
        enabledMap[thistab.id] = false;
    }
}

function injectScriptPath(tabId, scriptFilePath, runAt) {
    //console.log("injectScriptPath " + tabId + "\n" + scriptFilePath);
    if (runAt == undefined) {
        runAt = "document_start";
    }
    return new Promise((resolve, reject) => {
        chrome.tabs.executeScript(tabId, {"file": scriptFilePath, "runAt": runAt}, (result) => {
            console.log(result);
            resolve(result);
        });
    });
}

function handleAuthFlow(uri, tab) {
    //TODO: should we verify the opening tab?
    //FIXME: if the user declined to accept well never get here and the bearer will be left undefined
    if (uri.startsWith(CALLBACK_URL)) {

        let queryMap = uri.split("#")[1];
        let obj1 = querystring.parse(queryMap);
        console.log(obj1);
        console.log(obj1.access_token);
        console.log(obj1.token_type);
        console.log(obj1.expires_in);
        console.log(obj1.state);
        console.log(" tab.id=" + tab.id + " callback found " + uri + " obj1.access_token=" + obj1.access_token);
        bearerToken = obj1.access_token;
        expectingBearer = false;
        //NB: odnt actually need bearerFetchTimeStamp
        bearerFetchTimeStamp = Date.now();
        bearerFetchTimeStampExpire = bearerFetchTimeStamp + (Number.parseFloat(obj1.expires_in) * 1000);

        chrome.tabs.remove(tab.id, () => {
            console.log("DEBUG  callback closed tab.id=" + tab.id + " lastTabId=" + lastTabId);
            if (lastTabId != undefined && lastTabId != -1) {
                //doesnt work, probably need to send message
                //let codeStr = "setBearer('"+obj1.access_token+"');";

                //FIXME: should set expectingBearer = true again if we didnt get the correct callback
                chrome.tabs.sendMessage(lastTabId,
                    {
                        "text": 'set_bearer',
                        "payload": {bearer: obj1.access_token}
                    },
                    (result2) => {
                        console.log("finished set bearer" + result2);
                        chrome.tabs.highlight({windowId: lastWindowId, tabs: lastTabIndex}, (window) => {
                            console.log("DEBUG  focused lastTabId=" + lastTabId);
                            //FIXME: callback hell
                            chrome.tabs.sendMessage(lastTabId,
                                {
                                    "text": 'enable_extension'
                                },
                                (result2) => {
                                    console.log("finished enabling message " + result2);
                                });
                            enabledMap[lastTabId] = true;
                        });
                    });
                // chrome.tabs.executeScript(lastTabId, {code:codeStr, runAt:"document_end"}, (result)=>{
                //     console.log("executeScript lastTabId="+lastTabId+"\n"+
                //         codeStr+"\n"+
                //         +"\n"+
                //         "result="+result
                //     );
                //     chrome.tabs.highlight({windowId: lastWindowId, tabs: lastTabIndex}, (window) => {
                //         console.log("DEBUG  focused lastTabId=" + lastTabId);
                //     });
                // });

                //set the bearer token in the contentscript

                //let code = "var bearerToken = obj1.access_token;";

            }
        });

        //refocus to previous tab
        //tabIdOfEnabledExtension
    }
}

function handleUserLogout(){

}

function onTabCreated(tab) {
    //check if matches callback
    console.log("onTabCreated " + tab.id + " " + tab.url + " " + tab.pendingUrl);

    let u1;
    if (tab.url != undefined && tab.url != "") {
        u1 = new URL(tab.url);
    }
    let u2;

    if (tab.pendingUrl != undefined && tab.pendingUrl != "") {
        u2 = new URL(tab.pendingUrl);
    }

    if (u1 != undefined) {
        if (u1.href.startsWith(CALLBACK_URL)) {
            console.log("callback found " + u1.href);
        }

    }
    if (u2 != undefined) {
        if (u2.href.startsWith(CALLBACK_URL)) {
            //alert("callback found " + u2.href);
        }
    }
}

function onTabUpdated(tabId, changeInfo, tab) {
    //check if matches callback


    if (changeInfo.status === 'complete') {
        console.log("onTabUpdated " + tab.id + " " + tab.url + " " + tab.pendingUrl + " " + changeInfo.status);
        let u1;
        if (tab.url != undefined && tab.url != "") {
            u1 = new URL(tab.url);
        }
        let u2;

        if (tab.pendingUrl != undefined && tab.pendingUrl != "") {
            u2 = new URL(tab.pendingUrl);
        }

        if ((expectingBearer == true && u1 != undefined)) {
            handleAuthFlow(u1.href, tab);
        }
        if (u2 != undefined) {
            if (u2.href.startsWith(CALLBACK_URL)) {
                //alert("callback found " + u2.href);
            }
        }
    }

}

function backgroundMessageHandler(request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.type == "user_logout") {
        console.log("DEBUG "+request.type +" "+request.tab);
        enabledMap[request.tab] = false;
    }
}

if (chrome) {
    if (chrome.tabs) {
        //alert("chrome.tabs=" + chrome.tabs);
        chrome.tabs.onCreated.addListener(onTabCreated);
        //chrome.tabs.onActivated.addListener(onTabActivated);
        chrome.tabs.onUpdated.addListener(onTabUpdated);
    }
    if (chrome.runtime) {
        //alert("chrome.runtime=" + chrome.runtime);
        chrome.runtime.onInstalled.addListener(installExtension);
        chrome.runtime.onMessage.addListener(backgroundMessageHandler);
    }
    if (chrome.pageAction) {
        //alert("chrome.pageAction=" + chrome.pageAction);
        chrome.pageAction.onClicked.addListener(pageActionClick);
    }




}

try {
    if (browser != undefined) {
        if (browser.tabs) {
            //alert("browser.tabs=" + browser.tabs);
        }
        if (browser.runtime) {
            //alert("browser.runtime=" + browser.runtime);
        }
        if (browser.pageAction) {
            //alert("browser.pageAction=" + browser.pageAction);
        }
    }

} catch (exception) {

}
//console.log("end bg.js");
