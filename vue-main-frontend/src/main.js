import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./mockjs/index";

import components from "./components"; //按需引入 antd组件
import "./styles/index.scss";

const app = createApp(App);
components(app);
app.use(store).use(router).mount("#app");
