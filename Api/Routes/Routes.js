const userRoutes = require('./OtpAuth.route')
const userprofile = require('./Userprofile.route')
const databaseRoutes = require('./Database.route')

module.exports = function (app){
    app.use('/',userRoutes)
    app.use('/', userprofile)
    app.use('/', databaseRoutes)
}
