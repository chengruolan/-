const UserModel = require('../model/userModel');
const UserServices = {
  addUser: function (user) {
    return UserModel.create(user);
  },
  updateUser: function (id, user) {
    return UserModel.updateOne({ _id: id }, user);
  },
  deleteUser: function (id) {
    return UserModel.deleteOne({ _id: id });
  },
  getUsers: function (id) {
    return UserModel.find({}, ['username', 'age']);
  },
  getUser: function (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(id);
      }, 1000);
    });
  },
};

module.exports = UserServices;
