const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send 发送片段和 参数
  // res.json json数据
  res.render('login', { title: '登录页面', error: '' }); //发送模板
});

router.post('/', (req, res) => {
  // res.send 发送片段和 参数
  // res.json json数据

  if (req.body.username == 'crl' && req.body.password == '123') {
    res.redirect('/home'); //发送模板
  } else {
    res.render('login', { title: '登录页面', error: '用户名密码错误' }); //发送模板
  }
});

module.exports = router;
