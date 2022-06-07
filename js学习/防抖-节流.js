/*
 * @Author: your name
 * @Date: 2022-04-06 22:55:04
 * @LastEditTime: 2022-04-08 22:24:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/防抖-节流.js
 */


/**
 * 防抖函数
 * 当持续触发一个事件时，在n秒内，事件没有再次触发，此时才会执行回调；如果n秒内，又触发了事件，就重新计时
 */

 function debounceNow(callback, wait = 1000) {
    return function () {
        let self = this,
            arg = arguments

        if (callback.timer) {
            clearTimeout(callback.timer)
        } else {
            callback.apply(self, arguments)
        }
        // console.log(arguments)
        callback.timer = setTimeout(() => {
            callback.timer = undefined
            // console.log('时间过了可以继续执行')
        }, wait)
    }
}
let count = 0,ins1 = undefined, ins2 = undefined, ins3 = undefined,nextTime=100;
let method = debounceNow(()=>{
    count ++ 
    console.log('count:',count)
    // console.log('nextTime:',nextTime)
})
// ins2 = setInterval(()=>nextTime += 100,5)
ins1 = setInterval(method,1099)
ins2 = setInterval(method,4300)
// ins3 = setInterval(method,2500)
setTimeout(() => {
    clearInterval(ins1)
    clearInterval(ins2)
    clearInterval(ins3)
}, 8000);
    

   