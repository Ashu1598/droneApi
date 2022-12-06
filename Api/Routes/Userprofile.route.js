const router = require("express").Router()
const config = require('../../config/config')

router.post("/User", (req, res) => {
    const sql = "INSERT INTO User ( user_name , mobile_number, role) values(?,?,?)"
    config.dbConfig.query(
      sql,
      [
        "Ashu", "8327700242","address","Ashu@1598",
      ],
      (err, results, fields) => {
        if (!err){
        console.log(results)
        } else {
          console.log(err);
        }
      }
    );
  });

  module.exports = router