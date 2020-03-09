const route =require('express').Router()
route.get('/',(req,res)=>{
    res.send("visiable all users")

})
exports = module.exports=route