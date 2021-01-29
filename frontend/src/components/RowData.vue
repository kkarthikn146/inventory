<template>
  <div>
    {{ rowData }}
  </div>
</template>

<script>
export default {
  name: "RowData",
  data() {
    return {
      rowData: {},
    };
  },
  created() {
    var actual = JSON.parse(atob(this.$route.params.data));
    this.rowData = actual;
  },
};
</script>

<style></style>
