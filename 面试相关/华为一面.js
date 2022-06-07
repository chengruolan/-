/*
 * @Author: chengruolan
 * @Date: 2022-05-18 19:15:47
 * @LastEditors: chengruolan chengruolan
 * @LastEditTime: 2022-05-18 22:29:08
 * @FilePath: /vue源码学习/华为.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * Description: 匹配（）
 * @param Strign
 * @returns Number
 */
function find(s = '') {
    if(typeof s !== 'string'){
        return 0;
    }
   
    let countLeft = 0; //记录左括号没有匹配上的数量
    let countTotal = 0; // 记录匹配上的数量

    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(char === '('){
            countLeft ++;
        }else if(char === ')' && countLeft > 0){
            countTotal ++;
            countLeft --; 
        }
    }
    return countTotal;
}

console.log(find('(((((()'));