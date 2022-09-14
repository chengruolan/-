<template>
  <a-sub-menu class="subMenu">
    <template #icon>
      <img
        class="subMenu-img"
        v-if="menuInfo.iconUrl"
        :src="menuInfo.iconUrl"
        alt="tutu"
      />
      <img
        class="subMenu-img"
        v-else-if="menuInfo.iconName"
        :src="`/assets/${menuInfo.iconName}`"
        alt="tutu"
      />
    </template>
    <template #title>{{ menuInfo.name }}</template>
    <div v-for="item in menuInfo.children" :key="item.id">
      <subSideMenu
        v-if="item.children && item.children.length > 0"
        :menuInfo="item"
      ></subSideMenu>
      <a-menu-item v-else :key="item.id">
        <template #icon>
          <img
            class="subMenu-img"
            v-if="item.iconUrl"
            :src="item.iconUrl"
            alt="tutu"
          />
          <img
            class="subMenu-img"
            v-else-if="item.iconName"
            :src="`/assets/${item.iconName}`"
            alt="tutu"
          />
        </template>
        <span>{{ item.name }}</span>
      </a-menu-item>
    </div>
  </a-sub-menu>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "SubSideMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const state = reactive({
      menuInfo: props.menuInfo,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.subMenu {
  &-img {
    height: 14px;
  }
}
</style>
