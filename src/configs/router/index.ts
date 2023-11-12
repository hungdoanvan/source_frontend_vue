import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/pages/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
