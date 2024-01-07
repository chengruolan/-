const http = require('http');

const Router = {};
function use(obj) {
  Object.assign(Router, obj);
}

// use(route);
// use(api);

function start() {
  http
    .createServer((req, res) => {
      const myUrl = new URL(req.url, 'http://127.0.0.1');
      // route(res, myUrl.pathname);
      try {
        // console.log(myUrl.pathname);
        Router[myUrl.pathname](req, res);
      } catch (error) {
        Router['/404'](req, res);
      }

      //   res.end();
    })
    .listen(3000, () => {
      console.log('Server is running on port 3000');
    });
}

module.exports = {
  use,
  start,
};
