import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AboutView from "@/views/pages/AboutView.vue";
import HomeView from "@/views/pages/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
