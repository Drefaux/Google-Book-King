import Vue from "vue";
import VueRouter from "vue-router";
import BookView from "../view/BookView";
import AuthorView from "../view/AuthorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "author-view",
    component: AuthorView,
  },
  {
    path: "/books",
    name: "book-view",
    component: BookView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
