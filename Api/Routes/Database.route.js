const router = require("express").Router()
const config = require("../../config/config")

router.post('/createDB', (req, res) => {
    config.dbConfig.query("CREATE DATABASE droneapp", (err, res) => {
        if (!err) {
            console.log('Database Created')
        } else {
            console.log(err);
        }
    })
});

router.post('/createTable', (req, res) => {
    var sql = "CREATE TABLE user (user_id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(255), mobile_number VARCHAR(255) UNIQUE, role VARCHAR(255) , email VARCHAR(255))";
    config.dbConfig.query( sql , (err , res)=>{
        if (!err) {
            console.log('Table Created')
        } else {
            console.log(err);
        }
    })
})


module.exports = router