let conn = require("../config/db.js");

// exports.saveUser = (regData, callback) => {
//   const sql = "INSERT INTO users (name, email, contact, username, password, role) VALUES (?, ?, ?, ?, ?, ?)";
//   const values = [regData.name, regData.email, regData.contact, regData.username, regData.password, regData.role];

//   conn.query(sql, values, callback);
// }
// 
// ;

exports.SaveUser=(username,email,password,role)=>{
  return new Promise((resolve,reject)=>{
      let sql="INSERT INTO users (username,email,password,role) VALUES (?, ?, ?, ?)";
      conn.query(sql,[username,email,password,role],(err,result)=>{
        if(err)
        {
          reject(err);
        }
        else{
          resolve(result);
        }
      })
  })
}

