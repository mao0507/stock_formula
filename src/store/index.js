import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [
      { text: "開倉建議 計算", to: "/" },
      { text: "進場點計算", to: "/enterPoint" },
      { text: "風報比計算", to: "/hazardRatio" },
      { text: "均價計算", to: "/avgPrice" },
      // { text: "ROI 計算", to: "/roi" },
      // { text: "ROE 計算", to: "/roe" },
      // { text: "ROA 計算", to: "/roa" },
      // { text: "本益比 計算", to: "/pe" },
      // { text: "ROE 計算", to: "/roi" },
      // { text: "404", to: "/404" },
    ],
    //黑白模式
    dark: true,
    //component Setting
    Setting: {
      textField: {
        outlined: true,
        "hide-details": true,
        dense: true,
        type: "number",
        min: 0,
      },
    },
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
