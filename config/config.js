const mysql = require("mysql")
module.exports.port = 8001

module.exports.dbConfig = mysql.createConnection({
  host: "localhost",
//   port: "3306",
  user: "root",
  password: "root",
  database: "droneapp"
})

module.exports.otpConfig = {
  //   accountSid: "AC2890ec3646d3700c9bf55c4780efb596",
//   authToken: "89a0e0f8887b9a6b083f11b5c8ca02a5",
//   SSID: "VAafa8984dfe519345b833e014d29e1981",

SSID: "VAca8cbfbfbff83c9e937ad956860c166e",
accountSid: "AC5066d88a01ef3837646a0c847b63890a",
authToken: "d6080d4c6581398882d907c9abd4fef5",

}
