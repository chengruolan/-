/*
 * @Author: your name
 * @Date: 2022-03-20 15:51:41
 * @LastEditTime: 2022-04-08 22:01:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/盗用构造函数.js
 */
function SuperType(){
    this.arr = ['1','2','3']
}

function SubType(){
    SuperType.call(this)
}

let instance = new SubType()
instance.arr.push('4')

console.log(instance.arr)//1,2,3,4
console.log(instance)


let instance2 = new SubType()
console.log(instance2.arr)//1,2,3

//优点： 子类构造函数中---参数--->父类构造函数中 
function SuperType1(name){
    this.name = name
}

function SubType1(){
    SuperType1.call(this,'subtype')
    this.age = 28
}

let instance3 = new SubType1()
console.log(instance3.name) //subtype
console.log(instance3.age)//28

//缺点： 子类不能访问父类上的原型

