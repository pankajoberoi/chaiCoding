const express = require("express");
const { connectMongoDb }=require("./connection")
const { logReqRes }=require("./middleware/index")
const userRouter=require("./Routes/user")
const app = express();
const PORT = 8000;
//connection
connectMongoDb("mongodb://127.0.0.1:27017/dholakpur").then(()=>{
  console.log("mongo db connected")
})

//middleware-plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"))

// Routes
app.use("/api/person",userRouter)



app.listen(PORT, () => console.log(`Server chal pey at ${PORT}`));
