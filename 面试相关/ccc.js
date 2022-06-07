/*
 * @Author: your name
 * @Date: 2022-04-07 21:13:36
 * @LastEditTime: 2022-04-07 21:41:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/ccc.js
 */
const data = [
  { name: "foo", age: 16, city: "shanghai" },
  { name: "bar", age: 24, city: "hangzhou" },
  { name: "fiz", age: 22, city: "shanghai" },
  { name: "baz", age: 19, city: "hangzhou" },
];

const result = [
  [
    { name: "baz", age: 19, city: "hangzhou" },
    { name: "bar", age: 24, city: "hangzhou" },
  ],
  [{ name: "fiz", age: 22, city: "shanghai" }],
];
function query(data) {
  function where(method) {
      undefined
    let resultData = [];
    data.forEach((element, index) => {
      if (method(element, index)) {
        resultData.push(element);
      }
    });
    data = resultData;
    return {
      orderBy: orderBy,
    };
  }
  function orderBy(key, desc = false) {
    data.sort((a, b) => {
      let item = a[key] - b[key];
      return desc ? -item : item;
    });
    return {
      groupBy: groupBy,
    };
  }

  function groupBy(key) {
    let maps = new Map();
    data.forEach((element) => {
      let arr = maps.get(element[key]);
      if (arr) {
        arr.push(element);
      } else {
        maps.set(element[key], [element]);
      }
    });
    let result = [];
    maps.forEach((value) => {
      result.push(value);
    });
    data = result;
    return {
      execute: execute,
    };
  }
  function execute() {
    return data;
  }
  return {
    where: where,
  };
}
let a = query(data)
  .where((item) => item.age > 18)
  .orderBy("age")
  .groupBy("city")
  .execute();
  console.log(a)
