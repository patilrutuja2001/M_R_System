const adminModel = require("../models/adminModels");

exports.fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    adminModel.getAllUsers((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};