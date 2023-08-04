//1. 导入fs 模块
const fs = require('fs');

//参数1 读取文件的存放路径
//参数2 读取文件采用的编码格式，一般指定utf8 -- 非必须
//参数3 回调函数，拿到读取失败合成功的结果
fs.readFile('./nodeTXT/1.txt', 'utf8', (err, dataStr) => {
  if (err) {
    console.log('读取文件失败', err);
  } else {
    console.log('读取成功', dataStr);
    //写入文件
    //参数1 文件存放的路径
    //参数2 写入的内容
    //参数3 回调函数
    let str = dataStr;
    str += '\n' + new Date().toString();
    fs.writeFile('./nodeTXT/1.txt', str, (err) => {
      console.log(err);
    });
  }
  //   console.log(err); //成功输出null 失败为错误对象
  //   console.log(dataStr); //失败是undefined
});
