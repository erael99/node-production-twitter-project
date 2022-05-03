const path = require('path');
module.exports = {
    dbUrl: 'mongodb+srv://zen:az@cluster0.8vrua.mongodb.net/twitter',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key')
}