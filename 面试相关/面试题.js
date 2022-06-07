/*
 * @Author: your name
 * @Date: 2022-04-11 21:17:31
 * @LastEditTime: 2022-04-11 21:25:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/面试题.js
 */
var p1 = Promise.resolve(42);
p1.then((value) => {
  //第一种情况，返回一个Promise
//   return new Promise(function (resolve, rejected) {
//     resolve(value + 1);
//   });

//   //第二种情况，返回一个值
//   return value + 2; //undefined
  

  //第三种情况，新建一个promise，使用reslove返回值
//   const p2 = new Promise(function (resolve, rejected) {
//     resolve(value + 3);
//   });

//   //第四种情况，新建一个promise，使用return返回值
//   const p2 = new Promise(function (resolve, rejected) {
//     return value + 4;
//   });

//   //第五种情况，没有返回值
  return undefined;
}).then((value) => {
  console.log(value);
});
console.log(0.1+0.2)