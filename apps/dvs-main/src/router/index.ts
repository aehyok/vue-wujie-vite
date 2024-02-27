import { defineAsyncComponent } from "vue";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";


const routes : Array<RouteRecordRaw> = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path: "/home",
    name:"home",
    component: defineAsyncComponent(() => import("../views/Home/index.vue")),
  },
  {
    path: "/about",
    name:"about",
    component: defineAsyncComponent(() => import("../views/About/index.vue")),
  },
  {
    path: "/vite-sub",
    name: "vite-sub",
    component: defineAsyncComponent(() => import("../views/Vite-Sub/index.vue")),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;