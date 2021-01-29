<template>
  <div class="">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div v-for="(input, index) in formDatas" :key="index">
          <div v-if="input.isMultiple && input.isMultiple === true">
            <ValidationProvider
              :name="input.name"
              :rules="input.rules"
              v-slot="{ errors }"
            >
              <v-select
                v-model="form.modelName[input.model]"
                :items="input.items"
                :label="input.label"
                multiple
                :chips="input.isChips"
                :hint="input.hint"
                persistent-hint
              ></v-select>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div v-else-if="input.isCheckBox">
            <ValidationProvider
              :name="input.name"
              :rules="input.rules"
              v-slot="{ errors }"
            >
              <v-checkbox
                v-model="form.modelName[input.model]"
                :label="input.label"
              ></v-checkbox>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div v-else-if="input.type === 'radio'">
            <ValidationProvider
              :name="input.name"
              :rules="input.rules"
              v-slot="{ errors }"
            >
              <v-radio-group
                v-model="form.modelName[input.model]"
                :label="input.label"
                :name="input.name"
                row
              >
                <div v-for="(item, index) in input.items" :key="index">
                  <v-radio
                    :label="item.label"
                    :color="item.color"
                    :value="item.value"
                  ></v-radio>
                </div>
              </v-radio-group>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div v-else>
            <ValidationProvider
              :name="input.name"
              :rules="input.rules"
              v-slot="{ errors }"
            >
              <v-text-field
                :name="input.name"
                :label="input.label"
                :type="input.type"
                v-model="form.modelName[input.model]"
              >
              </v-text-field>
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <v-flex class="text-md-center" mt-5>
          <v-btn type="submit" color="primary">{{
            place === ("signIn" || "signUp") ? place : "submit"
          }}</v-btn>
        </v-flex>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "FormInput",
  props: ["formDatas", "place"],
  data() {
    return {
      message: "",
      skills: [],
      form: {
        modelName: [],
      },
    };
  },
  computed: {},

  methods: {
    ...mapMutations("inputValues", ["assignFormValuesToState"]),

    onSubmit() {
      let datas = {
        ...this.form.modelName,
        place: this.place,
      };
      this.assignFormValuesToState(datas);
      this.$router.push("/homepage");
    },
  },
};
</script>

<style></style>
