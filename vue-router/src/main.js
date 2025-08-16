import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";
import ProductDetail from "./components/tugas2/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
// import ProductSearch from "./components/tugas3/ProductSearch.vue";
import UserWishlist from "./components/tugas4/UserWishlist.vue";
import User from "./components/tugas4/User.vue";
import UserProfile from "./components/tugas4/UserProfile.vue";
import UserOrder from "./components/tugas4/UserOrder.vue";
import ProductSearch from "./components/tugas6/ProductSearch.vue";

// object router
const router = createRouter({
  // router children
  // routes: [
  //   {
  //     path: "/users",
  //     component: User,
  //     children: [
  //       {
  //         path: '',
  //         component: UserProfile
  //       },
  //       {
  //         path: 'profile',
  //         component: UserProfile
  //       },
  //       {
  //         path: 'order',
  //         component: UserOrder
  //       },
  //       {
  //         path: 'wishlist',
  //         component: UserWishlist
  //       }
  //     ]
  //   }
  // ],

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
      component: ProductDetail,
    },
    // {
    //   // matching syntax
    //   path: "/products/:id(\\d+)",
    //   component: ProductDetail
    // },
    {
      // repeatable param
      path: "/:notfound(.*)",
      component: NotFound,
    },
    {
      // pake query parameter search di URL
      // contoh: /products/search?product=Samsung
      // path: "/products/search",
      // component: ProductSearch,
    },
    {
      path: "/products/search",
      component: ProductSearch,
    },
    {
      path: "/wishlist",
      component: UserWishlist,
    },
    {
      // router children
      path: "/users",
      component: User,
      children: [
        {
          path: "",
          component: UserProfile,
        },
        {
          path: "profile",
          component: UserProfile,
        },
        {
          path: "order",
          component: UserOrder,
        },
        {
          path: "wishlist",
          component: UserWishlist,
        },
      ],
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
