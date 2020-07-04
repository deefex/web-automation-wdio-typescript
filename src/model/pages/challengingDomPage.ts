import {BasePage} from "src/model/pages/basePage";

class ChallengingDomPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get pageHeading(): WebdriverIO.Element { return $('h3'); }
    get blueButton(): WebdriverIO.Element { return $('//*[@id="content"]/div/div/div/div[1]/a[1]'); }
    get redButton(): WebdriverIO.Element { return $('//*[@id="content"]/div/div/div/div[1]/a[2]'); }
    get greenButton(): WebdriverIO.Element { return $('//*[@id="content"]/div/div/div/div[1]/a[3]'); }
    get table(): WebdriverIO.Element { return $('//*[@id="content"]/div/div/div/div[2]/table'); }
    get tableRowsId(): WebdriverIO.ElementArray { return $$('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr'); }
    get tableColsId(): WebdriverIO.ElementArray { return $$('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td'); }
    get answerPanel(): WebdriverIO.Element { return $('//*[@id="canvas"]'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.pageHeading.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "challengingDomPage: Mandatory element not found."
        });
    }

}

export default new ChallengingDomPage('challenging_dom')