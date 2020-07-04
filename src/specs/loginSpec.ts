import loginPage from "src/model/pages/loginPage";
import loginSecurePage from "src/model/pages/loginSecurePage";
import { expect } from 'chai';

describe('Form Authentication: https://the-internet.herokuapp.com/login', function() {

    beforeEach( function() {
        loginPage.open();
    });

    it('should REFUSE access to the secure area with invalid credentials', function() {
        loginPage.attemptLogin('invalid_user', 'invalid_password');
        // LoginPage.waitForPageToLoad();
        expect(loginPage.messageText).contains('Your username is invalid!');
    });

    it('should ALLOW access to the secure area with valid credentials', function() {
        loginPage.attemptLogin('tomsmith', 'SuperSecretPassword!');
        loginSecurePage.waitForPageToLoad();
        expect(loginSecurePage.messageText).contains('You logged into a secure area!');
    });

});