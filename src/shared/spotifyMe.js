const SPOTIFY_ME_URI = 'https://api.spotify.com/v1/me';
export default function checkUserAccount(token) {
    let fetchOptions = {
        headers: {
            'Accept': '*/*',
            'Authorization': 'Bearer ' + token
        },
        "body": null,
        "method": "GET",
        "mode": "cors"
    };
    let uri = SPOTIFY_ME_URI;
    return fetch(uri, fetchOptions);
}
