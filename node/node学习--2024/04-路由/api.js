const fs = require('fs');
function render(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(data);

  res.end();
}

const api = {
  '/api/list': (req, res) => {
    render(res, `{ok:1}`);
  },
  '/api/login': (req, res) => {
    const searchParams = new URL(req.url, 'http://127.0.0.1').searchParams;
    if (searchParams.get('username') == 'crl' && searchParams.get('password') == '123456') {
      render(res, `{"ok":"1"}`);
    } else {
      render(res, `{"ok":"0"}`);
    }
  },
  '/api/loginPost': (req, res) => {
    let post = '';
    req.on('data', (data) => {
      post += data;
    });

    req.on('end', () => {
      post = JSON.parse(post);
      if (post.username == 'crl' && post.password == '123456') {
        render(res, `{"ok":"1","username":"${post.username}"}`);
      } else {
        render(res, `{"ok":"0","username":"${post.username}"}`);
      }
    });
  },
};

module.exports = api;
