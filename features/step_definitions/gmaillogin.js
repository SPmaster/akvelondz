var myStepDefinitionsWrapper = function () {

  this.Given(/^I browse "([^"]*)"$/, function (url) {
    browser.url(url);
  });
    
  this.Given(/^I "([^"]*)" see password page for "([^"]*)"$/, {timeout: 6000 * 1000}, function (must, account) {
	  // browser.debug();
	  if(!must){
	   if(!browser.isVisible('input#Passwd')){
        if(browser.getTitle().includes(account)) {
           browser.click('//*/div[1]/div[1]/div[2]/div[4]/div[1]/a/span');
           browser.click('=Sign out');
       }
        if(browser.isVisible('input#Email')){
           browser.setValue('input#Email', account);
           browser.click('#next');
       }
	   }
	  }
	  browser.waitForVisible('input#Passwd');
	  expect(browser.isVisible('input#Passwd')).toBe(true);
	  expect(browser.getText('span*=@gmail')).toBe(account);
  });
   
  this.Given(/^I fill in "([^"]*)" field with "([^"]*)"$/, function (selector, content) {
   browser.waitForVisible(selector);
   browser.setValue(selector, content);
  });
  
  this.Then(/^Account is "([^"]*)"$/, function (account) {
    expect(browser.getTitle()).toContain(account);
  });
  
  this.Given(/^I "([^"]*)" have access to "([^"]*)"$/, function (must, url) {
    if(!must){
	browser.waitForVisible('input#Passwd');
	browser.setValue('input#Passwd', 'oon9ahquohTi4mai');
	browser.click('#signIn');
	}
	if(browser.getUrl()!= url){
		browser.url(url);
		if (browser.alertText()) browser.alertAccept();
	}
    expect(browser.getUrl()).toBe(url);
  });
   
  this.When(/^I click "([^"]*)"$/, function (selector) {
   if(selector == "=Sign out") browser.click('//*/div[1]/div[1]/div[2]/div[4]/div[1]/a/span');
   browser.waitForExist(selector);
   browser.click(selector);
  });
   
  this.Then(/^I see "([^"]*)"$/, function (selector) {
	expect(browser.isVisible(selector)).toBe(true);
  });
  
  this.Then(/^I must have no access to "([^"]*)"$/, function (url) {
    browser.url(url);
    expect(browser.getUrl()).not.toBe(url);
  });
};
module.exports = myStepDefinitionsWrapper;
