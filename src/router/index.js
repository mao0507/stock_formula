import Vue from 'vue';
import VueRouter from 'vue-router';
//page
import index from '/src/views/v-index.vue';

// import roiPage from "../views/roiPage.vue";
// import roePage from "../views/roePage.vue";
// import roaPage from "../views/roaPage.vue";
// import pe from "../views/PE_Ratio.vue";
//import errorPage from "../views/undefinedPage.vue";

import openPosition from '../views/openPosition.vue';
import enterPoint from '../views/enterPoint.vue';
import hazardRatio from '../views/hazardRatio.vue';
import avgPrice from '../views/avgPrice.vue';

Vue.use(VueRouter);

const routes = [
  //設定導向
  { path: '*', redirect: '/' },
  { path: '/', name: 'lobby', component: index },
  //計算進場點
  {
    path: '/:type/enterPoint',
    name: 'enterPoint',
    component: enterPoint,
    props: true,
  },
  //風報比計算
  {
    path: '/:type/hazardRatio',
    name: 'hazardRatio',
    component: hazardRatio,
    props: true,
  },
  //開倉建議
  {
    path: '/:type/openPosition',
    name: 'openPosition',
    component: openPosition,
    props: true,
  },
  //均價計算
  {
    path: '/:type/avgPrice',
    name: 'avgPrice',
    component: avgPrice,
    props: true,
  },
];

const router = new VueRouter({
  mode: process.env.NODE_ENV == 'development' ? 'hash' : 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
