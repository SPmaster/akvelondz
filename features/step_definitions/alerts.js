var NewMailPage = require('./pageobjects/newmail.page');

module.exports = function () {
  
  this.When(/^I send email$/, function () {
    NewMailPage.send();
  });

  this.Then(/^I see "([^"]*)" alert$/, function (alertType) {
    if (alertType == "warning") {
        expect( NewMailPage.dismissAlerts() ).toBe(true);
    } 
    if (alertType == "error") {
        expect( NewMailPage.hasErrorAlert() ).toBe(true);  
    }
  }); 
};