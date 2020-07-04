import brokenImagesPage from "src/model/pages/brokenImagesPage";
import challengingDomPage from "src/model/pages/challengingDomPage";
import { expect } from 'chai';

describe('Challenging DOM: https://the-internet.herokuapp.com/challenging_dom', function() {

    beforeEach( function() {
        challengingDomPage.open();
    });

    it('the BLUE button should exist within the DOM', function() {
        expect(challengingDomPage.blueButton).to.exist;
    });

    it('the RED button should exist within the DOM', function() {
        expect(challengingDomPage.redButton).to.exist;
    });

    it('the GREEN button should exist within the DOM', function() {
        expect(challengingDomPage.greenButton).to.exist;
    });

    it('the ANSWER PANEL should exist within the DOM', function() {
        expect(challengingDomPage.answerPanel).to.exist;
    });

    it('the TABLE should exist within the DOM', function() {
        expect(challengingDomPage.table).to.exist;
    });

    it('the TABLE should contain 10 rows', function() {
        expect((challengingDomPage.tableRowsId).length).to.equal(10);
    });

    it('the TABLE should contain 7 rows', function() {
        expect((challengingDomPage.tableColsId).length).to.equal(7);
    });

});
