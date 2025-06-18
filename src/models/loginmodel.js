const conn = require("../config/db");

exports.getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    conn.query(sql, [email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length ? result[0] : null);
      }
    });
  });
};
