const express=require("express")
const route=express.Router()
const {createUrl,getURL} =require("../controller/urlController")



route.post('/url/shorten',createUrl)
route.get("/:urlCode",getURL)

route.all("/*",function(req,res){ 
    return res.status(404).send({status:false,msg:"path not found"})
})


module.exports=route