<template>
  <div>
    <form @submit.prevent="onSubmit($event)">
      <FormHelper>
        <h3 slot="heading" class="heading">{{ title }}</h3>
        <div slot="formFields">
          <v-text-field
            name="name"
            label="Enter your name"
            type="text"
            class="v-text-field"
          >
          </v-text-field>
          <v-text-field
            name="email"
            label="Enter your Email"
            type="email"
            class="v-text-field"
          >
          </v-text-field>
        </div>
        <div slot="formControl">
          <v-btn class="btns" type="submit" color="primary">submit</v-btn>
        </div>
      </FormHelper>
    </form>
  </div>
</template>

<script>
import FormHelper from "../components/FormHelper";

export default {
  name: "MyForm",
  components: {
    FormHelper,
  },
  data() {
    return {
      title: "FormX",
    };
  },
  methods: {
    onSubmit({ target }) {
      console.log(target.name);
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 40%;
  margin: 20px auto;
  text-align: center;
}

.heading {
  margin: 0 auto;
  width: 40%;
}
.btns {
  margin: 0 auto;
  margin-left: 45rem;
}
</style>
