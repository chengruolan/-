const express = require('express');
const app = express();
const router = require('./router/index');
const routerLogin = require('./router/loginRouter');
const routerHome = require('./router/homeRouter');
//配置模板引擎
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); //支持 直接渲染html文件

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

app.use('/home', routerHome);
app.use('/login', routerLogin);
