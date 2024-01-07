let queryString = require('querystring');

let str = 'a=1&b=2&c=3';

let obj = queryString.parse(str);

console.log(obj);
console.log(queryString);
