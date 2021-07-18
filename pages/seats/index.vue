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
    <seat-search-bar
      class="mb-5"
      @search-query="setQuery"
      @filter-type="setFilter"
    />
    <seat-table
      :loaded-seats="seats"
      :filters="filters"
      :search-query="searchQuery"
    />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const seats = await context.store.dispatch('seats/getSeats')
    return { seats }
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
