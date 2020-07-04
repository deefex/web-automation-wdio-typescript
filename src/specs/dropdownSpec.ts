import dropdownPage from "src/model/pages/dropdownPage";
import {expect} from 'chai';

describe('Dropdown: https://the-internet.herokuapp.com/dropdown', function() {

    beforeEach( function() {
        dropdownPage.open();
    });

    it('the default option in the dropdown is selected by default', function() {
        expect(dropdownPage.dropdown.isSelected()).to.equal(false);
    });

    it('the first option can be selected successfully', function() {
        dropdownPage.dropdown.selectByAttribute('value', '1'); // formerly selectByValue in wdio4
        expect(dropdownPage.dropdown.getValue()).to.equal('1');
    });

    it('the second option can be selected successfully', function() {
        dropdownPage.dropdown.selectByIndex(2);
        expect(dropdownPage.dropdown.getValue()).to.equal('2');
    });

});