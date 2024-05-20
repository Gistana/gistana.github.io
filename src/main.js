import "./index.css";

import * as Icons from "./icons";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from "./App.vue";
import Vue3Lottie from "vue3-lottie";
import { createApp } from "vue";
import router from "./router";

addIcons(...Object.values({ ...Icons }));

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(Vue3Lottie)
  .use(router)
  .mount("#app");
