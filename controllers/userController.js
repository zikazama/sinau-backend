const {fetchUsers, addUser, findUserById} = require('./../service/userServiceMySQL');

const getUsers = async (req, res) => {
  const query = req.query;
  let users = await fetchUsers(req);
  if(query.name){
    users = users.filter(user => user.name.toLowerCase().includes(query.name.toLowerCase()));
  }
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await addUser(req.body);
  res.status(201).json(newUser);
};

const getUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = await findUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};

module.exports = { getUsers, createUser, getUserById };