import Vue from "vue";
import VueRouter from "vue-router";
import openPosition from "../views/openPosition.vue";
import errorPage from "../views/undefinedPage.vue";
import roiPage from "../views/roiPage.vue";
import roePage from "../views/roePage.vue";
import roaPage from "../views/roaPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "helloWorld",
    component: openPosition,
  },
  {
    path: "/roi",
    name: "roi",
    component: roiPage,
  },
  {
    path: "/roe",
    name: "roe",
    component: roePage,
  },
  {
    path: "/roa",
    name: "roa",
    component: roaPage,
  },
  {
    path: "/404",
    name: "undefined Page",
    component: errorPage,
  },

  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: process.env.NODE_ENV == "development" ? "hash" : "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
