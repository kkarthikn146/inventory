<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-6" no-gutters>
        <v-col sm="5" md="6" v-for="(field, index) in fields" :key="index">
          <v-card class="pa-2" outlined tile>
            {{ field }}
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FetchInvestigationPageFields",
  data() {
    return {
      fields: [],
    };
  },
  async created() {
    try {
      let response = await axios.get(
        "http://192.168.0.172:9090/config/ilm/configuration/api/fetchInvestigationPageFields?payload=eyJ1c2VySWQiOiJpbG1zbyIsInBhZ2VDb2RlIjoxfQ%3D%3D"
      );
      //let {responseData: [{subSections: [{fieldGroups: [{ fields }], },],},],} = response.data;
      let {
        responseData: [
          {
            subSections: [
              {
                fieldGroups: [{ fields }],
              },
            ],
          },
        ],
      } = response.data;
      fields.map((field) => {
        this.fields.push(field.displayName);
      });
      console.log(fields);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
