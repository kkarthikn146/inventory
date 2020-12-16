<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-md-center" mt-5>
        <h1>Sign Up</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <FormInput :formDatas="formDatas" place="signUp" />
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
          placeholder: "select",
          id: "select",
          model: "select",
          type: "select",
          isRequired: true,
        },
      ],
    };
  },
  name: "SignUp",
  components: {
    FormInput,
  },
};
</script>
