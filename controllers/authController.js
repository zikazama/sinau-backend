const { login } = require("./../service/authService");

const loginAction = (req, res) => {
  try {
    // fetch('http://example.com')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    const result = login(req.body);
    if(!result) throw new Error('Token kosong')
    res.status(200).json({
      token: result,
    });
  } catch (error) {
    res.status(401).json({
      error: error,
    });
  }
};

module.exports = { loginAction };
