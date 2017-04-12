var Page = require('./page')

var MailBoxPage= Object.create(Page, {

    accountMenu:     { get: function () { return browser.element('a[title*=Account]'); }},
    signOutButton:   { get: function () { return browser.element('=Sign out'); }},
    composeButton:   { get: function () { return browser.$$('[role=button]')[8]; }},
    mailsList:       { get: function () { return browser.$$('[role="main"] .Cp tr'); }},
    drafts:          { get: function () { return browser.$('a[href*="#drafts"]'); }},
    cachedLists:     { get: function () { return browser.$$('.BltHke'); }},
    selectAll:       { get: function () { return browser.$('[gh="mtb"] [role="checkbox"]'); }},
    discardSelected: { get: function () { return browser.$('[act="16"]'); }},
    closeEmailButton: { get: function () { return browser.$('img.Ha'); }},

    
        closeEmail: { value: function() {
        this.closeEmailButton.click();
    }},
  
    signOut: { value: function() {
        this.accountMenu.click();
		this.signOutButton.click();
    }},
    
    compose: { value: function() {
        this.composeButton.click();
    }},
    
    gotoDrafts: { value: function() {
        if (this.getUrl().includes('#drafts')) {
            browser.refresh();
            if ( this.dismissAlerts() ) {
                this.gotoDrafts();
            }
        } else {
            function isActiveList(list){
                return list.isVisible();
            };
            var activeList = this.cachedLists.find(isActiveList);
            this.drafts.waitForVisible();
            this.drafts.click();
            if ( this.dismissAlerts() ) {
                this.gotoDrafts();
            } 
            activeList.waitForVisible(5000, true);  
       }
    }},
    
    openNthInList: { value: function(n) {
        this.mailsList[n].waitForVisible();
        this.mailsList[n].click();
        return true;
    }},
    
    rmDrafts: { value: function() {
        if ( this.getDraftsNum() ){
            this.selectAll.click();
            this.discardSelected.click();
        }
    }},
    
    getDraftsNum: { value: function() {
        this.gotoDrafts();
        return this.mailsList.length;
    }}
    
});
module.exports = MailBoxPage;