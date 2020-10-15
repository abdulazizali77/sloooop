//as been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
// fetch("https://api.spotify.com/v1/me/player/seek?position_ms=0", {
//     "headers": {
//         "accept": "*/*",
//          //temporary anyways
//         "authorization": "Bearer ",
//         "credentials": "include"
//     },
//     "referrer": "https://open.spotify.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });
//fetch("https://api.spotify.com/v1/me/player/seek?position_ms=25000", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "authorization": "Bearer ",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-site"
//   },
//   "referrer": "https://developer.spotify.com/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "PUT",
//   "mode": "cors",
//   "credentials": "include"
// });
import querystring from "querystring";

const SPOTIFY_SEEK_URI = 'https://api.spotify.com/v1/me/player/seek?';

export default function playerSeek(token, ms, deviceId) {


    let qs = {
        position_ms: ms
    };
    if (deviceId != undefined && deviceId != '') {
        qs['device_id'] = deviceId;
    }
    let fetchOptions = {
        headers: {

            // 'origin': 'https://developer.spotify.com',
            // 'referer': 'https://developer.spotify.com/',
            'Accept': '*/*',
            'Authorization': 'Bearer ' + token
        },
        "body": null,
        "method": "PUT",
        "mode": "cors"

    };
    let uri = SPOTIFY_SEEK_URI + querystring.stringify(qs);
    return fetch(uri, fetchOptions);

}

