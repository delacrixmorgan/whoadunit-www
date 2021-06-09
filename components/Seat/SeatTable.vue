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
    ></seat-search-bar>

    <table>
      <thead class="bg-gray-50">
        <tr>
          <th
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
            Seat
          </th>
          <th
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
            State
          </th>
          <th
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
            Incumbent Name
          </th>
          <th
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
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="seat in filteredSeats"
          :key="seat.name"
          class="hover:bg-gray-200"
          @click="gotToSeatDetails(seat)"
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
            {{ seat.person.name }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        </tr>
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
      search: '',
      seats: [],
      filters: ['mp', 'adun'],
      searchQuery: '',
    }
  },
  created() {
    this.seats = this.$store.getters.seats
    const persons = this.$store.getters.persons

    for (let index = 0; index < this.seats.length; index++) {
      const seat = this.seats[index]
      const federalSeatCode = seat.federalseatcode
      const stateSeatCode = seat.stateseatcode
      const filteredPerson = persons.filter(
        (person) =>
          person.federalseatcode === federalSeatCode &&
          person.stateseatcode === stateSeatCode
      )
      if (filteredPerson.length > 0) {
        seat.person = filteredPerson[0]
      } else {
        seat.person = null
      }

      seat.code = this.getSeatCode(seat)
    }
    this.seats = this.seats.filter((seat) => seat.person != null)
  },
  computed: {
    filteredSeats() {
      const filteredSeats = this.filter(this.searchQuery.toLowerCase())

      if (this.sortType !== '') {
        return filteredSeats.sort((a, b) => {
          let modifier = 1
          if (this.sortType === 'DESC') modifier = -1
          if (
            this.sortColumn === 'stateseatcode' ||
            this.sortColumn === 'federalseatcode'
          ) {
            if (a[this.sortColumn].localeCompare(b[this.sortColumn])) {
              return 1 * modifier
            }
          } else {
            if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier
            if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier
          }
          return 0
        })
      }
      return filteredSeats
    },
  },
  methods: {
    filter(query) {
      let filteredSeats = this.seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.state.toLowerCase().includes(query) ||
          seat.federalseatcode.toLowerCase().includes(query) ||
          seat.person.name.toLowerCase().includes(query)
      )

      if (this.filters.length === 0) {
        filteredSeats = []
      }

      if (this.filters.length === 1) {
        if (this.filters.includes('mp')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.level.toLowerCase() === 'federal'
          )
        }

        if (this.filters.includes('adun')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.level.toLowerCase() === 'state'
          )
        }
      }

      return filteredSeats
    },
    getSeatCode(seat) {
      if (seat.level === 'Federal') {
        return seat.federalseatcode
      }
      if (seat.level === 'State') {
        return seat.stateseatcode
      }
    },
    gotToSeatDetails(row) {
      this.$router.push({ path: `person/${row.person.id}`, props: true })
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
