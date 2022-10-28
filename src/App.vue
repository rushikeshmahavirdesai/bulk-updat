<template>
  <div style="padding: 10px">
    <vue-csv-import v-model="data.mappedCsv" :fields="data.fields">
      <vue-csv-toggle-headers></vue-csv-toggle-headers>
      <vue-csv-errors></vue-csv-errors>
      <div>
        <vue-csv-input></vue-csv-input>
      </div>
      <vue-csv-map></vue-csv-map>
    </vue-csv-import>
    <br /><br />
    <div>
      <pre>{{ data.mappedCsv }}</pre>
    </div>
    <el-button type="primary">Primary</el-button>
    <BulkUpdateTableVue />
  </div>
</template>
<script setup>
import BulkUpdateTableVue from "./components/BulkUpdateTable.vue";
import { reactive } from "vue";
const data = reactive({
  mappedCsv: null,
  fields: {
    id: { required: false, label: "id" },
    name: { required: false, label: "name" },
    slug: { required: false, label: "slug" },
    hsncode: { required: false, label: "hsncode" },
    igst: { required: false, label: "igst" },
    cgst: { required: false, label: "cgst" },
    sgst: { required: false, label: "sgst" },
    description: { required: false, label: "description" },
    fresh: { required: false, label: "fresh" },
    purchase: { required: false, label: "purchase" },
    rank: { required: false, label: "rank" },
    status: { required: false, label: "status" },
  },
});
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
