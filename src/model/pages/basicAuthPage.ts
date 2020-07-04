import {BasePage} from "src/model/pages/basePage";

class BasicAuthPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object locators
    get pageHeading(): WebdriverIO.Element { return $('h3') }
    get pageHeadingText(): string { return $('h3').getText() }  // "Basic Auth"
    get pageText(): string { return $('p').getText() }          // "Congratulations! You must have the proper credentials."

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "basicAuthPage: Mandatory element not found."
        });
    }

}

export default new BasicAuthPage('basic_auth');