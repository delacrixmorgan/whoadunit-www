<template>
  <div
    class="
      container
      mx-auto
      px-5
      py-2
      flex-col
      md:flex-row md:flex-nowrap
      items-center
    "
  >
    <person-search-bar
      class="mb-5"
      @search-query="setQuery"
      @filter-type="setFilter"
    />
    <person-grid
      :loaded-persons="persons"
      :filters="filters"
      :search-query="searchQuery"
    />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const persons = await context.store.dispatch('persons/getPersons')
    return { persons }
  },
  data() {
    return {
      searchQuery: '',
      filters: ['mp', 'adun'],
    }
  },
  methods: {
    setQuery(query) {
      this.searchQuery = query
    },
    setFilter(filters) {
      this.filters = filters
    },
  },
}
</script>
