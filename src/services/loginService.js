const loginModel = require("../models/loginModel");

exports.validateLogin = (email, password,role) => {
  return loginModel.getUserByEmail(email,password,role).then(user => {
    if (!user) return null;
    // In production, use bcrypt to compare hashed passwords
    return user;
  });
};
