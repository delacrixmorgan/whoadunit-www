<template>
  <div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  ></path>
                </svg>
                <!-- TODO: Show State Flags -->
                <img
                  class="h-10 w-10 rounded-full object-cover hidden"
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
    loadedSeats: {
      type: Array,
      require: true,
      default: null,
    },
    searchQuery: {
      type: String,
      require: true,
      default: '',
    },
    seatFilter: {
      type: Array,
      require: true,
      default: null,
    },
    stateFilter: {
      type: String,
      require: true,
      default: '',
    },
    electionFilter: {
      type: Object,
      require: true,
      default: null,
    },
  },
  data() {
    return {
      headers: ['Seat', 'State', 'Type'],
      seats: [],
    }
  },
  computed: {
    filteredSeats() {
      const seats = this.filter(this.searchQuery.toLowerCase())

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
      return seats
    },
  },
  created() {
    this.seats = this.loadedSeats
  },
  methods: {
    filter(query) {
      let filteredSeats = this.seats.filter(
        (seat) =>
          seat.name.toLowerCase().includes(query) ||
          seat.state.toLowerCase().includes(query) ||
          seat.code.toLowerCase().includes(query)
      )

      if (this.seatFilter.length === 0) {
        filteredSeats = []
      }

      if (this.seatFilter.length === 1) {
        if (this.seatFilter.includes('mp')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.type.toLowerCase() === 'mp'
          )
        }

        if (this.seatFilter.includes('adun')) {
          filteredSeats = filteredSeats.filter(
            (seat) => seat.type.toLowerCase() === 'adun'
          )
        }
      }

      return filteredSeats
    },
  },
}
</script>
