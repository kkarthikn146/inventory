<template>
  <div class="">
    <div v-for="(input, index) in formDatas" :key="index">
      <div v-if="input.isMultiple && input.isMultiple === true">
        <v-select
          v-model="form.modelName[input.model]"
          :items="input.items"
          :label="input.label"
          multiple
          :chips="input.isChips"
          :hint="input.hint"
          persistent-hint
        ></v-select>
      </div>
      <div v-else-if="input.type === 'radio'">
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
      </div>
      <div v-else>
        <v-text-field
          :name="input.name"
          :label="input.label"
          :type="input.type"
          v-model="form.modelName[input.model]"
          :required="input.isRequired"
        >
        </v-text-field>
      </div>
    </div>
    <v-flex class="text-md-center" mt-5>
      <v-btn @click.prevent="onSubmit" color="primary" type="submit">{{
        place
      }}</v-btn>
    </v-flex>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "FormInput",
  props: ["formDatas", "place"],
  data() {
    return {
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
      // let obj = {};
      // for (let el in this.form.modelName) {
      //   obj[el] = this.form.modelName.el;
      // }
      // console.log(obj);
      this.assignFormValuesToState({
        ...this.form.modelName,
        place: this.place,
      });
    },
  },
};
</script>

<style></style>
