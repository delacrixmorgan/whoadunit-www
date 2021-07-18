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
            updateFilterType()
          "
        >
          Members of Parliament
        </button>
        <button
          class="filter-item-link h-12"
          :class="[isAdunFilterActive ? 'active' : '']"
          @click="
            isAdunFilterActive = !isAdunFilterActive
            updateFilterType()
          "
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
  emits: ['search-query', 'filter-type'],
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
