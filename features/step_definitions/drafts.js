var MailBoxPage = require('./pageobjects/mailbox.page');
var NewMailPage = require('./pageobjects/newmail.page');
var maildata = require('../testdata/maildata');

module.exports = function () {
  
  this.Given(/^Drafts folder is empty$/, function () {
    MailBoxPage.rmDrafts();
  });
  
  this.Given(/^I'm writing a new email$/, function () {
    MailBoxPage.compose();
  });
  
  this.When(/^I close email without sending it$/, function () {
    NewMailPage.closeEmail();
  });
  
  this.Then(/^I can open it from Drafts folder$/, function () {
    MailBoxPage.gotoDrafts();
    MailBoxPage.openNthInList(0);
  });
  
  this.When(/^I add "([^"]*)" to the email$/, function (dataType) {
    this.case = dataType;
    switch(this.case){
       case 'subject':
       NewMailPage.setSubject(maildata.subject);
       break;
       
       case 'recipient':
       NewMailPage.setTo(maildata.to);
       break;
       
       case 'Cc':
       NewMailPage.setCc(maildata.cc);
       break;
       
       case 'img url':
       NewMailPage.addImgUrl(maildata.url);
       break;
       
       case 'Google drive file':
       NewMailPage.addGdoc();
       break;
       
       case 'local attachment file':
       NewMailPage.addFile(maildata.local.path);
       break;
       
       case 'not valid email':
       NewMailPage.setTo(maildata.wrongTo);
       break;
   }
  });
  
  this.Then(/^Added data is on its place$/, function () {
    switch(this.case){
       case 'subject':
       expect( NewMailPage.getSubject() ).toBe(maildata.subject);
       break;
       
       case 'recipient':
       expect( NewMailPage.getTo() ).toBe(maildata.to);
       break;
       
       case 'Cc':
       expect( NewMailPage.getCc() ).toBe(maildata.cc);
       break;
       
       case 'img url':
       expect( NewMailPage.getImgUrl() ).toBe(maildata.url);
       break;
       
       case 'Google drive file':
       expect( NewMailPage.getGdoc() ).toBe(maildata.gdoc);
       break;
       
       case 'local attachment file':
       this.afname = NewMailPage.getFileName();
       this.ofname = maildata.local.name;
       expect( this.afname ).toBe(this.ofname);
       break;
   }
  });

  this.Then(/^I.* discard draft$/, function () {
    NewMailPage.discard();
  });
  
  this.When(/^I do nothing$/, function () {
    browser.pause(5*1000);
  });
  
  this.Then(/^It will not be saved in Drafts$/, function () {
    expect( MailBoxPage.getDraftsNum() ).toEqual(0);
  });
  
  this.Then(/^I can undo discard$/, function () {
    NewMailPage.undoDiscard();
  });
};