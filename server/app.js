const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const User = require("./model/userSchema");
dotenv.config({path:'./config.env'});
require("./db/conn");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const cookieParser = require("cookie-parser");
const connectDb = require("./db/conn");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));

app.use(cookieParser());

app.use(require("./router/auth"));

app.get("/", (req,res)=>{
    res.send("Hello home page");
})

app.get("/signup", (req,res)=>{
    res.send("Hello Signup page");
})

app.get("/signin", (req,res)=>{
    res.send("Hello Signin page");
})

connectDb().then(()=>{
    app.listen(port, () => {
        console.log(`server is running at port: ${port}`);
    });
});
