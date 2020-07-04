class LoginSecurePage {

    // Page object elements
    get logoutButton(): WebdriverIO.Element { return $('a[class="button secondary radius"]'); }
    get message(): WebdriverIO.Element { return $('#flash'); }
    get messageText(): string { return $('#flash').getText(); }

    // Define new or override inherited page object methods
    waitForPageToLoad(): void {
        this.logoutButton.waitForDisplayed({
            timeout: undefined,
            reverse: false,
            timeoutMsg: "LoginPage: Mandatory element not found."
        });
    }
}

export default new LoginSecurePage()