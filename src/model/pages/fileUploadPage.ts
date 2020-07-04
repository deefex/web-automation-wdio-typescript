import {BasePage} from "src/model/pages/basePage";

class FileUploadPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get chooseSelector(): string { return '#file-upload'; }
    get chooseButton(): WebdriverIO.Element { return $('#file-upload'); }
    get chooseValue(): string { return $('#file-upload').getValue(); }
    get uploadButton(): WebdriverIO.Element { return $('#file-submit'); }
    get uploadedFiles(): WebdriverIO.Element { return $('#uploaded-files'); }
    get uploadedFilesText(): string { return $('#uploaded-files').getText(); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "fileUploadPage: Mandatory element not found."
        });
    }

    waitForMessage(): void {
        this.uploadedFiles.waitForExist();
    }

}

export default new FileUploadPage('upload')