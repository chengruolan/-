/*
 * @Author: your name
 * @Date: 2022-03-01 22:00:24
 * @LastEditTime: 2022-03-06 16:42:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/test.js
 */
import M from "./mustache.js";
let dom = `
    这是一个{{mastache}},你们看到了吗
`
let AppDom = document.getElementById("app")
M.render(dom,AppDom)
