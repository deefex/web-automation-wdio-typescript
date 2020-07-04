import fileUploadPage from "src/model/pages/fileUploadPage";
import { expect } from 'chai';
import path = require("path")

describe('File Upload: https://the-internet.herokuapp.com/upload', function() {

    beforeEach( function() {
        fileUploadPage.open();
    });

    // TODO - chooseFile no longer exists in wdio 5 (or 6)  and it's not clear what the alternative is - fix later

    // it('I can successfully upload a file via the ChooseFile button', function() {
    //     // Use the chooseFile button to select the file
    //     let toUpload = path.join(__dirname, '..', 'resources', 'spider-man.png');
    //     browser.chooseFile(fileUploadPage.chooseSelector, toUpload);
    //     expect(fileUploadPage.chooseValue).contains('spider-man.png');
    //
    //     // Upload the file and validate the uploadedFiles
    //     fileUploadPage.uploadButton.click();
    //     fileUploadPage.waitForMessage();
    //     expect(fileUploadPage.uploadedFilesText).equal('spider-man.png');
    // });

});