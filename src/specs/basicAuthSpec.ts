import basicAuthPage from "src/model/pages/basicAuthPage";
import { expect } from 'chai';

describe('Basic Auth: https://the-internet.herokuapp.com/basic_auth', function() {

    // beforeEach( function() {
    //     basicAuthPage.open();
    // });

    it('should ALLOW access to the basic auth page with valid credentials', function() {

        // webdriverio doesn't support basic auth at the time of writing and there doesn't
        // seem to be a graceful way of doing this so we'll get down and dirty and use literal
        // values to perform the check. Refactor when webdriverio gets its stuff together.
        // TODO - check whether wdio v6 can handle basic auth

        browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        expect(basicAuthPage.pageHeadingText).to.equal('Basic Auth');
        expect(basicAuthPage.pageText).to.equal("Congratulations! You must have the proper credentials.");
    })

});
