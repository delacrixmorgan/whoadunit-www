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

    <table class="table-auto w-full">
      <thead class="bg-gray-50">
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            scope="col"
            class="
              px-6
              py-3
              text-left text-xs
              font-medium
              text-gray-500
              uppercase
              tracking-wider
            "
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <router-link
          v-for="seat in filteredSeats"
          :key="seat.name"
          class="hover:bg-gray-200"
          :to="{ path: `person/${seat.personId}`, props: true }"
          tag="tr"
        >
          <td class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="https://image.shutterstock.com/image-vector/3d-button-flag-selangor-state-260nw-374502412.jpg"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ seat.name }}
                </div>
                <div class="text-sm text-gray-500">
                  {{ seat.code }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ seat.state }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ seat.type }}
          </td>
        </router-link>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    year: { type: String, require: true, default: '2018' },
  },
  data() {
    return {
      headers: ['Seat', 'State', 'Type'],
      seats: [],
      search: '',
      filters: ['mp', 'adun'],
      searchQuery: '',
    }
  },
  computed: {
    filteredSeats() {
      const filteredSeats = this.filter(this.searchQuery.toLowerCase())

      // if (this.sortType !== '') {
      //   return filteredSeats.sort((a, b) => {
      //     let modifier = 1
      //     if (this.sortType === 'DESC') modifier = -1
      //     if (
      //       this.sortColumn === 'stateseatcode' ||
      //       this.sortColumn === 'federalseatcode'
      //     ) {
      //       if (a[this.sortColumn].localeCompare(b[this.sortColumn])) {
      //         return 1 * modifier
      //       }
      //     } else {
      //       if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier
      //       if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier
      //     }
      //     return 0
      //   })
      // }
      return filteredSeats
    },
  },
  async created() {
    this.seats = await this.$store.dispatch('seats/getSeats')
  },
  methods: {
    filter(query) {
      let filteredSeats = this.seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.state.toLowerCase().includes(query) ||
          seat.code.toLowerCase().includes(query)
      )

      if (this.filters.length === 0) {
        filteredSeats = []
      }

      if (this.filters.length === 1) {
        if (this.filters.includes('mp')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.type.toLowerCase() === 'mp'
          )
        }

        if (this.filters.includes('adun')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.type.toLowerCase() === 'adun'
          )
        }
      }

      return filteredSeats
    },
    setQuery(query) {
      this.searchQuery = query
    },
    setFilter(filters) {
      this.filters = filters
    },
  },
}
</script>
