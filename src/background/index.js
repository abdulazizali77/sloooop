//pageAction
//show content dialog

//import $ from 'jquery';
//import * as jqueryui from 'jqueryui';
import getLoginUrl from "../shared/spotifyAuth";
//import browserpolyfill from 'browser-polyfill';
import querystring from 'querystring';
import checkUserAccount from "../shared/spotifyMe";

//console.log("start bg.js");
const CALLBACK_URL = 'https://www.example.com';
const VALID_HOST = 'open.spotify.com';

export default function init() {
    //alert("bg init");
}
var enabledMap = {};
var tabUserMap = {};

var bearerUserMap = {};
var lastTabId = -1;
var lastWindowId = -1;
var lastTabIndex = -1;
var expectingBearer = false;
var bearerFetchTimeStamp;
var bearerFetchTimeStampExpire;
var bearerToken;
var currentUser;

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
                            pageUrl: {hostEquals: VALID_HOST, schemes: ['https']}
                            // ,
                            // css: ["div[class='playback-bar']"]
                        })
                    ],
                    // And shows the extension's page action.
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }
            ]);
        });
    }
}

//NB: always expects that the url is VALID_HOST but we do this rather redundant check anyways?
function updateIcon(thistab) {
    let u1 = new URL(thistab.url);
    if (u1.host === VALID_HOST) {
        if (enabledMap[thistab.id] === false || enabledMap[thistab.id] === undefined) {

            chrome.pageAction.setIcon({tabId: thistab.id, path: "images/32_1_inactive.png"}, (r) => {
                console.log("setIcon " + r);
            });
        } else if (enabledMap[thistab.id] === true) {
            chrome.pageAction.setIcon({tabId: thistab.id, path: "images/32_2_active.png"}, (r) => {
                console.log("setIcon " + r);
            });
        }
    } else {
        alert("ASSERT " + u1.host);
    }

    // else {
    //     console.log("updateIcon " + thistab.id + " " + thistab.url);
    //     chrome.pageAction.setIcon({tabId: thistab.id, path: "images/32_0_unavailable.png"}, (r) => {
    //         console.log("setIcon " + r);
    //     });
    // }
}

