const express = require('express');

const app = express();
const router = require('./router/index');

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//配置静态资源
app.use(express.static('static'));

//配置解析post参数的中间件
app.use(express.urlencoded({ extended: false }));

//能够解析json格式的中间件
app.use(express.json());

//路由级别的中间件
app.use('/api', router);

// app.use('/home', routerHome); 另外一种写法
// app.use('/login', routerLogin);
