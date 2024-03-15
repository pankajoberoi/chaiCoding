const express = require("express")
const { connectMongoDb }=require("./connection");
const urlRouter = require("./routes/url");
const URL=require("./model/user")
const app=express();
const PORT=8001;

connectMongoDb("mongodb://127.0.0.1:27017/URL-SHORTNER").then(()=>{
    console.log("MONGO DB CONNECTED")
})

app.use(express.json())

app.use("/url",urlRouter)

app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId
    const entry= await URL.findOneAndUpdate({shortId},
        {$push:{
            visitHistory:{timestamp:Date.now()}
        }
    })
    res.redirect(entry.redirectURL)
})


app.listen(PORT,()=>{
    console.log(`server listing at Port ${PORT}`)
})

