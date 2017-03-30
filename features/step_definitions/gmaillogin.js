var LoginPage = require('./pageobjects/login.page');
var MailBoxPage = require('./pageobjects/mailbox.page');
var account = {
    empty : '',
    wrong : 'abc'
};
const boxUrl = 'https://mail.google.com/';

var myStepDefinitionsWrapper = function () {
  
  this.Given(/^I have "([^"]*)" email with "([^"]*)" password$/, function (email, passwd) {
    account.email = email;
    account.passwd = passwd;
  });
  
  this.Given(/^I browse my mail-box$/, function () {
    MailBoxPage.open();
  });

  this.Given(/^I go to password page$/, function () {
    if ( !LoginPage.passwdInputField.isVisible() ){
        if ( browser.getUrl().startsWith(boxUrl) ) MailBoxPage.signOut();
        if ( LoginPage.emailInputField.isVisible() ) LoginPage.submitEmail(account.email);
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
	expect( browser.getUrl().startsWith(boxUrl) ).not.toBe(true);
  });
  
  this.Then(/^I have access to my mail-box$/, function () {
    if ( !browser.getUrl().startsWith(boxUrl) ) {
            MailBoxPage.open();
		    if (browser.alertText() ) browser.alertAccept();
        }
    expect( browser.getUrl().startsWith(boxUrl) ).toBe(true);
    expect( MailBoxPage.getTitle() ).toContain(account.email);
  });
  
  this.Given(/^I'm logged in to my mail-box$/, function () {
    if ( !browser.getUrl().startsWith(boxUrl) ) {
        LoginPage.open();
        LoginPage.emailInputField.isVisible() ? LoginPage.login(account) : LoginPage.submitPasswd(account.passwd);
    }
  });
  
  this.When(/^I sign out$/, function () {
   MailBoxPage.signOut();
  });
  
  this.Then(/^I see password page for my account$/, function () {
    LoginPage.passwdInputField.waitForVisible();
    expect( LoginPage.passwdInputField.isVisible() ).toBe(true);
    expect( LoginPage.emailDisplayed.getText() ).toBe(account.email);
  });
};
module.exports = myStepDefinitionsWrapper;
