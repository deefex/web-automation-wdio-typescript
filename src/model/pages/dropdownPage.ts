import {BasePage} from "src/model/pages/basePage";

class DropdownPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get dropdown(): WebdriverIO.Element { return $('#dropdown'); }
    get defaultText(): string { return $('#dropdown > option:nth-child(1)').getText(); }
    get option1Text(): string { return $('#dropdown > option:nth-child(2)').getText(); }
    get option2Text(): string { return $('#dropdown > option:nth-child(3)').getText(); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "dropdownPage: Mandatory element not found."
        });
    }
}

export default new DropdownPage('dropdown')