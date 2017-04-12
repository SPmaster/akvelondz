var MailBoxPage = require('../step_definitions/pageobjects/mailbox.page');
var account = require('../testdata/account');

module.exports = function () {

    this.Before(function() {
        MailBoxPage.acceptAlerts();
    });
    
    this.After({tags: ["@cleanup"]}, function() {
            MailBoxPage.rmDrafts();
    });
    
};