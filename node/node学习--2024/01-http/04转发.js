//返回一个jsonp接口
var http = require('http');
var https = require('https');
const url = require('url');

http
  .createServer((req, res) => {
    const myUrl = new URL(req.url, 'http:127.0.0.1:3000');
    console.log(myUrl.pathname);
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf-8',
      'access-control-allow-origin': '*',
    });

    if (myUrl.pathname === '/api/speed') {
      httpPost(res);
    } else {
      httpGet(res);
    }
  })
  .listen(3000);

function httpGet(response) {
  let data = '';
  https.get(
    'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4',
    (res) => {
      res.on('data', (chunk) => {
        console.log('数据传输中');

        data += chunk;
      });

      res.on('end', () => {
        // console.log('数据传输完成', data);
        response.end(data);
      });
    }
  );
}
function httpPost(response) {
  let data = '';
  //小米有品的数据去做转发
  let option = {
    hostname: 'm.xiaomiyoupin.com', //域名
    port: '443', //端口号
    path: '/mtop/mf/resource/data/batchList', //路径
    method: 'POST', //协议
    headers: {
      'Content-Type': 'application/json;charset=utf-8', //application/x-www-form-urlencoded
    },
  };
  let req = https.request(option, (res) => {
    res.on('data', (chunk) => {
      console.log('数据传输中');

      data += chunk;
    });

    res.on('end', () => {
      // console.log('数据传输完成', data);
      response.end(data);
    });
  });
  req.write(JSON.stringify([{}, ['newer_popup_ad', 'download_options']]));

  req.end();
}
