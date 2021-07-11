<template>
  <div class="p-5 flex flex-col">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      Person
    </h1>

    <person-filter-form class="mt-4" @search="onSearch" />
    <person-data-table class="mt-4" />
  </div>
</template>

<script>
import PersonDataTable from '@/components/Admin/DataTable/PersonDataTable'
export default {
  components: { PersonDataTable },
  layout: 'admin',
  methods: {
    onSearch(searchQuery) {
      this.$nuxt.$emit('search-query', searchQuery)
    },
  },
}
</script>

<style scoped></style>
