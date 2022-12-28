import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.filter("thousandComma", (num) => {
  if (num == null || num == undefined || num == "" || isNaN(num)) {
    //console.log("缺少num參數");
    return 0;
  }
  var str = num.toString();
  var reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
});

new Vue({
  router,
  store,
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
