const fs = require('fs');
const path = require('path');
const mime = require('mime');
function render(res, path, type = '') {
  res.writeHead(200, { 'Content-Type': type ? type : 'text/html' });
  res.write(
    fs.readFileSync(path, 'utf8', (err) => {
      if (err) throw err;
    })
  );
  res.end();
}

const route = {
  '/': (req, res) => {
    render(res, './static/home.html');
  },
  '/home': (req, res) => {
    render(res, './static/home.html');
  },
  '/list': (req, res) => {
    render(res, './static/list.html');
  },
  '/login': (req, res) => {
    render(res, './static/login.html');
  },
  '/404': (req, res) => {
    if (readStaticFile(req, res)) {
      return;
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(fs.readFileSync('./static/404.html', 'utf8'));
    res.end();
  },
};

function readStaticFile(req, res) {
  const myUrl = new URL(req.url, 'http://127.0.0.1');
  const pathName = path.join(__dirname, '/static', myUrl.pathname);

  if (fs.existsSync(pathName)) {
    render(res, pathName, mime.getType(pathName));
    return true;
  } else {
    return false;
  }
}

module.exports = route;
