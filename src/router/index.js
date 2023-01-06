import Vue from "vue";
import VueRouter from "vue-router";
import openPosition from "../views/openPosition.vue";
import errorPage from "../views/undefinedPage.vue";
import roiPage from "../views/roiPage.vue";
import roePage from "../views/roePage.vue";
import roaPage from "../views/roaPage.vue";
import pe from "../views/PE_Ratio.vue";
import enterPoint from "../views/enterPoint.vue";
import hazardRatio from "../views/hazardRatio.vue";
import avgPrice from "../views/avgPrice.vue";

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
    path: "/pe",
    name: "pe",
    component: pe,
  },
  {
    path: "/404",
    name: "undefined Page",
    component: errorPage,
  },
  {
    path: "/enterPoint",
    name: "enterPoint",
    component: enterPoint,
  },
  {
    path: "/hazardRatio",
    name: "hazardRatio",
    component: hazardRatio,
  },
  {
    path: "/avgPrice",
    name: "avgPrice",
    component: avgPrice,
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
