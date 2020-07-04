import {BasePage} from "src/model/pages/basePage";

class ExitIntentPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get modal(): any { return $('#ouibounce-modal'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "exitIntentPage: Mandatory element not found."
        });
    }

    showModal(): void {
        browser.execute( function() {
            // @ts-ignore
            $('#ouibounce-modal').show();
        });
    }

}

export default new ExitIntentPage('exit_intent')