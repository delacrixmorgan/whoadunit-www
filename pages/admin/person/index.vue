<template>
  <div class="p-5 flex flex-col">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      Person
    </h1>

    <person-data-table :items="persons" />
  </div>
</template>

<script>
import PersonDataTable from '@/components/Admin/DataTable/PersonDataTable'
export default {
  components: { PersonDataTable },
  layout: 'admin',
  computed: {
    persons() {
      return this.$store.getters['persons/persons']
    },
  },
}
</script>

<style scoped></style>
