<template>
  <div>
    <header>Hi {{ name }} ,{{ msg }}</header>
    total : {{ followers }}
    <div v-for="(user, index) in users" :key="index" class="followers ">
      {{ user.username }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Greet",
  // props: ["name", "msg", "users"],
  props: {
    name: String,
    msg: String,
    users: Array,
  },

  computed: {
    ...mapState(["followers"]),
  },
};
</script>

<style></style>
