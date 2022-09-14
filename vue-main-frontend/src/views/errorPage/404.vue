<template>
  <div class="box">
    <p>抱歉 404 了 ~</p>
    <p>您好，路径输入有误，请确认后重新输入！</p>
    <p>
      <a-button type="primary" @click="returnHome">点击返回首页</a-button>
    </p>
  </div>
</template>

<script>
export default {
  name: "error404Page",
  methods: {
    returnHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #21212d;
  text-align: center;
  font-size: 28px;
  color: #ffffff;

  p {
    padding-top: 35px;
  }
}
</style>
