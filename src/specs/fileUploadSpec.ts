import fileUploadPage from "src/model/pages/fileUploadPage";
import { expect } from 'chai';

describe('File Upload: https://the-internet.herokuapp.com/upload', function() {

    beforeEach( function() {
        fileUploadPage.open();
    });

    it('I can successfully upload a file via the ChooseFile button', function() {
        fileUploadPage.uploadFile();
        expect(fileUploadPage.uploadedFilesText).to.equal('spider-man.png');
    });

});