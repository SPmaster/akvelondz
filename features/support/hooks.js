var MailBoxPage = require('../step_definitions/pageobjects/mailbox.page');
var account = require('../testdata/account');

module.exports = function () {

    this.Before(function() {
        MailBoxPage.acceptAlerts();
    });
    
    this.Before({tags: ["@loggedin"]}, function() {
        if ( !MailBoxPage.isLoggedIn() ) {
            MailBoxPage.login(account);
        }
    });
    
    this.After({tags: ["@rmdrafts"]}, function() {
        if ( MailBoxPage.isLoggedIn() ) {
            MailBoxPage.rmDrafts();
        }
    });
    
    


};