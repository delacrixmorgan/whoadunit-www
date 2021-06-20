<template>
  <div>
    <table class="table-auto w-full shadow">
      <thead>
        <tr class="bg-gray-50">
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
        <tr v-for="person in items" :key="person.id" class="hover:bg-gray-200">
          <td class="px-6 py-4">{{ person.id }}</td>
          <td class="px-6 py-4">{{ person.name }}</td>
          <td class="px-6 py-4">{{ person.status }}</td>
          <td class="px-6 py-4">{{ getFormattedSeat(person) }}</td>
          <td class="px-6 py-4">{{ person.contactDetails }}</td>
          <!--          <td class="px-6 py-4">{{ getElectionYear(seat) }}</td>-->
          <!--          <td class="px-6 py-4">{{ seat.name }}</td>-->
          <!--          <td class="px-6 py-4">{{ seat.type }}</td>-->
          <!--          <td class="px-6 py-4">{{ seat.code }}</td>-->
          <td class="px-6 py-4">
            <div class="flex flex-row space-x-2">
              <button
                class="
                  bg-green-500
                  hover:bg-green-600
                  flex-shrink-0
                  text-white
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  rounded
                  text-lg
                  mt-10
                  sm:mt-0
                "
              >
                <a :href="getEditActionLink(person)">Edit</a>
              </button>
              <button
                class="
                  bg-red-500
                  hover:bg-red-600
                  flex-shrink-0
                  text-white
                  border-0
                  py-2
                  px-8
                  focus:outline-none
                  rounded
                  text-lg
                  mt-10
                  sm:mt-0
                "
              >
                <a href="#">Delete</a>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      headers: ['ID', 'Name', 'Status', 'Seat', 'Contact Details', 'Actions'],
    }
  },
  methods: {
    getFormattedSeat(person) {
      if (person.seatIds != null) {
        // return person.seatIds[0]
        return this.$store.getters['seats/filterSeatsByIds'](person.seatIds)
        // return person.seatIds[0]
      }
      // return this.$store.getters['seats/getSeatById'](person.seatIds)
      // return this.$store.getters['elections/getElectionById'](seat.electionId)
      //   .year
    },
    getEditActionLink(item) {
      return '/admin/persons/' + item.id
    },
  },
}
</script>
