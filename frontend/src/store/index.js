import Vue from "vue";
import Vuex from "vuex";

import { getField, updateField } from "vuex-map-fields";

/* --------------------------------- modules -------------------------------- */
import followerModule from "./modules/followerModule";
import tweetsModule from "./modules/tweetsModule";
import customerModule from "./modules/customerModule";
import inputValues from "./modules/inputValues";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    followerModule,
    tweetsModule,
    customerModule,
    inputValues,
  },

  /* -------------------- two way binding (v-model) to store ------------------- */
  state: {
    basicForm: {},
    user: {},
    addresses: [{}],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
});

export default store;
