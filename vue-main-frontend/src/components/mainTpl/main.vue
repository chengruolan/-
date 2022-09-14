<template>
  <a-layout class="a-content">
    <div class="a-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <a-layout-content class="a-content-main">
      <slot name="main"></slot>
      <div v-if="loading" class="loadmore">
        <a-spin />
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "mainTpl",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.a-content {
  position: relative;
  height: 100%;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  .a-header {
    margin: 12px 0;
    // height: 32px;
    flex-shrink: 0;
  }
  .a-content-main {
    margin: 0;
    background-color: #fff;
    flex: 1;
    overflow: hidden;
  }
}
</style>
