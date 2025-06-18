// src/routes/adminRouter.js
/*const express = require("express");
const router = express.Router();

router.get("/admin/dashboard", (req, res) => {
  res.send("Welcome to Admin Dashboard");
});

module.exports = router;*/

const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middleware/auth");
const adminController = require("../controllers/adminController");

router.get("/admin/dashboard", isAdmin, adminController.adminDashboard);

module.exports = router;
