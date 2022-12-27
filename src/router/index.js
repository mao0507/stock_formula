import Vue from "vue";
import VueRouter from "vue-router";
import helloWorld from "../views/helloWorld.vue";
import errorPage from "../views/undefinedPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/hello",
    name: "helloWorld",
    component: helloWorld,
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
  {
    path: "/",
    redirect: "/hello",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
