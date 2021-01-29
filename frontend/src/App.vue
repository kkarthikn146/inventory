<template>
  <v-app>
    <!-- <div class="row">

    <div class="col-md-6 my-2">
      <router-link to="/signin"
        ><v-btn color="warning" dark>
          SignIn
        </v-btn></router-link
      >
    </div>
    <div class="col-md-6 my-2">
      <router-link to="/signup"
        ><v-btn color="info" dark>
          SignUp
        </v-btn></router-link
      >
    </div>
  </div> -->
    <!-- <transition
      name="router-anim"
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <router-view />
    </transition> -->

    <router-view />
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
/* @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"; */

html,
#app {
  background: #fff;
  border-radius: 10px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
</style>
