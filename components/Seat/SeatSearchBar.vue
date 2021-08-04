<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="bg-white">
      <input
        v-model.trim="searchQuery"
        class="
          w-full
          focus:outline-none
          focus:ring
          focus:border-blue-300
          text-sm text-black
          placeholder-gray-500
          border border-gray-200
          rounded-md
          py-3
          pl-5
        "
        type="text"
        placeholder="Search by name or seat number"
        @input="updateSearchQuery"
      />
    </div>

    <div class="flex mt-3 space-x-2">
      <div class="flex-grow flex space-x-2">
        <button
          class="filter-item-link h-12"
          :class="[isMpFilterActive ? 'active' : '']"
          @click="
            isMpFilterActive = !isMpFilterActive
            updateSeatFilter()
          "
        >
          Members of Parliament
        </button>
        <button
          class="filter-item-link h-12"
          :class="[isAdunFilterActive ? 'active' : '']"
          @click="
            isAdunFilterActive = !isAdunFilterActive
            updateSeatFilter()
          "
        >
          ADUN
        </button>
      </div>
      <div class="relative pr-2">
        <label class="form-label"> State </label>
        <div class="relative">
          <select
            v-model.lazy="stateFilter"
            class="
              block
              appearance-none
              w-full
              bg-grey-lighter
              border border-grey-lighter
              text-grey-darker
              py-3
              px-4
              pr-8
              rounded
            "
            @change="updateStateFilter"
          >
            <option v-for="(state, index) in states" :key="index">
              {{ state }}
            </option>
          </select>
          <select-chevron-down />
        </div>
      </div>
      <div class="relative flex-none">
        <label class="form-label"> Election </label>
        <div class="relative">
          <select
            v-model.lazy="electionFilter"
            class="
              block
              appearance-none
              w-full
              bg-grey-lighter
              border border-grey-lighter
              text-grey-darker
              py-3
              px-4
              pr-8
              rounded
            "
            @change="updateElectionFilter"
          >
            <option v-for="(election, index) in elections" :key="index">
              {{ election.year }}
            </option>
          </select>
          <select-chevron-down />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['search-query', 'filter-type'],
  data() {
    return {
      searchQuery: '',
      isMpFilterActive: true,
      isAdunFilterActive: true,
      stateFilter: '',
      electionFilter: '',
      states: [
        'All',
        'Perlis',
        'Kedah',
        'Kelantan',
        'Terrengganu',
        'Penang',
        'Perak',
        'Pahang',
        'Selangor',
        'Kuala Lumpur',
        'Putrajaya',
        'Negeri Sembilan',
        'Malacca',
        'Johor',
        'Labuan',
        'Sabah',
        'Sarawak',
      ],
      elections: [],
    }
  },
  created() {
    this.elections = this.$store.getters['elections/elections']

    this.stateFilter = this.states[0]
    this.electionFilter = this.elections[0].year

    this.$emit('search-query', this.searchQuery)
    this.$emit('seat-filter', ['mp', 'adun'])
    this.$emit('state-filter', this.stateFilter)
    this.$emit('election-filter', this.electionFilter)
  },
  methods: {
    updateSearchQuery() {
      this.$emit('search-query', this.searchQuery)
    },
    updateSeatFilter() {
      const seatFilter = []
      if (this.isMpFilterActive) {
        seatFilter.push('mp')
      }
      if (this.isAdunFilterActive) {
        seatFilter.push('adun')
      }
      this.$emit('seat-filter', seatFilter)
    },
    updateStateFilter() {
      this.$emit('state-filter', this.stateFilter)
    },
    updateElectionFilter() {
      const election = this.elections.find(
        (item) => item.year === this.electionFilter
      )
      this.$emit('election-filter', election)
    },
  },
}
</script>

<style scoped>
.filter-item-link {
  @apply rounded-full px-6 py-2 bg-purple-50 hover:bg-purple-500 hover:text-white text-purple-700 text-sm;
}

.active.filter-item-link {
  @apply rounded-full px-6 py-2 bg-purple-700 hover:bg-purple-700 hover:text-white text-purple-50 text-sm;
}
</style>
