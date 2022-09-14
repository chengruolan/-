<template>
  <a-layout id="ant-layout">
    <a-layout-header class="ant-layout-header">
      <div class="flex-row-between">
        <div class="flex-row-center-row">
          <img :src="require('@/assets/images/logo.png')" alt="" />
          <span class="title margin-left-16">{{ systemName }}</span>
        </div>
        <div class="flex-row-center-row">
          <span class="margin-right-16">用户名称</span>
          <img :src="require('@/assets/svg/header.svg')" alt="头像" />
        </div>
      </div>
    </a-layout-header>

    <a-layout>
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        class="ant-layout-sider"
      >
        <SideMenu></SideMenu>
      </a-layout-sider>
      <a-layout-content class="ant-layout-content">
        <router-view
      /></a-layout-content>
    </a-layout>
    <!-- <a-layout-footer class="ant-layout-footer">Footer</a-layout-footer> -->
  </a-layout>
</template>
<script>
import { systemName } from "@/config";
import SideMenu from "@/components/sideMenu";
import { ref } from "@vue/reactivity";
export default {
  name: "mainView",
  components: {
    SideMenu,
  },
  setup() {
    return {
      collapsed: ref(false),
      systemName,
    };
  },
};
</script>
<style lang="scss" scoped>
#ant-layout {
  height: 100%;
  .ant-layout-header {
    padding: 0 18px;
    color: white;
    .title {
      font-size: 20px;
    }
  }
  .ant-layout-sider {
  }
  .ant-layout-content {
    overflow: hidden;
  }
  .ant-layout-footer {
    // background: white;
  }
}
</style>
