//返回一个jsonp接口
var http = require('http');
var https = require('https');
const url = require('url');

const cheerio = require('cheerio');

http
  .createServer((req, res) => {
    // const myUrl = new URL(req.url, 'http:127.0.0.1:3000');
    res.writeHead(200, {
      'Content-Type': 'application/json;charset=utf-8',
      'access-control-allow-origin': '*',
    });

    // if (myUrl.pathname === '/api/speed') {
    //   httpPost(res);
    // } else {
    //   httpGet(res);
    // }
    httpGet(res);
  })
  .listen(3000);

function httpGet(response) {
  let data = '';
  https.get('https://i.maoyan.com/#movie', (res) => {
    res.on('data', (chunk) => {
      console.log('数据传输中');

      data += chunk;
    });

    res.on('end', () => {
      console.log('数据传输完成');

      response.end(JSON.stringify(spider(data)));
    });
  });
}

function spider(data) {
  let $ = cheerio.load(data);

  let $moviewList = $('.column.content');

  let movies = [];

  $moviewList.each((index, value) => {
    movies.push($(value).find('.title').text());
  });

  return movies;
}
