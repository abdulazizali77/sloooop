'use strict';

export const AREA_NAME = 'local';

//IDEA: best is to have a framework where we bind a runtime variable to a storage key
//Storage.bind(localVar, storageKey);
//bindMap[key] = Array()
//bindMap['rangeMin'] = ['']
// for(const i of bindMap){
//     for(const j in bindMap[i])
//         }


export function saveTrack(trackId, min, max) {
    let trackValues = {
        min: min,
        max: max
    };
    console.log("DEBUG  SAVE TRACK! " + trackId + " " + min + " " + max);
    let item = {};
    item[trackId] = trackValues;
    chrome.storage.local.set(item, function () {
        console.log('SAVE TRACK Value for ' + trackId + ' is set to ' + trackValues.min + " " + trackValues.max);
    });
}

export function getTrack(trackId) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(trackId, function (trackValues) {
            if (chrome.runtime.lastError === undefined) {
                console.log("DEBUG  GOT VALUES " + trackId + " trackValues[trackId]=" + trackValues[trackId]);
                resolve(trackValues[trackId]);
            } else {
                reject();
            }
        });
    });
}
