const express = require('express');

const { loginAction } = require('./../controllers/authController')

const router = express.Router();

// GET localhost:port/users
router.post('/login', loginAction);

module.exports = router