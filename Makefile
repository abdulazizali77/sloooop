SETTINGS_FILE := settings/chrome-dev.json
BROWSERIFY := node_modules/.bin/browserify
MUSTACHE := node_modules/.bin/mustache

.PHONY: default
default: extension

.PHONY: clean
clean:
	rm -fR build

.PHONY: extension
extension: build
extension: build/background.bundle.js
extension: build/contentscript.bundle.js
extension: css
extension: images
extension: fonts
extension: build/manifest.json

build:
	mkdir build

#TODO: add version info properly
build/manifest.json: src/manifest.json.mustache
	@# $< is src/manifest.json.mustache
	@# $@ is build/manifest.json
	$(MUSTACHE) settings/chrome-dev.json $< > $@

#TODO: browserify, babelify properly
build/contentscript.bundle.js:
	$(BROWSERIFY) -t babelify -d src/contentscript/index.js > $@

#TODO: browserify, babelify properly
build/background.bundle.js:
	$(BROWSERIFY) -t babelify -d src/background/index.js > $@

.PHONY: css
css:
	@mkdir build/css
	cp -r node_modules/winjs/css build
	cp -r node_modules/jqueryui/jquery*css build/css

.PHONY: images
images:
	cp -r images build
	mkdir build/css/images
	cp node_modules/jqueryui/images/* build/css/images/.

fonts:
	@mkdir build/fonts
	cp -r node_modules/winjs/fonts build

#FIXME: doesnt work
.PHONY: test
test: extension
	cd build || ../node_modules/.bin/web-ext run


