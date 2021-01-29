<template>
  <div>
    <div>
      Mixins
      {{ name }}
      {{ value }}
      <button @click="greet" class="btn">greet</button>
      <button @click="hello" class="btn">hello</button>
    </div>
    <div class="">
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
      <h3 v-rainbow>I am a custom directive</h3>
    </div>
  </div>
</template>

<script>
import { myMixin } from "../mixins/demoMixin";
export default {
  name: "Mixins", // ! and custom directives
  mixins: [myMixin],
  data() {
    return {
      value: 5,
    };
  },
};
</script>

<style>
</style>