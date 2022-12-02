const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express()
const router = require("./Api/Routes/User.routes")
const config = require("./config/config")

app.use(
  cors({
    origin: "*",
  })
)
app.use(bodyparser.json())
app.use("/", router)
app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
  console.log("hi")
})