/*
 * @Author: your name
 * @Date: 2022-03-20 17:14:02
 * @LastEditTime: 2022-03-20 17:36:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/寄生式组合.js
 */
function object(o){
    let F = function(){}
    F.prototype = o
    return new F()
}

function inheritPrototype(subType,superType){
    let prop = object(superType.prototype)
    prop.constructor = subType
    subType.prototype = prop
}

function SuperType(name){
    console.log(1)
    this.name = name
    this.arr = ['1','2','3']
}
SuperType.prototype.sayName= function (){
    console.log(this.name)
}
function SubType(age){
    this.age  = age
}

inheritPrototype(SubType, SuperType) //super上的属性没有了 但是prop上的方法都还在 也不用对此执行super的构造函数

let i = new SubType(28)