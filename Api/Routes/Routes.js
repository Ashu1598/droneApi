const userRoutes = require('./OtpAuth.route')
const userprofile = require('./Userprofile.route')

module.exports = function (app){
    app.use('/',userRoutes)
    app.use('/', userprofile)
}
