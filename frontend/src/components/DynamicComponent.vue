<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      @click="whichComponent = 'SignIn'"
    >
      Sign in
    </button>
    <button
      type="button"
      class="btn btn-primary"
      @click="whichComponent = 'SignUp'"
    >
      Sign up
    </button>
    <keep-alive>
      <component :is="whichComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
export default {
  name: "DynamicComponent",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      whichComponent: "",
    };
  },
};
</script>

<style>
</style>