//返回一个jsonp接口
var http = require('http');
http
  .createServer((req, res) => {
    res.end(
      `crl(${JSON.stringify({
        name: 'crl',
        age: 100,
      })})`
    );
  })
  .listen(3000);
