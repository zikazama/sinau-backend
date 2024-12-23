const express = require('express');
const {getUsersSeq} = require('../controllers/userSeqController');
const {logger} = require('../middlewares/logger')

const router = express.Router();

// GET localhost:port/users
router.get('/', logger, getUsersSeq);

module.exports = router
