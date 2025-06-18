const adminService = require("../services/adminService");

exports.adminDashboard = (req, res) => {
  adminService.fetchAllUsers()
    .then(users => {
      res.render("adminDashboard", { user: req.session.user, users });
    })
    .catch(err => {
      console.error("Error loading admin dashboard:", err);
      res.status(500).send("Server Error");
    });
};