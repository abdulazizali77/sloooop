'use strict';

export function injectCssToHead(cssFile) {
    injectLinkToHead(cssFile, "text/css").rel = "stylesheet";
}

export function injectLinkToHead(filePath, type) {
    let link = document.createElement("LINK");

    link.type = type;
    //FIXME:
    if (chrome != undefined && chrome.runtime != undefined) {
        link.href = chrome.runtime.getURL(filePath);
    } else {
        link.href = browser.runtime.getURL(filePath);
    }
    document.head.appendChild(link);
    return link;
}
