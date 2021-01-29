import axios from "axios";

const state = {
  customersState: [],
};

const getters = {};

const actions = {
  async getCustomers() {
    await axios
      .get("/api/customers")
      .then((response) => {
        // this.customersState = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
