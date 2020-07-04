import dynamicLoadingPage2 from "src/model/pages/dynamicLoadingPage2";
import { expect } from 'chai';

describe('Dynamic Loading 2: https://the-internet.herokuapp.com/dynamic_loading/2', function() {

    beforeEach( function() {
        dynamicLoadingPage2.open();
    });

    it('check that the -Hello World!- message DOES NOT exist by default', function() {
        expect(dynamicLoadingPage2.message.isExisting()).to.equal(false);
    });

    it('check that the -Hello World!- message is NOT visible by default', function() {
        expect(dynamicLoadingPage2.message.isDisplayed()).to.equal(false);
    });

    // I know it seems kinda futile to have separate tests for exists *and* visible
    // as one tends to imply the other, but this is just mucking around with wdio after all

    it('when I click on the Start button, the -Hello World!- message exists', function() {
        dynamicLoadingPage2.startButton.click();
        dynamicLoadingPage2.message.waitForDisplayed();
        expect(dynamicLoadingPage2.message.isExisting()).to.equal(true);
    });

    it('when I click on the Start button, the -Hello World!- message becomes visible', function() {
        dynamicLoadingPage2.startButton.click();
        dynamicLoadingPage2.message.waitForDisplayed();
        expect(dynamicLoadingPage2.message.isDisplayed()).to.equal(true);
    });

});