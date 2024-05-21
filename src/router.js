import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/home.vue"),
    children: [
      { name: "home", path: "", component: () => import("./views/home/index.vue") },
      { name: "service", path: "service", component: () => import("./views/home/service.vue") },
      { name: "about", path: "about", component: () => import("./views/home/about.vue") },
      { name: "team", path: "team", component: () => import("./views/home/team.vue") },
    ],
  },
  { name: "map", path: "/map", component: () => import("./views/map.vue") },
];

export default createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});
