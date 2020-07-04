## Description

This is a web browser automation demo which uses a fairly standard page object model and runs some browser tests
against the wonderful [The Internet](https://the-internet.herokuapp.com/) site using Typescript and Webdriverio v6. 
There is a Javascript only version in a similarly named repo here - [web-automation-wdio-javascript](https://github.com/deefex/web-automation-wdio-javascript)

Test examples cover such issues as:
* A/B Testing
* Basic Authentication
* Broken Images
* Challenging DOMs
* Checkbox Manipulation
* Drag & Drop Operations
* Dropdown Lists
* Dynamic Content
* Dynamic Controls
* Dynamic Loading
* Exit Intent (mouse out)  - TODO
* File Upload (TODO - needs completing)
* Login Page - TODO

## Requirements
* Use nodeJS LTS v12.18.1 or above
* Google Chrome

## Setup
* use nvm (or equivalent) to set the nodeJS version
* Clone repository
* run `npm install` in root directory

## Execution
Execution on your local machine only (for now).
* `npm run compile` to compile the typescript
* `npm run test` to run the compiled code
* `npm run compile:test` to do all that

## Known Issues
* Not sure that wdio can handle basic auth

## TODO
* Add allure reporting
* Basic Auth - check if wdio v6 can handle basic auth
* Dynamic controls - selector syntax
* Confirm the browser window is being closed after each test spec - wdio `after` hook
