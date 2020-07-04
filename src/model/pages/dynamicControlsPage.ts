import {BasePage} from "src/model/pages/basePage";

class DynamicControlsPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    // TODO - Prefer to use XPath selectors here for buttons "//button[contains(.,"Remove")]" but they seem to be
    // TODO - causing syntax errors when used in conjunction with JS $() notation. Investigate later and fix.
    get pageHeading(): WebdriverIO.Element { return $('h4'); }
    get xpathButton(): WebdriverIO.Element { return $('//button[contains(.,"Remove")]'); }
    get checkboxButton(): WebdriverIO.Element { return $('button[type="button"]'); }  // TODO - // Appalling selector, not unique but 1st instance is the one we want
    get checkbox1(): WebdriverIO.Element { return $('input[label="blah"]'); }
    get checkbox2(): WebdriverIO.Element { return $('#checkbox'); }
    get checkboxMessage(): WebdriverIO.Element { return $('#message'); }


    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "dynamicControlsPage: Mandatory element not found."
        });
    }
}

export default new DynamicControlsPage('dynamic_controls')