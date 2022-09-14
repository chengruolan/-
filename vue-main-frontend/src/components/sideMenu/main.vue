<template>
  <div class="menu">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <template v-for="item in menuList" :key="item.id">
        <subSideMenu
          v-if="item.children && item.children.length > 0"
          :menuInfo="item"
          :key="item.key"
        ></subSideMenu>
        <a-menu-item v-else :key="item.id" @click="goto(item)">
          <template #icon>
            <img
              class="menu-img"
              v-if="item.iconUrl"
              :src="item.iconUrl"
              alt="tutu"
            />
            <img
              class="menu-img"
              v-else-if="item.iconName"
              :src="`/assets/${item.iconName}`"
              alt="tutu"
            />
          </template>
          <span>{{ item.name }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import subSideMenu from "./subSideMenu";
import { reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
// import { PieChartOutlined } from "@ant-design/icons-vue";
export default {
  name: "SideMenu",
  components: {
    subSideMenu,
    // PieChartOutlined,
  },

  setup() {
    const state = reactive({
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
      menuList: [
        {
          id: "1",
          name: "菜单1",
          iconUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014cbb55438f830000019ae9345c1d.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665728884&t=2be4e140f183250c5ed1b697cb6a7b38",
          iconName: "",
          children: [
            {
              id: "1-1",
              name: "菜单1-1",
              url: "/home",
              iconUrl: "",
              iconName: "",
            },
          ],
        },
        {
          id: "2",
          name: "例子",
          url: "/example",
          iconUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F58%2F75%2F6357483eb2d035b.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665729019&t=cc3585f64ef524ad6a99229004ad5a8a",
          iconName: "",
        },
        {
          id: "3",
          name: "首页",
          url: "/home",
          iconUrl: "",
          iconName: "header.svg",
        },
        {
          id: "4",
          name: "菜单4",
          url: "",
          iconUrl: "",
          iconName: "logo.png",
          children: [
            {
              id: "4-1",
              name: "菜单4-1",
              url: "",
              iconUrl: "",
              iconName: "",
            },
            {
              id: "4-2",
              name: "菜单4-2",
              url: "",
              iconUrl: "",
              iconName: "",
            },
            {
              id: "4-3",
              name: "菜单4-3",
              url: "",
              iconUrl: "",
              iconName: "",
              children: [
                {
                  id: "4-3-1",
                  name: "菜单4-3-1",
                  url: "",
                  iconUrl: "",
                  iconName: "header.svg",
                },
                {
                  id: "4-3-2",
                  name: "菜单4-3-2",
                  url: "",
                  iconUrl: "",
                  iconName: "",
                },
                {
                  id: "4-3-3",
                  name: "菜单4-3-3",
                  url: "",
                  iconUrl: "",
                  iconName: "",
                },
              ],
            },
          ],
        },
      ],
    });
    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const router = useRouter();
    const goto = (item) => {
      //这里可以配置url（相对路径或者绝对路径）的格式 打开格式（当前窗口 还是新开一个窗口）
      //目前先简单以router path去打开
      if (item.url) {
        router.push(item.url);
      }
    };

    return {
      ...toRefs(state),
      goto,
    };
  },
};
</script>
<style lang="scss" scoped>
.menu {
  overflow: auto;
  height: 100%;
  &-img {
    height: 14px;
  }
}
</style>
