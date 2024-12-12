const User = require('../models/userModelMongo');

// Mengambil semua user
const fetchUsers = async (req) => {
    const users = await User.find();
    return users;
};

// Menambahkan user baru
const addUser = async (name, email, password) => {
  const newUser = {
    name,
    email,
    password
  };
  const data = await User.create(newUser);
  return data;
};

const findUserById = async(id) => {
    const user = await User.findById(id);
    return user;
};

module.exports = { fetchUsers, addUser, findUserById };
