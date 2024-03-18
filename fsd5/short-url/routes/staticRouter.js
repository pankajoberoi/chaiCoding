const express=require("express")
const URL=require('../model/user')
const router=express.Router();


router.get('/',async (req,res)=>{
    const allUrls=await URL.find({});
    return res.render("home",{
        urls:allUrls
    })
})

module.exports=router