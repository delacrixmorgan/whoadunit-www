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
        <tr
          v-for="person in results"
          :key="person.id"
          class="hover:bg-gray-200"
        >
          <td class="px-6 py-4">{{ person.name }}</td>
          <td class="px-6 py-4">{{ person.status }}</td>
          <td class="px-6 py-4">{{ getFormattedSeat(person) }}</td>
          <td class="px-6 py-4">
            <div v-if="isContactDetailsAvailable(person, 'Email')">✅</div>
          </td>
          <td class="px-6 py-4">
            <div v-if="isContactDetailsAvailable(person, 'Phone Number')">
              ✅
            </div>
          </td>
          <td class="px-6 py-4">
            <div v-if="isContactDetailsAvailable(person, 'Facebook')">✅</div>
          </td>
          <td class="px-6 py-4">
            <div v-if="isContactDetailsAvailable(person, 'Twitter')">✅</div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-row space-x-2">
              <button class="btn-action-green">
                <a :href="getEditActionLink(person)">Edit</a>
              </button>
              <button class="btn-action-red" @click="onDelete(person)">
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
  data() {
    return {
      results: [],
      items: [],
      headers: [
        'Name',
        'Status',
        'Seat',
        'Email',
        'Phone',
        'Facebook',
        'Twitter',
        'Actions',
      ],
    }
  },
  created() {
    this.items = this.$store.getters['persons/persons']
    this.results = this.items

    this.$nuxt.$on('search-query', (searchQuery) => {
      this.results = this.items.filter((item) =>
        item.name.toString().toLowerCase().includes(searchQuery)
      )
      // TODO: Filter Search Query
    })
  },
  methods: {
    onDelete(person) {
      this.$store
        .dispatch('persons/deletePerson', person)
        .catch((error) => alert(error.message))
    },
    getFormattedSeat(person) {
      if (person.seatIds != null) {
        const seats = this.$store.getters['seats/filterSeatsByIds'](
          person.seatIds
        ).flatMap((seat) => seat.name)
        return seats.slice(0, seats.length).join(', ')
      }
    },
    isContactDetailsAvailable(person, type) {
      if (!person.contactDetails) {
        return
      }
      if (type === 'Email') {
        return (
          person.contactDetails.find(
            (contactDetail) => contactDetail.type === type
          ) != null
        )
      }
      if (type === 'Phone Number') {
        return (
          person.contactDetails.find(
            (contactDetail) => contactDetail.type === type
          ) != null
        )
      }
      if (type === 'Facebook') {
        return (
          person.contactDetails.find(
            (contactDetail) => contactDetail.type === type
          ) != null
        )
      }
      if (type === 'Twitter') {
        return (
          person.contactDetails.find(
            (contactDetail) => contactDetail.type === type
          ) != null
        )
      }
    },
    getEditActionLink(item) {
      return '/admin/person/edit/' + item.id
    },
  },
}
</script>
