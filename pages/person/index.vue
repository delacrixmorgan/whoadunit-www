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
    ></person-search-bar>
  </div>
</template>

<script>
export default {
  methods: {
    setQuery(query) {
      this.searchQuery = query
    },
  },
}
</script>
