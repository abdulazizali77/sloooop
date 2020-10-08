//pageAction
//show content dialog
var enabledMap = {};
chrome.tabs.onActivated.addListener(function (activeInfo) {

});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {

    } else {

    }
});

chrome.tabs.onCreated.addListener(function (tab) {

});

chrome.runtime.onInstalled.addListener(function () {
    alert(chrome.runtime.id);
    chrome.runtime.getPlatformInfo((platformInfo)=>{
        alert(platformInfo);
    });
    if (chrome.declarativeContent != undefined && chrome.declarativeContent.onPageChanged != undefined) {
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
            // With a new rule ...
            chrome.declarativeContent.onPageChanged.addRules([
                {
                    // That fires when a page's URL contains a 'g' ...
                    conditions: [
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {},
                        })
                    ],
                    // And shows the extension's page action.
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }
            ]);
        });
    }
});

browser.pageAction.onClicked.addListener(function (thistab) {

    if (enabledMap[thistab.id] == undefined) {
        enabledMap[thistab.id] = false;
    }

    if (enabledMap[thistab.id] == false) {
        chrome.tabs.sendMessage(thistab.id,
            {
                "text": 'enable_extension'
            },
            (result2) => {
                console.log("finished enabling message " + result2);
            });
        enabledMap[thistab.id] = true;

    } else {
        chrome.tabs.sendMessage(thistab.id,
            {
                "text": 'disable_extension'
            },
            (result2) => {
                //console.log("finished disabling message " + result2);
            });
        enabledMap[thistab.id] = false;
    }
});

