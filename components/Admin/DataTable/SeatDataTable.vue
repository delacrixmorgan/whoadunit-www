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
        <tr v-for="seat in items" :key="seat.id" class="hover:bg-gray-200">
          <td class="px-6 py-4">{{ seat.id }}</td>
          <td class="px-6 py-4">{{ getElectionYear(seat) }}</td>
          <td class="px-6 py-4">{{ seat.name }}</td>
          <td class="px-6 py-4">{{ seat.type }}</td>
          <td class="px-6 py-4">{{ seat.code }}</td>
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
                <a :href="getEditActionLink(seat)">Edit</a>
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
      headers: ['ID', 'Election', 'Name', 'Type', 'Code', 'Actions'],
    }
  },
  methods: {
    getElectionYear(seat) {
      return this.$store.getters['elections/getElectionById'](seat.electionId)
        .year
    },
    getEditActionLink(item) {
      return '/admin/seats/' + item.id
    },
  },
}
</script>
