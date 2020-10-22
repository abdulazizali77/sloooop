import {injectCssToHead} from "./headUtilities";
import "winjs";

'use strict';
//FIXME, pass callback pointer
let thisDialog;
let dialogBtn = {};

function handleDismissal(eventInfo) {
    if (eventInfo.detail !== undefined && eventInfo.detail.result !== undefined) {
        console.log("DEBUG WINJS eventInfo.detail.reason=" + eventInfo.detail.result);
        let btnClicked = eventInfo.detail.result;
        if (dialogBtn[btnClicked] !== undefined && dialogBtn[btnClicked].callback !== undefined) {
            dialogBtn[btnClicked].callback.apply();
        }
    }

}

export default function showDialog(title, message, primaryBtn, secondaryBtn) {
    let data_win_options = {
        title: title
    };
    //check if dialog is added

    if (primaryBtn !== undefined) {
        if (primaryBtn.text !== undefined) {
            data_win_options.primaryCommandText = primaryBtn.text;
        }
        if (primaryBtn.callback !== undefined) {
            dialogBtn['primary'] = {text: primaryBtn.text, callback: primaryBtn.callback};
        }
    }
    if (secondaryBtn !== undefined) {
        if (secondaryBtn.text !== undefined) {
            data_win_options.secondaryCommandText = secondaryBtn.text;
        }
        if (secondaryBtn.callback !== undefined) {
            dialogBtn['secondary'] = {text: secondaryBtn.text, callback: secondaryBtn.callback};
        }
    }

    if (thisDialog === undefined) {
        injectCssToHead("css/ui-dark.css");

        thisDialog = document.createElement("DIV");
        thisDialog.setAttribute("data-win-control", "WinJS.UI.ContentDialog");

        //TODO: generate id?
        thisDialog.id = "dialogDiv2";
        document.body.appendChild(thisDialog);

        try {
            //$("#" + dialogDiv.id + "").draggable();
            //$("#" + dialogDiv.id + "").resizable();
        } catch (e) {
            alert("error " + e);
            console.log("error " + e);
        }

    }

    thisDialog.setAttribute("data-win-options", JSON.stringify(data_win_options));
    thisDialog.innerText = message;
    //WinJS.UI.processAll();
    WinJS.UI.processAll().done(function () {
        // var showButton = document.querySelector(".showButton");
        // showButton.addEventListener("click", showDialog, false);

        let contentDialog = document.querySelector(".win-contentdialog").winControl;
        contentDialog.addEventListener("beforehide", handleDismissal, false);
    });

    return thisDialog;
}
