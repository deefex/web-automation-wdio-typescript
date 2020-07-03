export class BasePage {

    // I realise this may look a bit contrived, but the internet/herokuapp pages are relatively threadbare
    // apart from the content of interest, and I really wanted an opportunity to play with Typescript and
    // class inheritance, overloading methods, etc. to see how much benefit it provides in terms of syntactic
    // consistency.

    url_base: string;

    constructor(url_base: string) {
        this.url_base = url_base;
    }

    public open(path: string): void {
        browser.url(this.url_base + path);
    }
}
