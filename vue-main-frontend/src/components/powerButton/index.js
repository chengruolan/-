import PButton from "./main";

//用户的按钮权限控制
PButton.install = function (Vue) {
  Vue.component(PButton.name, PButton);
};

export default PButton;
