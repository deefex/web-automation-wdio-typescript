import dynamicLoadingPage1 from "src/model/pages/dynamicLoadingPage1";
import {expect} from 'chai';

describe('Dynamic Loading 1: https://the-internet.herokuapp.com/dynamic_loading/1', function() {

    beforeEach( function() {
        dynamicLoadingPage1.open();
    });

    it('check that the -Hello World!- message exists by default', function() {
        expect(dynamicLoadingPage1.message).to.exist;
    });

    it('check that the -Hello World!- message is NOT visible by default', function() {
        expect(dynamicLoadingPage1.message.isDisplayed()).to.equal(false);
    });

    it('when I click on the Start button, the -Hello World!- message becomes visible', function() {
        dynamicLoadingPage1.startButton.click();
        dynamicLoadingPage1.message.waitForDisplayed();
        expect(dynamicLoadingPage1.message.isDisplayed()).to.equal(true);
    });

});