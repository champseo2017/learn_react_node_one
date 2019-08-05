const passport = require('passport')
const passportService = require('./service/passport')
const requireSignin = passport.authenticate('local', {session:false})
const requireAuth = passport.authenticate('jwt', {session:false})
const users = require('./controllers/Users')

module.exports = function (app) {
    app.get('/', function(req, res){
        res.send({message:'itService'})
    })
    app.post('/signin', requireSignin, users.signin)
    app.get('/users', requireAuth,users.findAll)
    app.post('/users', requireAuth,users.create)
    app.get('/users/:id', requireAuth,users.findById)
    app.put('/users/:id', requireAuth,users.update)
    app.delete('/users/:id', requireAuth,users.delete)
}