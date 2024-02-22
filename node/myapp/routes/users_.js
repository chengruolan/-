var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userControllers');

router.post('/user', function (req, res, next) {
  UserController.addUser(req, res);
});

router.put('/user/:id', function (req, res, next) {
  UserController.updateUser(req, res);
});

router.delete('/user/:id', function (req, res, next) {
  UserController.deleteUser(req, res);
});

router.get('/user', function (req, res, next) {
  UserController.getUsers(req, res);
});
module.exports = router;
