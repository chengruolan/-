// 不同环境代理配置
const VUE_APP_ENV = process.env.VUE_APP_ENV
  ? parseInt(process.env.VUE_APP_ENV)
  : 1;

let target = "";

switch (VUE_APP_ENV) {
  case 1:
    target = "http://172.17.81.10:9090";
    break;
  case 2:
    target = "http://172.17.81.10:9090";
    break;
}

let proxyTable = {
  "/live": {
    target: target,
    changeOrigin: true,
    secure: false,
  },
  "/XXX": {
    target: target,
    changeOrigin: true,
    secure: false,
  },
};

module.exports = proxyTable;
