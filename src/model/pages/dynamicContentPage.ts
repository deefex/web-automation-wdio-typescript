import {BasePage} from "src/model/pages/basePage";

class DynamicContentPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get row1Img(): string { return $('//*[@id="content"]/div[1]/div[1]/img').getAttribute('src'); }
    get row1Txt(): string { return $('//*[@id="content"]/div[1]/div[2]').getText(); }
    get row2Img(): string { return $('//*[@id="content"]/div[2]/div[1]/img').getAttribute('src'); }
    get row2Txt(): string { return $('//*[@id="content"]/div[2]/div[2]').getText(); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "dynamicContentPage: Mandatory element not found."
        });
    }

}

export default new DynamicContentPage('dynamic_content?with_content=static')