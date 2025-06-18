const { validateLogin } = require("../services/loginService");
const { validateLoginInput } = require("../validation/loginValidation");
// let model=require("../models/loginmodel");
exports.renderLoginPage = (req, res) => {
  res.render("login");
};

exports.handleLogin = (req, res) => {
  const { email, password ,role} = req.body;

  const validation = validateLoginInput(email, password);
  if (!validation.valid) {
    return res.send(validation.message);
  }

  validateLogin(email, password,role)
    .then(user => {
      if(user.role=="ADMIN")
      {
        res.render("admin.ejs",{adminname:user.username});
      }
      else{
        res.render("userDashboard.ejs",{username:user.username});
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      res.status(500).send("Internal Server Error");
    });
};
