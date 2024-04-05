const express = require("express");
const { connectMongoDb } = require("./connection");
const path = require("path");

const { restrictToLoggedInUserOnly }=require('./middleware/auth')


const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRoute=require('./routes/user');
const cookieParser = require("cookie-parser");



const app = express();
const PORT = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/URL-SHORTNER").then(() => {
  console.log("MONGO DB CONNECTED");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url",restrictToLoggedInUserOnly ,urlRouter); //backend
app.use('/user',userRoute);
app.use("/",staticRouter); //frontend

//analytics pending

app.listen(PORT, () => {
  console.log(`server listing at Port ${PORT}`);
});
