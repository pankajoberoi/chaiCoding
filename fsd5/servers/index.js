const http=require("http")

const myServer=http.createServer((req,res)=>{
    console.log("new request received")

    // console.log(req.headers);
    console.log(req)

    res.end("hello form the server")
})


myServer.listen(8000,()=>{
    console.log("server started")
})