<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="bg-white">
      <input
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
        @input="updateSearchQuery"
        placeholder="Search by name or seat number"
        v-model.trim="searchQuery"
      />
    </div>

    <div class="flex mt-3 space-x-2">
      <div class="flex-grow flex space-x-2">
        <button
          @click="
            isMpFilterActive = !isMpFilterActive
            updateFilterType()
          "
          :class="[isMpFilterActive ? 'active' : '']"
          class="filter-item-link h-12"
        >
          Members of Parliament
        </button>
        <button
          @click="
            isAdunFilterActive = !isAdunFilterActive
            updateFilterType()
          "
          :class="[isAdunFilterActive ? 'active' : '']"
          class="filter-item-link h-12"
        >
          ADUN
        </button>
      </div>
      <div class="flex-none">
        <dropdown-menu :dropdown="stateDropdown" />
      </div>
      <div class="flex-none">
        <dropdown-menu :dropdown="yearDropdown" />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Common/DropdownMenu.vue'

export default {
  components: { DropdownMenu },
  data() {
    return {
      searchQuery: '',
      isMpFilterActive: true,
      isAdunFilterActive: true,
      isDropdownExpanded: false,
      yearDropdown: {
        placeholder: 'Year',
        items: ['2021', '2018'],
      },
      stateDropdown: {
        placeholder: 'States',
        items: [
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
      },
    }
  },
  emits: ['search-query', 'filter-type'],
  methods: {
    updateSearchQuery() {
      this.$emit('search-query', this.searchQuery)
    },
    updateFilterType() {
      const filters = []
      if (this.isMpFilterActive) {
        filters.push('mp')
      }
      if (this.isAdunFilterActive) {
        filters.push('adun')
      }
      this.$emit('filter-type', filters)
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
