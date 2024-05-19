import "./index.css";

import * as Icons from "./icons";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";

addIcons(...Object.values({...Icons}));

createApp(App).component("v-icon", OhVueIcon).use(router).mount("#app");
