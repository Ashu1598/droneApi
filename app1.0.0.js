const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();
const router = require('./Api/Routes/User.routes')

app.use(cors({
  origin: "*"
}))
app.use(bodyparser.json())
app.use("/", router)
app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

