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
      @search-query="setSearchQuery"
      @seat-filter="setSeatFilter"
      @state-filter="setStateFilter"
      @election-filter="setElectionFilter"
    />
    <seat-table
      :loaded-seats="seats"
      :search-query="searchQuery"
      :seat-filter="seatFilter"
      :state-filter="stateFilter"
      :election-filter="electionFilter"
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
      seatFilter: [],
      stateFilter: '',
      electionFilter: null,
    }
  },
  methods: {
    setSearchQuery(item) {
      this.searchQuery = item
    },
    setSeatFilter(item) {
      this.seatFilter = item
    },
    setStateFilter(item) {
      this.stateFilter = item
    },
    setElectionFilter(item) {
      this.electionFilter = item
    },
  },
}
</script>
