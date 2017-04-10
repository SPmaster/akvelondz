var Page = require('./page')

var LoginPage = Object.create(Page, {

    emailInputField:   { get: function () { return browser.element('#Email'); }},
    passwdInputField:  { get: function () { return browser.element('input#Passwd'); }},
    nextButton:        { get: function () { return browser.element('#next'); }},
    signInButton:      { get: function () { return browser.element('#signIn'); }},
    emailDisplayed:    { get: function () { return browser.element('span*=@gmail'); }},
    passwdErrorMsg:    { get: function () { return browser.element('#errormsg_0_Passwd');}},

    login: { value: function(account) {
        if ( !browser.getUrl().startsWith('https://mail.google.com/') ){
            if ( this.emailInputField.isVisible() ) {
                this.submitEmail(account.email);
            }
            this.submitPasswd(account.passwd);
        }
    } },
    
    submitEmail: { value: function(email) {
		this.emailInputField.waitForVisible();
        this.emailInputField.setValue(email);
        this.nextButton.click();
    } },
    
    submitPasswd: { value: function(passwd) {
		this.passwdInputField.waitForVisible();
        this.passwdInputField.setValue(passwd);
        this.signInButton.click();
    } }
});
module.exports = LoginPage;
 