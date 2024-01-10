const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`<b>Hello World!</b>`);
});

router.get('/home', (req, res) => {
  res.send(`<b>home</b>`);
});

router.get('/list', (req, res) => {
  res.send(`<b>list</b>`);
});

router.post('/loginPost', (req, res) => {
  console.log(req.body.username);
  if (req.body.username == 'crl' && req.body.password == '123') {
    res.send(
      JSON.stringify({
        code: 200,
        ok: 1,
      })
    );
  } else {
    res.send(
      JSON.stringify({
        code: 200,
        ok: 0,
      })
    );
  }
});

module.exports = router;
