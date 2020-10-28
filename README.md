![Sloooop logo](/design/icons/128_activate.png)
# Sloooop - A Simple AB looper web extension for Spotify
An AB looper is a common feature of music players used for music practice, or just repeatedly listening to specific sections of music.
This AB looper extension only works for Spotify web player and the chrome browser.

## Limitations
- This only works for Premium Spotify users. The seek API is unfortunately only allowed for Spotify Premium.
- This extension is only supported on Chrome. It has been tested on Windows and OSX desktops. It has not been tested on *nix platforms.
- The extension client authorization only lasts 1hour. After every hour, the user will need to allow the extension access to its Spotify account again. This is a current limitation with Spotify's front-end client authorization flow.
- The maximum number of tracks with loop ranges have not been tested. The fixed chrome extension storage limits are 5MB.
- Is dependent on a specific Spotify app client id. You can modify this to your own client id if you want.

## Easy Installation
Go to the [chrome-store]

## Manual Installation
- clone the repository
- cd to the cloned repository. Build the extension
```
  npm i;
  make;
```
- Open "chrome://extensions"
- Enable 'Developer mode'
- Click 'Load unpacked' and select the build folder generated in the repository

## Usage Instruction
- Click the extension icon
- Allow the app 
- Set your loop ranges
- Click the extension icon to enable/disable the looping

## License
LGPLv3

## Changelog
### 0.0.1
* First release with basic functionality
