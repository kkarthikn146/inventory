<template>
  <div>
    <div v-for="(user, index) in users" :key="index">
      <slot :user="user"></slot>
    </div>
    <div>
      {{ fname }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Child",
  inject: ["fname"],
  data() {
    return {
      users: [],
    };
  },
  async created() {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = response.data;
  },
};
</script>

<style>
</style>