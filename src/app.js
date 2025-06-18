
const express=require("express");
const router = require("./routers/regrouts.js");

const loginRoutes = require("./routers/loginRoutes");
const conn = require("./config/db");

// Correct — if your app.js is in src/
//const app = require("../src/app"); 

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 
app.set('view engine', 'ejs')

app.use("/", router)
app.use("/", loginRoutes);
module.exports = app;