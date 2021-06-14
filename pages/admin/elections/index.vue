<template>
  <div class="p-5 flex flex-col">
    <h1
      class="
        sm:text-3xl
        text-2xl
        font-medium
        title-font
        mb-2
        text-gray-900
        py-4
      "
    >
      Elections
    </h1>
    <election-data-table :elections="elections" />
  </div>
</template>

<script>
import ElectionDataTable from '@/components/Admin/DataTable/ElectionDataTable'
export default {
  components: { ElectionDataTable },
  layout: 'admin',
  computed: {
    elections() {
      return this.$store.getters['elections/elections']
    },
  },
}
</script>
