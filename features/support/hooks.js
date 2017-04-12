var MailBoxPage = require('../step_definitions/pageobjects/mailbox.page');
var NewMailPage = require('../step_definitions/pageobjects/newmail.page');

module.exports = function () {

    this.Before(function() {
        MailBoxPage.acceptAlerts();
    });
    
    this.After({tags: ["@cleanup"]}, function() {
        NewMailPage.discardAllActive();
        MailBoxPage.rmDrafts();
    });
    
};