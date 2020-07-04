import {BasePage} from "src/model/pages/basePage";

class LoginPage extends BasePage {

    url_path: string;

    constructor(url_path: string) {
        super('/');
        this.url_path = url_path;
    }

    // Page object elements
    get loginButton(): WebdriverIO.Element { return $('form button[type="submit"]'); }
    get message(): WebdriverIO.Element { return $('#flash'); }
    get messageText(): string { return $('#flash').getText(); }
    get username(): WebdriverIO.Element { return $('#username'); }
    get password(): WebdriverIO.Element { return $('#password'); }

    // Define new or override inherited page object methods
    open(): void {
        super.open(this.url_path);
        this.waitForPageToLoad();
    }

    waitForPageToLoad(): void {
        this.username.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "LoginPage: Mandatory element not found."
        });
    }

    attemptLogin(user: string, pass: string): void {
        // this.open();
        this.username.setValue(user);
        this.password.setValue(pass);
        this.loginButton.click();
    }

}

export default new LoginPage('login')