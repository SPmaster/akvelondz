var LoginPage = require('./pageobjects/login.page');
var MailBoxPage = require('./pageobjects/mailbox.page');
var account = require('../testdata/account');


var myStepDefinitionsWrapper = function () {
  this.Given(/^I have email with password$/, function () {
    expect(account.email).toBeDefined();
    expect(account.passwd).toBeDefined();
  });
  
  this.Given(/^I browse my mail-box$/, function () {
    MailBoxPage.open();
  });

  this.Given(/^I go to password page$/, function () {
    if ( !LoginPage.passwdInputField.isVisible() ){
       if ( MailBoxPage.isLoggedIn() ) {
           MailBoxPage.signOut();
       } else {
           LoginPage.submitEmail(account.email);
       }
    }
  });

  this.When(/^I submit "([^"]*)" password$/, function (passkey) {
    switch(passkey){
       case 'valid':
       LoginPage.submitPasswd(account.passwd);
       break;
       
       case 'empty':
       LoginPage.submitPasswd(account.empty);
       break;
       
       case 'wrong':
       LoginPage.submitPasswd(account.wrong);
       break;
   }
  });
   
  this.Then(/^I see inline error mesasage$/, function () {
    expect( LoginPage.passwdErrorMsg.isVisible() ).toBe(true);
  });
  
  this.Then(/^I must have no access to my mail-box$/, function () {
    MailBoxPage.open();
	expect( MailBoxPage.isLoggedIn() ).toBe(false);
  });
  
  this.Then(/^I have access to my mail-box$/, function () {
    expect( MailBoxPage.isLoggedIn() ).toBe(account.email);
  });

  this.Given(/^I'm logged in to my mail-box$/, function () {
    LoginPage.login(account);
  });

  this.When(/^I sign out$/, function () {
    MailBoxPage.signOut();
  });
  
  this.Then(/^I see password page for my account$/, function () {
    expect( LoginPage.passwdInputField.waitForVisible() ).toBe(true);
    expect( LoginPage.emailDisplayed.getText() ).toBe(account.email);
  });
};
module.exports = myStepDefinitionsWrapper;
