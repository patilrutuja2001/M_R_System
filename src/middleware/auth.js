exports.isAdmin = (req, res, next) => {
  if (req.session.role === "admin") {
    next();
  } else {
    res.status(403).send("Access denied");
  }
};
exports.isUser = (req, res, next) => {
  if (req.session.role === "user") {
    next();
  } else {
    res.status(403).send("Access denied");
  }
};
