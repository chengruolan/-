// const config = require("./src/config");
const proxy = require("./proxy.config");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "@/styles/theme.less";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: proxy,
  },
});
