const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.send 发送片段和 参数
  // res.json json数据
  res.render('home', { list: [1, 2, 3, 4, 5, 6, 7] }); //发送模板
});

module.exports = router;
