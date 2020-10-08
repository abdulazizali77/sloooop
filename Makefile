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
extension: images
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
	cp src/background/index.js $@

#TODO: browserify, babelify properly
build/background.bundle.js:
	cp src/contentscript/index.js $@

.PHONY: images
images:
	cp -r images build

#FIXME: doesnt work
.PHONY: test
test: extension
	cd build || ../node_modules/.bin/web-ext run
