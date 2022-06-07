/*
 * @Author: your namew
 * @Date: 2022-03-17 22:02:57
 * @LastEditTime: 2022-03-20 16:20:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/studyJS.js
 */

function SuperType(){
    this.a = true
    this.b = 'b'
    this.arr = []
}

function SubType(){
    this.a  = false
}
SubType.prototype = new SuperType()

SuperType.prototype.getData = function (){
    return this.a
}
SubType.prototype.getData2 = function (){
    return this.a
}

let instance = new  SubType()
instance.c = 'c'

let i = new SuperType()

console.log(instance.getData())
console.log(instance.b)
console.log(instance.c)



console.log(i.getData())