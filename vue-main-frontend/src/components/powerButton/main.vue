<template>
  <div class="power_button" v-if="showButton">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "PowerButton",
  props: ["powerCode"],
  setup(props) {
    const store = useStore();
    const buttonCodes = store.state.buttonCodes;
    const showButton = computed(() => {
      if (buttonCodes.indexOf(props.powerCode) >= 0) {
        return true;
      } else {
        return false;
      }
    });
    return { showButton };
  },
};
</script>

<style lang="scss" scoped>
.power_button {
  display: inline-block;
}
.power_button + .power_button,
.el-button + .power_button {
  margin-left: 10px;
}
</style>
