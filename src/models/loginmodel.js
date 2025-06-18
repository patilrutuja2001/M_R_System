const conn = require("../config/db");

exports.getUserByEmail = (email,password,role) => {
  console.log(email,password,role)
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE email = ? and password=? and role=?";
    conn.query(sql, [email,password,role], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.length ? result[0] : null);
      }
    });
  });
};
