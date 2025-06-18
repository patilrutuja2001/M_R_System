/*const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const initDB = require("./config/db.config");

const app = express();

// Initialize DB
initDB();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'client')));

// Route to serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

module.exports = app;*/

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const initDB = require("./config/db.config");

// Import Routes
const regRoutes = require("./routers/regrouts");
const loginRoutes = require("./routers/loginRoutes");
const adminRoutes = require("./routers/adminRoutes");
const userRoutes = require("./routers/userRoutes");

const app = express();

// Initialize DB
initDB();

// Set view engine
app.set("view engine", "ejs");

// Session middleware
app.use(session({
  secret: "secretKey",
  resave: false,
  saveUninitialized: false
}));

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'client')));

// Routes
app.use("/", regRoutes);
app.use("/", loginRoutes);
app.use("/", adminRoutes);
app.use("/", userRoutes);

// Optional: Homepage (only if you use index.html for landing)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

module.exports = app;
