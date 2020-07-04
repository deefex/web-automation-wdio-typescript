import exitIntentPage from "src/model/pages/exitIntentPage";
import { expect } from 'chai';

describe('Exit Intent: https://the-internet.herokuapp.com/exit_intent', function() {

    beforeEach( function() {
        exitIntentPage.open();
    });

    // The trigger that causes the modal to appear is to move the mouse outside the
    // browser viewport, however it's not possible to perform that action with selenium
    // as all actions are inherently *in* the viewport. Therefore, this test is a bit
    // farcical, since all we're doing is revealing the modal and checking that it's visible

    it('check that the modal is visible', function() {
        exitIntentPage.showModal();
        expect(exitIntentPage.modal.isDisplayed()).to.equal(true);
    });

});