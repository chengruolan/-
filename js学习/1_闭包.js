/*
 * @Author: your name
 * @Date: 2022-05-08 22:51:25
 * @LastEditTime: 2022-05-08 23:19:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: 
 * @FilePath: /vue源码学习/js学习/1_闭包.js
 * 掘金小册子
 * https://www.xyhthink.com/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E4%B9%8B%E9%81%93/3-JS%20%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E7%82%B9%E5%8F%8A%E5%B8%B8%E8%80%83%E9%9D%A2%E8%AF%95%E9%A2%98%EF%BC%88%E4%BA%8C%EF%BC%89.htm
 */
// 55555
// for(var i = 0; i < 5; i ++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*10);
// }
// console.log(i,'[]') // 5


// 0 1 2 3 4 
// for(let i = 0; i < 5; i ++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*10);
// }
// console.log(i,'[]') // i is not undefined

//闭包的应用场景
//1.防抖、节流
//2.模拟私有方法、私有函数
let myName = function(){
    let name = 'A'
    return function(){
        return{
            getName:function(){
                console.log(name)
                //return name
            },
            setName:function(newName){
                name = newName
                // return name
                console.log(name)
            }
        }
    }()
}()
myName.getName()
myName.setName('crl')
// myName.name
console.log(myName.name)

//3.创建多个计数器  同上原理差不多

