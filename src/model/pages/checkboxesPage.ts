import {BasePage} from "src/model/pages/basePage";

class CheckboxesPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element  { return $('h3'); }
    get checkbox1(): WebdriverIO.Element { return $('//*[@id="checkboxes"]/input[1]'); }
    get checkbox2(): WebdriverIO.Element { return $('//*[@id="checkboxes"]/input[2]'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "checkboxesPage: Mandatory element not found."
        });
    }
}

export default new CheckboxesPage('checkboxes')