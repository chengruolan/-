var express = require('express');
var router = express.Router();
const UserModel = require('../model/userModel');
/* GET users listing. */
// router.get('/', function (req, res, next) {
//   console.log(req.cookies);
//   res.cookie('11123123', '1231111111111');
//   res.send('use');
// });
router.post('/user/add', function (req, res, next) {
  console.log(req.body);
  const { username, password, age } = req.body;
  UserModel.create({ username, password, age })
    .then((data) => {
      res.send({ ok: 1, data });
    })
    .catch(() => {
      res.send({ error: '错误' });
    });
});

router.post('/user/update/:id', function (req, res, next) {
  console.log(req.body, req.params.id);
  const { username, password, age } = req.body;
  UserModel.updateOne({ _id: req.params.id }, { username, password, age })
    .then((data) => {
      res.send({ ok: 1, data });
    })
    .catch(() => {
      res.send({ error: '错误' });
    });
});

router.get('/user/delete/:id', function (req, res, next) {
  console.log(req.params.id);
  const { username, password, age } = req.body;
  UserModel.deleteOne({ _id: req.params.id })
    .then((data) => {
      res.send({ ok: 1, data });
    })
    .catch(() => {
      res.send({ error: '错误' });
    });
});

router.get('/user/list', function (req, res, next) {
  console.log(req.params.id);
  // const { username, password, age } = req.body;
  UserModel.find({}, ['username', 'age'])
    .sort({ age: 1 })
    .then((data) => {
      res.send({ ok: 1, data });
    })
    .catch(() => {
      res.send({ error: '错误' });
    });
});
module.exports = router;
