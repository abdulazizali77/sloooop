// var me1 = {
//     "country": "MY",
//     "display_name": "azizbodoh",
//     "email": "triyae@hotmail.com",
//     "explicit_content": {
//     "filter_enabled": false,
//         "filter_locked": false
// },
//     "external_urls": {
//     "spotify": "https://open.spotify.com/user/3dywcx5zqj4lwuu8l7tfz796v"
// },
//     "followers": {
//     "href": null,
//         "total": 0
// },
//     "href": "https://api.spotify.com/v1/users/3dywcx5zqj4lwuu8l7tfz796v",
//     "id": "3dywcx5zqj4lwuu8l7tfz796v",
//     "images": [],
//     "product": "premium",
//     "type": "user",
//     "uri": "spotify:user:3dywcx5zqj4lwuu8l7tfz796v"
// }
//https://api.spotify.com/v1/me
// var me2 ={
//     "country": "MY",
//     "display_name": "Bas",
//     "email": "basrina@asgio.net",
//     "explicit_content": {
//     "filter_enabled": false,
//         "filter_locked": false
// },
//     "external_urls": {
//     "spotify": "https://open.spotify.com/user/gcq28tao9rgocpeglz3crv0lp"
// },
//     "followers": {
//     "href": null,
//         "total": 0
// },
//     "href": "https://api.spotify.com/v1/users/gcq28tao9rgocpeglz3crv0lp",
//     "id": "gcq28tao9rgocpeglz3crv0lp",
//     "images": [],
//     "product": "open",
//     "type": "user",
//     "uri": "spotify:user:gcq28tao9rgocpeglz3crv0lp"
// }
// fetch("https://api.spotify.com/v1/views/desktop-home?timestamp=2020-10-14T06%3A18%3A35.350Z&platform=web&content_limit=10&limit=20&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&image_style=gradient_overlay&country=MY&market=from_token&locale=en", {
//     "headers": {
//         "accept": "application/json",
//         "accept-language": "en",
//         "app-platform": "WebPlayer",
//         //bearer is temporary
//         "authorization": "Bearer ",
//         "spotify-app-version": "1.1.45.161.gf70d8688"
//     },
//     "referrer": "https://open.spotify.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "cors",
//     "credentials": "include"
// });
/*
let desktophome = {
    "content" : {
    "href" : "https://api.spotify.com/v1/views/desktop-home?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=20&offset=0",
        "items" : [ {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/shortcuts?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/34UhPkLbtFKRq3nmfFgejG"
                    },
                    "href" : "https://api.spotify.com/v1/artists/34UhPkLbtFKRq3nmfFgejG",
                    "id" : "34UhPkLbtFKRq3nmfFgejG",
                    "name" : "Mogwai",
                    "type" : "artist",
                    "uri" : "spotify:artist:34UhPkLbtFKRq3nmfFgejG"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1cIpLVOnI8F16n2xTWFFJn"
                },
                "href" : "https://api.spotify.com/v1/albums/1cIpLVOnI8F16n2xTWFFJn",
                "id" : "1cIpLVOnI8F16n2xTWFFJn",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27327728beaa870868dcdb9e731",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0227728beaa870868dcdb9e731",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485127728beaa870868dcdb9e731",
                    "width" : 64
                } ],
                "name" : "Come On Die Young",
                "release_date" : "1999-03-29",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:1cIpLVOnI8F16n2xTWFFJn"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0ybFZ2Ab08V8hueghSXm6E"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0ybFZ2Ab08V8hueghSXm6E",
                    "id" : "0ybFZ2Ab08V8hueghSXm6E",
                    "name" : "Opeth",
                    "type" : "artist",
                    "uri" : "spotify:artist:0ybFZ2Ab08V8hueghSXm6E"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0DLImjuzdrOBQKtYLlf3C5"
                },
                "href" : "https://api.spotify.com/v1/albums/0DLImjuzdrOBQKtYLlf3C5",
                "id" : "0DLImjuzdrOBQKtYLlf3C5",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27376e2eec5fd7f1b525772407b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0276e2eec5fd7f1b525772407b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485176e2eec5fd7f1b525772407b",
                    "width" : 64
                } ],
                "name" : "Pale Communion",
                "release_date" : "2014-08-25",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:0DLImjuzdrOBQKtYLlf3C5"
            }, {
                "collaborative" : false,
                "description" : "",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/5Gg4DpUt3pzC3SXtb5yHxd"
                },
                "href" : "https://api.spotify.com/v1/playlists/5Gg4DpUt3pzC3SXtb5yHxd",
                "id" : "5Gg4DpUt3pzC3SXtb5yHxd",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02b2ed810195276cffb881adda",
                    "width" : 640
                } ],
                "name" : "Oratorios",
                "owner" : {
                    "display_name" : "vanpetar",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/vanpetar"
                    },
                    "href" : "https://api.spotify.com/v1/users/vanpetar",
                    "id" : "vanpetar",
                    "type" : "user",
                    "uri" : "spotify:user:vanpetar"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "NTYsYjM2MWQwYzVmMWYyZjdiZWE3ODg2YjZkOThkNTNjZGJlMzMxNWE0MQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/5Gg4DpUt3pzC3SXtb5yHxd/tracks",
                    "total" : 88
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:5Gg4DpUt3pzC3SXtb5yHxd"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6vUn7EgNei8hY7jZSV0lsT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6vUn7EgNei8hY7jZSV0lsT",
                    "id" : "6vUn7EgNei8hY7jZSV0lsT",
                    "name" : "a picture of her",
                    "type" : "artist",
                    "uri" : "spotify:artist:6vUn7EgNei8hY7jZSV0lsT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4rQJ0xVXD7OKZmV5hXL4tW"
                },
                "href" : "https://api.spotify.com/v1/albums/4rQJ0xVXD7OKZmV5hXL4tW",
                "id" : "4rQJ0xVXD7OKZmV5hXL4tW",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2732f485f102d1131f982acf3ba",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e022f485f102d1131f982acf3ba",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048512f485f102d1131f982acf3ba",
                    "width" : 64
                } ],
                "name" : "C",
                "release_date" : "2013-05-19",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:4rQJ0xVXD7OKZmV5hXL4tW"
            }, {
                "available_markets" : [ "AD", "AE", "AL", "AR", "AT", "AU", "BA", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "SE", "SG", "SI", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "XK", "ZA" ],
                "copyrights" : [ ],
                "description" : "When Nas speaks, people listen — and it’s usually for 1-minute. But people want more. Enter Nas Talks: a podcast where Nas discusses different topics that matter to him. In Nas’s own words, “In this podcast nothing is off-limits: The Israel and Palestine conflict, growing up as a brown kid, anything that makes me angry. Me and my guests simplify topics that no one cares about, and suddenly everyone relates.\" Have questions? Reach out to us at podcast@nasdaily.com. You can also view the show notes at www.nastalks.com",
                "explicit" : false,
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/show/1GdTMF4b8x5WTJuk66enCq"
                },
                "href" : "https://api.spotify.com/v1/shows/1GdTMF4b8x5WTJuk66enCq",
                "id" : "1GdTMF4b8x5WTJuk66enCq",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/e5ba307c67a755617eb8c68339a4e9b75fafb2bb",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/c11c31af184d9b30ce1d15acad56ffb25d530a12",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/181cdfb96b76fbd05b0802b06840c5397190771a",
                    "width" : 64
                } ],
                "is_externally_hosted" : false,
                "languages" : [ "en" ],
                "media_type" : "audio",
                "name" : "Nas Talks",
                "publisher" : "Nas Studios / Spotify Studios",
                "total_episodes" : 15,
                "type" : "show",
                "uri" : "spotify:show:1GdTMF4b8x5WTJuk66enCq"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/79U6sDp9JfvVqlVFZnw0mm"
                    },
                    "href" : "https://api.spotify.com/v1/artists/79U6sDp9JfvVqlVFZnw0mm",
                    "id" : "79U6sDp9JfvVqlVFZnw0mm",
                    "name" : "Anekdoten",
                    "type" : "artist",
                    "uri" : "spotify:artist:79U6sDp9JfvVqlVFZnw0mm"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/21xOBykUoraF3QARnWB9DZ"
                },
                "href" : "https://api.spotify.com/v1/albums/21xOBykUoraF3QARnWB9DZ",
                "id" : "21xOBykUoraF3QARnWB9DZ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27370c96471f68d9f7356efb232",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0270c96471f68d9f7356efb232",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485170c96471f68d9f7356efb232",
                    "width" : 64
                } ],
                "name" : "Gravity",
                "release_date" : "2003-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:21xOBykUoraF3QARnWB9DZ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0ybFZ2Ab08V8hueghSXm6E"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0ybFZ2Ab08V8hueghSXm6E",
                    "id" : "0ybFZ2Ab08V8hueghSXm6E",
                    "name" : "Opeth",
                    "type" : "artist",
                    "uri" : "spotify:artist:0ybFZ2Ab08V8hueghSXm6E"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0pD9QGJjubOlnjMUHYM7OM"
                },
                "href" : "https://api.spotify.com/v1/albums/0pD9QGJjubOlnjMUHYM7OM",
                "id" : "0pD9QGJjubOlnjMUHYM7OM",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27384b2a06eb5eec08f1018f51a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0284b2a06eb5eec08f1018f51a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485184b2a06eb5eec08f1018f51a",
                    "width" : 64
                } ],
                "name" : "Sorceress",
                "release_date" : "2016-09-30",
                "release_date_precision" : "day",
                "total_tracks" : 16,
                "type" : "album",
                "uri" : "spotify:album:0pD9QGJjubOlnjMUHYM7OM"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/68HFSFMCZzyRjkkm9bv5Vt"
                    },
                    "href" : "https://api.spotify.com/v1/artists/68HFSFMCZzyRjkkm9bv5Vt",
                    "id" : "68HFSFMCZzyRjkkm9bv5Vt",
                    "name" : "Jaga Jazzist",
                    "type" : "artist",
                    "uri" : "spotify:artist:68HFSFMCZzyRjkkm9bv5Vt"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/33K2EfFC6OOqEYyaLUTia4"
                },
                "href" : "https://api.spotify.com/v1/albums/33K2EfFC6OOqEYyaLUTia4",
                "id" : "33K2EfFC6OOqEYyaLUTia4",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e2dd54a44cd2f0d6782bf23a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e2dd54a44cd2f0d6782bf23a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e2dd54a44cd2f0d6782bf23a",
                    "width" : 64
                } ],
                "name" : "What We Must",
                "release_date" : "2005-04-25",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:33K2EfFC6OOqEYyaLUTia4"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1Dvfqq39HxvCJ3GvfeIFuT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1Dvfqq39HxvCJ3GvfeIFuT",
                    "id" : "1Dvfqq39HxvCJ3GvfeIFuT",
                    "name" : "Mastodon",
                    "type" : "artist",
                    "uri" : "spotify:artist:1Dvfqq39HxvCJ3GvfeIFuT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7mEkBi9a2p2f1WQbnH8Qk5"
                },
                "href" : "https://api.spotify.com/v1/albums/7mEkBi9a2p2f1WQbnH8Qk5",
                "id" : "7mEkBi9a2p2f1WQbnH8Qk5",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2736faddf21400e22f617bcd2e4",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e026faddf21400e22f617bcd2e4",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048516faddf21400e22f617bcd2e4",
                    "width" : 64
                } ],
                "name" : "Once More 'Round the Sun",
                "release_date" : "2014-06-20",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:7mEkBi9a2p2f1WQbnH8Qk5"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7iontmL8hXqoJcSA5oTZqa"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7iontmL8hXqoJcSA5oTZqa",
                    "id" : "7iontmL8hXqoJcSA5oTZqa",
                    "name" : "Black Tusk",
                    "type" : "artist",
                    "uri" : "spotify:artist:7iontmL8hXqoJcSA5oTZqa"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5ZyaE4zY5eTfLpOoLw2g8C"
                },
                "href" : "https://api.spotify.com/v1/albums/5ZyaE4zY5eTfLpOoLw2g8C",
                "id" : "5ZyaE4zY5eTfLpOoLw2g8C",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2735fcca59b1de3f2a9ad6a6e2e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e025fcca59b1de3f2a9ad6a6e2e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048515fcca59b1de3f2a9ad6a6e2e",
                    "width" : 64
                } ],
                "name" : "Taste the Sin (Deluxe Version)",
                "release_date" : "2010-05-25",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:5ZyaE4zY5eTfLpOoLw2g8C"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/shortcuts",
        "id" : "shortcuts",
        "images" : [ ],
        "name" : "Shortcuts",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/recently-played?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/79U6sDp9JfvVqlVFZnw0mm"
                    },
                    "href" : "https://api.spotify.com/v1/artists/79U6sDp9JfvVqlVFZnw0mm",
                    "id" : "79U6sDp9JfvVqlVFZnw0mm",
                    "name" : "Anekdoten",
                    "type" : "artist",
                    "uri" : "spotify:artist:79U6sDp9JfvVqlVFZnw0mm"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3erq7tMUJLhcO5O6AByGpN"
                },
                "href" : "https://api.spotify.com/v1/albums/3erq7tMUJLhcO5O6AByGpN",
                "id" : "3erq7tMUJLhcO5O6AByGpN",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273767b7ea8b973c87be43ac5e3",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02767b7ea8b973c87be43ac5e3",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851767b7ea8b973c87be43ac5e3",
                    "width" : 64
                } ],
                "name" : "Vemod",
                "release_date" : "1993-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:3erq7tMUJLhcO5O6AByGpN"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5vfSFPrDPPBGExVLldEDOB"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5vfSFPrDPPBGExVLldEDOB",
                    "id" : "5vfSFPrDPPBGExVLldEDOB",
                    "name" : "Enemies",
                    "type" : "artist",
                    "uri" : "spotify:artist:5vfSFPrDPPBGExVLldEDOB"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/05FuPZpstZ3mjQtejnSSyO"
                },
                "href" : "https://api.spotify.com/v1/albums/05FuPZpstZ3mjQtejnSSyO",
                "id" : "05FuPZpstZ3mjQtejnSSyO",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2738faa60675824ae111ae2d5fa",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e028faa60675824ae111ae2d5fa",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048518faa60675824ae111ae2d5fa",
                    "width" : 64
                } ],
                "name" : "We've Been Talking",
                "release_date" : "2010-06-11",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:05FuPZpstZ3mjQtejnSSyO"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH",
                    "id" : "6Ghvu1VvMGScGpOUJBAHNH",
                    "name" : "Deftones",
                    "type" : "artist",
                    "uri" : "spotify:artist:6Ghvu1VvMGScGpOUJBAHNH"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0VEFy5MsBiq0u2lWL0OwOd"
                },
                "href" : "https://api.spotify.com/v1/albums/0VEFy5MsBiq0u2lWL0OwOd",
                "id" : "0VEFy5MsBiq0u2lWL0OwOd",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27366c9f5d6f13bfc9abedc1056",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0266c9f5d6f13bfc9abedc1056",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485166c9f5d6f13bfc9abedc1056",
                    "width" : 64
                } ],
                "name" : "Ohms",
                "release_date" : "2020-09-25",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:0VEFy5MsBiq0u2lWL0OwOd"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6emZIO62oAXpIGiplDApwJ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6emZIO62oAXpIGiplDApwJ",
                    "id" : "6emZIO62oAXpIGiplDApwJ",
                    "name" : "Mathias Eick",
                    "type" : "artist",
                    "uri" : "spotify:artist:6emZIO62oAXpIGiplDApwJ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2w62NpE5U58lff2IoUiUWR"
                },
                "href" : "https://api.spotify.com/v1/albums/2w62NpE5U58lff2IoUiUWR",
                "id" : "2w62NpE5U58lff2IoUiUWR",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273b8bb42d46b3b82ded8975390",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02b8bb42d46b3b82ded8975390",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851b8bb42d46b3b82ded8975390",
                    "width" : 64
                } ],
                "name" : "Ravensburg",
                "release_date" : "2018-03-02",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:2w62NpE5U58lff2IoUiUWR"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2cnMpRsOVqtPMfq7YiFE6K"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2cnMpRsOVqtPMfq7YiFE6K",
                    "id" : "2cnMpRsOVqtPMfq7YiFE6K",
                    "name" : "Van Halen",
                    "type" : "artist",
                    "uri" : "spotify:artist:2cnMpRsOVqtPMfq7YiFE6K"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5Ew5vOg3PYyT9QUPCrdIZq"
                },
                "href" : "https://api.spotify.com/v1/albums/5Ew5vOg3PYyT9QUPCrdIZq",
                "id" : "5Ew5vOg3PYyT9QUPCrdIZq",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273def8994935a955331c21bc12",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02def8994935a955331c21bc12",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851def8994935a955331c21bc12",
                    "width" : 64
                } ],
                "name" : "5150",
                "release_date" : "1986-03-24",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:5Ew5vOg3PYyT9QUPCrdIZq"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/48u8OmKCr4hgq7bjl04DxZ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/48u8OmKCr4hgq7bjl04DxZ",
                    "id" : "48u8OmKCr4hgq7bjl04DxZ",
                    "name" : "Self Conscious Acronymed Man",
                    "type" : "artist",
                    "uri" : "spotify:artist:48u8OmKCr4hgq7bjl04DxZ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7kMaUcHBkrbfAFRtQvCuDO"
                },
                "href" : "https://api.spotify.com/v1/albums/7kMaUcHBkrbfAFRtQvCuDO",
                "id" : "7kMaUcHBkrbfAFRtQvCuDO",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739ddd6428e45b6b56684f307f",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029ddd6428e45b6b56684f307f",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519ddd6428e45b6b56684f307f",
                    "width" : 64
                } ],
                "name" : "Haji Abdul Aziz Haji Ali",
                "release_date" : "2010-09-15",
                "release_date_precision" : "day",
                "total_tracks" : 39,
                "type" : "album",
                "uri" : "spotify:album:7kMaUcHBkrbfAFRtQvCuDO"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/recently-played?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 173
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/recently-played",
        "id" : "recently-played",
        "images" : [ ],
        "name" : "Recently played",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/jump-back-in?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3mZrT1scKNjGo7Flenc4nf"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3mZrT1scKNjGo7Flenc4nf",
                    "id" : "3mZrT1scKNjGo7Flenc4nf",
                    "name" : "3nd",
                    "type" : "artist",
                    "uri" : "spotify:artist:3mZrT1scKNjGo7Flenc4nf"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2rKiDA5wiyA84obnLh5kOJ"
                },
                "href" : "https://api.spotify.com/v1/albums/2rKiDA5wiyA84obnLh5kOJ",
                "id" : "2rKiDA5wiyA84obnLh5kOJ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2738ddc7872a779794bc8a756de",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e028ddc7872a779794bc8a756de",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048518ddc7872a779794bc8a756de",
                    "width" : 64
                } ],
                "name" : "World Tour",
                "release_date" : "2009-09-02",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:2rKiDA5wiyA84obnLh5kOJ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0rpKM0MniNkXM1SLSglYUZ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0rpKM0MniNkXM1SLSglYUZ",
                    "id" : "0rpKM0MniNkXM1SLSglYUZ",
                    "name" : "toe",
                    "type" : "artist",
                    "uri" : "spotify:artist:0rpKM0MniNkXM1SLSglYUZ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3Z8Y7xdmG5MTbqH6OqyHjF"
                },
                "href" : "https://api.spotify.com/v1/albums/3Z8Y7xdmG5MTbqH6OqyHjF",
                "id" : "3Z8Y7xdmG5MTbqH6OqyHjF",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2737613d727292a4a2f9f087c2e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e027613d727292a4a2f9f087c2e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048517613d727292a4a2f9f087c2e",
                    "width" : 64
                } ],
                "name" : "the book about my idle plot on a vague anxiety",
                "release_date" : "2012-06-20",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:3Z8Y7xdmG5MTbqH6OqyHjF"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1m0B9ak05G0jqDY4ACLhQu"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1m0B9ak05G0jqDY4ACLhQu",
                    "id" : "1m0B9ak05G0jqDY4ACLhQu",
                    "name" : "DOWN",
                    "type" : "artist",
                    "uri" : "spotify:artist:1m0B9ak05G0jqDY4ACLhQu"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/04BvRPJwuDeuJ3DhbAw9Wg"
                },
                "href" : "https://api.spotify.com/v1/albums/04BvRPJwuDeuJ3DhbAw9Wg",
                "id" : "04BvRPJwuDeuJ3DhbAw9Wg",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273bd53947ce705d95e0fa3852d",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02bd53947ce705d95e0fa3852d",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851bd53947ce705d95e0fa3852d",
                    "width" : 64
                } ],
                "name" : "Nola",
                "release_date" : "1995-08-29",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:04BvRPJwuDeuJ3DhbAw9Wg"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 3
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/jump-back-in",
        "id" : "jump-back-in",
        "images" : [ ],
        "name" : "Jump back in",
        "rendering" : "CAROUSEL",
        "tag_line" : "Your top listens from the past few months.",
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-personalized%5Bfavorite-albums%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3KdXhEwbqFHfNfSk7L9E87"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3KdXhEwbqFHfNfSk7L9E87",
                    "id" : "3KdXhEwbqFHfNfSk7L9E87",
                    "name" : "Baroness",
                    "type" : "artist",
                    "uri" : "spotify:artist:3KdXhEwbqFHfNfSk7L9E87"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/73rGQwg2KzF2ZJadR7FzQ8"
                },
                "href" : "https://api.spotify.com/v1/albums/73rGQwg2KzF2ZJadR7FzQ8",
                "id" : "73rGQwg2KzF2ZJadR7FzQ8",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273dc5d7847bada48a8b4c46060",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02dc5d7847bada48a8b4c46060",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851dc5d7847bada48a8b4c46060",
                    "width" : 64
                } ],
                "name" : "Gold & Grey",
                "release_date" : "2019-06-14",
                "release_date_precision" : "day",
                "total_tracks" : 17,
                "type" : "album",
                "uri" : "spotify:album:73rGQwg2KzF2ZJadR7FzQ8"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2yzxX2DI9LFK8VFTyW2zZ8"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2yzxX2DI9LFK8VFTyW2zZ8",
                    "id" : "2yzxX2DI9LFK8VFTyW2zZ8",
                    "name" : "Joe Satriani",
                    "type" : "artist",
                    "uri" : "spotify:artist:2yzxX2DI9LFK8VFTyW2zZ8"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4oOWqLfZUACxyueli79Ram"
                },
                "href" : "https://api.spotify.com/v1/albums/4oOWqLfZUACxyueli79Ram",
                "id" : "4oOWqLfZUACxyueli79Ram",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2733e580ee4e184dc459e09f3f5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e023e580ee4e184dc459e09f3f5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048513e580ee4e184dc459e09f3f5",
                    "width" : 64
                } ],
                "name" : "Unstoppable Momentum",
                "release_date" : "2013-05-07",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:4oOWqLfZUACxyueli79Ram"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1Dvfqq39HxvCJ3GvfeIFuT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1Dvfqq39HxvCJ3GvfeIFuT",
                    "id" : "1Dvfqq39HxvCJ3GvfeIFuT",
                    "name" : "Mastodon",
                    "type" : "artist",
                    "uri" : "spotify:artist:1Dvfqq39HxvCJ3GvfeIFuT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1VzmKgEG38fsUBZVe15wuF"
                },
                "href" : "https://api.spotify.com/v1/albums/1VzmKgEG38fsUBZVe15wuF",
                "id" : "1VzmKgEG38fsUBZVe15wuF",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730d8c47e2273edbdd4cd3aa47",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020d8c47e2273edbdd4cd3aa47",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510d8c47e2273edbdd4cd3aa47",
                    "width" : 64
                } ],
                "name" : "Emperor of Sand",
                "release_date" : "2017-03-31",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:1VzmKgEG38fsUBZVe15wuF"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4DFhHyjvGYa9wxdHUjtDkc"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4DFhHyjvGYa9wxdHUjtDkc",
                    "id" : "4DFhHyjvGYa9wxdHUjtDkc",
                    "name" : "A Perfect Circle",
                    "type" : "artist",
                    "uri" : "spotify:artist:4DFhHyjvGYa9wxdHUjtDkc"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/49K6hYDEr5M3GxIBBxlPf9"
                },
                "href" : "https://api.spotify.com/v1/albums/49K6hYDEr5M3GxIBBxlPf9",
                "id" : "49K6hYDEr5M3GxIBBxlPf9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739fce7baa218063d99799ce52",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029fce7baa218063d99799ce52",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519fce7baa218063d99799ce52",
                    "width" : 64
                } ],
                "name" : "Thirteenth Step",
                "release_date" : "2003-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:49K6hYDEr5M3GxIBBxlPf9"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6YK58h9BCYpFNv10fsMwoS"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6YK58h9BCYpFNv10fsMwoS",
                    "id" : "6YK58h9BCYpFNv10fsMwoS",
                    "name" : "pg.lost",
                    "type" : "artist",
                    "uri" : "spotify:artist:6YK58h9BCYpFNv10fsMwoS"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4lvhLVlxROwIWD87GGOj7J"
                },
                "href" : "https://api.spotify.com/v1/albums/4lvhLVlxROwIWD87GGOj7J",
                "id" : "4lvhLVlxROwIWD87GGOj7J",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2734a2f28581b4e85658d972630",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e024a2f28581b4e85658d972630",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048514a2f28581b4e85658d972630",
                    "width" : 64
                } ],
                "name" : "Key",
                "release_date" : "2012-05-18",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:4lvhLVlxROwIWD87GGOj7J"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7mO0JGOATH8fVHvgCdZsXh"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7mO0JGOATH8fVHvgCdZsXh",
                    "id" : "7mO0JGOATH8fVHvgCdZsXh",
                    "name" : "Kylesa",
                    "type" : "artist",
                    "uri" : "spotify:artist:7mO0JGOATH8fVHvgCdZsXh"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/35qXLJqPw9ehORWpBNQiX3"
                },
                "href" : "https://api.spotify.com/v1/albums/35qXLJqPw9ehORWpBNQiX3",
                "id" : "35qXLJqPw9ehORWpBNQiX3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273eaf0267e831da6a960bd2157",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02eaf0267e831da6a960bd2157",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851eaf0267e831da6a960bd2157",
                    "width" : 64
                } ],
                "name" : "Ultraviolet",
                "release_date" : "2013-05-28",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:35qXLJqPw9ehORWpBNQiX3"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2GVzsXcXyU95u2EahzwqN7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2GVzsXcXyU95u2EahzwqN7",
                    "id" : "2GVzsXcXyU95u2EahzwqN7",
                    "name" : "If These Trees Could Talk",
                    "type" : "artist",
                    "uri" : "spotify:artist:2GVzsXcXyU95u2EahzwqN7"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1Lodl6h6XvqagHDC1bnsC8"
                },
                "href" : "https://api.spotify.com/v1/albums/1Lodl6h6XvqagHDC1bnsC8",
                "id" : "1Lodl6h6XvqagHDC1bnsC8",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273da2163c6b2d1ffddec97605d",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02da2163c6b2d1ffddec97605d",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851da2163c6b2d1ffddec97605d",
                    "width" : 64
                } ],
                "name" : "The Bones of a Dying World",
                "release_date" : "2016-06-03",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:1Lodl6h6XvqagHDC1bnsC8"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4DFhHyjvGYa9wxdHUjtDkc"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4DFhHyjvGYa9wxdHUjtDkc",
                    "id" : "4DFhHyjvGYa9wxdHUjtDkc",
                    "name" : "A Perfect Circle",
                    "type" : "artist",
                    "uri" : "spotify:artist:4DFhHyjvGYa9wxdHUjtDkc"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0GeWd0yUKXHbCXVag1mJvO"
                },
                "href" : "https://api.spotify.com/v1/albums/0GeWd0yUKXHbCXVag1mJvO",
                "id" : "0GeWd0yUKXHbCXVag1mJvO",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2732d73b494efcb99356f8c7b28",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e022d73b494efcb99356f8c7b28",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048512d73b494efcb99356f8c7b28",
                    "width" : 64
                } ],
                "name" : "Mer De Noms",
                "release_date" : "2000-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:0GeWd0yUKXHbCXVag1mJvO"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6CwDvApcRshxhEVMP30Sq7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6CwDvApcRshxhEVMP30Sq7",
                    "id" : "6CwDvApcRshxhEVMP30Sq7",
                    "name" : "Team Sleep",
                    "type" : "artist",
                    "uri" : "spotify:artist:6CwDvApcRshxhEVMP30Sq7"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7BORauiIbjPkOVRzSq38DP"
                },
                "href" : "https://api.spotify.com/v1/albums/7BORauiIbjPkOVRzSq38DP",
                "id" : "7BORauiIbjPkOVRzSq38DP",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2734b2a07c3a9b8230f687ca5ba",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e024b2a07c3a9b8230f687ca5ba",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048514b2a07c3a9b8230f687ca5ba",
                    "width" : 64
                } ],
                "name" : "Team Sleep (U.S. Release)",
                "release_date" : "2005-05-09",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:7BORauiIbjPkOVRzSq38DP"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6DVVsQAnpHdJjb1nYuOQ6g"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6DVVsQAnpHdJjb1nYuOQ6g",
                    "id" : "6DVVsQAnpHdJjb1nYuOQ6g",
                    "name" : "65daysofstatic",
                    "type" : "artist",
                    "uri" : "spotify:artist:6DVVsQAnpHdJjb1nYuOQ6g"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3a68UJXba5ejXgM5K8BUVF"
                },
                "href" : "https://api.spotify.com/v1/albums/3a68UJXba5ejXgM5K8BUVF",
                "id" : "3a68UJXba5ejXgM5K8BUVF",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f0a258bbcd9b91aee72d0e14",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f0a258bbcd9b91aee72d0e14",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f0a258bbcd9b91aee72d0e14",
                    "width" : 64
                } ],
                "name" : "Wild Light",
                "release_date" : "2013-10-29",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:3a68UJXba5ejXgM5K8BUVF"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-personalized%5Bfavorite-albums%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 20
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-personalized%5Bfavorite-albums%5D",
        "id" : "home-personalized[favorite-albums]",
        "images" : [ ],
        "name" : "Your favorite albums and songs",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B08QjWmC3RdjSP3V38vyzzo%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1RuYprt6Qlqu286h1f4dzZ"
                },
                "href" : "https://api.spotify.com/v1/albums/1RuYprt6Qlqu286h1f4dzZ",
                "id" : "1RuYprt6Qlqu286h1f4dzZ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273370ece74b1dcfdc34264f41b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02370ece74b1dcfdc34264f41b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851370ece74b1dcfdc34264f41b",
                    "width" : 64
                } ],
                "name" : "Binaural",
                "release_date" : "2000-05-16",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:1RuYprt6Qlqu286h1f4dzZ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7AOWw68DEPnDmTpquZw8bG"
                },
                "href" : "https://api.spotify.com/v1/albums/7AOWw68DEPnDmTpquZw8bG",
                "id" : "7AOWw68DEPnDmTpquZw8bG",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a20dd7a979699da6dce878ae",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a20dd7a979699da6dce878ae",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a20dd7a979699da6dce878ae",
                    "width" : 64
                } ],
                "name" : "Riot Act",
                "release_date" : "2002-11-08",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:7AOWw68DEPnDmTpquZw8bG"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5zsDtoSrXK4usJ4MB1tCh2"
                },
                "href" : "https://api.spotify.com/v1/albums/5zsDtoSrXK4usJ4MB1tCh2",
                "id" : "5zsDtoSrXK4usJ4MB1tCh2",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a53f06a45b489abe8f577134",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a53f06a45b489abe8f577134",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a53f06a45b489abe8f577134",
                    "width" : 64
                } ],
                "name" : "Yield",
                "release_date" : "1998-02-17",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:5zsDtoSrXK4usJ4MB1tCh2"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4DCwNXpnKEBYbls0T4LQzN"
                },
                "href" : "https://api.spotify.com/v1/albums/4DCwNXpnKEBYbls0T4LQzN",
                "id" : "4DCwNXpnKEBYbls0T4LQzN",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273cd1c5e0054c122d9aa3f829a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02cd1c5e0054c122d9aa3f829a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851cd1c5e0054c122d9aa3f829a",
                    "width" : 64
                } ],
                "name" : "Backspacer",
                "release_date" : "2009-09-19",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:4DCwNXpnKEBYbls0T4LQzN"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3FKhxgSZdtJBIjdHsjbxI0"
                },
                "href" : "https://api.spotify.com/v1/albums/3FKhxgSZdtJBIjdHsjbxI0",
                "id" : "3FKhxgSZdtJBIjdHsjbxI0",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2734c29f49b11488856e468719c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e024c29f49b11488856e468719c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048514c29f49b11488856e468719c",
                    "width" : 64
                } ],
                "name" : "No Code",
                "release_date" : "1996-08-06",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:3FKhxgSZdtJBIjdHsjbxI0"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5PY2mZGCOMezmWH7hiCwFH"
                },
                "href" : "https://api.spotify.com/v1/albums/5PY2mZGCOMezmWH7hiCwFH",
                "id" : "5PY2mZGCOMezmWH7hiCwFH",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273abd6980a0f2f2c9cc13581e0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02abd6980a0f2f2c9cc13581e0",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851abd6980a0f2f2c9cc13581e0",
                    "width" : 64
                } ],
                "name" : "Pearl Jam",
                "release_date" : "2006-05-02",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:5PY2mZGCOMezmWH7hiCwFH"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a"
                },
                "href" : "https://api.spotify.com/v1/albums/5B4PYA7wNN4WdEXdIJu58a",
                "id" : "5B4PYA7wNN4WdEXdIJu58a",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851d400d27cba05bb0545533864",
                    "width" : 64
                } ],
                "name" : "Ten",
                "release_date" : "1991-08-27",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:5B4PYA7wNN4WdEXdIJu58a"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/01WEcEzoa9mfh8fIDhvV1M"
                },
                "href" : "https://api.spotify.com/v1/albums/01WEcEzoa9mfh8fIDhvV1M",
                "id" : "01WEcEzoa9mfh8fIDhvV1M",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273fa475954245b93ca3167469e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02fa475954245b93ca3167469e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851fa475954245b93ca3167469e",
                    "width" : 64
                } ],
                "name" : "Lightning Bolt",
                "release_date" : "2013-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:01WEcEzoa9mfh8fIDhvV1M"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5pd9B3KQWKshHw4lnsSLNy"
                },
                "href" : "https://api.spotify.com/v1/albums/5pd9B3KQWKshHw4lnsSLNy",
                "id" : "5pd9B3KQWKshHw4lnsSLNy",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f0f6b8bc425633e6ed6369c4",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f0f6b8bc425633e6ed6369c4",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f0f6b8bc425633e6ed6369c4",
                    "width" : 64
                } ],
                "name" : "Vitalogy",
                "release_date" : "1994-11-22",
                "release_date_precision" : "day",
                "total_tracks" : 17,
                "type" : "album",
                "uri" : "spotify:album:5pd9B3KQWKshHw4lnsSLNy"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1w5Kfo2jwwIPruYS2UWh56"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56",
                    "id" : "1w5Kfo2jwwIPruYS2UWh56",
                    "name" : "Pearl Jam",
                    "type" : "artist",
                    "uri" : "spotify:artist:1w5Kfo2jwwIPruYS2UWh56"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3BSOiAas8BpJOii3kCPyjV"
                },
                "href" : "https://api.spotify.com/v1/albums/3BSOiAas8BpJOii3kCPyjV",
                "id" : "3BSOiAas8BpJOii3kCPyjV",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273777344aba9d5b5785b4593a5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02777344aba9d5b5785b4593a5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851777344aba9d5b5785b4593a5",
                    "width" : 64
                } ],
                "name" : "Vs.",
                "release_date" : "1993-10-19",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:3BSOiAas8BpJOii3kCPyjV"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B08QjWmC3RdjSP3V38vyzzo%5D",
        "id" : "home-editorial-collections[08QjWmC3RdjSP3V38vyzzo]",
        "images" : [ ],
        "name" : "Pearl Jam's iconic albums",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B14%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/14d5KCX9nprUcxnKIShrr1"
                    },
                    "href" : "https://api.spotify.com/v1/artists/14d5KCX9nprUcxnKIShrr1",
                    "id" : "14d5KCX9nprUcxnKIShrr1",
                    "name" : "MASS OF THE FERMENTING DREGS",
                    "type" : "artist",
                    "uri" : "spotify:artist:14d5KCX9nprUcxnKIShrr1"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4lE2W9dGFUWe8pjpM6QNWF"
                },
                "href" : "https://api.spotify.com/v1/albums/4lE2W9dGFUWe8pjpM6QNWF",
                "id" : "4lE2W9dGFUWe8pjpM6QNWF",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27324a595ed5477850b85150765",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0224a595ed5477850b85150765",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485124a595ed5477850b85150765",
                    "width" : 64
                } ],
                "name" : "ゼロコンマ、色とりどりの世界",
                "release_date" : "2010-07-30",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:4lE2W9dGFUWe8pjpM6QNWF"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6VIUbb5oBJPnm2gcYMFBUR"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6VIUbb5oBJPnm2gcYMFBUR",
                    "id" : "6VIUbb5oBJPnm2gcYMFBUR",
                    "name" : "JYOCHO",
                    "type" : "artist",
                    "uri" : "spotify:artist:6VIUbb5oBJPnm2gcYMFBUR"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7mRW1P9lDdXC47czngKQ2F"
                },
                "href" : "https://api.spotify.com/v1/albums/7mRW1P9lDdXC47czngKQ2F",
                "id" : "7mRW1P9lDdXC47czngKQ2F",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273b5e8de991e166a6716255e12",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02b5e8de991e166a6716255e12",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851b5e8de991e166a6716255e12",
                    "width" : 64
                } ],
                "name" : "美しい終末サイクル",
                "release_date" : "2018-12-05",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:7mRW1P9lDdXC47czngKQ2F"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Y3ctZWgKkurt1T1D7RYyv"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Y3ctZWgKkurt1T1D7RYyv",
                    "id" : "4Y3ctZWgKkurt1T1D7RYyv",
                    "name" : "downy",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Y3ctZWgKkurt1T1D7RYyv"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6n34IZvXqlRTFwBcdYOPDW"
                },
                "href" : "https://api.spotify.com/v1/albums/6n34IZvXqlRTFwBcdYOPDW",
                "id" : "6n34IZvXqlRTFwBcdYOPDW",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273440ab13c88d5b299b56c72bd",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02440ab13c88d5b299b56c72bd",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851440ab13c88d5b299b56c72bd",
                    "width" : 64
                } ],
                "name" : "第四作品集『無題』再発",
                "release_date" : "2014-09-24",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:6n34IZvXqlRTFwBcdYOPDW"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6RuS4udHwx3C9ysk4KXtNw"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6RuS4udHwx3C9ysk4KXtNw",
                    "id" : "6RuS4udHwx3C9ysk4KXtNw",
                    "name" : "jizue",
                    "type" : "artist",
                    "uri" : "spotify:artist:6RuS4udHwx3C9ysk4KXtNw"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0IUyyz47nTlzvJ9yhQZdgc"
                },
                "href" : "https://api.spotify.com/v1/albums/0IUyyz47nTlzvJ9yhQZdgc",
                "id" : "0IUyyz47nTlzvJ9yhQZdgc",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273d1cab214fb8dce296fc0d598",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02d1cab214fb8dce296fc0d598",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851d1cab214fb8dce296fc0d598",
                    "width" : 64
                } ],
                "name" : "shiori",
                "release_date" : "2014-08-06",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:0IUyyz47nTlzvJ9yhQZdgc"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7rCYoZvLvyfJ8yqqiTCQPh"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7rCYoZvLvyfJ8yqqiTCQPh",
                    "id" : "7rCYoZvLvyfJ8yqqiTCQPh",
                    "name" : "Nuito",
                    "type" : "artist",
                    "uri" : "spotify:artist:7rCYoZvLvyfJ8yqqiTCQPh"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7M2a2qCwWmuDgmiLcP65Bx"
                },
                "href" : "https://api.spotify.com/v1/albums/7M2a2qCwWmuDgmiLcP65Bx",
                "id" : "7M2a2qCwWmuDgmiLcP65Bx",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739ba602aff62251f3bb55bb60",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029ba602aff62251f3bb55bb60",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519ba602aff62251f3bb55bb60",
                    "width" : 64
                } ],
                "name" : "Unutella",
                "release_date" : "2009",
                "release_date_precision" : "year",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:7M2a2qCwWmuDgmiLcP65Bx"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4cN5ZjM803KAuNinHIzN9X"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4cN5ZjM803KAuNinHIzN9X",
                    "id" : "4cN5ZjM803KAuNinHIzN9X",
                    "name" : "Clean of Core",
                    "type" : "artist",
                    "uri" : "spotify:artist:4cN5ZjM803KAuNinHIzN9X"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5jt6oEkqe7Kqym135PjNZ9"
                },
                "href" : "https://api.spotify.com/v1/albums/5jt6oEkqe7Kqym135PjNZ9",
                "id" : "5jt6oEkqe7Kqym135PjNZ9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27373833432d361af90b184aa15",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0273833432d361af90b184aa15",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485173833432d361af90b184aa15",
                    "width" : 64
                } ],
                "name" : "Spectacle",
                "release_date" : "2009-10-26",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:5jt6oEkqe7Kqym135PjNZ9"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0dYghPKO9hdF1xbjEwoILT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0dYghPKO9hdF1xbjEwoILT",
                    "id" : "0dYghPKO9hdF1xbjEwoILT",
                    "name" : "how to count one to ten",
                    "type" : "artist",
                    "uri" : "spotify:artist:0dYghPKO9hdF1xbjEwoILT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6ZjzFKogXEMbapMT4oBvnM"
                },
                "href" : "https://api.spotify.com/v1/albums/6ZjzFKogXEMbapMT4oBvnM",
                "id" : "6ZjzFKogXEMbapMT4oBvnM",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273564768b8551ae2e67fb836db",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02564768b8551ae2e67fb836db",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851564768b8551ae2e67fb836db",
                    "width" : 64
                } ],
                "name" : "Method of slow motion",
                "release_date" : "2014-10-08",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:6ZjzFKogXEMbapMT4oBvnM"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6GAoXkyadLFOLLkZrHWlOR"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6GAoXkyadLFOLLkZrHWlOR",
                    "id" : "6GAoXkyadLFOLLkZrHWlOR",
                    "name" : "tide/edit",
                    "type" : "artist",
                    "uri" : "spotify:artist:6GAoXkyadLFOLLkZrHWlOR"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4ooknJsrPeBTM5Xz5RLa2Q"
                },
                "href" : "https://api.spotify.com/v1/albums/4ooknJsrPeBTM5Xz5RLa2Q",
                "id" : "4ooknJsrPeBTM5Xz5RLa2Q",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2734b5dc5c86f6fef3f5d8d3e78",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e024b5dc5c86f6fef3f5d8d3e78",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048514b5dc5c86f6fef3f5d8d3e78",
                    "width" : 64
                } ],
                "name" : "Lightfoot",
                "release_date" : "2015-11-29",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:4ooknJsrPeBTM5Xz5RLa2Q"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7sEmXHrnEnX7PScoJAvSvo"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7sEmXHrnEnX7PScoJAvSvo",
                    "id" : "7sEmXHrnEnX7PScoJAvSvo",
                    "name" : "fox capture plan",
                    "type" : "artist",
                    "uri" : "spotify:artist:7sEmXHrnEnX7PScoJAvSvo"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4R9cvlVcCo4ej3zTkLlAJd"
                },
                "href" : "https://api.spotify.com/v1/albums/4R9cvlVcCo4ej3zTkLlAJd",
                "id" : "4R9cvlVcCo4ej3zTkLlAJd",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27393d968e8f6d08c8cdd24a887",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0293d968e8f6d08c8cdd24a887",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485193d968e8f6d08c8cdd24a887",
                    "width" : 64
                } ],
                "name" : "Covermind",
                "release_date" : "2015-07-08",
                "release_date_precision" : "day",
                "total_tracks" : 14,
                "type" : "album",
                "uri" : "spotify:album:4R9cvlVcCo4ej3zTkLlAJd"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2rqNUPgkBgbhcRabUQ5C9g"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2rqNUPgkBgbhcRabUQ5C9g",
                    "id" : "2rqNUPgkBgbhcRabUQ5C9g",
                    "name" : "Elephant Gym",
                    "type" : "artist",
                    "uri" : "spotify:artist:2rqNUPgkBgbhcRabUQ5C9g"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2WdTmRlAQPqiHAbY50PHq2"
                },
                "href" : "https://api.spotify.com/v1/albums/2WdTmRlAQPqiHAbY50PHq2",
                "id" : "2WdTmRlAQPqiHAbY50PHq2",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273497b1daec6dd0e4a048fce8a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02497b1daec6dd0e4a048fce8a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851497b1daec6dd0e4a048fce8a",
                    "width" : 64
                } ],
                "name" : "Gaze at Blue",
                "release_date" : "2019-10-18",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:2WdTmRlAQPqiHAbY50PHq2"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B14%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 16
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B14%5D",
        "id" : "home-discover-similar-to[14]",
        "images" : [ ],
        "name" : "Similar to a picture of her",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/for-fans-of%5B1%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "collaborative" : false,
                "description" : "This is Mogwai. The essential tracks, all in one playlist.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1Mom2c"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1Mom2c",
                "id" : "37i9dQZF1DZ06evO1Mom2c",
                "images" : [ {
                    "height" : null,
                    "url" : "https://thisis-images.scdn.co/37i9dQZF1DZ06evO1Mom2c-default.jpg",
                    "width" : null
                } ],
                "name" : "This Is Mogwai",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MDk2MzksMDAwMDAwMDA0NjgzZDc5N2MxNDE2MjFiNTk2YTI0MTA4NDY2ZDE1OA==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO1Mom2c/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DZ06evO1Mom2c"
            }, {
                "collaborative" : false,
                "description" : "",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E4A3MF0YeJkic"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E4A3MF0YeJkic",
                "id" : "37i9dQZF1E4A3MF0YeJkic",
                "images" : [ {
                    "height" : null,
                    "url" : "https://seeded-session-images.scdn.co/v1/img/artist/34UhPkLbtFKRq3nmfFgejG/en",
                    "width" : null
                } ],
                "name" : "Mogwai Radio",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDA5OTliZWEwOTM2ZjllNWU4YWExYTBiODVlYTg4YjJhMQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E4A3MF0YeJkic/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E4A3MF0YeJkic"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/34UhPkLbtFKRq3nmfFgejG"
                    },
                    "href" : "https://api.spotify.com/v1/artists/34UhPkLbtFKRq3nmfFgejG",
                    "id" : "34UhPkLbtFKRq3nmfFgejG",
                    "name" : "Mogwai",
                    "type" : "artist",
                    "uri" : "spotify:artist:34UhPkLbtFKRq3nmfFgejG"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2R3MFgSzJ42sfMKk5LqtC5"
                },
                "href" : "https://api.spotify.com/v1/albums/2R3MFgSzJ42sfMKk5LqtC5",
                "id" : "2R3MFgSzJ42sfMKk5LqtC5",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27394e24477ed006d70dc314916",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0294e24477ed006d70dc314916",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485194e24477ed006d70dc314916",
                    "width" : 64
                } ],
                "name" : "ZEROZEROZERO",
                "release_date" : "2020-05-08",
                "release_date_precision" : "day",
                "total_tracks" : 21,
                "type" : "album",
                "uri" : "spotify:album:2R3MFgSzJ42sfMKk5LqtC5"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/34UhPkLbtFKRq3nmfFgejG"
                    },
                    "href" : "https://api.spotify.com/v1/artists/34UhPkLbtFKRq3nmfFgejG",
                    "id" : "34UhPkLbtFKRq3nmfFgejG",
                    "name" : "Mogwai",
                    "type" : "artist",
                    "uri" : "spotify:artist:34UhPkLbtFKRq3nmfFgejG"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/34DvEbkQlFz3bxgaSpNhn9"
                },
                "href" : "https://api.spotify.com/v1/albums/34DvEbkQlFz3bxgaSpNhn9",
                "id" : "34DvEbkQlFz3bxgaSpNhn9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27351a7616f95f2981549822d25",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0251a7616f95f2981549822d25",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485151a7616f95f2981549822d25",
                    "width" : 64
                } ],
                "name" : "Rock Action",
                "release_date" : "2001-04-30",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:34DvEbkQlFz3bxgaSpNhn9"
            }, {
                "collaborative" : false,
                "description" : "The essential beautiful noise: sweet and sour fuzz to warm your heart. Cover: Slowdive",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX6ujZpAN0v9r"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ujZpAN0v9r",
                "id" : "37i9dQZF1DX6ujZpAN0v9r",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000021e103830ee9843f7a9b1549a",
                    "width" : null
                } ],
                "name" : "Shoegaze Classics",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjY1NjMwOCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX6ujZpAN0v9r/tracks",
                    "total" : 129
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX6ujZpAN0v9r"
            }, {
                "collaborative" : false,
                "description" : "Improve your concentration with aerial post-rock sounds...",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWWTdxbiocWOL"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWTdxbiocWOL",
                "id" : "37i9dQZF1DWWTdxbiocWOL",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002ff55ef0570b629a51bfc43f4",
                    "width" : null
                } ],
                "name" : "Calm Before the Storm",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMTI3ODE2NCwwMDAwMDAyNzAwMDAwMTc0ZDM5ZGJkYmQwMDAwMDE2ZDAwYWNhMmMz",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWTdxbiocWOL/tracks",
                    "total" : 40
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWWTdxbiocWOL"
            }, {
                "collaborative" : false,
                "description" : "Celebrate legendary DJ/BBC Radio 1 host John Peel's legacy in this collection of highlights from 5 decades of <a href=\"https://en.wikipedia.org/wiki/List_of_Peel_sessions\">Peel Sessions</a>. Hear Pavement covering <a href=\"spotify:user:spotify:playlist:37i9dQZF1DX7mMRxgkst0Y\">The Fall</a>, acoustic Morrissey, Nirvana before Nevermind, Bowie debuting Hunky Dory outtake, and many more.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWY3pbjsJ6MxA"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWY3pbjsJ6MxA",
                "id" : "37i9dQZF1DWY3pbjsJ6MxA",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000028d0d1311f38c982fd540574f",
                    "width" : null
                } ],
                "name" : "Best of John Peel Sessions",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTU2ODAxOTg3NSwwMDAwMDAwNjAwMDAwMTVjNGI3Mjk2MjcwMDAwMDE2ZDE1NDQ4NzU3",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWY3pbjsJ6MxA/tracks",
                    "total" : 60
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWY3pbjsJ6MxA"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 7
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/for-fans-of%5B1%5D",
        "id" : "for-fans-of[1]",
        "images" : [ ],
        "name" : "For fans of Mogwai",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/programming-local-strategic-playlists?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "collaborative" : false,
                "description" : "The best tracks from the world of music. Cover: BLACKPINK",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWWuGaVZsglfu"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWuGaVZsglfu",
                "id" : "37i9dQZF1DWWuGaVZsglfu",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000023e8c26b32d10e0cc1cc32110",
                    "width" : null
                } ],
                "name" : "Top Hits Malaysia",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjA3NzIzNSwwMDAwMDExZTAwMDAwMTc1MDMzZTk5NTYwMDAwMDE3NGUzZjMyNzUy",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWuGaVZsglfu/tracks",
                    "total" : 48
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWWuGaVZsglfu"
            }, {
                "collaborative" : false,
                "description" : "Lagu-lagu yang terbaik di Malaysia. Cover: Andi Bernadee",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXb1RLKxkHZ77"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXb1RLKxkHZ77",
                "id" : "37i9dQZF1DXb1RLKxkHZ77",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002779c4f3c28ddbe953f6e2d96",
                    "width" : null
                } ],
                "name" : "Carta Malaysia 50",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjA3NDc5MSwwMDAwMDBjZTAwMDAwMTc1MDMxOTRlYjcwMDAwMDE3NTAzMTE4OGIw",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXb1RLKxkHZ77/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DXb1RLKxkHZ77"
            }, {
                "collaborative" : false,
                "description" : "Crossing the Singapore and Malaysia border to bring you the Hip Hop and R&B tracks you need. Cover: Luqman Podolski",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXcElQ9pepZuS"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcElQ9pepZuS",
                "id" : "37i9dQZF1DXcElQ9pepZuS",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002ab9acd4626b43b38e526cb26",
                    "width" : null
                } ],
                "name" : "Border Beats",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjE3Mjg2MCwwMDAwMDAxNzAwMDAwMTc1MDhmMWI3MDYwMDAwMDE3NTA4MzljNjQ0",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcElQ9pepZuS/tracks",
                    "total" : 104
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DXcElQ9pepZuS"
            }, {
                "collaborative" : false,
                "description" : "Discover new favourites or tomorrow's hits all in one place today. Cover: Sunset Rollercoaster",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX1TxhZPYjnhx"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX1TxhZPYjnhx",
                "id" : "37i9dQZF1DX1TxhZPYjnhx",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f0000000271396d500f51b565d386782b",
                    "width" : null
                } ],
                "name" : "Pop Rising SG & MY",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjE3Mjg2MCwwMDAwMDAyMzAwMDAwMTc1MDhmMWI2ZmIwMDAwMDE3NTA4NGI0Nzdk",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX1TxhZPYjnhx/tracks",
                    "total" : 97
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX1TxhZPYjnhx"
            }, {
                "collaborative" : false,
                "description" : "The hottest songs you need to listen to right now. Cover: Bebe Rexha, Doja Cat",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWT1y71ZcMPe5"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWT1y71ZcMPe5",
                "id" : "37i9dQZF1DWT1y71ZcMPe5",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002796ef6b7730ba6a368ec7905",
                    "width" : null
                } ],
                "name" : "It's a Hit!",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjQ2NzQ5MSwwMDAwMDEzOTAwMDAwMTc1MWE4MTZkNmQwMDAwMDE3NTFhODEwZTU0",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWT1y71ZcMPe5/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWT1y71ZcMPe5"
            }, {
                "collaborative" : false,
                "description" : "Trending tracks on both sides of the Causeway. Cover: Clairo",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX0WhHRQjLcMK"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX0WhHRQjLcMK",
                "id" : "37i9dQZF1DX0WhHRQjLcMK",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002811ad7b667e76333a9d2ba8c",
                    "width" : null
                } ],
                "name" : "Causeway Trends",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjE3Mjg2MCwwMDAwMDAzMDAwMDAwMTc1MDhmMWI2ZDAwMDAwMDE3NTA4NmIzMTVi",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX0WhHRQjLcMK/tracks",
                    "total" : 85
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX0WhHRQjLcMK"
            }, {
                "collaborative" : false,
                "description" : "Score all the hottest hits from your favourite hallyu star and check out your one true K-Pop playlist! #kdaebak Cover: NCT",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1",
                "id" : "37i9dQZF1DX9tPFwDMOaN1",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002bc7c388b9ed27575f4a297b0",
                    "width" : null
                } ],
                "name" : "K-Pop Daebak",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjU3NTU5OCwwMDAwMDJjMzAwMDAwMTc1MjBmMzAzNGIwMDAwMDE3NTFiYTcxZWRl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX9tPFwDMOaN1/tracks",
                    "total" : 51
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX9tPFwDMOaN1"
            }, {
                "collaborative" : false,
                "description" : "Hanya yang terhangat dan terkini. Foto: Sophia Liana",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWVcsVY2PZfmZ"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWVcsVY2PZfmZ",
                "id" : "37i9dQZF1DWVcsVY2PZfmZ",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002eee411d49762d10142856f5f",
                    "width" : null
                } ],
                "name" : "Pop Terkini!",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjE3Mjg2MCwwMDAwMDBmYjAwMDAwMTc1MDhmMWI2YmMwMDAwMDE3NTA4M2UzZjIy",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWVcsVY2PZfmZ/tracks",
                    "total" : 104
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWVcsVY2PZfmZ"
            }, {
                "collaborative" : false,
                "description" : "Lose yourself to over 5 hours of acoustic goodness.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWX9VXBLRgDqu"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWX9VXBLRgDqu",
                "id" : "37i9dQZF1DWX9VXBLRgDqu",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f0000000200674a4053ffd4b2cc4c6444",
                    "width" : null
                } ],
                "name" : "Acoustic Favorites",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjY1NjMwNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWX9VXBLRgDqu/tracks",
                    "total" : 90
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWX9VXBLRgDqu"
            }, {
                "collaborative" : false,
                "description" : "Hits to boost your mood and fill you with happiness!",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC",
                "id" : "37i9dQZF1DXdPec7aLTmlC",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000025af1070c80cd50dbbb4cfa19",
                    "width" : null
                } ],
                "name" : "Happy Hits!",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjY1NjI5NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC/tracks",
                    "total" : 100
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DXdPec7aLTmlC"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/programming-local-strategic-playlists?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 13
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/programming-local-strategic-playlists",
        "id" : "programming-local-strategic-playlists",
        "images" : [ ],
        "name" : "Your favourite playlists",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-personalized%5Binspired-by-recent-albums%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1HN6EhIK1fRYk5gtXHclZv"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1HN6EhIK1fRYk5gtXHclZv",
                    "id" : "1HN6EhIK1fRYk5gtXHclZv",
                    "name" : "Spock's Beard",
                    "type" : "artist",
                    "uri" : "spotify:artist:1HN6EhIK1fRYk5gtXHclZv"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4jvfINK922vXYKLBcdsZXd"
                },
                "href" : "https://api.spotify.com/v1/albums/4jvfINK922vXYKLBcdsZXd",
                "id" : "4jvfINK922vXYKLBcdsZXd",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2733186691f51b8bd9f2abbc4e3",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e023186691f51b8bd9f2abbc4e3",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048513186691f51b8bd9f2abbc4e3",
                    "width" : 64
                } ],
                "name" : "Brief Nocturnes And Dreamless Sleep",
                "release_date" : "2013-04-02",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:4jvfINK922vXYKLBcdsZXd"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5kbidtcpyRRMdAQUnI1BG4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5kbidtcpyRRMdAQUnI1BG4",
                    "id" : "5kbidtcpyRRMdAQUnI1BG4",
                    "name" : "Ne Obliviscaris",
                    "type" : "artist",
                    "uri" : "spotify:artist:5kbidtcpyRRMdAQUnI1BG4"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2AX3vMS7gYbrS7tALE4U7Q"
                },
                "href" : "https://api.spotify.com/v1/albums/2AX3vMS7gYbrS7tALE4U7Q",
                "id" : "2AX3vMS7gYbrS7tALE4U7Q",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2731bbe4aa8d8b32e061e6896f9",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e021bbe4aa8d8b32e061e6896f9",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048511bbe4aa8d8b32e061e6896f9",
                    "width" : 64
                } ],
                "name" : "Portal of I",
                "release_date" : "2012-05-07",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:2AX3vMS7gYbrS7tALE4U7Q"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0BI5vXwUl4lZMtARfXQ0No"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0BI5vXwUl4lZMtARfXQ0No",
                    "id" : "0BI5vXwUl4lZMtARfXQ0No",
                    "name" : "The Flower Kings",
                    "type" : "artist",
                    "uri" : "spotify:artist:0BI5vXwUl4lZMtARfXQ0No"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/02kZ2Kw6DxlfaebRBVAKLR"
                },
                "href" : "https://api.spotify.com/v1/albums/02kZ2Kw6DxlfaebRBVAKLR",
                "id" : "02kZ2Kw6DxlfaebRBVAKLR",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273aed5d1f991ddf8ec4972e95c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02aed5d1f991ddf8ec4972e95c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851aed5d1f991ddf8ec4972e95c",
                    "width" : 64
                } ],
                "name" : "Desolation Rose",
                "release_date" : "2013-10-29",
                "release_date_precision" : "day",
                "total_tracks" : 18,
                "type" : "album",
                "uri" : "spotify:album:02kZ2Kw6DxlfaebRBVAKLR"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/38uWD5h115pdz278q4rwZW"
                    },
                    "href" : "https://api.spotify.com/v1/artists/38uWD5h115pdz278q4rwZW",
                    "id" : "38uWD5h115pdz278q4rwZW",
                    "name" : "Soen",
                    "type" : "artist",
                    "uri" : "spotify:artist:38uWD5h115pdz278q4rwZW"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2v5UixLB5RwGRpX1rQUH2n"
                },
                "href" : "https://api.spotify.com/v1/albums/2v5UixLB5RwGRpX1rQUH2n",
                "id" : "2v5UixLB5RwGRpX1rQUH2n",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27389543320c92d2677a289ae88",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0289543320c92d2677a289ae88",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485189543320c92d2677a289ae88",
                    "width" : 64
                } ],
                "name" : "Tellurian",
                "release_date" : "2014-09-01",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:2v5UixLB5RwGRpX1rQUH2n"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4X42BfuhWCAZ2swiVze9O0"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4X42BfuhWCAZ2swiVze9O0",
                    "id" : "4X42BfuhWCAZ2swiVze9O0",
                    "name" : "Steven Wilson",
                    "type" : "artist",
                    "uri" : "spotify:artist:4X42BfuhWCAZ2swiVze9O0"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2DHSJ8Zwoac6RU6hkSQQjS"
                },
                "href" : "https://api.spotify.com/v1/albums/2DHSJ8Zwoac6RU6hkSQQjS",
                "id" : "2DHSJ8Zwoac6RU6hkSQQjS",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27391efa8545295651ba4fc55d5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0291efa8545295651ba4fc55d5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485191efa8545295651ba4fc55d5",
                    "width" : 64
                } ],
                "name" : "4 1/2",
                "release_date" : "2016-01-22",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:2DHSJ8Zwoac6RU6hkSQQjS"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5yjbUO1Jocui7RKE30zfLT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5yjbUO1Jocui7RKE30zfLT",
                    "id" : "5yjbUO1Jocui7RKE30zfLT",
                    "name" : "Riverside",
                    "type" : "artist",
                    "uri" : "spotify:artist:5yjbUO1Jocui7RKE30zfLT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6bS5UWfIw3nnDBvvLlwTdW"
                },
                "href" : "https://api.spotify.com/v1/albums/6bS5UWfIw3nnDBvvLlwTdW",
                "id" : "6bS5UWfIw3nnDBvvLlwTdW",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2738eea2716437edd2e3ad72635",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e028eea2716437edd2e3ad72635",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048518eea2716437edd2e3ad72635",
                    "width" : 64
                } ],
                "name" : "Shrine Of New Generation Slaves",
                "release_date" : "2013-09-02",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:6bS5UWfIw3nnDBvvLlwTdW"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6Zd7AjXsoLaweP9FHyudVC"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6Zd7AjXsoLaweP9FHyudVC",
                    "id" : "6Zd7AjXsoLaweP9FHyudVC",
                    "name" : "Caligula's Horse",
                    "type" : "artist",
                    "uri" : "spotify:artist:6Zd7AjXsoLaweP9FHyudVC"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4ddRx20FxcGU2ZJhateVym"
                },
                "href" : "https://api.spotify.com/v1/albums/4ddRx20FxcGU2ZJhateVym",
                "id" : "4ddRx20FxcGU2ZJhateVym",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273db232789a7df403087ae51ce",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02db232789a7df403087ae51ce",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851db232789a7df403087ae51ce",
                    "width" : 64
                } ],
                "name" : "The Tide, the Thief & River's End (Re-issue 2017)",
                "release_date" : "2013-06-16",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:4ddRx20FxcGU2ZJhateVym"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5nXldeedEas60jZnMi40p4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5nXldeedEas60jZnMi40p4",
                    "id" : "5nXldeedEas60jZnMi40p4",
                    "name" : "Cynic",
                    "type" : "artist",
                    "uri" : "spotify:artist:5nXldeedEas60jZnMi40p4"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0L9q210Dguhq0nmGlCe1hR"
                },
                "href" : "https://api.spotify.com/v1/albums/0L9q210Dguhq0nmGlCe1hR",
                "id" : "0L9q210Dguhq0nmGlCe1hR",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273d8434144c00222410778ced5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02d8434144c00222410778ced5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851d8434144c00222410778ced5",
                    "width" : 64
                } ],
                "name" : "Kindly Bent to Free Us",
                "release_date" : "2014-02-18",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:0L9q210Dguhq0nmGlCe1hR"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5g8zU3hIMirIT8gwhV6Hlz"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5g8zU3hIMirIT8gwhV6Hlz",
                    "id" : "5g8zU3hIMirIT8gwhV6Hlz",
                    "name" : "Beardfish",
                    "type" : "artist",
                    "uri" : "spotify:artist:5g8zU3hIMirIT8gwhV6Hlz"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0vFSXPgMOrghaYx5Wvonkn"
                },
                "href" : "https://api.spotify.com/v1/albums/0vFSXPgMOrghaYx5Wvonkn",
                "id" : "0vFSXPgMOrghaYx5Wvonkn",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27303978f3c7ff507480aaf8fa6",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0203978f3c7ff507480aaf8fa6",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485103978f3c7ff507480aaf8fa6",
                    "width" : 64
                } ],
                "name" : "+4626-COMFORTZONE",
                "release_date" : "2015-01-23",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:0vFSXPgMOrghaYx5Wvonkn"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2SRIVGDkdqQnrQdaXxDkJt"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2SRIVGDkdqQnrQdaXxDkJt",
                    "id" : "2SRIVGDkdqQnrQdaXxDkJt",
                    "name" : "Haken",
                    "type" : "artist",
                    "uri" : "spotify:artist:2SRIVGDkdqQnrQdaXxDkJt"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5WRdRVpptWX2cRw5r6dTVU"
                },
                "href" : "https://api.spotify.com/v1/albums/5WRdRVpptWX2cRw5r6dTVU",
                "id" : "5WRdRVpptWX2cRw5r6dTVU",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27354b642037ee6269cdad4c251",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0254b642037ee6269cdad4c251",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485154b642037ee6269cdad4c251",
                    "width" : 64
                } ],
                "name" : "Restoration EP",
                "release_date" : "2014-11-11",
                "release_date_precision" : "day",
                "total_tracks" : 3,
                "type" : "album",
                "uri" : "spotify:album:5WRdRVpptWX2cRw5r6dTVU"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-personalized%5Binspired-by-recent-albums%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 15
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-personalized%5Binspired-by-recent-albums%5D",
        "id" : "home-personalized[inspired-by-recent-albums]",
        "images" : [ ],
        "name" : "Recommended for today",
        "rendering" : "CAROUSEL",
        "tag_line" : "Inspired by your recent activity.",
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B4%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/56dO9zeHKuU5Gvfc2kxHNw"
                    },
                    "href" : "https://api.spotify.com/v1/artists/56dO9zeHKuU5Gvfc2kxHNw",
                    "id" : "56dO9zeHKuU5Gvfc2kxHNw",
                    "name" : "Chevelle",
                    "type" : "artist",
                    "uri" : "spotify:artist:56dO9zeHKuU5Gvfc2kxHNw"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/12s1xCgzvkoqPt13X0HrPi"
                },
                "href" : "https://api.spotify.com/v1/albums/12s1xCgzvkoqPt13X0HrPi",
                "id" : "12s1xCgzvkoqPt13X0HrPi",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27343138ceb2f645d7148eb8378",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0243138ceb2f645d7148eb8378",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485143138ceb2f645d7148eb8378",
                    "width" : 64
                } ],
                "name" : "12 Bloody Spies: B-sides and Rarities",
                "release_date" : "2018-10-26",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:12s1xCgzvkoqPt13X0HrPi"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0qB0cTENhSUc0feov5qbg0"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0qB0cTENhSUc0feov5qbg0",
                    "id" : "0qB0cTENhSUc0feov5qbg0",
                    "name" : "Helmet",
                    "type" : "artist",
                    "uri" : "spotify:artist:0qB0cTENhSUc0feov5qbg0"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1JdPCcQirTIcxXIDIQZtUQ"
                },
                "href" : "https://api.spotify.com/v1/albums/1JdPCcQirTIcxXIDIQZtUQ",
                "id" : "1JdPCcQirTIcxXIDIQZtUQ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273c1d03017250903380d43a8c8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02c1d03017250903380d43a8c8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851c1d03017250903380d43a8c8",
                    "width" : 64
                } ],
                "name" : "Aftertaste",
                "release_date" : "1997-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:1JdPCcQirTIcxXIDIQZtUQ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2pAajGWerK3ghwToNWFENS"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2pAajGWerK3ghwToNWFENS",
                    "id" : "2pAajGWerK3ghwToNWFENS",
                    "name" : "Puscifer",
                    "type" : "artist",
                    "uri" : "spotify:artist:2pAajGWerK3ghwToNWFENS"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/43ZL5fD4HUuIGkjAqqnOCg"
                },
                "href" : "https://api.spotify.com/v1/albums/43ZL5fD4HUuIGkjAqqnOCg",
                "id" : "43ZL5fD4HUuIGkjAqqnOCg",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2735e1b4b42794057d4de493382",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e025e1b4b42794057d4de493382",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048515e1b4b42794057d4de493382",
                    "width" : 64
                } ],
                "name" : "All Re-Mixed Up",
                "release_date" : "2013-08-27",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:43ZL5fD4HUuIGkjAqqnOCg"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3gPZCcrc8KG2RuVl3rtbQ2"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3gPZCcrc8KG2RuVl3rtbQ2",
                    "id" : "3gPZCcrc8KG2RuVl3rtbQ2",
                    "name" : "✝✝✝ (Crosses)",
                    "type" : "artist",
                    "uri" : "spotify:artist:3gPZCcrc8KG2RuVl3rtbQ2"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5PEnsFw9WrlQ1OyMqKWmVF"
                },
                "href" : "https://api.spotify.com/v1/albums/5PEnsFw9WrlQ1OyMqKWmVF",
                "id" : "5PEnsFw9WrlQ1OyMqKWmVF",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27363611b0ff2d097d357f9d7a4",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0263611b0ff2d097d357f9d7a4",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485163611b0ff2d097d357f9d7a4",
                    "width" : 64
                } ],
                "name" : "✝✝✝ (Crosses)",
                "release_date" : "2014-02-11",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:5PEnsFw9WrlQ1OyMqKWmVF"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2yEwvVSSSUkcLeSTNyHKh8"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2yEwvVSSSUkcLeSTNyHKh8",
                    "id" : "2yEwvVSSSUkcLeSTNyHKh8",
                    "name" : "TOOL",
                    "type" : "artist",
                    "uri" : "spotify:artist:2yEwvVSSSUkcLeSTNyHKh8"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6ZuGioRryrgXjmhdW14jel"
                },
                "href" : "https://api.spotify.com/v1/albums/6ZuGioRryrgXjmhdW14jel",
                "id" : "6ZuGioRryrgXjmhdW14jel",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273ac74c9c72ab2e3be3d53225f",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02ac74c9c72ab2e3be3d53225f",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851ac74c9c72ab2e3be3d53225f",
                    "width" : 64
                } ],
                "name" : "Opiate",
                "release_date" : "1992-03-10",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:6ZuGioRryrgXjmhdW14jel"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0X380XXQSNBYuleKzav5UO"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0X380XXQSNBYuleKzav5UO",
                    "id" : "0X380XXQSNBYuleKzav5UO",
                    "name" : "Nine Inch Nails",
                    "type" : "artist",
                    "uri" : "spotify:artist:0X380XXQSNBYuleKzav5UO"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/296zqVG4gI7mDSUD0CytXM"
                },
                "href" : "https://api.spotify.com/v1/albums/296zqVG4gI7mDSUD0CytXM",
                "id" : "296zqVG4gI7mDSUD0CytXM",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27327c5a582320e08258ec13d0a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0227c5a582320e08258ec13d0a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485127c5a582320e08258ec13d0a",
                    "width" : 64
                } ],
                "name" : "Ghosts V: Together",
                "release_date" : "2020-03-27",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:296zqVG4gI7mDSUD0CytXM"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7nt6S4klYHg4I7Q4lTSmc0"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7nt6S4klYHg4I7Q4lTSmc0",
                    "id" : "7nt6S4klYHg4I7Q4lTSmc0",
                    "name" : "Glassjaw",
                    "type" : "artist",
                    "uri" : "spotify:artist:7nt6S4klYHg4I7Q4lTSmc0"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1GC93XfkXlBFNJ9MaLRmjH"
                },
                "href" : "https://api.spotify.com/v1/albums/1GC93XfkXlBFNJ9MaLRmjH",
                "id" : "1GC93XfkXlBFNJ9MaLRmjH",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e2cbbbeb7529f386026889a3",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e2cbbbeb7529f386026889a3",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e2cbbbeb7529f386026889a3",
                    "width" : 64
                } ],
                "name" : "Our Color Green (The Singles)",
                "release_date" : "2011-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 5,
                "type" : "album",
                "uri" : "spotify:album:1GC93XfkXlBFNJ9MaLRmjH"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7JDSHlDdVTo7aZKdQZ53Vf"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7JDSHlDdVTo7aZKdQZ53Vf",
                    "id" : "7JDSHlDdVTo7aZKdQZ53Vf",
                    "name" : "Static-X",
                    "type" : "artist",
                    "uri" : "spotify:artist:7JDSHlDdVTo7aZKdQZ53Vf"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5Gmv5JYxVuXAVexz5fTSdr"
                },
                "href" : "https://api.spotify.com/v1/albums/5Gmv5JYxVuXAVexz5fTSdr",
                "id" : "5Gmv5JYxVuXAVexz5fTSdr",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273628cdfebd21f2380a1e7e6cd",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02628cdfebd21f2380a1e7e6cd",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851628cdfebd21f2380a1e7e6cd",
                    "width" : 64
                } ],
                "name" : "Beneath...Between...Beyond...",
                "release_date" : "2004-07-13",
                "release_date_precision" : "day",
                "total_tracks" : 18,
                "type" : "album",
                "uri" : "spotify:album:5Gmv5JYxVuXAVexz5fTSdr"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/35Uu85Pq33mK8x1jYqsHY2"
                    },
                    "href" : "https://api.spotify.com/v1/artists/35Uu85Pq33mK8x1jYqsHY2",
                    "id" : "35Uu85Pq33mK8x1jYqsHY2",
                    "name" : "Sevendust",
                    "type" : "artist",
                    "uri" : "spotify:artist:35Uu85Pq33mK8x1jYqsHY2"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7tpMJufRsPz0EPv5hZSWs3"
                },
                "href" : "https://api.spotify.com/v1/albums/7tpMJufRsPz0EPv5hZSWs3",
                "id" : "7tpMJufRsPz0EPv5hZSWs3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27381551b5b6dd7e76034f3ae24",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0281551b5b6dd7e76034f3ae24",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485181551b5b6dd7e76034f3ae24",
                    "width" : 64
                } ],
                "name" : "Sevendust (Definitive Edition)",
                "release_date" : "1997",
                "release_date_precision" : "year",
                "total_tracks" : 16,
                "type" : "album",
                "uri" : "spotify:album:7tpMJufRsPz0EPv5hZSWs3"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/74Hj7BmnUXyx2udrIEIKwX"
                    },
                    "href" : "https://api.spotify.com/v1/artists/74Hj7BmnUXyx2udrIEIKwX",
                    "id" : "74Hj7BmnUXyx2udrIEIKwX",
                    "name" : "Fear Factory",
                    "type" : "artist",
                    "uri" : "spotify:artist:74Hj7BmnUXyx2udrIEIKwX"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/24rMXa5dlk9bxgLX49Q7wM"
                },
                "href" : "https://api.spotify.com/v1/albums/24rMXa5dlk9bxgLX49Q7wM",
                "id" : "24rMXa5dlk9bxgLX49Q7wM",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273374c45f3f24237f8a12c2aa8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02374c45f3f24237f8a12c2aa8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851374c45f3f24237f8a12c2aa8",
                    "width" : 64
                } ],
                "name" : "Fear Is The Mind Killer",
                "release_date" : "1993-04-26",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:24rMXa5dlk9bxgLX49Q7wM"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B4%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 18
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B4%5D",
        "id" : "home-discover-similar-to[4]",
        "images" : [ ],
        "name" : "Similar to Deftones",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B6%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2GVzsXcXyU95u2EahzwqN7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2GVzsXcXyU95u2EahzwqN7",
                    "id" : "2GVzsXcXyU95u2EahzwqN7",
                    "name" : "If These Trees Could Talk",
                    "type" : "artist",
                    "uri" : "spotify:artist:2GVzsXcXyU95u2EahzwqN7"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3EqcjVkaRXuGbJr5oWUbzX"
                },
                "href" : "https://api.spotify.com/v1/albums/3EqcjVkaRXuGbJr5oWUbzX",
                "id" : "3EqcjVkaRXuGbJr5oWUbzX",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2731db5a84ddbdecc2c8f55d0dc",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e021db5a84ddbdecc2c8f55d0dc",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048511db5a84ddbdecc2c8f55d0dc",
                    "width" : 64
                } ],
                "name" : "If These Trees Could Talk",
                "release_date" : "2006-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:3EqcjVkaRXuGbJr5oWUbzX"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0AZ3VR0YbFcS0Kgei7L2QF"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0AZ3VR0YbFcS0Kgei7L2QF",
                    "id" : "0AZ3VR0YbFcS0Kgei7L2QF",
                    "name" : "Russian Circles",
                    "type" : "artist",
                    "uri" : "spotify:artist:0AZ3VR0YbFcS0Kgei7L2QF"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4YMCNSRMOzAyFfC4ToQ60x"
                },
                "href" : "https://api.spotify.com/v1/albums/4YMCNSRMOzAyFfC4ToQ60x",
                "id" : "4YMCNSRMOzAyFfC4ToQ60x",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273de017745af48f827d119a3b5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02de017745af48f827d119a3b5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851de017745af48f827d119a3b5",
                    "width" : 64
                } ],
                "name" : "Station",
                "release_date" : "2008-05-06",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:4YMCNSRMOzAyFfC4ToQ60x"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6WEyPcf9ezhNLm1xOBjbwH"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6WEyPcf9ezhNLm1xOBjbwH",
                    "id" : "6WEyPcf9ezhNLm1xOBjbwH",
                    "name" : "Crippled Black Phoenix",
                    "type" : "artist",
                    "uri" : "spotify:artist:6WEyPcf9ezhNLm1xOBjbwH"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/13ylT2Jx1uquyJKJAogAMa"
                },
                "href" : "https://api.spotify.com/v1/albums/13ylT2Jx1uquyJKJAogAMa",
                "id" : "13ylT2Jx1uquyJKJAogAMa",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2738aedc85949ac72bfe6ec663e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e028aedc85949ac72bfe6ec663e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048518aedc85949ac72bfe6ec663e",
                    "width" : 64
                } ],
                "name" : "A Love of Shared Disasters",
                "release_date" : "2007",
                "release_date_precision" : "year",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:13ylT2Jx1uquyJKJAogAMa"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1WudHeuEN3d18SXVos95mc"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1WudHeuEN3d18SXVos95mc",
                    "id" : "1WudHeuEN3d18SXVos95mc",
                    "name" : "Do Make Say Think",
                    "type" : "artist",
                    "uri" : "spotify:artist:1WudHeuEN3d18SXVos95mc"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1SH23Q59wEm5Dyxw2afsm4"
                },
                "href" : "https://api.spotify.com/v1/albums/1SH23Q59wEm5Dyxw2afsm4",
                "id" : "1SH23Q59wEm5Dyxw2afsm4",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27316dea260a823e687f9284d0e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0216dea260a823e687f9284d0e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485116dea260a823e687f9284d0e",
                    "width" : 64
                } ],
                "name" : "Goodbye Enemy Airship The Landlord Is Dead",
                "release_date" : "2000-03-13",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:1SH23Q59wEm5Dyxw2afsm4"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4svpOyfmQKuWpHLjgy4cdK"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4svpOyfmQKuWpHLjgy4cdK",
                    "id" : "4svpOyfmQKuWpHLjgy4cdK",
                    "name" : "Godspeed You! Black Emperor",
                    "type" : "artist",
                    "uri" : "spotify:artist:4svpOyfmQKuWpHLjgy4cdK"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2eOMttZbB9lBc9LLMj56xj"
                },
                "href" : "https://api.spotify.com/v1/albums/2eOMttZbB9lBc9LLMj56xj",
                "id" : "2eOMttZbB9lBc9LLMj56xj",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a0a1f4e70c43dd8fb06a48ea",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a0a1f4e70c43dd8fb06a48ea",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a0a1f4e70c43dd8fb06a48ea",
                    "width" : 64
                } ],
                "name" : "Luciferian Towers",
                "release_date" : "2017-09-22",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:2eOMttZbB9lBc9LLMj56xj"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/079svMEXkbT5nGU2kfoqO2"
                    },
                    "href" : "https://api.spotify.com/v1/artists/079svMEXkbT5nGU2kfoqO2",
                    "id" : "079svMEXkbT5nGU2kfoqO2",
                    "name" : "God Is An Astronaut",
                    "type" : "artist",
                    "uri" : "spotify:artist:079svMEXkbT5nGU2kfoqO2"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6NEwj8hlw0b7U3jd6vHRg3"
                },
                "href" : "https://api.spotify.com/v1/albums/6NEwj8hlw0b7U3jd6vHRg3",
                "id" : "6NEwj8hlw0b7U3jd6vHRg3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730e75b61370f48acab5e5f04a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020e75b61370f48acab5e5f04a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510e75b61370f48acab5e5f04a",
                    "width" : 64
                } ],
                "name" : "Helios / Erebus",
                "release_date" : "2015-06-22",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:6NEwj8hlw0b7U3jd6vHRg3"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/53LVoipNTQ4lvUSJ61XKU3"
                    },
                    "href" : "https://api.spotify.com/v1/artists/53LVoipNTQ4lvUSJ61XKU3",
                    "id" : "53LVoipNTQ4lvUSJ61XKU3",
                    "name" : "MONO",
                    "type" : "artist",
                    "uri" : "spotify:artist:53LVoipNTQ4lvUSJ61XKU3"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3BOSfrx3jxvAS8zgCs5xL9"
                },
                "href" : "https://api.spotify.com/v1/albums/3BOSfrx3jxvAS8zgCs5xL9",
                "id" : "3BOSfrx3jxvAS8zgCs5xL9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273fde87f36b0f40cd1bde48a32",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02fde87f36b0f40cd1bde48a32",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851fde87f36b0f40cd1bde48a32",
                    "width" : 64
                } ],
                "name" : "Hymn to the Immortal Wind (Anniversary Edition)",
                "release_date" : "2009-03-24",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:3BOSfrx3jxvAS8zgCs5xL9"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5KyWqSOpfFRnPTWsq1oUAw"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5KyWqSOpfFRnPTWsq1oUAw",
                    "id" : "5KyWqSOpfFRnPTWsq1oUAw",
                    "name" : "The Evpatoria Report",
                    "type" : "artist",
                    "uri" : "spotify:artist:5KyWqSOpfFRnPTWsq1oUAw"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2WzIZ47OWVVHiYRxonwUJv"
                },
                "href" : "https://api.spotify.com/v1/albums/2WzIZ47OWVVHiYRxonwUJv",
                "id" : "2WzIZ47OWVVHiYRxonwUJv",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2731d8ffaa97969d346d7aa6c5f",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e021d8ffaa97969d346d7aa6c5f",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048511d8ffaa97969d346d7aa6c5f",
                    "width" : 64
                } ],
                "name" : "Maar",
                "release_date" : "2009-02-01",
                "release_date_precision" : "day",
                "total_tracks" : 4,
                "type" : "album",
                "uri" : "spotify:album:2WzIZ47OWVVHiYRxonwUJv"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4SXj7TVoA3bgfR8AVssACa"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4SXj7TVoA3bgfR8AVssACa",
                    "id" : "4SXj7TVoA3bgfR8AVssACa",
                    "name" : "Caspian",
                    "type" : "artist",
                    "uri" : "spotify:artist:4SXj7TVoA3bgfR8AVssACa"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1Vz2qNCupbtoEsSMkfew9d"
                },
                "href" : "https://api.spotify.com/v1/albums/1Vz2qNCupbtoEsSMkfew9d",
                "id" : "1Vz2qNCupbtoEsSMkfew9d",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f2676006944c96ac571f4962",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f2676006944c96ac571f4962",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f2676006944c96ac571f4962",
                    "width" : 64
                } ],
                "name" : "Tertia",
                "release_date" : "2011-11-22",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:1Vz2qNCupbtoEsSMkfew9d"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6fJ7oFpKH1xy1xE9Xx1vFJ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6fJ7oFpKH1xy1xE9Xx1vFJ",
                    "id" : "6fJ7oFpKH1xy1xE9Xx1vFJ",
                    "name" : "Yndi Halda",
                    "type" : "artist",
                    "uri" : "spotify:artist:6fJ7oFpKH1xy1xE9Xx1vFJ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7hv4Dyb7K7351zsT60MTWn"
                },
                "href" : "https://api.spotify.com/v1/albums/7hv4Dyb7K7351zsT60MTWn",
                "id" : "7hv4Dyb7K7351zsT60MTWn",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730d8d6025431953b88acde7a0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020d8d6025431953b88acde7a0",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510d8d6025431953b88acde7a0",
                    "width" : 64
                } ],
                "name" : "A Sun Coloured Shaker",
                "release_date" : "2018-02-16",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:7hv4Dyb7K7351zsT60MTWn"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B6%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 17
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B6%5D",
        "id" : "home-discover-similar-to[6]",
        "images" : [ ],
        "name" : "Similar to Mogwai",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/for-fans-of%5B0%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "collaborative" : false,
                "description" : "",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E4tyuZCIRtxqZ"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E4tyuZCIRtxqZ",
                "id" : "37i9dQZF1E4tyuZCIRtxqZ",
                "images" : [ {
                    "height" : null,
                    "url" : "https://seeded-session-images.scdn.co/v1/img/artist/1Dvfqq39HxvCJ3GvfeIFuT/en",
                    "width" : null
                } ],
                "name" : "Mastodon Radio",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDAxMWRlZjgxZmExNmE4MGU3MzVmYTQ0ODgwNzkxZjFjZQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E4tyuZCIRtxqZ/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E4tyuZCIRtxqZ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1Dvfqq39HxvCJ3GvfeIFuT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1Dvfqq39HxvCJ3GvfeIFuT",
                    "id" : "1Dvfqq39HxvCJ3GvfeIFuT",
                    "name" : "Mastodon",
                    "type" : "artist",
                    "uri" : "spotify:artist:1Dvfqq39HxvCJ3GvfeIFuT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3xeGtowrXCRjPOmZahNAoW"
                },
                "href" : "https://api.spotify.com/v1/albums/3xeGtowrXCRjPOmZahNAoW",
                "id" : "3xeGtowrXCRjPOmZahNAoW",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27341eccede2ddaad89823d2762",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0241eccede2ddaad89823d2762",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485141eccede2ddaad89823d2762",
                    "width" : 64
                } ],
                "name" : "Medium Rarities",
                "release_date" : "2020-09-11",
                "release_date_precision" : "day",
                "total_tracks" : 16,
                "type" : "album",
                "uri" : "spotify:album:3xeGtowrXCRjPOmZahNAoW"
            }, {
                "collaborative" : false,
                "description" : "Want some metal? Better to start with the essentials. Cover: Pantera",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWWOaP4H0w5b0"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWOaP4H0w5b0",
                "id" : "37i9dQZF1DWWOaP4H0w5b0",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f00000002a76a4d7d1bc77ef3ac475bfe",
                    "width" : null
                } ],
                "name" : "Metal Essentials",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMDQxNDQyMiwwMDAwMDA3ZTAwMDAwMTc0YTAyMjE3NDkwMDAwMDE2ZjIzYjc5NmFm",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWWOaP4H0w5b0/tracks",
                    "total" : 78
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWWOaP4H0w5b0"
            }, {
                "collaborative" : false,
                "description" : "Metal tracks all the way from the birth of Metal to today. Cover: Black Sabbath",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX4jCqmsDQR1i"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4jCqmsDQR1i",
                "id" : "37i9dQZF1DX4jCqmsDQR1i",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000021885498bb60bf587a9b22b5e",
                    "width" : null
                } ],
                "name" : "Metal Empire",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTU4NzU0NTUyOCwwMDAwMDAxNjAwMDAwMTcxYTExNjU5MTIwMDAwMDE3MDliYWZhZmE5",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX4jCqmsDQR1i/tracks",
                    "total" : 112
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX4jCqmsDQR1i"
            }, {
                "collaborative" : false,
                "description" : "A collection of the biggest Metal classics of the 00s. Cover: System Of A Down",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWXNFSTtym834"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWXNFSTtym834",
                "id" : "37i9dQZF1DWXNFSTtym834",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000025ef83703c96f58d3d7409c8a",
                    "width" : null
                } ],
                "name" : "00s Metal Classics",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjY1NjI2MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWXNFSTtym834/tracks",
                    "total" : 80
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWXNFSTtym834"
            }, {
                "collaborative" : false,
                "description" : "Instrumental only. For the maniacs out there. Cover: Intervals",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWUk47CLxI4Uo"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUk47CLxI4Uo",
                "id" : "37i9dQZF1DWUk47CLxI4Uo",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f0000000220772d4af77531a1b6f6c1ca",
                    "width" : null
                } ],
                "name" : "Instrumental Madness",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjY1NjMxNSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUk47CLxI4Uo/tracks",
                    "total" : 70
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWUk47CLxI4Uo"
            }, {
                "collaborative" : false,
                "description" : "A collection of the best Metal covers out there. Cover: Trivium",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DWUJiNTfqDwyS"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUJiNTfqDwyS",
                "id" : "37i9dQZF1DWUJiNTfqDwyS",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000026822aa1dbe41cec86aa5b0d4",
                    "width" : null
                } ],
                "name" : "Metal Covers",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjE5NDQ2MCwwMDAwMDAyYzAwMDAwMTc1MGEzYjRlYmYwMDAwMDE3MjdhZGExNTk2",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DWUJiNTfqDwyS/tracks",
                    "total" : 85
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DWUJiNTfqDwyS"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 8
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/for-fans-of%5B0%5D",
        "id" : "for-fans-of[0]",
        "images" : [ ],
        "name" : "For fans of Mastodon",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B6oWpcND5mt43lzutmV8yxv%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7eyQXxuf2nGj9d2367Gi5f"
                },
                "href" : "https://api.spotify.com/v1/albums/7eyQXxuf2nGj9d2367Gi5f",
                "id" : "7eyQXxuf2nGj9d2367Gi5f",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27334733f87148c2fbe0176abdb",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0234733f87148c2fbe0176abdb",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485134733f87148c2fbe0176abdb",
                    "width" : 64
                } ],
                "name" : "In Rainbows",
                "release_date" : "2007-12-28",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:7eyQXxuf2nGj9d2367Gi5f"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6vuykQgDLUCiZ7YggIpLM9"
                },
                "href" : "https://api.spotify.com/v1/albums/6vuykQgDLUCiZ7YggIpLM9",
                "id" : "6vuykQgDLUCiZ7YggIpLM9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730365011d800890bd210dd043",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020365011d800890bd210dd043",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510365011d800890bd210dd043",
                    "width" : 64
                } ],
                "name" : "A Moon Shaped Pool",
                "release_date" : "2016-05-08",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:6vuykQgDLUCiZ7YggIpLM9"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1oW3v5Har9mvXnGk0x4fHm"
                },
                "href" : "https://api.spotify.com/v1/albums/1oW3v5Har9mvXnGk0x4fHm",
                "id" : "1oW3v5Har9mvXnGk0x4fHm",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27395347e34e39c67bbf9f36c49",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0295347e34e39c67bbf9f36c49",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485195347e34e39c67bbf9f36c49",
                    "width" : 64
                } ],
                "name" : "Hail To the Thief",
                "release_date" : "2003",
                "release_date_precision" : "year",
                "total_tracks" : 14,
                "type" : "album",
                "uri" : "spotify:album:1oW3v5Har9mvXnGk0x4fHm"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6V9YnBmFjWmXCBaUVRCVXP"
                },
                "href" : "https://api.spotify.com/v1/albums/6V9YnBmFjWmXCBaUVRCVXP",
                "id" : "6V9YnBmFjWmXCBaUVRCVXP",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27301b50e75c5aa46fb8ce0cd32",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0201b50e75c5aa46fb8ce0cd32",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485101b50e75c5aa46fb8ce0cd32",
                    "width" : 64
                } ],
                "name" : "Amnesiac",
                "release_date" : "2001-03-12",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:6V9YnBmFjWmXCBaUVRCVXP"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4ENxWWkPImVwAle9cpJ12I"
                },
                "href" : "https://api.spotify.com/v1/albums/4ENxWWkPImVwAle9cpJ12I",
                "id" : "4ENxWWkPImVwAle9cpJ12I",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730797b2dcca7a453c3374c599",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020797b2dcca7a453c3374c599",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510797b2dcca7a453c3374c599",
                    "width" : 64
                } ],
                "name" : "OK Computer OKNOTOK 1997 2017",
                "release_date" : "2017-06-23",
                "release_date_precision" : "day",
                "total_tracks" : 23,
                "type" : "album",
                "uri" : "spotify:album:4ENxWWkPImVwAle9cpJ12I"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/500FEaUzn8lN9zWFyZG5C2"
                },
                "href" : "https://api.spotify.com/v1/albums/500FEaUzn8lN9zWFyZG5C2",
                "id" : "500FEaUzn8lN9zWFyZG5C2",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27322ca59e5c2d806439d5f08a2",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0222ca59e5c2d806439d5f08a2",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485122ca59e5c2d806439d5f08a2",
                    "width" : 64
                } ],
                "name" : "The Bends",
                "release_date" : "1995-03-28",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:500FEaUzn8lN9zWFyZG5C2"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4CvTDPKA6W06DRfBnZKrau"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4CvTDPKA6W06DRfBnZKrau",
                    "id" : "4CvTDPKA6W06DRfBnZKrau",
                    "name" : "Thom Yorke",
                    "type" : "artist",
                    "uri" : "spotify:artist:4CvTDPKA6W06DRfBnZKrau"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5a4VSyY7zsfVVqHweYHG7R"
                },
                "href" : "https://api.spotify.com/v1/albums/5a4VSyY7zsfVVqHweYHG7R",
                "id" : "5a4VSyY7zsfVVqHweYHG7R",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273bfcd8d6b28c07d92a902e1c2",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02bfcd8d6b28c07d92a902e1c2",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851bfcd8d6b28c07d92a902e1c2",
                    "width" : 64
                } ],
                "name" : "ANIMA",
                "release_date" : "2019-06-26",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:5a4VSyY7zsfVVqHweYHG7R"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4CvTDPKA6W06DRfBnZKrau"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4CvTDPKA6W06DRfBnZKrau",
                    "id" : "4CvTDPKA6W06DRfBnZKrau",
                    "name" : "Thom Yorke",
                    "type" : "artist",
                    "uri" : "spotify:artist:4CvTDPKA6W06DRfBnZKrau"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4QSIeDnAnGag2YZ5DjB2eB"
                },
                "href" : "https://api.spotify.com/v1/albums/4QSIeDnAnGag2YZ5DjB2eB",
                "id" : "4QSIeDnAnGag2YZ5DjB2eB",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273132e1996896c6bd1ac4e51e8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02132e1996896c6bd1ac4e51e8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851132e1996896c6bd1ac4e51e8",
                    "width" : 64
                } ],
                "name" : "The Eraser",
                "release_date" : "2006-07-10",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:4QSIeDnAnGag2YZ5DjB2eB"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7dxKtc08dYeRVHt3p9CZJn"
                },
                "href" : "https://api.spotify.com/v1/albums/7dxKtc08dYeRVHt3p9CZJn",
                "id" : "7dxKtc08dYeRVHt3p9CZJn",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273adb1732fa8d44b8eb2f6c0bf",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02adb1732fa8d44b8eb2f6c0bf",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851adb1732fa8d44b8eb2f6c0bf",
                    "width" : 64
                } ],
                "name" : "OK Computer",
                "release_date" : "1997-05-28",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:7dxKtc08dYeRVHt3p9CZJn"
            }, {
                "collaborative" : false,
                "description" : "The essential Radiohead, all in one playlist.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX1XDyq5cTk95"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX1XDyq5cTk95",
                "id" : "37i9dQZF1DX1XDyq5cTk95",
                "images" : [ {
                    "height" : null,
                    "url" : "https://i.scdn.co/image/ab67706f000000028981ea633dea6cb2aaf72f43",
                    "width" : null
                } ],
                "name" : "This Is Radiohead",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMTQ3ODE4MywwMDAwMDAxZDAwMDAwMTc0ZGY4OWNhYjEwMDAwMDE3NGRmODNjNDFj",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX1XDyq5cTk95/tracks",
                    "total" : 67
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1DX1XDyq5cTk95"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-editorial-collections%5B6oWpcND5mt43lzutmV8yxv%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 15
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B6oWpcND5mt43lzutmV8yxv%5D",
        "id" : "home-editorial-collections[6oWpcND5mt43lzutmV8yxv]",
        "images" : [ ],
        "name" : "Radiohead forever",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B3qPOPU9Q5g7eQxrsEFYjYT%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6Ghvu1VvMGScGpOUJBAHNH"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6Ghvu1VvMGScGpOUJBAHNH",
                    "id" : "6Ghvu1VvMGScGpOUJBAHNH",
                    "name" : "Deftones",
                    "type" : "artist",
                    "uri" : "spotify:artist:6Ghvu1VvMGScGpOUJBAHNH"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5LEXck3kfixFaA3CqVE7bC"
                },
                "href" : "https://api.spotify.com/v1/albums/5LEXck3kfixFaA3CqVE7bC",
                "id" : "5LEXck3kfixFaA3CqVE7bC",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2735c53799f473fa3e1a48c00ed",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e025c53799f473fa3e1a48c00ed",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048515c53799f473fa3e1a48c00ed",
                    "width" : 64
                } ],
                "name" : "White Pony",
                "release_date" : "2000-05-16",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:5LEXck3kfixFaA3CqVE7bC"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Z8W4fKeB5YxbusRsdQVPb"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
                    "id" : "4Z8W4fKeB5YxbusRsdQVPb",
                    "name" : "Radiohead",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Z8W4fKeB5YxbusRsdQVPb"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/19RUXBFyM4PpmrLRdtqWbp"
                },
                "href" : "https://api.spotify.com/v1/albums/19RUXBFyM4PpmrLRdtqWbp",
                "id" : "19RUXBFyM4PpmrLRdtqWbp",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273c174bffb607ee576329291a6",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02c174bffb607ee576329291a6",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851c174bffb607ee576329291a6",
                    "width" : 64
                } ],
                "name" : "Kid A",
                "release_date" : "2000-10-01",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:19RUXBFyM4PpmrLRdtqWbp"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/40Yq4vzPs9VNUrIBG5Jr2i"
                    },
                    "href" : "https://api.spotify.com/v1/artists/40Yq4vzPs9VNUrIBG5Jr2i",
                    "id" : "40Yq4vzPs9VNUrIBG5Jr2i",
                    "name" : "The Smashing Pumpkins",
                    "type" : "artist",
                    "uri" : "spotify:artist:40Yq4vzPs9VNUrIBG5Jr2i"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4hrZp6mKgz0HG7UpRbNYQx"
                },
                "href" : "https://api.spotify.com/v1/albums/4hrZp6mKgz0HG7UpRbNYQx",
                "id" : "4hrZp6mKgz0HG7UpRbNYQx",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e24f7aaa97e6311d8fa89e1c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e24f7aaa97e6311d8fa89e1c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e24f7aaa97e6311d8fa89e1c",
                    "width" : 64
                } ],
                "name" : "Machina / The Machines Of God",
                "release_date" : "2000-02-29",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:4hrZp6mKgz0HG7UpRbNYQx"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2ApaG60P4r0yhBoDCGD8YG"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2ApaG60P4r0yhBoDCGD8YG",
                    "id" : "2ApaG60P4r0yhBoDCGD8YG",
                    "name" : "Elliott Smith",
                    "type" : "artist",
                    "uri" : "spotify:artist:2ApaG60P4r0yhBoDCGD8YG"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7DC0pE943VR5tAKIvQXHts"
                },
                "href" : "https://api.spotify.com/v1/albums/7DC0pE943VR5tAKIvQXHts",
                "id" : "7DC0pE943VR5tAKIvQXHts",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273169a2393509223c26e4eedc5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02169a2393509223c26e4eedc5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851169a2393509223c26e4eedc5",
                    "width" : 64
                } ],
                "name" : "Figure 8",
                "release_date" : "2000-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 16,
                "type" : "album",
                "uri" : "spotify:album:7DC0pE943VR5tAKIvQXHts"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1yAwtBaoHLEDWAnWR87hBT"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1yAwtBaoHLEDWAnWR87hBT",
                    "id" : "1yAwtBaoHLEDWAnWR87hBT",
                    "name" : "Modest Mouse",
                    "type" : "artist",
                    "uri" : "spotify:artist:1yAwtBaoHLEDWAnWR87hBT"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5SbcupirEParczvqqyUPXL"
                },
                "href" : "https://api.spotify.com/v1/albums/5SbcupirEParczvqqyUPXL",
                "id" : "5SbcupirEParczvqqyUPXL",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2738f7128431367ce70f773651c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e028f7128431367ce70f773651c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048518f7128431367ce70f773651c",
                    "width" : 64
                } ],
                "name" : "The Moon & Antarctica",
                "release_date" : "2000-06-13",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:5SbcupirEParczvqqyUPXL"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Y7tXHSEejGu1vQ9bwDdXW"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Y7tXHSEejGu1vQ9bwDdXW",
                    "id" : "4Y7tXHSEejGu1vQ9bwDdXW",
                    "name" : "Fatboy Slim",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Y7tXHSEejGu1vQ9bwDdXW"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/68e2LAsyBqsXHu8QlA7mAp"
                },
                "href" : "https://api.spotify.com/v1/albums/68e2LAsyBqsXHu8QlA7mAp",
                "id" : "68e2LAsyBqsXHu8QlA7mAp",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e54a85cc5aee4f38818979b8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e54a85cc5aee4f38818979b8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e54a85cc5aee4f38818979b8",
                    "width" : 64
                } ],
                "name" : "Halfway Between the Gutter and the Stars",
                "release_date" : "2000",
                "release_date_precision" : "year",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:68e2LAsyBqsXHu8QlA7mAp"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/244fcyNSuyhbRlMGfMbYrO"
                    },
                    "href" : "https://api.spotify.com/v1/artists/244fcyNSuyhbRlMGfMbYrO",
                    "id" : "244fcyNSuyhbRlMGfMbYrO",
                    "name" : "Badly Drawn Boy",
                    "type" : "artist",
                    "uri" : "spotify:artist:244fcyNSuyhbRlMGfMbYrO"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7qdi1B4jqHEA5NvV34haRP"
                },
                "href" : "https://api.spotify.com/v1/albums/7qdi1B4jqHEA5NvV34haRP",
                "id" : "7qdi1B4jqHEA5NvV34haRP",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2735ae5f9c4f7726f4662032187",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e025ae5f9c4f7726f4662032187",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048515ae5f9c4f7726f4662032187",
                    "width" : 64
                } ],
                "name" : "The Hour Of Bewilderbeast",
                "release_date" : "2000",
                "release_date_precision" : "year",
                "total_tracks" : 18,
                "type" : "album",
                "uri" : "spotify:album:7qdi1B4jqHEA5NvV34haRP"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6XyY86QOPPrYVGvF9ch6wz",
                    "id" : "6XyY86QOPPrYVGvF9ch6wz",
                    "name" : "Linkin Park",
                    "type" : "artist",
                    "uri" : "spotify:artist:6XyY86QOPPrYVGvF9ch6wz"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6PFPjumGRpZnBzqnDci6qJ"
                },
                "href" : "https://api.spotify.com/v1/albums/6PFPjumGRpZnBzqnDci6qJ",
                "id" : "6PFPjumGRpZnBzqnDci6qJ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2732cd7568f8895a3c031c2e2fb",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e022cd7568f8895a3c031c2e2fb",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048512cd7568f8895a3c031c2e2fb",
                    "width" : 64
                } ],
                "name" : "Hybrid Theory",
                "release_date" : "2000-10-24",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:6PFPjumGRpZnBzqnDci6qJ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4DToQR3aKrHQSSRzSz8Nzt"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4DToQR3aKrHQSSRzSz8Nzt",
                    "id" : "4DToQR3aKrHQSSRzSz8Nzt",
                    "name" : "The Hives",
                    "type" : "artist",
                    "uri" : "spotify:artist:4DToQR3aKrHQSSRzSz8Nzt"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1C4UGzx5gD9b3X0UfAhY7z"
                },
                "href" : "https://api.spotify.com/v1/albums/1C4UGzx5gD9b3X0UfAhY7z",
                "id" : "1C4UGzx5gD9b3X0UfAhY7z",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27385c160f9951c570a8e81f998",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0285c160f9951c570a8e81f998",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485185c160f9951c570a8e81f998",
                    "width" : 64
                } ],
                "name" : "Veni Vidi Vicious",
                "release_date" : "2000-09-12",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:1C4UGzx5gD9b3X0UfAhY7z"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0cQbJU1aAzvbEmTuljWLlF"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0cQbJU1aAzvbEmTuljWLlF",
                    "id" : "0cQbJU1aAzvbEmTuljWLlF",
                    "name" : "No Doubt",
                    "type" : "artist",
                    "uri" : "spotify:artist:0cQbJU1aAzvbEmTuljWLlF"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3UBfrm1LGAdOZflgsmCsM2"
                },
                "href" : "https://api.spotify.com/v1/albums/3UBfrm1LGAdOZflgsmCsM2",
                "id" : "3UBfrm1LGAdOZflgsmCsM2",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273554acc0efdbd9780ada81422",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02554acc0efdbd9780ada81422",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851554acc0efdbd9780ada81422",
                    "width" : 64
                } ],
                "name" : "Return Of Saturn",
                "release_date" : "2000-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 15,
                "type" : "album",
                "uri" : "spotify:album:3UBfrm1LGAdOZflgsmCsM2"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-editorial-collections%5B3qPOPU9Q5g7eQxrsEFYjYT%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 22
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-editorial-collections%5B3qPOPU9Q5g7eQxrsEFYjYT%5D",
        "id" : "home-editorial-collections[3qPOPU9Q5g7eQxrsEFYjYT]",
        "images" : [ ],
        "name" : "Great albums turning 20 this year",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/made-for-x?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "collaborative" : false,
                "description" : "We made you a playlist with songs to take you back in time.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1EuL3A5wspWIbp"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1EuL3A5wspWIbp",
                "id" : "37i9dQZF1EuL3A5wspWIbp",
                "images" : [ {
                    "height" : null,
                    "url" : "https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-en.jpg",
                    "width" : null
                } ],
                "name" : "Time Capsule",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjYzMzYwMCwwMDAwMDAwMGI1ODVkOWI2ZWNjZTIzZDg5ZDI0ZTdhMzU4MmQyMjY5",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1EuL3A5wspWIbp/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1EuL3A5wspWIbp"
            }, {
                "collaborative" : false,
                "description" : "Ween, The Fall, The Langley Schools Music Project and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E35o7k1WfDQyw"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E35o7k1WfDQyw",
                "id" : "37i9dQZF1E35o7k1WfDQyw",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/36b8e2d7e2e23bf1348fbb7ade83dcea82833e65/1/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 1",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDAxODVmZmFhMGY5MTY1OGY3NzFlMTNlZjA0NmJmZjE3Nw==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E35o7k1WfDQyw/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E35o7k1WfDQyw"
            }, {
                "collaborative" : false,
                "description" : "Gojira, Opeth, Mastodon and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E37x9KSyNMGyh"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E37x9KSyNMGyh",
                "id" : "37i9dQZF1E37x9KSyNMGyh",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/1ad6844cd3a0d5a195f2df98f44abfcbfe2f4d5e/2/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 2",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDBkODM5ZDUwMWY0YzNlNTE3ZDMwM2ViOTU1ZDI1NjYwNQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E37x9KSyNMGyh/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E37x9KSyNMGyh"
            }, {
                "collaborative" : false,
                "description" : "Pavement, Murder By Death, Beat Happening and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E391CR1qebjdu"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E391CR1qebjdu",
                "id" : "37i9dQZF1E391CR1qebjdu",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/7972236ed86e8c7b82d12eeef5057e30a7b2fd91/3/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 3",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDA5OWY2OWYxM2RjYjRiN2U0MDMyNDQzZDgxM2M2MjFjZg==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E391CR1qebjdu/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E391CR1qebjdu"
            }, {
                "collaborative" : false,
                "description" : "Parenthetical Girls, Ariel Pink, Animal Collective and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E38i9qwOEXeF9"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E38i9qwOEXeF9",
                "id" : "37i9dQZF1E38i9qwOEXeF9",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/93fb9bf87f3330e2b035e6cf9365db07effbf52c/4/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 4",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDA5MGI2NDMzMDVlYzE4ZDhjZjI0OTJjYTU0NDhiMGRiYQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E38i9qwOEXeF9/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E38i9qwOEXeF9"
            }, {
                "collaborative" : false,
                "description" : "Harry Nilsson, Ambrosia, Daryl Hall & John Oates and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E35NUAUfoGgsZ"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E35NUAUfoGgsZ",
                "id" : "37i9dQZF1E35NUAUfoGgsZ",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/775f9134b3f1cf04551b7a666eb811b796f2ca8c/5/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 5",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDA2Mjk0ZWU4NjVhYjQ3NTE0N2RmNzhiNThiM2I2YjFhMA==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E35NUAUfoGgsZ/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E35NUAUfoGgsZ"
            }, {
                "collaborative" : false,
                "description" : "Yes, Thomas Dolby, Ihsahn and more",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1E36ke4xJqBm9k"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E36ke4xJqBm9k",
                "id" : "37i9dQZF1E36ke4xJqBm9k",
                "images" : [ {
                    "height" : null,
                    "url" : "https://dailymix-images.scdn.co/v2/img/1eceeeb21f98edbdc4563adad3fe27f4273552f6/6/en/default",
                    "width" : null
                } ],
                "name" : "Daily Mix 6",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MTA5MzgsMDAwMDAwMDA3OGNhNTA1NjQ4NmMxM2VmYjY4NDk5OGQzZjA5ZDkwZg==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1E36ke4xJqBm9k/tracks",
                    "total" : 50
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1E36ke4xJqBm9k"
            }, {
                "collaborative" : false,
                "description" : "Your weekly mixtape of fresh music. Enjoy new music and deep cuts picked for you. Updates every Monday.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZEVXcSf6DI4ZlnZB"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZEVXcSf6DI4ZlnZB",
                "id" : "37i9dQZEVXcSf6DI4ZlnZB",
                "images" : [ {
                    "height" : null,
                    "url" : "https://newjams-images.scdn.co/v2/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default",
                    "width" : null
                } ],
                "name" : "Discover Weekly",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MDc2ODAsMDAwMDAwMDA0YmI0ZjQ3MTdlNGU3ODEzZjEzZDMwNDYwYmJkY2EzNw==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZEVXcSf6DI4ZlnZB/tracks",
                    "total" : 30
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZEVXcSf6DI4ZlnZB"
            }, {
                "collaborative" : false,
                "description" : "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZEVXbhqKP9WA4q2C"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZEVXbhqKP9WA4q2C",
                "id" : "37i9dQZEVXbhqKP9WA4q2C",
                "images" : [ {
                    "height" : null,
                    "url" : "https://newjams-images.scdn.co/v1/img/ebaff9c356b21f97cb877d8e4607568b3e0cae75/en/default",
                    "width" : null
                } ],
                "name" : "Release Radar",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MjY3MDI4ODAsMDAwMDAwMDBmZDA2YzZlZmE5ZGI0YzQ1MWY1MjU2ZTUyNjhhNDU5MQ==",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZEVXbhqKP9WA4q2C/tracks",
                    "total" : 56
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZEVXbhqKP9WA4q2C"
            }, {
                "collaborative" : false,
                "description" : "Introducing Family Mix: Listen together with the people on your Family Plan",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/playlist/37i9dQZF1EgDjRlBgdphtz"
                },
                "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1EgDjRlBgdphtz",
                "id" : "37i9dQZF1EgDjRlBgdphtz",
                "images" : [ {
                    "height" : null,
                    "url" : "https://misc.scdn.co/home-mix/family_default.png",
                    "width" : null
                } ],
                "name" : "Family Mix",
                "owner" : {
                    "display_name" : "Spotify",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                    },
                    "href" : "https://api.spotify.com/v1/users/spotify",
                    "id" : "spotify",
                    "type" : "user",
                    "uri" : "spotify:user:spotify"
                },
                "primary_color" : null,
                "public" : null,
                "snapshot_id" : "MTYwMjU0OTI0NiwwMDAwMDAwMGQwMmE4Yjg3ZWNkNzczYTdkMTViYzM4YjYzM2ViNzc4",
                "tracks" : {
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1EgDjRlBgdphtz/tracks",
                    "total" : 0
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:37i9dQZF1EgDjRlBgdphtz"
            } ],
            "limit" : 10,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 10
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/made-for-x",
        "id" : "made-for-x",
        "images" : [ ],
        "name" : "Made for you",
        "rendering" : "CAROUSEL",
        "tag_line" : "Get better recommendations the more you listen.",
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B13%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6Bgd1CCQAWWqGbkmJsivLv"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6Bgd1CCQAWWqGbkmJsivLv",
                    "id" : "6Bgd1CCQAWWqGbkmJsivLv",
                    "name" : "Chroma Key",
                    "type" : "artist",
                    "uri" : "spotify:artist:6Bgd1CCQAWWqGbkmJsivLv"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3HBfpcwJqvz3VIhlOpoZhv"
                },
                "href" : "https://api.spotify.com/v1/albums/3HBfpcwJqvz3VIhlOpoZhv",
                "id" : "3HBfpcwJqvz3VIhlOpoZhv",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27346fb765e06c5587692957d6b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0246fb765e06c5587692957d6b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485146fb765e06c5587692957d6b",
                    "width" : 64
                } ],
                "name" : "Dead Air for Radios",
                "release_date" : "1998-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:3HBfpcwJqvz3VIhlOpoZhv"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4sQFj3fHL94F38mCUftQR3"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4sQFj3fHL94F38mCUftQR3",
                    "id" : "4sQFj3fHL94F38mCUftQR3",
                    "name" : "Phideaux",
                    "type" : "artist",
                    "uri" : "spotify:artist:4sQFj3fHL94F38mCUftQR3"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7bFLKkNR0wVV8SgIlgP8rX"
                },
                "href" : "https://api.spotify.com/v1/albums/7bFLKkNR0wVV8SgIlgP8rX",
                "id" : "7bFLKkNR0wVV8SgIlgP8rX",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739041fca553d390ea782e2310",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029041fca553d390ea782e2310",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519041fca553d390ea782e2310",
                    "width" : 64
                } ],
                "name" : "Doomsday Afternoon",
                "release_date" : "2007-07-03",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:7bFLKkNR0wVV8SgIlgP8rX"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1SDL0IuBpmrqx7Jag5HWdQ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1SDL0IuBpmrqx7Jag5HWdQ",
                    "id" : "1SDL0IuBpmrqx7Jag5HWdQ",
                    "name" : "OSI",
                    "type" : "artist",
                    "uri" : "spotify:artist:1SDL0IuBpmrqx7Jag5HWdQ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2x6wyh2Su2wryHPWhm5BrG"
                },
                "href" : "https://api.spotify.com/v1/albums/2x6wyh2Su2wryHPWhm5BrG",
                "id" : "2x6wyh2Su2wryHPWhm5BrG",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27349366fca42bb2e56634241a7",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0249366fca42bb2e56634241a7",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485149366fca42bb2e56634241a7",
                    "width" : 64
                } ],
                "name" : "Blood",
                "release_date" : "2009",
                "release_date_precision" : "year",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:2x6wyh2Su2wryHPWhm5BrG"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5L3Wz53rQ8kHm5KX3Q4Qt5"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5L3Wz53rQ8kHm5KX3Q4Qt5",
                    "id" : "5L3Wz53rQ8kHm5KX3Q4Qt5",
                    "name" : "Paatos",
                    "type" : "artist",
                    "uri" : "spotify:artist:5L3Wz53rQ8kHm5KX3Q4Qt5"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1VPw6N6CUY0GMlYLO1Ufkn"
                },
                "href" : "https://api.spotify.com/v1/albums/1VPw6N6CUY0GMlYLO1Ufkn",
                "id" : "1VPw6N6CUY0GMlYLO1Ufkn",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273d952542bf0a760f3854dd397",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02d952542bf0a760f3854dd397",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851d952542bf0a760f3854dd397",
                    "width" : 64
                } ],
                "name" : "Kallocain",
                "release_date" : "2004",
                "release_date_precision" : "year",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:1VPw6N6CUY0GMlYLO1Ufkn"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5kL0FLCWlo2xLmyRI68bW4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5kL0FLCWlo2xLmyRI68bW4",
                    "id" : "5kL0FLCWlo2xLmyRI68bW4",
                    "name" : "Lunatic Soul",
                    "type" : "artist",
                    "uri" : "spotify:artist:5kL0FLCWlo2xLmyRI68bW4"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3nE8gGlD1h6njWGJWt8sYz"
                },
                "href" : "https://api.spotify.com/v1/albums/3nE8gGlD1h6njWGJWt8sYz",
                "id" : "3nE8gGlD1h6njWGJWt8sYz",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273679daece1b70156626ab847b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02679daece1b70156626ab847b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851679daece1b70156626ab847b",
                    "width" : 64
                } ],
                "name" : "Walking on a Flashlight Beam",
                "release_date" : "2014-10-13",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:3nE8gGlD1h6njWGJWt8sYz"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7tASMU08leNqiJyHd9KqFA"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7tASMU08leNqiJyHd9KqFA",
                    "id" : "7tASMU08leNqiJyHd9KqFA",
                    "name" : "Demians",
                    "type" : "artist",
                    "uri" : "spotify:artist:7tASMU08leNqiJyHd9KqFA"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4tqNnmDvFOsD2FLUHZ4J7p"
                },
                "href" : "https://api.spotify.com/v1/albums/4tqNnmDvFOsD2FLUHZ4J7p",
                "id" : "4tqNnmDvFOsD2FLUHZ4J7p",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27354f57cf563995a6c88c12be3",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0254f57cf563995a6c88c12be3",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485154f57cf563995a6c88c12be3",
                    "width" : 64
                } ],
                "name" : "Building An Empire",
                "release_date" : "2008",
                "release_date_precision" : "year",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:4tqNnmDvFOsD2FLUHZ4J7p"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/00Uv0804nrBM2RxUBTkyHj"
                    },
                    "href" : "https://api.spotify.com/v1/artists/00Uv0804nrBM2RxUBTkyHj",
                    "id" : "00Uv0804nrBM2RxUBTkyHj",
                    "name" : "Wobbler",
                    "type" : "artist",
                    "uri" : "spotify:artist:00Uv0804nrBM2RxUBTkyHj"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/18rvNVsooeFQpJoT9hodYD"
                },
                "href" : "https://api.spotify.com/v1/albums/18rvNVsooeFQpJoT9hodYD",
                "id" : "18rvNVsooeFQpJoT9hodYD",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2735fe10860a6e9a9a90c2e17a4",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e025fe10860a6e9a9a90c2e17a4",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048515fe10860a6e9a9a90c2e17a4",
                    "width" : 64
                } ],
                "name" : "Rites at Dawn (Remixed and Remastered)",
                "release_date" : "2011-05-16",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:18rvNVsooeFQpJoT9hodYD"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2z3Eoj9BvslBDrmygKjr2B"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2z3Eoj9BvslBDrmygKjr2B",
                    "id" : "2z3Eoj9BvslBDrmygKjr2B",
                    "name" : "Änglagård",
                    "type" : "artist",
                    "uri" : "spotify:artist:2z3Eoj9BvslBDrmygKjr2B"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4q2TH7lvMumoAYbd8P9EVr"
                },
                "href" : "https://api.spotify.com/v1/albums/4q2TH7lvMumoAYbd8P9EVr",
                "id" : "4q2TH7lvMumoAYbd8P9EVr",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273b32b12b546eb4c937865a50c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02b32b12b546eb4c937865a50c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851b32b12b546eb4c937865a50c",
                    "width" : 64
                } ],
                "name" : "Buried alive",
                "release_date" : "1994",
                "release_date_precision" : "year",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:4q2TH7lvMumoAYbd8P9EVr"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/77BO4bYHfvTmVuG63wOuHX"
                    },
                    "href" : "https://api.spotify.com/v1/artists/77BO4bYHfvTmVuG63wOuHX",
                    "id" : "77BO4bYHfvTmVuG63wOuHX",
                    "name" : "No-Man",
                    "type" : "artist",
                    "uri" : "spotify:artist:77BO4bYHfvTmVuG63wOuHX"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0LCsTKk08Mw2In5XcDw0lH"
                },
                "href" : "https://api.spotify.com/v1/albums/0LCsTKk08Mw2In5XcDw0lH",
                "id" : "0LCsTKk08Mw2In5XcDw0lH",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a5260a5844aaf792193c0baf",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a5260a5844aaf792193c0baf",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a5260a5844aaf792193c0baf",
                    "width" : 64
                } ],
                "name" : "Sweetheart Raw",
                "release_date" : "1993-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 3,
                "type" : "album",
                "uri" : "spotify:album:0LCsTKk08Mw2In5XcDw0lH"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4lrBMUSk8PiNnCEZfsmPAk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4lrBMUSk8PiNnCEZfsmPAk",
                    "id" : "4lrBMUSk8PiNnCEZfsmPAk",
                    "name" : "The Pineapple Thief",
                    "type" : "artist",
                    "uri" : "spotify:artist:4lrBMUSk8PiNnCEZfsmPAk"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3sAKvHqXtXEkPZ917MP7a3"
                },
                "href" : "https://api.spotify.com/v1/albums/3sAKvHqXtXEkPZ917MP7a3",
                "id" : "3sAKvHqXtXEkPZ917MP7a3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a7d400b4159f7cfc0c9ccae7",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a7d400b4159f7cfc0c9ccae7",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a7d400b4159f7cfc0c9ccae7",
                    "width" : 64
                } ],
                "name" : "Tightly Unwound",
                "release_date" : "2008",
                "release_date_precision" : "year",
                "total_tracks" : 17,
                "type" : "album",
                "uri" : "spotify:album:3sAKvHqXtXEkPZ917MP7a3"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B13%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 19
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B13%5D",
        "id" : "home-discover-similar-to[13]",
        "images" : [ ],
        "name" : "Similar to Anekdoten",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/NMF-NRFY?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5hW4L92KnC6dX9t7tYM4Ve"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5hW4L92KnC6dX9t7tYM4Ve",
                    "id" : "5hW4L92KnC6dX9t7tYM4Ve",
                    "name" : "Joni Mitchell",
                    "type" : "artist",
                    "uri" : "spotify:artist:5hW4L92KnC6dX9t7tYM4Ve"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7cGdFKdt60tAbHU5kL7RPw"
                },
                "href" : "https://api.spotify.com/v1/albums/7cGdFKdt60tAbHU5kL7RPw",
                "id" : "7cGdFKdt60tAbHU5kL7RPw",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2736dd452306dc26e48bc192067",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e026dd452306dc26e48bc192067",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048516dd452306dc26e48bc192067",
                    "width" : 64
                } ],
                "name" : "Both Sides Now",
                "release_date" : "2020-10-08",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:7cGdFKdt60tAbHU5kL7RPw"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6YK58h9BCYpFNv10fsMwoS"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6YK58h9BCYpFNv10fsMwoS",
                    "id" : "6YK58h9BCYpFNv10fsMwoS",
                    "name" : "pg.lost",
                    "type" : "artist",
                    "uri" : "spotify:artist:6YK58h9BCYpFNv10fsMwoS"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2N3vxBj5sxogFtGTUU5BIG"
                },
                "href" : "https://api.spotify.com/v1/albums/2N3vxBj5sxogFtGTUU5BIG",
                "id" : "2N3vxBj5sxogFtGTUU5BIG",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273ce848f7eda1ee662de4d4c28",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02ce848f7eda1ee662de4d4c28",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851ce848f7eda1ee662de4d4c28",
                    "width" : 64
                } ],
                "name" : "Suffering",
                "release_date" : "2020-10-08",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:2N3vxBj5sxogFtGTUU5BIG"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0Iv00ucAIqr5KVS7bXGFa9"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0Iv00ucAIqr5KVS7bXGFa9",
                    "id" : "0Iv00ucAIqr5KVS7bXGFa9",
                    "name" : "Ozric Tentacles",
                    "type" : "artist",
                    "uri" : "spotify:artist:0Iv00ucAIqr5KVS7bXGFa9"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2Jtm2jkinaMRN8HIMWMj7D"
                },
                "href" : "https://api.spotify.com/v1/albums/2Jtm2jkinaMRN8HIMWMj7D",
                "id" : "2Jtm2jkinaMRN8HIMWMj7D",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273883614253157196105947fb4",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02883614253157196105947fb4",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851883614253157196105947fb4",
                    "width" : 64
                } ],
                "name" : "Space for the Earth",
                "release_date" : "2020-10-09",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:2Jtm2jkinaMRN8HIMWMj7D"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5hAhrnb0Ch4ODwWu4tsbpi"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5hAhrnb0Ch4ODwWu4tsbpi",
                    "id" : "5hAhrnb0Ch4ODwWu4tsbpi",
                    "name" : "Yo La Tengo",
                    "type" : "artist",
                    "uri" : "spotify:artist:5hAhrnb0Ch4ODwWu4tsbpi"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6QQzcLnU7Uvr0xT4uVHAqt"
                },
                "href" : "https://api.spotify.com/v1/albums/6QQzcLnU7Uvr0xT4uVHAqt",
                "id" : "6QQzcLnU7Uvr0xT4uVHAqt",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2737b19b15aa18b76c6720b5c76",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e027b19b15aa18b76c6720b5c76",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048517b19b15aa18b76c6720b5c76",
                    "width" : 64
                } ],
                "name" : "Sleepless Night",
                "release_date" : "2020-10-09",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:6QQzcLnU7Uvr0xT4uVHAqt"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1IOZiK4LTN0EjjdAogOCE1"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1IOZiK4LTN0EjjdAogOCE1",
                    "id" : "1IOZiK4LTN0EjjdAogOCE1",
                    "name" : "ACID MOTHERS TEMPLE",
                    "type" : "artist",
                    "uri" : "spotify:artist:1IOZiK4LTN0EjjdAogOCE1"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3gfGbk3wI14GStkZw6C2FQ"
                },
                "href" : "https://api.spotify.com/v1/albums/3gfGbk3wI14GStkZw6C2FQ",
                "id" : "3gfGbk3wI14GStkZw6C2FQ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2730a7961480a1726ce5abeef71",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e020a7961480a1726ce5abeef71",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048510a7961480a1726ce5abeef71",
                    "width" : 64
                } ],
                "name" : "The Wizard",
                "release_date" : "2020-10-08",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:3gfGbk3wI14GStkZw6C2FQ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5aIqB5nVVvmFsvSdExz408"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5aIqB5nVVvmFsvSdExz408",
                    "id" : "5aIqB5nVVvmFsvSdExz408",
                    "name" : "Johann Sebastian Bach",
                    "type" : "artist",
                    "uri" : "spotify:artist:5aIqB5nVVvmFsvSdExz408"
                }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/25mbgceDJKxXGP8c5FmC83"
                    },
                    "href" : "https://api.spotify.com/v1/artists/25mbgceDJKxXGP8c5FmC83",
                    "id" : "25mbgceDJKxXGP8c5FmC83",
                    "name" : "Trevor Pinnock",
                    "type" : "artist",
                    "uri" : "spotify:artist:25mbgceDJKxXGP8c5FmC83"
                }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5TNZ3zt4Le9EOfY1h7HJDV"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5TNZ3zt4Le9EOfY1h7HJDV",
                    "id" : "5TNZ3zt4Le9EOfY1h7HJDV",
                    "name" : "Royal Academy of Music Soloists Ensemble",
                    "type" : "artist",
                    "uri" : "spotify:artist:5TNZ3zt4Le9EOfY1h7HJDV"
                }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2xOSixuBFdnfFEYkrzY45Q"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2xOSixuBFdnfFEYkrzY45Q",
                    "id" : "2xOSixuBFdnfFEYkrzY45Q",
                    "name" : "The Glenn Gould School",
                    "type" : "artist",
                    "uri" : "spotify:artist:2xOSixuBFdnfFEYkrzY45Q"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1IlOTUEOwz47PTRUwKMZrz"
                },
                "href" : "https://api.spotify.com/v1/albums/1IlOTUEOwz47PTRUwKMZrz",
                "id" : "1IlOTUEOwz47PTRUwKMZrz",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273c5a3fad4bdc3a8d7cf13fcd8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02c5a3fad4bdc3a8d7cf13fcd8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851c5a3fad4bdc3a8d7cf13fcd8",
                    "width" : 64
                } ],
                "name" : "Goldberg Variations",
                "release_date" : "2020-10-09",
                "release_date_precision" : "day",
                "total_tracks" : 32,
                "type" : "album",
                "uri" : "spotify:album:1IlOTUEOwz47PTRUwKMZrz"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
                    "id" : "5oOhM2DFWab8XhSdQiITry",
                    "name" : "Tycho",
                    "type" : "artist",
                    "uri" : "spotify:artist:5oOhM2DFWab8XhSdQiITry"
                }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4mErKO4g29SXtBwj4S80aB"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4mErKO4g29SXtBwj4S80aB",
                    "id" : "4mErKO4g29SXtBwj4S80aB",
                    "name" : "rum.gold",
                    "type" : "artist",
                    "uri" : "spotify:artist:4mErKO4g29SXtBwj4S80aB"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5m9teu8TOkn7BTglKeUdO4"
                },
                "href" : "https://api.spotify.com/v1/albums/5m9teu8TOkn7BTglKeUdO4",
                "id" : "5m9teu8TOkn7BTglKeUdO4",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2733ee23c4c6e145256fc2f794d",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e023ee23c4c6e145256fc2f794d",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048513ee23c4c6e145256fc2f794d",
                    "width" : 64
                } ],
                "name" : "Run Away",
                "release_date" : "2020-09-30",
                "release_date_precision" : "day",
                "total_tracks" : 2,
                "type" : "album",
                "uri" : "spotify:album:5m9teu8TOkn7BTglKeUdO4"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7De2eIqeHTw091YeAkkYXV"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7De2eIqeHTw091YeAkkYXV",
                    "id" : "7De2eIqeHTw091YeAkkYXV",
                    "name" : "Rahsaan Roland Kirk",
                    "type" : "artist",
                    "uri" : "spotify:artist:7De2eIqeHTw091YeAkkYXV"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5aYvP9TQoLoT5ul54mUMGz"
                },
                "href" : "https://api.spotify.com/v1/albums/5aYvP9TQoLoT5ul54mUMGz",
                "id" : "5aYvP9TQoLoT5ul54mUMGz",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273944549ea77e9a95dd14ccefa",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02944549ea77e9a95dd14ccefa",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851944549ea77e9a95dd14ccefa",
                    "width" : 64
                } ],
                "name" : "Music Around the World by Roland Kirk",
                "release_date" : "2020-10-05",
                "release_date_precision" : "day",
                "total_tracks" : 25,
                "type" : "album",
                "uri" : "spotify:album:5aYvP9TQoLoT5ul54mUMGz"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/NMF-NRFY?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 15
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/NMF-NRFY",
        "id" : "NMF-NRFY",
        "images" : [ ],
        "name" : "New releases for you",
        "rendering" : "CAROUSEL",
        "tag_line" : "Brand new music from artists you love.",
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B8%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2bNIAjyL3hFCuQBQqhPN4T"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2bNIAjyL3hFCuQBQqhPN4T",
                    "id" : "2bNIAjyL3hFCuQBQqhPN4T",
                    "name" : "Motorpsycho",
                    "type" : "artist",
                    "uri" : "spotify:artist:2bNIAjyL3hFCuQBQqhPN4T"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1sagLpBBJQkvF7QZiykB1K"
                },
                "href" : "https://api.spotify.com/v1/albums/1sagLpBBJQkvF7QZiykB1K",
                "id" : "1sagLpBBJQkvF7QZiykB1K",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e4ed7924ac86b361c71d397a",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e4ed7924ac86b361c71d397a",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e4ed7924ac86b361c71d397a",
                    "width" : 64
                } ],
                "name" : "Here Be Monsters",
                "release_date" : "2016-02-12",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:1sagLpBBJQkvF7QZiykB1K"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3WggbHDpj4rPKbL97zG5MQ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3WggbHDpj4rPKbL97zG5MQ",
                    "id" : "3WggbHDpj4rPKbL97zG5MQ",
                    "name" : "Tortoise",
                    "type" : "artist",
                    "uri" : "spotify:artist:3WggbHDpj4rPKbL97zG5MQ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2koyckTZSteq3r1W6brKub"
                },
                "href" : "https://api.spotify.com/v1/albums/2koyckTZSteq3r1W6brKub",
                "id" : "2koyckTZSteq3r1W6brKub",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273650979b530465299597b9a4c",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02650979b530465299597b9a4c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851650979b530465299597b9a4c",
                    "width" : 64
                } ],
                "name" : "Tortoise",
                "release_date" : "1994",
                "release_date_precision" : "year",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:2koyckTZSteq3r1W6brKub"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7fX6TkG03KYZv7jAaZKC5v"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7fX6TkG03KYZv7jAaZKC5v",
                    "id" : "7fX6TkG03KYZv7jAaZKC5v",
                    "name" : "Elephant9",
                    "type" : "artist",
                    "uri" : "spotify:artist:7fX6TkG03KYZv7jAaZKC5v"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2nhPYKY52vgXfJa6shs32U"
                },
                "href" : "https://api.spotify.com/v1/albums/2nhPYKY52vgXfJa6shs32U",
                "id" : "2nhPYKY52vgXfJa6shs32U",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f149b14f95906864805090f6",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f149b14f95906864805090f6",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f149b14f95906864805090f6",
                    "width" : 64
                } ],
                "name" : "Walk the Nile",
                "release_date" : "2010-02-22",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:2nhPYKY52vgXfJa6shs32U"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1BQtFnxZvAvTCZgTMlED0Q"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1BQtFnxZvAvTCZgTMlED0Q",
                    "id" : "1BQtFnxZvAvTCZgTMlED0Q",
                    "name" : "Red Snapper",
                    "type" : "artist",
                    "uri" : "spotify:artist:1BQtFnxZvAvTCZgTMlED0Q"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4ZaedkRcNzuoavBWJXF2ha"
                },
                "href" : "https://api.spotify.com/v1/albums/4ZaedkRcNzuoavBWJXF2ha",
                "id" : "4ZaedkRcNzuoavBWJXF2ha",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a44e7bfb583bc3edd4ff1df0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a44e7bfb583bc3edd4ff1df0",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a44e7bfb583bc3edd4ff1df0",
                    "width" : 64
                } ],
                "name" : "Prince Blimey",
                "release_date" : "1996-09-09",
                "release_date_precision" : "day",
                "total_tracks" : 12,
                "type" : "album",
                "uri" : "spotify:album:4ZaedkRcNzuoavBWJXF2ha"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0azLE0hIUlbMbV0g2Ezt9m"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0azLE0hIUlbMbV0g2Ezt9m",
                    "id" : "0azLE0hIUlbMbV0g2Ezt9m",
                    "name" : "Xploding Plastix",
                    "type" : "artist",
                    "uri" : "spotify:artist:0azLE0hIUlbMbV0g2Ezt9m"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0l6PN5QhQ5Nj2uxF9tCl9X"
                },
                "href" : "https://api.spotify.com/v1/albums/0l6PN5QhQ5Nj2uxF9tCl9X",
                "id" : "0l6PN5QhQ5Nj2uxF9tCl9X",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f6a8f811aeb200fbb031b626",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f6a8f811aeb200fbb031b626",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f6a8f811aeb200fbb031b626",
                    "width" : 64
                } ],
                "name" : "Devious Dan EP",
                "release_date" : "2010-03-01",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:0l6PN5QhQ5Nj2uxF9tCl9X"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3mvkWMe6swnknwscwvGCHO"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3mvkWMe6swnknwscwvGCHO",
                    "id" : "3mvkWMe6swnknwscwvGCHO",
                    "name" : "Amon Tobin",
                    "type" : "artist",
                    "uri" : "spotify:artist:3mvkWMe6swnknwscwvGCHO"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/27ftYHLeunzcSzb33Wk1hf"
                },
                "href" : "https://api.spotify.com/v1/albums/27ftYHLeunzcSzb33Wk1hf",
                "id" : "27ftYHLeunzcSzb33Wk1hf",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739236314a5d47e2b2277ca028",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029236314a5d47e2b2277ca028",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519236314a5d47e2b2277ca028",
                    "width" : 64
                } ],
                "name" : "Out From Out Where",
                "release_date" : "2002-10-14",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:27ftYHLeunzcSzb33Wk1hf"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6OaEACxpxzP2sDxX2nTUYJ"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6OaEACxpxzP2sDxX2nTUYJ",
                    "id" : "6OaEACxpxzP2sDxX2nTUYJ",
                    "name" : "Ola Kvernberg",
                    "type" : "artist",
                    "uri" : "spotify:artist:6OaEACxpxzP2sDxX2nTUYJ"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/58dvVYDHzNjDvf7lP6H5oL"
                },
                "href" : "https://api.spotify.com/v1/albums/58dvVYDHzNjDvf7lP6H5oL",
                "id" : "58dvVYDHzNjDvf7lP6H5oL",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273163eb66189c9d9a54e751889",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02163eb66189c9d9a54e751889",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851163eb66189c9d9a54e751889",
                    "width" : 64
                } ],
                "name" : "Steamdome",
                "release_date" : "2017-12-01",
                "release_date_precision" : "day",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:58dvVYDHzNjDvf7lP6H5oL"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0Z5FMozvx15nUSUA6a9kkU"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0Z5FMozvx15nUSUA6a9kkU",
                    "id" : "0Z5FMozvx15nUSUA6a9kkU",
                    "name" : "The Comet Is Coming",
                    "type" : "artist",
                    "uri" : "spotify:artist:0Z5FMozvx15nUSUA6a9kkU"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3qFgijcQbTS5frVRo3wt9R"
                },
                "href" : "https://api.spotify.com/v1/albums/3qFgijcQbTS5frVRo3wt9R",
                "id" : "3qFgijcQbTS5frVRo3wt9R",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27339e0e15775c351c381fc9d70",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0239e0e15775c351c381fc9d70",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485139e0e15775c351c381fc9d70",
                    "width" : 64
                } ],
                "name" : "Death to the Planet",
                "release_date" : "2017-05-05",
                "release_date_precision" : "day",
                "total_tracks" : 4,
                "type" : "album",
                "uri" : "spotify:album:3qFgijcQbTS5frVRo3wt9R"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0VqQFqLcy0bBMPDnKB25vC"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0VqQFqLcy0bBMPDnKB25vC",
                    "id" : "0VqQFqLcy0bBMPDnKB25vC",
                    "name" : "Eivind Aarset",
                    "type" : "artist",
                    "uri" : "spotify:artist:0VqQFqLcy0bBMPDnKB25vC"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2TU5Kf4APpht9UFU2javB1"
                },
                "href" : "https://api.spotify.com/v1/albums/2TU5Kf4APpht9UFU2javB1",
                "id" : "2TU5Kf4APpht9UFU2javB1",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27367b3db3f4a649cd4c62788cd",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0267b3db3f4a649cd4c62788cd",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485167b3db3f4a649cd4c62788cd",
                    "width" : 64
                } ],
                "name" : "Light Extracts",
                "release_date" : "2001-01-01",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:2TU5Kf4APpht9UFU2javB1"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4Rj2COYs5hQsw8rYIxSviz"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4Rj2COYs5hQsw8rYIxSviz",
                    "id" : "4Rj2COYs5hQsw8rYIxSviz",
                    "name" : "Hidden Orchestra",
                    "type" : "artist",
                    "uri" : "spotify:artist:4Rj2COYs5hQsw8rYIxSviz"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3ugoMQVg1mreLxzyv2JfrL"
                },
                "href" : "https://api.spotify.com/v1/albums/3ugoMQVg1mreLxzyv2JfrL",
                "id" : "3ugoMQVg1mreLxzyv2JfrL",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a9102b2a6ec62e26aeb211ab",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a9102b2a6ec62e26aeb211ab",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a9102b2a6ec62e26aeb211ab",
                    "width" : 64
                } ],
                "name" : "Flight Ep",
                "release_date" : "2011-11-07",
                "release_date_precision" : "day",
                "total_tracks" : 4,
                "type" : "album",
                "uri" : "spotify:album:3ugoMQVg1mreLxzyv2JfrL"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B8%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 16
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B8%5D",
        "id" : "home-discover-similar-to[8]",
        "images" : [ ],
        "name" : "Similar to Jaga Jazzist",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B7%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3HCpwNmFp2rvjkdjTs4uxs"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3HCpwNmFp2rvjkdjTs4uxs",
                    "id" : "3HCpwNmFp2rvjkdjTs4uxs",
                    "name" : "Kyuss",
                    "type" : "artist",
                    "uri" : "spotify:artist:3HCpwNmFp2rvjkdjTs4uxs"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1npen0QK3TNxZd2hLNzzOj"
                },
                "href" : "https://api.spotify.com/v1/albums/1npen0QK3TNxZd2hLNzzOj",
                "id" : "1npen0QK3TNxZd2hLNzzOj",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e14537a9543655496d648bad",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e14537a9543655496d648bad",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e14537a9543655496d648bad",
                    "width" : 64
                } ],
                "name" : "Welcome To Sky Valley",
                "release_date" : "1994-06-07",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:1npen0QK3TNxZd2hLNzzOj"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1TKaUU8ooBgSW9TlyKsw6k"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1TKaUU8ooBgSW9TlyKsw6k",
                    "id" : "1TKaUU8ooBgSW9TlyKsw6k",
                    "name" : "Fu Manchu",
                    "type" : "artist",
                    "uri" : "spotify:artist:1TKaUU8ooBgSW9TlyKsw6k"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0AUiFu4Sh6stPr4y8sgGsh"
                },
                "href" : "https://api.spotify.com/v1/albums/0AUiFu4Sh6stPr4y8sgGsh",
                "id" : "0AUiFu4Sh6stPr4y8sgGsh",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273239bf5c699636f80fdf7ffb8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02239bf5c699636f80fdf7ffb8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851239bf5c699636f80fdf7ffb8",
                    "width" : 64
                } ],
                "name" : "Gigantoid",
                "release_date" : "2014-04-29",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:0AUiFu4Sh6stPr4y8sgGsh"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/538ZIoOw6wW1xdjuIaQHOS"
                    },
                    "href" : "https://api.spotify.com/v1/artists/538ZIoOw6wW1xdjuIaQHOS",
                    "id" : "538ZIoOw6wW1xdjuIaQHOS",
                    "name" : "Brant Bjork",
                    "type" : "artist",
                    "uri" : "spotify:artist:538ZIoOw6wW1xdjuIaQHOS"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5cpetzKVBY6D8W2cDca5o1"
                },
                "href" : "https://api.spotify.com/v1/albums/5cpetzKVBY6D8W2cDca5o1",
                "id" : "5cpetzKVBY6D8W2cDca5o1",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273fd167ab9c7b9e4f95f5e4dcd",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02fd167ab9c7b9e4f95f5e4dcd",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851fd167ab9c7b9e4f95f5e4dcd",
                    "width" : 64
                } ],
                "name" : "Local Angel",
                "release_date" : "2004",
                "release_date_precision" : "year",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:5cpetzKVBY6D8W2cDca5o1"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3u4HBuoQ4dgPBzX2Q9uf5S"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3u4HBuoQ4dgPBzX2Q9uf5S",
                    "id" : "3u4HBuoQ4dgPBzX2Q9uf5S",
                    "name" : "Red Fang",
                    "type" : "artist",
                    "uri" : "spotify:artist:3u4HBuoQ4dgPBzX2Q9uf5S"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2CtG0KacG7ZYR6PL5dD1jA"
                },
                "href" : "https://api.spotify.com/v1/albums/2CtG0KacG7ZYR6PL5dD1jA",
                "id" : "2CtG0KacG7ZYR6PL5dD1jA",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2739122d59f5e5946c957d60086",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e029122d59f5e5946c957d60086",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048519122d59f5e5946c957d60086",
                    "width" : 64
                } ],
                "name" : "Whales and Leeches (Deluxe Version)",
                "release_date" : "2013-10-15",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:2CtG0KacG7ZYR6PL5dD1jA"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3nutnJ57QnbWEdCWn2EyWo"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3nutnJ57QnbWEdCWn2EyWo",
                    "id" : "3nutnJ57QnbWEdCWn2EyWo",
                    "name" : "Orange Goblin",
                    "type" : "artist",
                    "uri" : "spotify:artist:3nutnJ57QnbWEdCWn2EyWo"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4EflZcGXhZGptft8fzxwI3"
                },
                "href" : "https://api.spotify.com/v1/albums/4EflZcGXhZGptft8fzxwI3",
                "id" : "4EflZcGXhZGptft8fzxwI3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2732ef579da21bc381d9a804c04",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e022ef579da21bc381d9a804c04",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048512ef579da21bc381d9a804c04",
                    "width" : 64
                } ],
                "name" : "Time Travelling Blues",
                "release_date" : "1998",
                "release_date_precision" : "year",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:4EflZcGXhZGptft8fzxwI3"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1tMtHqVsdmW0Yj9f4YnnHq"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1tMtHqVsdmW0Yj9f4YnnHq",
                    "id" : "1tMtHqVsdmW0Yj9f4YnnHq",
                    "name" : "Karma To Burn",
                    "type" : "artist",
                    "uri" : "spotify:artist:1tMtHqVsdmW0Yj9f4YnnHq"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6lMTeRjXuXSVGePMeAz9Uv"
                },
                "href" : "https://api.spotify.com/v1/albums/6lMTeRjXuXSVGePMeAz9Uv",
                "id" : "6lMTeRjXuXSVGePMeAz9Uv",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2733742b0b78375f46d05dd213e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e023742b0b78375f46d05dd213e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048513742b0b78375f46d05dd213e",
                    "width" : 64
                } ],
                "name" : "Arch Stanton",
                "release_date" : "2014-08-15",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:6lMTeRjXuXSVGePMeAz9Uv"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/40LGuAmXtqxMGraUmCSU27"
                    },
                    "href" : "https://api.spotify.com/v1/artists/40LGuAmXtqxMGraUmCSU27",
                    "id" : "40LGuAmXtqxMGraUmCSU27",
                    "name" : "Spiritual Beggars",
                    "type" : "artist",
                    "uri" : "spotify:artist:40LGuAmXtqxMGraUmCSU27"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6wVVudQgnSWB6Gpe4YBKXU"
                },
                "href" : "https://api.spotify.com/v1/albums/6wVVudQgnSWB6Gpe4YBKXU",
                "id" : "6wVVudQgnSWB6Gpe4YBKXU",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27331d0e7bdefe31751202b2581",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0231d0e7bdefe31751202b2581",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485131d0e7bdefe31751202b2581",
                    "width" : 64
                } ],
                "name" : "Ad Astra",
                "release_date" : "2000-02-13",
                "release_date_precision" : "day",
                "total_tracks" : 13,
                "type" : "album",
                "uri" : "spotify:album:6wVVudQgnSWB6Gpe4YBKXU"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4TnftWQx6fF7k4Nviu7Nn6"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4TnftWQx6fF7k4Nviu7Nn6",
                    "id" : "4TnftWQx6fF7k4Nviu7Nn6",
                    "name" : "The Atomic Bitchwax",
                    "type" : "artist",
                    "uri" : "spotify:artist:4TnftWQx6fF7k4Nviu7Nn6"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6PgunyOBhNuTNn3Z7d5rGZ"
                },
                "href" : "https://api.spotify.com/v1/albums/6PgunyOBhNuTNn3Z7d5rGZ",
                "id" : "6PgunyOBhNuTNn3Z7d5rGZ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273afbfba16ef7c4691992ac9f8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02afbfba16ef7c4691992ac9f8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851afbfba16ef7c4691992ac9f8",
                    "width" : 64
                } ],
                "name" : "Gravitron",
                "release_date" : "2015-04-21",
                "release_date_precision" : "day",
                "total_tracks" : 10,
                "type" : "album",
                "uri" : "spotify:album:6PgunyOBhNuTNn3Z7d5rGZ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5X1eZAEqHcO5lYy7tgjw5h"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5X1eZAEqHcO5lYy7tgjw5h",
                    "id" : "5X1eZAEqHcO5lYy7tgjw5h",
                    "name" : "Truckfighters",
                    "type" : "artist",
                    "uri" : "spotify:artist:5X1eZAEqHcO5lYy7tgjw5h"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3100D5AkbUgK8J8oeByxRG"
                },
                "href" : "https://api.spotify.com/v1/albums/3100D5AkbUgK8J8oeByxRG",
                "id" : "3100D5AkbUgK8J8oeByxRG",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2734931eadf40ac5d96519b5be8",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e024931eadf40ac5d96519b5be8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048514931eadf40ac5d96519b5be8",
                    "width" : 64
                } ],
                "name" : "Universe",
                "release_date" : "2014-08-30",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:3100D5AkbUgK8J8oeByxRG"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0x7UDEGg5P2hFiaQFHeXPy"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0x7UDEGg5P2hFiaQFHeXPy",
                    "id" : "0x7UDEGg5P2hFiaQFHeXPy",
                    "name" : "Hermano",
                    "type" : "artist",
                    "uri" : "spotify:artist:0x7UDEGg5P2hFiaQFHeXPy"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/4wCvhGXM1Sgg9fu4b5ldfj"
                },
                "href" : "https://api.spotify.com/v1/albums/4wCvhGXM1Sgg9fu4b5ldfj",
                "id" : "4wCvhGXM1Sgg9fu4b5ldfj",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273e7c2a8c018c78e2a486c52a0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02e7c2a8c018c78e2a486c52a0",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851e7c2a8c018c78e2a486c52a0",
                    "width" : 64
                } ],
                "name" : "Dare I Say",
                "release_date" : "2004-11-08",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:4wCvhGXM1Sgg9fu4b5ldfj"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B7%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 16
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B7%5D",
        "id" : "home-discover-similar-to[7]",
        "images" : [ ],
        "name" : "Similar to Clutch",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    }, {
        "content" : {
            "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B9%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=0",
            "items" : [ {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4RlnL7aGc9EtzBj6mS02Pq"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4RlnL7aGc9EtzBj6mS02Pq",
                    "id" : "4RlnL7aGc9EtzBj6mS02Pq",
                    "name" : "Doomriders",
                    "type" : "artist",
                    "uri" : "spotify:artist:4RlnL7aGc9EtzBj6mS02Pq"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1bT3AuDais3hpuvcawXpFw"
                },
                "href" : "https://api.spotify.com/v1/albums/1bT3AuDais3hpuvcawXpFw",
                "id" : "1bT3AuDais3hpuvcawXpFw",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a7c115ec336e1d7e5c4d7828",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a7c115ec336e1d7e5c4d7828",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a7c115ec336e1d7e5c4d7828",
                    "width" : 64
                } ],
                "name" : "Darkness Come Alive",
                "release_date" : "2009-09-29",
                "release_date_precision" : "day",
                "total_tracks" : 17,
                "type" : "album",
                "uri" : "spotify:album:1bT3AuDais3hpuvcawXpFw"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0AZ3VR0YbFcS0Kgei7L2QF"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0AZ3VR0YbFcS0Kgei7L2QF",
                    "id" : "0AZ3VR0YbFcS0Kgei7L2QF",
                    "name" : "Russian Circles",
                    "type" : "artist",
                    "uri" : "spotify:artist:0AZ3VR0YbFcS0Kgei7L2QF"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1yiOGMuAqVhbbeKVmmBe59"
                },
                "href" : "https://api.spotify.com/v1/albums/1yiOGMuAqVhbbeKVmmBe59",
                "id" : "1yiOGMuAqVhbbeKVmmBe59",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273f24f6ec53ce6c61bd196ea23",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02f24f6ec53ce6c61bd196ea23",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851f24f6ec53ce6c61bd196ea23",
                    "width" : 64
                } ],
                "name" : "Geneva",
                "release_date" : "2009-10-20",
                "release_date_precision" : "day",
                "total_tracks" : 7,
                "type" : "album",
                "uri" : "spotify:album:1yiOGMuAqVhbbeKVmmBe59"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2vsXeWGC8rILp3rpSN2Fyk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2vsXeWGC8rILp3rpSN2Fyk",
                    "id" : "2vsXeWGC8rILp3rpSN2Fyk",
                    "name" : "ISIS",
                    "type" : "artist",
                    "uri" : "spotify:artist:2vsXeWGC8rILp3rpSN2Fyk"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3LaJRyMUuXKayYL9nhDWxr"
                },
                "href" : "https://api.spotify.com/v1/albums/3LaJRyMUuXKayYL9nhDWxr",
                "id" : "3LaJRyMUuXKayYL9nhDWxr",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273cf60975aebdc06e789470eb3",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02cf60975aebdc06e789470eb3",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851cf60975aebdc06e789470eb3",
                    "width" : 64
                } ],
                "name" : "Oceanic (Remastered)",
                "release_date" : "2002",
                "release_date_precision" : "year",
                "total_tracks" : 9,
                "type" : "album",
                "uri" : "spotify:album:3LaJRyMUuXKayYL9nhDWxr"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4PxqJghOAEvatt0scJvili"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4PxqJghOAEvatt0scJvili",
                    "id" : "4PxqJghOAEvatt0scJvili",
                    "name" : "Torche",
                    "type" : "artist",
                    "uri" : "spotify:artist:4PxqJghOAEvatt0scJvili"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/53d3L0jo0gQi6a5awbwpn5"
                },
                "href" : "https://api.spotify.com/v1/albums/53d3L0jo0gQi6a5awbwpn5",
                "id" : "53d3L0jo0gQi6a5awbwpn5",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273720b6d34aaf324bba1098d1e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02720b6d34aaf324bba1098d1e",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851720b6d34aaf324bba1098d1e",
                    "width" : 64
                } ],
                "name" : "Torche",
                "release_date" : "2005-03-08",
                "release_date_precision" : "day",
                "total_tracks" : 11,
                "type" : "album",
                "uri" : "spotify:album:53d3L0jo0gQi6a5awbwpn5"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6fuALtryzj4cq7vkglKLxq"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6fuALtryzj4cq7vkglKLxq",
                    "id" : "6fuALtryzj4cq7vkglKLxq",
                    "name" : "The Ocean",
                    "type" : "artist",
                    "uri" : "spotify:artist:6fuALtryzj4cq7vkglKLxq"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/26TeqFz1sPbJT6VjAbBtzl"
                },
                "href" : "https://api.spotify.com/v1/albums/26TeqFz1sPbJT6VjAbBtzl",
                "id" : "26TeqFz1sPbJT6VjAbBtzl",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b2732b2da340edc9c2727ac9ddcf",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e022b2da340edc9c2727ac9ddcf",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d000048512b2da340edc9c2727ac9ddcf",
                    "width" : 64
                } ],
                "name" : "Phanerozoic II: Mesozoic | Cenozoic",
                "release_date" : "2020-09-25",
                "release_date_precision" : "day",
                "total_tracks" : 16,
                "type" : "album",
                "uri" : "spotify:album:26TeqFz1sPbJT6VjAbBtzl"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1KHydwFySZY3YcWyo2q2dF"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1KHydwFySZY3YcWyo2q2dF",
                    "id" : "1KHydwFySZY3YcWyo2q2dF",
                    "name" : "Neurosis",
                    "type" : "artist",
                    "uri" : "spotify:artist:1KHydwFySZY3YcWyo2q2dF"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/27BPbrHO41bTHwFLXMHMGe"
                },
                "href" : "https://api.spotify.com/v1/albums/27BPbrHO41bTHwFLXMHMGe",
                "id" : "27BPbrHO41bTHwFLXMHMGe",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273790678f2385ca030e85fc429",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02790678f2385ca030e85fc429",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851790678f2385ca030e85fc429",
                    "width" : 64
                } ],
                "name" : "Neurosis & Jarboe",
                "release_date" : "2003-11-04",
                "release_date_precision" : "day",
                "total_tracks" : 8,
                "type" : "album",
                "uri" : "spotify:album:27BPbrHO41bTHwFLXMHMGe"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0N1jE1EIrhZjvQSfuLupUu"
                    },
                    "href" : "https://api.spotify.com/v1/artists/0N1jE1EIrhZjvQSfuLupUu",
                    "id" : "0N1jE1EIrhZjvQSfuLupUu",
                    "name" : "Amenra",
                    "type" : "artist",
                    "uri" : "spotify:artist:0N1jE1EIrhZjvQSfuLupUu"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/17DLqqwMfej9vOeYGdDnrv"
                },
                "href" : "https://api.spotify.com/v1/albums/17DLqqwMfej9vOeYGdDnrv",
                "id" : "17DLqqwMfej9vOeYGdDnrv",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b27397668900743f922e6df7a259",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e0297668900743f922e6df7a259",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d0000485197668900743f922e6df7a259",
                    "width" : 64
                } ],
                "name" : "Mass III",
                "release_date" : "2011-02-27",
                "release_date_precision" : "day",
                "total_tracks" : 6,
                "type" : "album",
                "uri" : "spotify:album:17DLqqwMfej9vOeYGdDnrv"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/17qfMEjKb5ry8L8mekQZfd"
                    },
                    "href" : "https://api.spotify.com/v1/artists/17qfMEjKb5ry8L8mekQZfd",
                    "id" : "17qfMEjKb5ry8L8mekQZfd",
                    "name" : "Intronaut",
                    "type" : "artist",
                    "uri" : "spotify:artist:17qfMEjKb5ry8L8mekQZfd"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3WCPAM1SKtAfubT9jwAGMh"
                },
                "href" : "https://api.spotify.com/v1/albums/3WCPAM1SKtAfubT9jwAGMh",
                "id" : "3WCPAM1SKtAfubT9jwAGMh",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273a2e42f4790a13c3d869641ea",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02a2e42f4790a13c3d869641ea",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851a2e42f4790a13c3d869641ea",
                    "width" : 64
                } ],
                "name" : "Run Through the Jungle",
                "release_date" : "2020-07-24",
                "release_date_precision" : "day",
                "total_tracks" : 1,
                "type" : "album",
                "uri" : "spotify:album:3WCPAM1SKtAfubT9jwAGMh"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3u4HBuoQ4dgPBzX2Q9uf5S"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3u4HBuoQ4dgPBzX2Q9uf5S",
                    "id" : "3u4HBuoQ4dgPBzX2Q9uf5S",
                    "name" : "Red Fang",
                    "type" : "artist",
                    "uri" : "spotify:artist:3u4HBuoQ4dgPBzX2Q9uf5S"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/59SbMXC4eeY2sCL8v9GRod"
                },
                "href" : "https://api.spotify.com/v1/albums/59SbMXC4eeY2sCL8v9GRod",
                "id" : "59SbMXC4eeY2sCL8v9GRod",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273282dc808f2b49f5aed41a10b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02282dc808f2b49f5aed41a10b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851282dc808f2b49f5aed41a10b",
                    "width" : 64
                } ],
                "name" : "Wires",
                "release_date" : "2011-03-15",
                "release_date_precision" : "day",
                "total_tracks" : 2,
                "type" : "album",
                "uri" : "spotify:album:59SbMXC4eeY2sCL8v9GRod"
            }, {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1eiIIImNeUj3vpaocWqoOf"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1eiIIImNeUj3vpaocWqoOf",
                    "id" : "1eiIIImNeUj3vpaocWqoOf",
                    "name" : "High On Fire",
                    "type" : "artist",
                    "uri" : "spotify:artist:1eiIIImNeUj3vpaocWqoOf"
                } ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1TQjfSU17XcNjCqzsXNNSN"
                },
                "href" : "https://api.spotify.com/v1/albums/1TQjfSU17XcNjCqzsXNNSN",
                "id" : "1TQjfSU17XcNjCqzsXNNSN",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ab67616d0000b273bdea4ecf944eab293200649b",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ab67616d00001e02bdea4ecf944eab293200649b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ab67616d00004851bdea4ecf944eab293200649b",
                    "width" : 64
                } ],
                "name" : "Bat Salad",
                "release_date" : "2019-07-26",
                "release_date_precision" : "day",
                "total_tracks" : 3,
                "type" : "album",
                "uri" : "spotify:album:1TQjfSU17XcNjCqzsXNNSN"
            } ],
            "limit" : 10,
            "next" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B9%5D?content_limit=10&locale=en&platform=web&country=MY&timestamp=2020-10-14T06:18:35.35&types=album%2Cplaylist%2Cartist%2Cshow%2Cstation&limit=10&offset=10",
            "offset" : 0,
            "previous" : null,
            "total" : 16
        },
        "custom_fields" : { },
        "external_urls" : null,
        "href" : "https://api.spotify.com/v1/views/home-discover-similar-to%5B9%5D",
        "id" : "home-discover-similar-to[9]",
        "images" : [ ],
        "name" : "Similar to Baroness",
        "rendering" : "CAROUSEL",
        "tag_line" : null,
        "type" : "view"
    } ],
        "limit" : 20,
        "next" : null,
        "offset" : 0,
        "previous" : null,
        "total" : 20
},
    "custom_fields" : { },
    "external_urls" : null,
    "href" : "https://api.spotify.com/v1/views/desktop-home",
    "id" : "desktop-home",
    "images" : [ ],
    "name" : "",
    "rendering" : "STACK",
    "tag_line" : null,
    "type" : "view"
}
*/
import querystring from 'querystring';

export default function getLoginUrl() {
    const SPOTIFY_AUTH_URI = 'https://accounts.spotify.com/authorize?';
    let state = generateRandomString(16);
    let scope = 'user-read-private user-read-email user-read-playback-position user-read-playback-state user-modify-playback-state';

    let implicitGrantopt1 = {
        response_type: 'token',
        client_id: 'c22c3823ad264e30807be01b388babf3',
        scope: scope,
        redirect_uri: 'https://www.example.com',
        state: state,
        show_dialog: true
    };

    let uri = SPOTIFY_AUTH_URI + querystring.stringify(implicitGrantopt1);
    return uri;
}

function generateRandomString(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

