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
          name: "name",
          label: "name",
          placeholder: "name",
          id: "name",
          model: "name",
          rules: "required|alpha|max:12|min:6",
          type: "text",
          isRequired: true,
        },
        {
          name: "email",
          label: "Email",
          placeholder: "Email",
          id: "email",
          model: "email",
          rules: "required|email",
          type: "email",
          isRequired: true,
        },
        {
          name: "password",
          label: "password",
          placeholder: "password",
          id: "password",
          model: "password",
          rules: "required|max:12|min:6",
          type: "password",
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
