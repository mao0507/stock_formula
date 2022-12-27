import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [
      { text: "Home", to: "/" },
      { text: "404", to: "/404" },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
