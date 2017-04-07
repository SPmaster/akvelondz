function Page () {
}

Page.prototype.open = function () {
    browser.url('http://gmail.com/');
    try {
        if(browser.alertText()) browser.alertAccept();
    }catch (e){
    }
}
Page.prototype.acceptAlerts = function () {
    try {
        if(browser.alertText()) browser.alertAccept();
        return true;
    }catch (e){
        return false;
    }
}
Page.prototype.dismissAlerts = function () {
    try {
        if(browser.alertText()) browser.alertDismiss();
        return true;
    }catch (e){
        return false;
    }
}
Page.prototype.getTitle = function () {
    return browser.getTitle()
}
Page.prototype.getUrl = function () {
    return browser.getUrl()
}
module.exports = new Page()