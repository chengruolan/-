export default [
  {
    path: "/",
    name: "mainView",
    //懒加载 webpackChunkName 对应的路由的name
    component: () =>
      import(/* webpackChunkName: "mainView" */ "@/views/MainView"),
    //为了更好的兼容 各种缓存 或是其他的复杂的功能 路由最好是两层
    children: [
      {
        path: "/",
        name: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "HomeView",
        component: () =>
          import(/* webpackChunkName: "HomeView" */ "@/views/HomeView"),
        meta: { title: "首页" },
      },
      {
        path: "/example",
        name: "ExamplePage",
        component: () =>
          import(/* webpackChunkName: "ExamplePage" */ "@/views/examplePage"),
        meta: { title: "例子" },
      },

      {
        path: "/403",
        name: "error403",
        component: () =>
          import(/* webpackChunkName: "error403" */ "@/views/errorPage/403"),
        meta: { title: "无访问权限" },
      },
      {
        path: "/:catchAll(.*)",
        name: "error404",
        component: () =>
          import(/* webpackChunkName: "error404" */ "@/views/errorPage/404"),
        meta: { title: "页面不存在" },
      },
    ],
  },
];
