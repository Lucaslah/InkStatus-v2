PROJECT = "InkStats"

.PHONY: test install clean update build

all: install test

test: ./node_modules/.bin/jest

install: yarn

update: git pull 

clean: rm -rf node_modules

build: ./node_modules/.bin/tsc