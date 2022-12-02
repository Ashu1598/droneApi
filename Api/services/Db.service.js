const config = require('../../config/config')

const dbconnection = config.dbConfig.connect((err)=>{
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
})

module.exports = dbconnection