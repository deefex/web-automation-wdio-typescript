import abTestPage from "src/model/pages/abTestPage";
import { expect } from "chai";

describe('A/B Testing: https://the-internet.herokuapp.com/abtest', function() {

    // beforeEach( function() {
    //     // abTestPage.open();
    // });

    it('displays either the A/B Test Control page OR the A/B Test Variation 1 page', function() {
        // chai/expect doesn't handle logical OR gracefully, so we'll use a dinky workaround
        // to check whether the page header is one of two possible A/B variants.
        abTestPage.open();
        const abVariations = ['A/B Test Variation 1', 'A/B Test Control'];
        expect(abVariations.includes(abTestPage.pageHeadingText)).to.equal(true);
    });

    it('displays the No A/B Test page when an opt-out cookie is set', () => {
        browser.addCookie({ method: 'post', name: 'optimizelyOptOut', value: 'true' });
        abTestPage.open();
        expect(abTestPage.pageHeadingText).to.equal('No A/B Test');
    });

});