function pageActionClick(thistab) {

    console.log("DEBUG pageActionClick " + thistab.id);
    //does this trigger for unavailable

    if (enabledMap[thistab.id] == undefined) {
        enabledMap[thistab.id] = false;
    }

    if (enabledMap[thistab.id] == false) {

        lastTabId = thistab.id;
        lastTabIndex = thistab.index;
        lastWindowId = thistab.windowId;
        if (currentUser === undefined && !hasToken()) {
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
            enableExtensionFlow(bearerToken)
                .then((r) => {
                    console.log(r);
                    updateIcon(thistab);
                })
                .catch((e) => {
                    console.log(e);
                });
            //FIXME: redundant?

        }

    } else {
        chrome.tabs.sendMessage(thistab.id,
            {
                "text": 'disable_extension'
            },
            (result2) => {
                console.log("finished disabling message " + result2);
                enabledMap[thistab.id] = false;
                updateIcon(thistab);
            });
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

        //fetch the user and associate the bearer
        chrome.tabs.remove(tab.id, () => {
            console.log("DEBUG  callback closed tab.id=" + tab.id + " lastTabId=" + lastTabId);
            if (lastTabId !== undefined && lastTabId !== -1) {
                //check account first
                //save user id of bearer
                checkUserAccount(obj1.access_token)
                    .then((result) => {
                        result.json().then(body => {
                            let userId = body.id;
                            bearerUserMap[obj1.access_token] = userId;
                            enableExtensionFlow(obj1.access_token)
                                .then((r) => {
                                    console.log(r + " " + enabledMap[tab.id] + " tab.url=" + tab.url);
                                    enabledMap[lastTabId] = true;//???
                                    //WTF
                                    updateIcon({id: lastTabId, url: "https://"+VALID_HOST});
                                })
                                .catch((e) => {
                                    console.log(e);
                                });
                        });

                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        });
    }
}

function cachedCheckUserAccount(token) {
    return new Promise((resolve, reject) => {
        if (currentUser === undefined) {
            checkUserAccount(token)
                .then((result) => {
                    result.json().then(body => {
                        currentUser = body;
                        resolve(currentUser);
                    }).catch((e) => {
                        reject(e);
                    });

                })
                .catch((e) => {
                    //FIXME: when can this happen and how to handle and retry?
                    reject(e);
                });

        } else {
            resolve(currentUser);
        }
    });
}

function enableExtensionFlow(bearerToken) {
    return new Promise((resolve, reject) => {
        //FIXME: how to resolve successive user calls?
        cachedCheckUserAccount(bearerToken)

            .then((resp) => {
                //check premium
                let userId = resp.id;

                if (bearerUserMap[bearerToken] === undefined || bearerUserMap[bearerToken] !== userId) {
                    console.log("DEBUG USER the current user=" + userId + " token is empty");
                    //TODO: do something, what?
                    alert("DEBUG USER the current user=" + userId + " token is empty");
                } else {
                    console.log("DEBUG USER current user=" + userId + " token is " + bearerUserMap[bearerToken]);
                }
                if (resp.product === 'premium') {
                    chrome.tabs.sendMessage(lastTabId,
                        {
                            "text": 'set_bearer',
                            "payload": {bearer: bearerToken}
                        },
                        (result2) => {
                            console.log("finished set bearer" + result2);
                            //FIXME: can we not use these globals? how?
                            chrome.tabs.highlight({windowId: lastWindowId, tabs: lastTabIndex}, (window) => {
                                console.log("DEBUG  focused lastTabId=" + lastTabId + " lastWindowId=" + lastWindowId + " " + lastTabIndex);
                                //FIXME: callback hell
                                chrome.tabs.sendMessage(lastTabId,
                                    {
                                        "text": 'enable_extension'

                                    },
                                    (result2) => {
                                        console.log("finished enabling message " + result2);
                                        resolve(true);
                                    });
                                enabledMap[lastTabId] = true;

                            });
                        });
                } else {
                    chrome.tabs.highlight({windowId: lastWindowId, tabs: lastTabIndex}, (window) => {
                        console.log("DEBUG not premium! focused lastTabId=" + lastTabId + " lastWindowId=" + lastWindowId + " " + lastTabIndex);
                        //FIXME: callback hell
                        currentUser = undefined;
                        chrome.tabs.sendMessage(lastTabId,
                            {
                                "text": 'display_premium_warning'
                            },
                            (result2) => {
                                console.log("finished enabling message " + result2);
                                resolve(true);
                            });

                    });
                }
            })
            .catch((e) => {
                reject(e);
            });
        //FIXME: where to call reject?
    });
}

function handleUserLogout() {
    currentUser = undefined;
    bearerToken = undefined;
}

function onTabCreated(tab) {
    //check if matches callback
    console.log("onTabCreated " + tab.id + " " + tab.url + " " + tab.pendingUrl);


    let u1;
    if (tab.url != undefined && tab.url != "") {
        u1 = new URL(tab.url);
    }

    if (u1 != undefined) {
        if (u1.href.startsWith(CALLBACK_URL)) {
            console.log("callback found " + u1.href);
        }
    }
}

function onTabUpdated(tabId, changeInfo, tab) {

    //check if matches callback
    if (changeInfo.status === 'complete') {
        //FIXME: find out if user logged out and then invalidate currentUser #39
        console.log("DEBUG onTabUpdated currentUser=" + currentUser + " tab.id=" + tab.id + " " + tab.url + " " + changeInfo.status);

        let u1;
        if (tab.url !== undefined && tab.url !== "") {
            u1 = new URL(tab.url);
        }

        if ((expectingBearer === true && u1 !== undefined)) {
            handleAuthFlow(u1.href, tab);

        }

        if (u1.host === VALID_HOST && expectingBearer !== true) {
            isUserLoggedIn(tabId).then((result) => {
                console.log(result.accountName + " is logged in");
            }).catch(() => {
                console.log("user logged out");
                handleUserLogout();
            });
            updateIcon(tab);
        }


    }

}

function isUserLoggedIn(tabId) {
    return new Promise((resolve, reject) => {
        //send message
        chrome.tabs.sendMessage(tabId,
            {
                "text": 'is_user_logged_in'
            },
            (result) => {
                if (result === undefined || result === false) {
                    reject(false);
                } else {
                    resolve(result);
                }
            });
    });
}

function onTabRemoved(tabId, removeInfo) {
    if (enabledMap[tabId] !== undefined && enabledMap[tabId] === true) {
        enabledMap[tabId] = false;
        //currentUser = undefined;
    }
}

function backgroundMessageHandler(request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.type == "user_logout") {
        console.log("DEBUG " + request.type + " " + request.tab + " " + sender.tab.id);
        chrome.tabs.sendMessage(sender.tab.id,
            {
                "text": 'disable_extension'
            },
            (result2) => {
                console.log("finished disabling message " + result2);
            });
        enabledMap[sender.tab.id] = false;
        handleUserLogout();
        sendResponse();
    }
}

if (chrome) {
    if (chrome.tabs) {
        //alert("chrome.tabs=" + chrome.tabs);
        chrome.tabs.onCreated.addListener(onTabCreated);
        chrome.tabs.onRemoved.addListener(onTabRemoved);
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
