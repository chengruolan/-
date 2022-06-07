/*
 * @Author: your name
 * @Date: 2022-03-20 16:33:33
 * @LastEditTime: 2022-03-20 16:46:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/原型式继承.js
 */
function object(o){
    let F = function(){}
    F.prototype = o
    return new F()
}

let public = {
    name:'pu',
    arr :[1,2,3]
}

let person = object(public)
console.log(person.name)

person.name = 'person'
person.arr.push(4)

let otherPerson = object(public)
console.log(otherPerson.name)

otherPerson.name = 'otherPerson'
otherPerson.arr.push(5)

console.log(person.name)
console.log(person.arr)
console.log(otherPerson.name)
console.log(otherPerson.arr)

for (const key in person) {
    if (Object.hasOwnProperty.call(object, key)) {
      console.log(key)
        
    }
}

//这个方法和 Objec.create(obj,obj)
let person = Object.create(public)

let person2 = Object.create(public,{name:{value:'12'}})