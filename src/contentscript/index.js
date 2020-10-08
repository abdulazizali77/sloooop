var dialogDiv;
function setupOverlay() {
    return new Promise((resolve, reject)=>{
        //add link
        //<link href="scripts/winjs/css/ui-light.css" rel="stylesheet"/>
        let winjscsslink = document.createElement("LINK");

        winjscsslink.type = "text/javascript";
        if (chrome != undefined && chrome.runtime != undefined) {
            winjscsslink.href = chrome.runtime.getURL("scripts/winjs/css/ui-light.css");
        } else {
            winjscsslink.href = browser.runtime.getURL("scripts/winjs/css/ui-light.css");
        }
        document.head.appendChild(winjscsslink );

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

        resolve();
        //FIXME reject?

    });
}


function teardownOverlay(sendResponse) {
    document.body.removeChild(dialogDiv);
    if (sendResponse != undefined) {
        sendResponse(true);
    }
}

function showDialog() {
    let contentDialog = document.querySelector(".win-contentdialog").winControl;
    contentDialog.show();
}

function hideDialog() {
    let contentDialog = document.querySelector(".win-contentdialog").winControl;
    contentDialog.hide();
}

function onMessageHandler(msg, sender, sendResponse) {

    if (msg.text === 'enable_extension') {
        setupOverlay(sendResponse).then(()=>{
            WinJS.UI.processAll();
            showDialog();
            sendResponse(true);
        });
    }
    if (msg.text === 'disable_extension') {
        teardownOverlay(sendResponse);
    }
    return true;
}

if (chrome != undefined && chrome.runtime != undefined) {
    chrome.runtime.onMessage.addListener(onMessageHandler);
} else if (browser != undefined && browser.runtime != undefined) {
    browser.runtime.onMessage.addListener(onMessageHandler);
} else {
    alert("assert");
}
