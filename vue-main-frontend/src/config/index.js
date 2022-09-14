// 应用的名称
const systemName = "【应用名称】";

// 代理环境
//1 http://XXXXXX 可自行设置
const VUE_APP_ENV = process.env.VUE_APP_ENV
  ? parseInt(process.env.VUE_APP_ENV)
  : 1;

const apiHost = ""; //对应的api前缀（如有相同前缀 可做相关配置）

//可做api如文件下载上传与通用api不同时 可做配置
const host = (PASSID, GATEWAY) => {
  // host
  const HOST = `${PASSID}${GATEWAY}`;
  return HOST;
};

module.exports = {
  systemName,
  VUE_APP_ENV,
  apiHost,
  host,
};
