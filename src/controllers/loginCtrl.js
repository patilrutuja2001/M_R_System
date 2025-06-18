const { validateLogin } = require("../services/loginService");
const { validateLoginInput } = require("../validation/loginValidation");

exports.renderLoginPage = (req, res) => {
  res.render("login");
};

exports.handleLogin = (req, res) => {
  const { email, password } = req.body;

  const validation = validateLoginInput(email, password);
  if (!validation.valid) {
    return res.send(validation.message);
  }

  validateLogin(email, password)
    .then(user => {
      if (user) {
        res.send("Login successful!");
      } else {
        res.send("Invalid email or password.");
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      res.status(500).send("Internal Server Error");
    });
};
