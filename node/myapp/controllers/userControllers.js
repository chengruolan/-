const UserServices = require('../services/userServices');
const UserController = {
  addUser: async (req, res) => {
    const { username, password, age } = req.body;
    let data = await UserServices.addUser({ username, password, age });
    res.send({ ok: 1, data });
  },
  updateUser: async (req, res) => {
    const { username, password, age } = req.body;
    let data = await UserServices.updateUser(req.params.id, { username, password, age });
    res.send({ ok: 1, data });
  },
  deleteUser: async (req, res) => {
    let data = await UserServices.deleteUser(req.params.id);
    res.send({ ok: 1, data });
  },
  getUsers: async (req, res) => {
    let data = await UserServices.getUsers();
    res.send({ ok: 1, data });
  },
};

module.exports = UserController;
