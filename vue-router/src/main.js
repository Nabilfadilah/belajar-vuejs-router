import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";

// object router
const router = createRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
