const router = require("express").Router()
const twilio = require("twilio")
const config = require("../../config/config")

const client = twilio(config.otpConfig.accountSid, config.otpConfig.authToken)
router.post("/mobile", (req, res) => {
  client.verify
    .services(config.otpConfig.SSID)
    .verifications.create({
      to: `+91${req.dody.number}`,
      channel: "sms",
    })
    .then((res) => {
      console.log("response", res)
      res.status(200).json({ res })
    })
})

router.post("/otp", (req, res) => {
  const { otp } = req.body
  client.verify
    .services(config.otpConfig.SSID)
    .verificationChecks.create({
      to: `+91${req.dody.number}`,
      code: otp,
    })
    .then((res) => {
      console.log("respone", res)
      res.status(200).json(res.status)
    })
})

module.exports = router
