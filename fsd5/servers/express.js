//log maintain
const http=require("http")
const express=require("express")

const app=express()//instance

// http://localhost:8000/about?myname=pankaj&userId=1
app.get("/",(req,res)=>{
    return res.send("Homepage")
})

app.get("/about",(req,res)=>{
    return res.send("hello from about page" + " hey " + req.query.myname + " my id is " + req.query.userId)
})


const myServer=http.createServer(app)

app.listen(8000,()=>{console.log("server started")})



