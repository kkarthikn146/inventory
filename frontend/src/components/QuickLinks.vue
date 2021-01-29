<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="listDatas"
      item-key="name"
      :items-per-page="5"
      class="elevation-1"
    >
      <template #[`item.url`]="{ value }">
        <a target="_blank" :href="value">
          {{ value }}
        </a>
      </template>
      <template #[`item.code`]="{ item , value }">
        <button @click="onClickCode(item)">
          {{ value }}
        </button>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "QuickLinks",
  data() {
    return {
      headers: [
        { text: "id", value: "id" },
        { text: "url", value: "url" },
        { text: "code", value: "code" },
        { text: "displayName", value: "displayName" },
        { text: "claimType", value: "claimType" },
      ],
      listDatas: [],
    };
  },
  async created() {
    let response = await axios.get(
      "http://192.168.0.172:9090/config/ilm/configuration/master/api/fetchQuickLinks"
    );
    let { responseData } = response.data;
    responseData.sort((acc, iter) =>
      acc.id > iter.id ? 1 : iter.id > acc.id ? -1 : 0
    );
    this.listDatas = responseData;
  },
  methods: {
    onClickCode(datas) {
      var encoded = btoa(JSON.stringify(datas));
      this.$router.push({ path: `/rowdata/${encoded}` });
    },
  },
};
</script>

<style></style>
