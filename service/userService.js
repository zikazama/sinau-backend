const users = require('../models/userModel');

// Mengambil semua user
const fetchUsers = () => {
  return users;
};

// Menambahkan user baru
const addUser = (name, email) => {
  const newUser = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  return newUser;
};

const findUserById = (id) => {
  return users.find((user) => user.id === id);
};

module.exports = { fetchUsers, addUser, findUserById };
