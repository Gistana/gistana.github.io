import "./index.css";

import { FaArrowUp, FaIdCardAlt, FaMap } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";

addIcons(FaArrowUp, FaMap, FaIdCardAlt);

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
