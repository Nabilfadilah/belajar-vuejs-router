import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";
import ProductDetail from "./components/tugas2/ProductDetail.vue";

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
    {
      path: "/products/:id",
      component: ProductDetail
    }
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
