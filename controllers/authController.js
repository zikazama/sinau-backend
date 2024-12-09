const {login} = require('./../service/authService')

const loginAction = (req, res) => {
  const result = login(req.body);
  res.json({
    token: result
  })
};

module.exports = { loginAction };
