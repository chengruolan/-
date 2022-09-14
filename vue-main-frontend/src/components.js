import {
  DatePicker,
  Button,
  ConfigProvider,
  Layout,
  Menu,
  Row,
  Col,
  Spin,
} from "ant-design-vue";

import MainTpl from "./components/mainTpl";

//需要注册的全局组件
const components = [
  MainTpl,
  DatePicker,
  Button,
  ConfigProvider,
  Layout,
  Menu,
  Row,
  Col,
  Spin,
];

export default function (app) {
  components.forEach((e) => {
    app.use(e);
  });
}
