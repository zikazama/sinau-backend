const express = require('express');
const {getUsers, createUser, getUserById} = require('../controllers/userController');

const router = express.Router();

// GET localhost:port/users
router.get('/', getUsers);

// GET localhost:port/users/:id
router.get('/:id', getUserById);

// POST localhost:port/users
router.post('/', createUser);

module.exports = router