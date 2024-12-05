const {fetchUsers, addUser} = require('./../service/userService');

const getUsers = (req, res) => {
  const users = fetchUsers();
  res.json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = addUser(name, email);
  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };