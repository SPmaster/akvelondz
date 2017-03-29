function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function () {
    browser.url('http://gmail.com/')
}
Page.prototype.getTitle = function () {
    return browser.getTitle()
}
module.exports = new Page()