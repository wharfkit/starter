SHELL := /bin/bash
SRC_FILES := $(shell find src -name '*.ts')
BIN := ./node_modules/.bin

lib: ${SRC_FILES} package.json tsconfig.json node_modules rollup.config.js
	@${BIN}/rollup -c && touch lib

node_modules:
	yarn install --non-interactive --frozen-lockfile --ignore-scripts

.PHONY: clean
clean:
	rm -rf lib/ build/ test/browser.html

.PHONY: distclean
distclean: clean
	rm -rf node_modules/
