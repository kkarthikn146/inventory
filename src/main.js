import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "./store/index";

import "es6-promise/auto";
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
