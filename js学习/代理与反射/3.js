/*
 * @Author: chengruolan chengruolan
 * @Date: 2022-05-15 14:20:48
 * @LastEditors: chengruolan chengruolan
 * @LastEditTime: 2022-05-15 16:01:12
 * @FilePath: /vue源码学习/js学习/代理与反射/3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//反射
/**
 * 反射是什么： 反射是
 */

//要代理的目标对象
const target = {
  id: "target",
};

//处理器对象
//拦截对目标对象操作而定义的对象
//如果是空的，就会透穿到目标对象
const handler = {
    get(){
        return Reflect.get(...arguments)
    }
}

//代理对象
//target 目标对象   
//handler 处理器
const proxy = new Proxy(target,handler)