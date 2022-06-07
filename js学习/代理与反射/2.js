/*
 * @Author: chengruolan chengruolan
 * @Date: 2022-05-15 14:07:22
 * @LastEditors: chengruolan chengruolan
 * @LastEditTime: 2022-05-15 14:20:34
 * @FilePath: /vue源码学习/js学习/代理与反射/2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//定义捕获器

/**
 * 什么是代理：拦截基本操作（对js中对象的操作：函数、对象、数组，读取对象的属性、删除修改对象的属性，删除原型），并嵌入额外行为/操作
 *
 */

//要代理的目标对象
const target = {
  id: "target",
  foo: "bar",
};

//处理器对象
//拦截对目标对象操作而定义的对象
//如果是空的，就会透穿到目标对象
const handler = {
  get(trapTarget,property, receiver) {
    //   console.log(trapTarget,property,receiver)
    return "handler override"; 
  },
};

//代理对象
//target 目标对象
//handler 处理器
const proxy = new Proxy(target, handler);

console.log(target.foo); // bar
console.log(proxy.foo); // handler override

// console.log(Object.create(target)['foo']); //bar
// console.log(Object.create(proxy)['foo']); //handler override

console.log(target['foo']); //bar
console.log(proxy['foo']); //handler override
