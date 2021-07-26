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
          <td class="px-6 py-4">{{ getElectionYear(seat) }}</td>
          <td class="px-6 py-4">{{ seat.code }}</td>
          <td class="px-6 py-4">{{ seat.name }}</td>
          <td class="px-6 py-4">{{ seat.state }}</td>
          <td class="px-6 py-4">{{ seat.type }}</td>
          <td class="px-6 py-4">
            <div class="flex flex-row space-x-2">
              <button class="btn-action-green">
                <a :href="getEditActionLink(seat)">Edit</a>
              </button>
              <button class="btn-action-red" @click="onDelete(seat)">
                Delete
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
      headers: ['Election', 'Code', 'Name', 'State', 'Type', 'Actions'],
    }
  },
  methods: {
    getElectionYear(seat) {
      return this.$store.getters['elections/getElectionById'](seat.electionId)
        .year
    },
    getEditActionLink(item) {
      return '/admin/seats/edit/' + item.id
    },
    onDelete(seat) {
      this.$store
        .dispatch('seats/deleteSeat', seat.id)
        .catch((error) => alert(error.message))
    },
  },
}
</script>
