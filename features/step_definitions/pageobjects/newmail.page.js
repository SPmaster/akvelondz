var Page = require('./page')

var NewMailPage= Object.create(Page, {
    
    closeEmailButton: { get: function () { return browser.$('img.Ha'); }},
    discardButton:    { get: function () { return browser.$('.oh'); }},
    discardUndo:      { get: function () { return browser.$('#link_undo'); }},
    subjectbox:       { get: function () { return browser.$('[name="subjectbox"]'); }},
    subject:          { get: function () { return browser.$('[name="subject"]'); }},
    toField:          { get: function () { return browser.$('textarea[name="to"]'); }},
    toVal:            { get: function () { return browser.$('input[name="to"]'); }},
    ccLink:           { get: function () { return browser.$('[data-tooltip*="C)"]'); }},
    ccField:          { get: function () { return browser.$('textarea[name="cc"]'); }},
    ccVal:            { get: function () { return browser.$('input[name="cc"]'); }},
    body:             { get: function () { return browser.$('[name="body"]'); }},
    addFileButton:    { get: function () { return browser.$('[command="Files"]'); }},
    addImgButton:     { get: function () { return browser.$('[command="image"]'); }},
    addUrlButton:     { get: function () { return browser.$('[command="+link"]'); }},
    addUrlField:      { get: function () { return browser.$('#linkdialog-onweb-tab-input'); }},
    okButton:         { get: function () { return browser.$('button[name="ok"]'); }},
    ahrefInBody:      { get: function () { return browser.$('table.iN a'); }},
    addDocsButton:    { get: function () { return browser.$('[command="docs"]'); }},
    gdPickerFrame:    { get: function () { return browser.$('.picker-dialog iframe'); }},
    gdDoc:            { get: function () { return browser.$('[data-target="itemUploadDrop"]'); }},
    gdInsertButton:   { get: function () { return browser.$('[id="picker:ap:0"]'); }},
    gdInBody:         { get: function () { return browser.$('a span[dir="ltr"]'); }},
    fileName:         { get: function () { return browser.$('div.vI'); }},
    sendButton:       { get: function () { return browser.$('[data-tooltip*="Enter)"]'); }},
    errorAlert:       { get: function () { return browser.$('[role="alertdialog"]'); }},

        
    closeEmail: { value: function() {
        this.closeEmailButton.click();
    }},
    
    discard: { value: function() {
        this.discardButton.click();
    }},
    
    undoDiscard: { value: function() {
        this.discardUndo.waitForVisible();
        this.discardUndo.click();
    }},
    
    setSubject: { value: function(data) {
        this.subjectbox.click();
        this.subjectbox.setValue(data);
    }},
    
    getSubject: { value: function() {
        this.subject.waitForValue();
        return this.subject.getValue();
    }},
    
    setTo: { value: function(data) {
        this.toField.click();
        this.toField.setValue(data);
    }},
    
    getTo: { value: function() {
        this.toVal.waitForValue();
        return this.toVal.getValue();
    }},
    
    setCc: { value: function(data) {
        this.toField.click();
        this.ccLink.click();
        this.ccField.click();
        this.ccField.setValue(data);
    }},
    
    getCc: { value: function() {
        this.ccVal.waitForValue();
        return this.ccVal.getValue();
    }},
    
    addImgUrl: { value: function(data) {
        this.addUrlButton.click();
        this.addUrlField.setValue(data);
        this.okButton.click();
    }},
    
    getImgUrl: { value: function() {
        this.ahrefInBody.waitForVisible();
        return this.ahrefInBody.getAttribute('href');
    }},
    
    addGdoc: { value: function() {
        this.addDocsButton.click();
        let gdpf = this.gdPickerFrame.value;
        browser.frame(gdpf);
        this.gdDoc.waitForVisible();
        this.gdDoc.click(); 
        this.gdInsertButton.click();
        browser.frame();
    }},
   
    getGdoc: { value: function() {
        this.gdInBody.waitForVisible();
        return this.gdInBody.getText();
    }},
    
    addFile: { value: function(path) {
        this.addFileButton.click();
        browser.chooseFile('input[type*="file"]', path); 
    }},
   
    getFileName: { value: function() {
        this.fileName.waitForVisible();
        return this.fileName.getText();
    }},
    
    send: { value: function() {
        this.sendButton.click();
    }},
    
    hasErrorAlert: { value: function() {
        return this.errorAlert.waitForVisible();
    }}
});
module.exports = NewMailPage;