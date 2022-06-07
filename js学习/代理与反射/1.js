/*
 * @Author: chengruolan chengruolan
 * @Date: 2022-05-15 13:45:33
 * @LastEditors: chengruolan chengruolan
 * @LastEditTime: 2022-05-15 14:06:15
 * @FilePath: /vue源码学习/js学习/代理与反射/1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//代理基础
/**
 * 什么是代理：拦截基本操作（对js中对象的操作：函数、对象、数组，读取对象的属性、删除修改对象的属性，删除原型），并嵌入额外行为/操作
 *
 */

//要代理的目标对象
const target = {
  id: "target",
};

//处理器对象
//拦截对目标对象操作而定义的对象
//如果是空的，就会透穿到目标对象
const handler = {}

//代理对象
//target 目标对象
//handler 处理器
const proxy = new Proxy(target,handler)

console.log(target.id) // target
console.log(proxy.id) // target

target.id = 'foo'
console.log(target.id) //foo
console.log(proxy.id) //foo


proxy.id = 'bar'
console.log(target.id) //bar
console.log(proxy.id) //bar

console.log(target.hasOwnProperty('id'))
console.log(proxy.hasOwnProperty('id'))


//
// console.log(target instanceof Proxy) //报错 Proxy 没有 prototype 
// console.log(proxy instanceof Proxy) //报错 同上
