<template>
  <div>
    <!-- <TopBar /> -->
    <CustomerList />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerList from "@/components/CustomerList.vue";

export default {
  name: "Home",
  components: {
    CustomerList,
  },
};
</script>
