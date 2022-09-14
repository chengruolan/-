<template>
  <div class="home">欢迎来到{{ systemName }}</div>
</template>

<script>
import { systemName } from "@/config";
export default {
  name: "HomeView",
  components: {},
  setup() {
    return {
      systemName,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  font-size: 32px;
  text-align: center;
  height: 100%;
  padding-top: 64px;
}
</style>
