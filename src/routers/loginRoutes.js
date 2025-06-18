const express = require("express");
const router = express.Router();
const loginCtrl = require("../controllers/loginCtrl");

router.get("/login", loginCtrl.renderLoginPage);
router.post("/login", loginCtrl.handleLogin);

module.exports = router;
