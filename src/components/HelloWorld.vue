<template>
  <v-container>
    <v-alert border="left" color="indigo" dark>
      Hi {{ name }} , {{ msg }}
      <br />
      Total no.of followers:{{ followers }}
      <br />
      Total no.of tweets:{{ tweets }}

      <!-- this.$store.state.demoModule.followers -->
    </v-alert>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
// import { createNamespacedHelpers } from "vuex";
// const { mapState } = createNamespacedHelpers("followerModule");
//...mapState(["followers"]),

export default {
  name: "HelloWorld",
  props: ["name", "msg"],
  computed: {
    ...mapState("followerModule", ["followers"]),
    ...mapState("tweetsModule", ["tweets"]),
  },
};
</script>
