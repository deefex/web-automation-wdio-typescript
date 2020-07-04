import checkboxesPage from "src/model/pages/checkboxesPage";
import { expect } from 'chai';

describe('Checkboxes: https://the-internet.herokuapp.com/checkboxes', function() {

    beforeEach( function() {
        checkboxesPage.open();
    });

    it('the first checkbox should be unchecked by default', function() {
        expect(checkboxesPage.checkbox1.isSelected()).to.be.equal(false);
    });

    it('the second checkbox should be checked by default', function() {
        expect(checkboxesPage.checkbox2.isSelected()).to.be.equal(true);
    });

    it('the first checkbox should be checked after clicking it', function() {
        checkboxesPage.checkbox1.click();
        expect(checkboxesPage.checkbox1.isSelected()).to.be.equal(true);
    });

    it('the second checkbox should be unchecked after clicking it', function() {
        checkboxesPage.checkbox2.click();
        expect(checkboxesPage.checkbox2.isSelected()).to.be.equal(false);
    });

});