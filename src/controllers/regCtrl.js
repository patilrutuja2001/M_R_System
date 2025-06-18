
const RegService = require("../services/regservice.js");
let model=require("../models/regmodel.js");

exports.indexpage = (req, res) => {
   res.render("index"); 
  //res.send("i am home page");
};

exports.Login=(req,res)=>{
      res.render("login.ejs")
}

exports.RegisterUser=(req,res)=>{
   res.render("register.ejs");
}

exports.SaveUserRegister=(req,res)=>{
  let {username,email,password,role}=req.body;
  model.SaveUser(username,email,password,role).then(()=>{
    res.send("user register succesfulyy");
  }).catch((err)=>{
        console.log(err);
  })
}


   

