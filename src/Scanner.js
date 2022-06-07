/*
 * @Author: your name
 * @Date: 2022-03-06 16:43:00
 * @LastEditTime: 2022-03-06 16:55:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue源码学习/src/Scanner.js
 */
export default class Scanner {
    //构造函数
    constructor(templateStr){
        this.templateStr = templateStr
        console.log(templateStr)
    }
    //功能弱，扫描但是没有返回值
    scan(){

    }
    //让指针进行扫描，直到遇见指定内容结束并且能够返回结束之前路过的文字
    scanUtil(stopTag){

    }

}