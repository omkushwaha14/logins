const express =require('express')
const session =require('express-session')
const passport =require('./passport')
const PORT = process.env.PORT || 5432
const path= require ('path')
const http = require('http')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())
app.set ("view engine","hbs")
app.use ('/private',require('./routes/private'))
app.use ('/public',require('./routes/public'))
app.use('/',require('./routes/root'))

app.listen(PORT, () => {
    console.log("Server listening on port");
});
