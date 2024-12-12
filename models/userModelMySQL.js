// src/models/userModel.js
const db = require('../utils/mysql');
const bcrypt = require('bcrypt');

class UserModel {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async create(userData) {
    const { name, email, password } = userData;
    const salt = await bcrypt.genSalt(10);
    // Hash password with salt
    const hashPassword = await bcrypt.hash(password.toString(), salt);
    console.log(hashPassword);
    const [result] = await db.query(
      'INSERT INTO users (name, email) VALUES (?, ?, ?)',
      [name, email, hashPassword]
    );
    return result.insertId;
  }

  async update(id, userData) {
    const { name, email } = userData;
    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = new UserModel();
