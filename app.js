const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express()
const config = require("./config/config")

app.use(
  cors()
)
app.use(bodyparser.json())
require('./Api/Routes/Routes')(app)


app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
  console.log("hi")
})

config.dbConfig.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");
})