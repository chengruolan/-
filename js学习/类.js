/*
 * @Author: your name
 * @Date: 2022-03-23 22:33:11
 * @LastEditTime: 2022-03-23 22:56:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/类.js
 */

class Person  {
  
    constructor (name){
        this.name = name
    }
    set total (total){
        this.total_ = total
    }
    get total (){
        return this.total_
    }
   static sayAge (){
        return this.age || 29
    }
}
class Car extends Person {
    constructor(type){
        super()
        this.type = type
    }
}
Person.age = 22

let person = new Person('crl')
let car  = new Car('豪车')