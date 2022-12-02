
const mysql = require('mysql')
module.exports.port = 8000

module.exports.dbConfig = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:"root",
    password:"root"
})

module.exports.otpConfig = {
    // accountSid : 'AC2890ec3646d3700c9bf55c4780efb596',
    // authToken : '82a0d6f1aa9f808634986e808dae4461',
    // SSID : 'VAafa8984dfe519345b833e014d29e1981'
}

