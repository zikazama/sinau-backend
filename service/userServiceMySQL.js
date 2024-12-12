// src/services/userService.js
const UserModel = require('../models/userModelMySQL');

class UserService {
  async fetchUsers() {
    return await UserModel.findAll();
  }

  async findUserById(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async addUser(userData) {
    // Add business logic/validation here
    if (!userData.email || !userData.name || !userData.password) {
      throw new Error('Name and email and password are required');
    }
    
    return await UserModel.create(userData);
  }

  async updateUser(id, userData) {
    const exists = await UserModel.findById(id);
    if (!exists) {
      throw new Error('User not found');
    }
    
    return await UserModel.update(id, userData);
  }

  async deleteUser(id) {
    const exists = await UserModel.findById(id);
    if (!exists) {
      throw new Error('User not found');
    }
    
    return await UserModel.delete(id);
  }
}

module.exports = new UserService();
