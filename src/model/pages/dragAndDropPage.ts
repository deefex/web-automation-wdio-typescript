let dragAndDrop = require('html-dnd').codeForSelectors;
import {BasePage} from "src/model/pages/basePage";

class DragAndDropPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get column1(): WebdriverIO.Element { return $('#column-a'); } // Unused since we're using literals below
    get column2(): WebdriverIO.Element { return $('#column-b'); } // Unused since we're using literals below
    get column1Text(): string { return $('#column-a > header').getText(); }
    get column2Text(): string { return $('#column-b > header').getText(); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "dragAndDropPage: Mandatory element not found."
        });
    }

    dragAtoB(): void {
        browser.execute(dragAndDrop, '#column-a', '#column-b');
    }

    dragBtoA(): void {
        browser.execute(dragAndDrop, '#column-b', '#column-a');
    }

}

export default new DragAndDropPage('drag_and_drop')