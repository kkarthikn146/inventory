<template>
  <div>
    <!-- <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show>Success Alert</b-alert> -->
    <!-- <b-container class="bv-example-row">
      <b-row>
        <b-col class="my-box" sm="8" md="6">col-sm-8</b-col>
        <b-col class="my-box" sm="4" md="6">col-sm-4</b-col>
      </b-row>

      <b-row>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
      </b-row>
    </b-container> -->
    <div class="container row">
      <div class="col-md-3">
        <v-text-field
          ref="firstname"
          name="firstname"
          label="Enter your first name "
          type="text"
          class="v-text-field"
          v-model="firstName"
        >
        </v-text-field>
      </div>
      <div class="col-md-3">
        <v-text-field
          name="lastname"
          label="Enter your last name"
          type="text"
          class="v-text-field"
          v-model="lastName"
        >
        </v-text-field>
      </div>
      <div class="col-md-3">
        <v-text-field
          name="city"
          label="Enter your city "
          type="text"
          class="v-text-field"
          v-model="town"
        >
        </v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "TwowayStore",
  data() {
    return {
      firstName: "john",
    };
  },
  mounted() {
    console.log(this.$refs.firstname.value);
    console.log(this.$refs.firstname);
    console.log(this.$refs);
    this.$refs.firstname.focus();
  },
  // two way bind to store
  computed: {
    //   When using nested data structures, the string
    //   after the last dot (e.g. `firstName`) is used
    //   for defining the name of the computed property.

    ...mapFields([
      "user.firstName",
      "user.lastName",
      // It's also possible to access
      // nested properties in arrays.
      "addresses[0].town",
    ]),

    // ...mapFields(["basicForm"]),
    //   },

    //   computed: {
    //     basicForm: {
    //       get() {
    //         return this.$store.state["basicForm"];
    //       },
    //       set(values) {
    //         this.$store.state["basicForm"] = values;
    //       },
    //     },
    //   },

    //v-model="BasicForm[item_list.model]"
    // computed: {
    //     BasicForm : {
    //         get(){
    //           if(this.module_name){
    //               return this.$store.state[this.module_name][this.form_name]
    //           }else{
    //               return this.$store.state[this.form_name]
    //           }

    //         },
    //         set(values){
    //            if(this.module_name){
    //               this.$store.state[this.module_name][this.form_name] = values
    //           }else{
    //               this.$store.state[this.form_name] = values
    //           }
    //         }
    //     },

    //   },
  },
};
</script>

<style scoped >
.my-box {
  border: 1px solid blue;
}
</style>