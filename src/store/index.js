import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: [
      // { text: "開倉建議 計算", to: "/" },
      // { text: "進場點計算", to: "/enterPoint" },
      // { text: "風報比計算", to: "/hazardRatio" },
      // { text: "均價計算", to: "/avgPrice" },
      // { text: "ROI 計算", to: "/roi" },
      // { text: "ROE 計算", to: "/roe" },
      // { text: "ROA 計算", to: "/roa" },
      // { text: "本益比 計算", to: "/pe" },
      // { text: "ROE 計算", to: "/roi" },
      // { text: "404", to: "/404" },

      {
        name: '首頁',
        icon: 'mdi-star-david',
        to: '/',
      },
      // {
      //   name: "進場點計算",
      //   code: "enterPoint",
      //   to: "/stock/enterPoint",
      //   icon: "",
      // },
      // {
      //   name: "風報比計算",
      //   code: "hazardRatio",
      //   to: "/stock/hazardRatio",
      //   icon: "",
      // },
      // {
      //   name: "開倉位置計算",
      //   code: "openPosition",
      //   to: "/stock/openPosition",
      //   icon: "",
      // },
      // {
      //   name: "平均價計算",
      //   code: "avgPrice",
      //   to: "/stock/avgPrice",
      //   icon: "",
      // },

      {
        name: '加密貨幣',
        icon: 'mdi-bitcoin',
        category: [
          {
            name: '進場點計算',
            code: 'enterPoint',
            to: '/cryptocurrency/enterPoint',
            icon: '',
          },
          {
            name: '風報比計算',
            code: 'hazardRatio',
            to: '/cryptocurrency/hazardRatio',
            icon: '',
          },
          {
            name: '開倉建議計算',
            code: 'openPosition',
            to: '/cryptocurrency/openPosition',
            icon: '',
          },
          {
            name: '均價/加碼數量計算',
            code: 'avgPrice',
            to: '/cryptocurrency/avgPrice',
            icon: '',
          },
        ],
      },
      {
        name: '台股',
        icon: 'mdi-chart-waterfall',
        category: [
          {
            name: '進場點計算',
            code: 'enterPoint',
            to: '/twStock/enterPoint',
            icon: '',
          },
          {
            name: '風報比計算',
            code: 'hazardRatio',
            to: '/twStock/hazardRatio',
            icon: '',
          },
          {
            name: '開倉建議計算',
            code: 'openPosition',
            to: '/twStock/openPosition',
            icon: '',
          },
          {
            name: '均價/加碼數量計算',
            code: 'avgPrice',
            to: '/twStock/avgPrice',
            icon: '',
          },
        ],
      },
      {
        name: '美股',
        icon: 'mdi-chart-waterfall',
        category: [
          {
            name: '進場點計算',
            code: 'enterPoint',
            to: '/usStock/enterPoint',
            icon: '',
          },
          {
            name: '風報比計算',
            code: 'hazardRatio',
            to: '/usStock/hazardRatio',
            icon: '',
          },
          {
            name: '開倉建議計算',
            code: 'openPosition',
            to: '/usStock/openPosition',
            icon: '',
          },
          {
            name: '均價/加碼數量計算',
            code: 'avgPrice',
            to: '/usStock/avgPrice',
            icon: '',
          },
        ],
      },
    ],
    //黑白模式
    dark: true,
    //component Setting
    Setting: {
      textField: {
        outlined: true,
        'hide-details': true,
        dense: true,
        type: 'number',
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
