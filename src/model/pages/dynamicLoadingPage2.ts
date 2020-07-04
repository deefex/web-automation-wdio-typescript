import {BasePage} from "src/model/pages/basePage";

class DynamicLoadingPage2 extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h4'); }
    get startButton(): WebdriverIO.Element { return $('#start > button'); }
    get message(): WebdriverIO.Element { return $('#finish'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "dynamicLoadingPage2: Mandatory element not found."
        });
    }
}

export default new DynamicLoadingPage2('dynamic_loading/2')