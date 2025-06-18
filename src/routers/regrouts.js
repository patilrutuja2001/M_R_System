const express = require("express");
const router = express.Router();

const regCtrl= require("../controllers/regCtrl"); // ✅ Import both properly


router.get("/index", regCtrl.indexpage);

router.get("/login", regCtrl.Login); // this will render views/login.ejs

router.get("/register",regCtrl.RegisterUser);// this will render views/register.ejs


router.post("/save", regCtrl.SaveUserRegister); 

module.exports = router;
