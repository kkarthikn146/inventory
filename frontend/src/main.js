import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store/index";
import VueDynamicForms from "@asigloo/vue-dynamic-forms";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import vuetify from "./plugins/vuetify";
import VueCookies from "vue-cookies";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/main.css";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate";

/* --------------------- install rules and localization --------------------- */
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize("en", en);

/* ---------------------  Install components globally --------------------- */
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

/* ---------------------------- custom directives --------------------------- */
Vue.directive("rainbow", {
  bind(el) {                 //el,binding,vNode
    el.style.color =
      "#" +
      Math.random()
        .toString()
        .slice(2, 8);
  },
});
/* -------------------------------------------------------------------------- */
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.use(VueDynamicForms);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
