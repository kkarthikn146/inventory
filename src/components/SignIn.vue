<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md12 class="text-md-center" mt-5>
        <h1 class="heading">Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <FormInput :formDatas="formDatas" place="signIn" />
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormInput from "./FormInput";

export default {
  name: "SignIn",
  components: {
    FormInput,
  },
  data() {
    return {
      formDatas: [
        {
          name: "email",
          label: "Email",
          placeholder: "Email",
          id: "email",
          model: "email",
          type: "email",
          isRequired: true,
        },
        {
          name: "password",
          label: "password",
          placeholder: "password",
          id: "password",
          model: "password",
          type: "password",
          isRequired: true,
        },
        {
          name: "radio",
          label: "Select Your gender",
          placeholder: "radio",
          id: "radio",
          model: "radio",
          items: [
            {
              value: "Male",
              color: "success",
              label: "Male",
            },
            {
              value: "Female",
              color: "warning",
              label: "Female",
            },
          ],
          type: "radio",
          isRequired: true,
        },
        {
          isMultiple: true,
          items: [
            "c",
            "c++",
            "java",
            "javascript",
            "html",
            "css",
            "bootstrap",
            "NodeJS",
            "ReactJS",
            "VueJS",
            "ExpressJS",
            "MongoDB",
            "mongoose",
            "JQuery",
          ],
          name: "select",
          label: "select",
          isChips: true,
          hint: "Select your skills",
          placeholder: "select",
          id: "select",
          model: "select",
          type: "select",
          isRequired: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.heading {
  color: rgb(25, 118, 210);
}
</style>
