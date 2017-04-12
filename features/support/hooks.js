var MailBoxPage = require('../step_definitions/pageobjects/mailbox.page');

module.exports = function () {

    this.Before(function() {
        MailBoxPage.acceptAlerts();
    });
    
    this.After({tags: ["@cleanup"]}, function() {
            MailBoxPage.rmDrafts();
    });
    
};