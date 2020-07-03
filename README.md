## Description

This is a web browser automation demo which uses a fairly standard page object model and runs some browser tests
against the wonderful [The Internet](https://the-internet.herokuapp.com/) site using Typescript and Webdriverio v6. 
There is a Javascript only version in a similarly named repo here - [web-automation-wdio-javascript](https://github.com/deefex/web-automation-wdio-javascript)

Test examples cover such issues as:
* A/B Testing
* Basic Authentication - TODO
* Broken Images - TODO
* Challenging DOMs - TODO
* Checkbox Manipulation - TODO
* Drag & Drop Operations - TODO
* Dropdown Lists - TODO
* Dynamic Content - TODO
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
* `npm run test` to run the tests
* `npm run test:report` to run the tests with allure reporting (this creates a local directory, `allure-report` then 
opens it in the browser)

## Known Issues
* Let me know :-)

## TODO
* Finish porting the tests from Javascript
* Enhance the allure reporting. It's very basic at the moment.
* Include screenshots in the reporting when failures occur.