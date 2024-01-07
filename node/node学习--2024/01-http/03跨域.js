//返回一个jsonp接口
var http = require('http');
http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf-8',
      'access-control-allow-origin': '*',
    });

    res.end(
      JSON.stringify({
        name: 'crl',
        age: 100,
      })
    );
  })
  .listen(3000);
