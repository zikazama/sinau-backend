const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    if (req.headers.token) {
      const decoded = jwt.verify(req.headers.token, 'secret');   
      req.username = decoded.username;
      next(); 
    }

    throw new Error('Unauthorized');
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
  
};

module.exports = {auth}
