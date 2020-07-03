import { BasePage } from './basePage'

class AbTestPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $("h3") }
    get pageHeadingText(): string { return $("h3").getText() }

    // Page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "abTestPage: Mandatory element not found."
        });
    }
}

export default new AbTestPage('abtest');
