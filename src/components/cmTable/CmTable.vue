<template>
  <table class="table table-responsive table-hover">
    <thead>
    <tr>
      <th v-for="(field, index) in fields" :key="`table-head_${index}`" v-show="headers[field].show">{{ headers[field].title }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, rowIndex) in items" :key="`table-cell_${rowIndex}`">
      <td v-for="(field, cellIndex) in fields" :key="`table-row_${cellIndex}`" v-show="headers[field].show">
        {{ item[field] }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
export default {
  name: 'CmTable',
  props: {
    headers: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    fields() {
      return Object.keys(this.headers);
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  &__delete-icon {
    cursor: pointer;
  }
}
.center {
  vertical-align: middle;
  text-align: center;
}
</style>
