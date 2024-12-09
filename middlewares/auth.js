const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  if (req.headers.token) {
    const decoded = jwt.verify(req.headers.token, 'secret');   
    req.username = decoded.username;
    next(); 
  }
  else res.status(401).send("Unauthorized");
};

module.exports = {auth}
