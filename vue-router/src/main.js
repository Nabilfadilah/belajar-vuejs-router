import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";
import ProductDetail from "./components/tugas2/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
import ProductSearch from "./components/tugas3/ProductSearch.vue";

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
    },
    {
      // pake query parameter search di URL
      // contoh: /products/search?product=Samsung
      path: "/products/search",
      component: ProductSearch
    }
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
