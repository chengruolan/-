const http = require('http');
const url = require('url');

const serve = http.createServer();

serve.on('request', (req, res) => {
  //req 接收浏览器传的参数
  //res 返回参数给浏览器

  //===============================================下去了解
  const myUrl = new URL(req.url, 'http:127.0.0.1:3000');
  console.log(myUrl.searchParams.get('a'));
  //   let url_ = url.parse(req.url, true);
  //   if (url_.pathname === '/favicon.ico') {
  //     return;
  //   }
  //   console.log(url_.query.a);
  res.write('hellow---');
  res.end();
});

serve.listen(3000);
