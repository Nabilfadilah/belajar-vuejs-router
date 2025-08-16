import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";
import ProductDetail from "./components/tugas2/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";

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
      sensitive: true, // sencitive route
    },
    {
      path: "/products/:id",
      component: ProductDetail
    },
    // {
    //   // matching syntax
    //   path: "/products/:id(\\d+)",
    //   component: ProductDetail
    // },
    {
      // repeatable param
      path: "/:notfound(.*)",
      component: NotFound
    }
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
