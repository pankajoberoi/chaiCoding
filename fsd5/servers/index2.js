//log maintain
const http=require("http")
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req,res)=>{
    const log=`\n ${Date.now()}: ${req.url} new request received \n `
    const myurl=url.parse(req.url,true)
    console.log(myurl)
    if(req.url === '/favicon.ico'){
        return res.end();
    }
    fs.appendFile("log.txt", log ,(err,data)=>{
        switch(myurl.pathname){
            case '/':
                res.end("HomePage")
                break;
            case '/about':
                const username=myurl.query.myname
                res.end(`Hi ${username}`)
                break;
            case '/contact':
                res.end("123456789")
                break;
            case '/help/chat':
                res.end("chatbox")
                break;
            case '/search':
                const search=myurl.query.search_query
                res.end("here are your results " + search);
            default:
                res.end("404 not found!!!")
        }
    })
    
})


myServer.listen(8000,()=>{
    console.log("server started")
})

// https://www.pankaj.com/about?userId=1&name=node.js&location

// https://www.google.com/search?q=javascript&rlz=1C1CHBD_enIN1061IN1061&oq=java&gs_lcrp=EgZjaHJvbWUqDQgEEAAYgwEYsQMYgAQyDwgAEEUYORiDARixAxiABDIGCAEQRRhAMgYIAhBFGDsyDAgDECMYJxiABBiKBTINCAQQABiDARixAxiABDIGCAUQRRg9MgYIBhBFGD0yBggHEEUYPNIBCDMxNjFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8


// https://www.youtube.com/watch?v=eD16g9RRKtw

