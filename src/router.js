import { Home, Map } from "./views";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
];

export default createRouter({
  mode: "history",
  history: createMemoryHistory(),
  routes,
});
