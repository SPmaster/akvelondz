var path = require('path');

var maildata = {
    subject : 'Some text for subject',
    to : '@gmail.com',
    cc : '@gmail.com',
    local : {
        path: '',
        name: 'attachment.txt'
    },
    url : 'http://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg',
    gdoc : 'Getting started',
    wrongTo : '',
};
maildata.local.path = path.join(__dirname, maildata.local.name);
maildata.to = Math.random().toString(36).substring(2) + maildata.to;
maildata.cc = Math.random().toString(36).substring(2) + maildata.cc;
maildata.wrongTo = Math.random().toString(36).substring(2);
module.exports = maildata;