import Vue from "vue";
import Vuex from "vuex";
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
  state: {},
  mutations: {},
});

export default store;
