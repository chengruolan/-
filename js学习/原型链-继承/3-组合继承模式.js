/*
 * @Author: your name
 * @Date: 2022-03-20 16:05:13
 * @LastEditTime: 2022-03-20 17:22:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/组合继承模式.js
 */
// 组合继承 综合了盗用构造函数和原型链 将两者的优点结合起来

function SuperType(name){
    this.name = name
    console.log(1)
    this.arr = ['1','2','3']
}

SuperType.prototype.sayName = function (){
    console.log(this.name)
    return this.name
}

function SubType(name,age){
    SuperType.call(this,name) //这里会使 父类构造函数执行一次
    this.age  = age
}
SubType.prototype = new SuperType() //重写原型 默认的constructor 会丢失
SubType.prototype.sayAge = function (){
    console.log(this.age)
    return this.age
}

let super1 = new SuperType('super') //这里会使 父类构造函数执行一次
super1.arr.push('1')

let instance1 =new SubType('11111',18)
instance1.arr.push(['4'])
instance1.sayAge()
instance1.sayName()
let instance2 =new SubType('22222',25)
instance2.arr.push(['5'])
instance2.sayAge()
instance2.sayName()

//缺点 父类构造函数会被多次执行