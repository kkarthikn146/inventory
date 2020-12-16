const state = {
  formValuesOfSI: {},
  formValuesOfSU: {},
};

const getters = {};

const actions = {};

const mutations = {
  assignFormValuesToState(state, payload) {
    if (payload.place === "signUp") {
      state.formValuesOfSU = payload;
    } else if (payload.place === "signIn") state.formValuesOfSI = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
