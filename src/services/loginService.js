const loginModel = require("../models/loginModel");

exports.validateLogin = (email, password) => {
  return loginModel.getUserByEmail(email).then(user => {
    if (!user) return null;
    // In production, use bcrypt to compare hashed passwords
    if (user.password === password) {
      return user;
    }
    return null;
  });
};
