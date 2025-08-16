import {createApp} from "vue";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/tugas1/Home.vue";
import About from "./components/tugas1/About.vue";
import ProductDetail from "./components/tugas2/ProductDetail.vue";
import NotFound from "./components/NotFound.vue";
// import ProductSearch from "./components/tugas3/ProductSearch.vue";
import UserWishlist from "./components/tugas4/UserWishlist.vue";
// import User from "./components/tugas4/User.vue";
// import User from "./components/tugas7/User.vue";
import UserProfile from "./components/tugas4/UserProfile.vue";
import UserOrder from "./components/tugas4/UserOrder.vue";
// import ProductSearch from "./components/tugas6/ProductSearch.vue";
import ProductSearch from "./components/tugas8/ProductSearch.vue";
import UserHeader from "./components/tugas9/UserHeader.vue";
import UserOrderFooter from "./components/tugas9/UserOrderFooter.vue";
import UserWishlistFooter from "./components/tugas9/UserWishlistFooter.vue";
import User from "./components/tugas9/User.vue";

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
      props: { // penggunaan props untuk mengirim data ke komponen (Tugas 11)
        title: "Home Page Component",
      }
    },

    // Tugas 10: Redirect
    {
      path: "/home",
      redirect: "/",
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
      name: "product-search",
    },

    // Tugas 10: Redirect
    {
      path: "/products/search/:keywords", // :keywords adalah parameter dinamis
      redirect: (route) => {
        return {
          name: "product-search",
          query: {
            product: route.params.keywords,
          },
        };
      },
    },

    {
      path: "/wishlist",
      component: UserWishlist,
    },
    {
      // router children
      path: "/users",
      component: User,

      // Named View
      children: [
        {
          path: "",
          name: "user",
          components: {
            header: UserHeader,
            default: UserProfile,
          },
        },
        {
          path: "profile",
          name: "user-profile",
          components: {
            header: UserHeader,
            default: UserProfile,
          },
        },
        {
          path: "order",
          name: "user-order",
          components: {
            header: UserHeader,
            default: UserOrder,
            footer: UserOrderFooter,
          },
        },
        {
          path: "wishlist",
          name: "user-wishlist",
          components: {
            header: UserHeader,
            default: UserWishlist,
            footer: UserWishlistFooter,
          },
        },
      ],
      // children: [
      //   {
      //     path: "",
      //     component: UserProfile,
      //     name: "user"
      //   },
      //   {
      //     path: "profile",
      //     component: UserProfile,
      //     name: "user-profile"
      //   },
      //   {
      //     path: "order",
      //     component: UserOrder,
      //     name: "user-order"
      //   },
      //   {
      //     path: "wishlist",
      //     component: UserWishlist,
      //     name: "user-wishlist"
      //   },
      // ],
    },
  ],
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
