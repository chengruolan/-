import MainTpl from "./main";

MainTpl.install = function (Vue) {
  Vue.component(MainTpl.name, MainTpl);
};

export default MainTpl;
