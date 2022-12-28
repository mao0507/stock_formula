import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [
      { text: "開倉建議 計算", to: "/" },
      { text: "ROI 計算", to: "/roi" },
      { text: "ROE 計算", to: "/roe" },
      { text: "ROA 計算", to: "/roa" },
      // { text: "ROE 計算", to: "/roi" },
      // { text: "404", to: "/404" },
    ],
    dark: true,
  },
  getters: {},
  mutations: {
    changeDark(state, payload) {
      state.dark = payload;
    },
  },
  actions: {},
  modules: {},
});
