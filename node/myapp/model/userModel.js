const mongoose = require('mongoose');

const UserTypes = {
  username: String,
  password: String,
  age: Number,
};

const UserModel = mongoose.model('User', new mongoose.Schema(UserTypes));

module.exports = UserModel;
