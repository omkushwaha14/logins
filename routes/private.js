const route =require('express').Router()
route.get('/',(req,res)=>{
    if(req.user) {
        res.send("visiable to login user user")
    } else{
        res.redirect('/login')
    }

})
exports= module.exports=route