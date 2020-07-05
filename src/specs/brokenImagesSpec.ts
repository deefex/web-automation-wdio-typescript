import brokenImagesPage from "src/model/pages/brokenImagesPage";
import { expect } from 'chai';

describe('Broken Images: https://the-internet.herokuapp.com/broken_images', function() {

    beforeEach( function() {
        brokenImagesPage.open();
    });

    it('check that the page has one or more broken images', function() {

        // Try and execute this in the browser to see if we can get back images to iterate over.
        let brokenImages: boolean = browser.execute(function () {
            let images: HTMLCollectionOf<HTMLImageElement> =  document.getElementsByTagName('img');
            for (let i = 0; i < images.length; i++) {
                // Iterate over the images - if any of them have natural widths or heights == 0 return true
                if (images[i].naturalHeight === 0 || images[i].naturalWidth === 0) {
                    return true;
                }
            }
            // If all the images have non-zero naturalWidths/naturalHeights - we have no broken images
            return false;
        });

        expect(brokenImages).to.equal(true);
    });

});
