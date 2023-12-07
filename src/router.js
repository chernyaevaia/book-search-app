import { createRouter, createWebHashHistory } from "vue-router";

import BookInfo from "./components/BookInfo.vue";
import HomePage from "./components/HomePage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/:bookId", component: BookInfo },
  ],
});
