const db = require("../config/db");

exports.getAllUsers = (callback) => {
  const query = "SELECT * FROM users";
  db.query(query, callback);
};
