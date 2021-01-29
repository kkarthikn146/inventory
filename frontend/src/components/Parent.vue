<template>
  <div>
    <Child>
      <template slot-scope="{ user }">
        <div class="name">
          {{ user.name }}
        </div>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Parent",
  components: {
    Child,
  },
  provide() {
    return {
      fname: "reactive fname", //Vue.computed(() => "")
    };
  },
};
</script>

<style>
.name {
  text-align: center;
  width: 30%;
  margin: 2px auto;
  background-color: rgb(139, 216, 156);
}
</style>