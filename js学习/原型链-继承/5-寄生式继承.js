/*
 * @Author: your name
 * @Date: 2022-03-20 16:48:12
 * @LastEditTime: 2022-03-20 17:12:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/寄生式继承.js
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

function createAthor(obj){
    let clone = object(obj)
    clone.sayHi = function(){
        console.log('hi')
    }
    return clone
}

//缺点 与构造函数类似 无法重用