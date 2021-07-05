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
      headers: [
        'ID',
        'Name',
        'Status',
        'Seat',
        'Email',
        'Phone Number',
        'Facebook',
        'Twitter',
        'Actions',
      ],
    }
  },
  methods: {
    getFormattedSeat(person) {
      if (person.seatIds != null) {
        const seats = this.$store.getters['seats/filterSeatsByIds'](
          person.seatIds
        ).flatMap((seat) => seat.name)
        return seats.slice(0, seats.length).join(', ')
      }
    },
    isContactDetailsAvailable(person, type) {
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
