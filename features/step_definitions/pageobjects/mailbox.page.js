var Page = require('./page')

var MailBoxPage= Object.create(Page, {

    accountMenu:   { get: function () { return browser.element('a[title*=Account]'); }},
    signOutButton: { get: function () { return browser.element('=Sign out'); }},
    
    signOut: { value: function() {
        this.accountMenu.click();
		this.signOutButton.click();
    }}
    
});
module.exports = MailBoxPage;