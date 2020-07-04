import {BasePage} from "src/model/pages/basePage";

class BrokenImagesPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get image1(): WebdriverIO.Element { return $('//*[@id="content"]/div/img[1]'); }
    get image2(): WebdriverIO.Element { return $('//*[@id="content"]/div/img[2]'); }
    get image3(): WebdriverIO.Element { return $('//*[@id="content"]/div/img[3]'); }
    get images(): HTMLCollectionOf<HTMLImageElement> { return document.getElementsByTagName('img'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "brokenImagesPage: Mandatory element not found."
        });
    }

}

export default new BrokenImagesPage('broken_images')