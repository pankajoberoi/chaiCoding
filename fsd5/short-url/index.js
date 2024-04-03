const express = require("express");
const { connectMongoDb } = require("./connection");
const path = require("path");

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRoute=require('./routes/user')



const app = express();
const PORT = 8001;

connectMongoDb("mongodb://127.0.0.1:27017/URL-SHORTNER").then(() => {
  console.log("MONGO DB CONNECTED");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRouter); //backend
app.use('/user',userRoute);
app.use("/", staticRouter); //frontend

//analytics pending

app.listen(PORT, () => {
  console.log(`server listing at Port ${PORT}`);
});
