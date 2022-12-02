const router = require("express").Router()
const twilio = require("twilio")
const config = require("../../config/config")

const client = twilio(config.otpConfig.accountSid, config.otpConfig.authToken)

router.post("/mobile", (req, res) => {
  client.verify
    .services(config.otpConfig.SSID)
    .verifications.create({
      to: `+91${req.body.number}`,
      channel: "sms",
    })
    .then((resp) => {
      console.log("response", resp)
      res.status(200).json({ resp })
    })
})

router.post("/otp", (req, res) => {
  const { otp } = req.body
  client.verify
    .services(config.otpConfig.SSID)
    .verificationChecks.create({
      to: `+91${req.body.number}`,
      code: otp,
    })
    .then((rese) => {
      console.log("respone", rese)
      res.status(200).json(rese.status)
    })
})

module.exports = router
