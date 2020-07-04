import dragAndDropPage from "src/model/pages/dragAndDropPage";
import { expect } from 'chai';

describe('Drag & Drop: https://the-internet.herokuapp.com/drag_and_drop', function() {

    beforeEach( function() {
        dragAndDropPage.open();
    });

    it('I can successfully drag the element from column1 to column2', function() {
        dragAndDropPage.dragAtoB();
        expect(dragAndDropPage.column1Text).to.equal('B');
    });

    it('I can successfully drag the element from column2 to column1', function() {
        dragAndDropPage.dragBtoA();
        expect(dragAndDropPage.column2Text).to.equal('A');
    });
});