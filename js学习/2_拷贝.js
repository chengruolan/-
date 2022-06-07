/*
 * @Author: your name
 * @Date: 2022-05-08 23:20:31
 * @LastEditTime: 2022-05-09 16:22:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/js学习/2_拷贝.js
 */

//浅拷贝
function clone(data) {
  return { ...data };
}

//深拷贝
function deepClone(data, type = 1) {
    function isObject(obj){
        return (typeof obj === 'object' || typeof obj === 'function' ) && obj !== null
    }
    if(!isObject(data)){
        return data
    }
  //方法一 利用JSON
  switch (type) {
    case 1:
      return JSON.parse(JSON.stringify(data)); //没有function的情况
    case 2:
      return method2(data);
      case 3: return method3(data)
  }
  function method2(data) {
    // console.log(data,'[][][][[][][]data')
    if (typeof data != "object") {
      return data;
    } else if (Array.isArray(data)) {
      return arrayCopy(data);
    }
    let obj = {};
    for (const key in data) {
      //自身属性
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        // console.log(element,'element')
        if (Array.isArray(element)) {
          obj[key] = arrayCopy(element);
        }else {
          obj[key] = element;
        }
      }
    }
    return obj
  }

  function arrayCopy(arr) {
    let array = [];
    arr.forEach((item) => {
      array.push(method2(item));
    });
    return array;
  }

  function method3(data){
    if(!isObject(data)){
        return data
    }else{
        let newObj = {}
        if(Array.isArray(data)){
            return arrayCopy(data)
        }else if(typeof data === 'function'){
            return data
        }
        Reflect.ownKeys(data).forEach(key  => {
            newObj[key] = method3(data[key])
        })
        return newObj
    }
  }
}

let a = {
  b: "123",
  c: "c",
  d: [1, 2, 3],
  e: function () {
    console.log(1);
  },
};

// let b = clone(a);
// b.d.push("123");
// console.log(a.d);

// let c = deepClone(a, 1);
// // c.e()
// c.d.push("4");
// console.log(a.d);
// console.log(c.d);
// let e = deepClone(a, 2);
// console.log(e);
// e.e();
// e.d.push("4");
// console.log(a.d);
// console.log(e.d);

let f = deepClone(a,3)
console.log(f)
f.e()
