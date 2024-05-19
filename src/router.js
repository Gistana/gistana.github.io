import { Home, Map } from "./views";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
];

export default createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});
