const {fetchUsers, addUser, findUserById} = require('./../service/userService');

const getUsers = (req, res) => {
  const query = req.query;
  let users = fetchUsers(req);
  if(query.name){
    users = users.filter(user => user.name.toLowerCase().includes(query.name.toLowerCase()));
  }
  res.json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = addUser(name, email);
  res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = findUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

module.exports = { getUsers, createUser, getUserById };