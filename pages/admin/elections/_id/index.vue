<template>
  <div>
    <div class="p-5 flex flex-col">
      <h1
        class="
          sm:text-3xl
          text-2xl
          font-medium
          title-font
          mb-2
          text-gray-900
          py-4
        "
      >
        Election {{ election.year }}
      </h1>

      <p>
        There are a total of
        <span class="font-extrabold"
          >{{ getSeatsByType('MP').length }} MP seats</span
        >
        and
        <span class="font-extrabold"
          >{{ getSeatsByType('ADUN').length }} ADUN seats</span
        >
        .
      </p>

      <h1
        class="
          sm:text-3xl
          text-2xl
          font-medium
          title-font
          mb-2
          text-gray-900
          py-4
        "
      >
        Create Seats
      </h1>
      <seat-create class="mb-4" />
      <seat-data-table :items="seats" />
    </div>
  </div>
</template>

<script>
import SeatDataTable from '@/components/Admin/DataTable/SeatDataTable'

export default {
  components: { SeatDataTable },
  layout: 'admin',
  computed: {
    election() {
      const election = this.$store.getters['elections/getElectionById'](
        this.$route.params.id
      )
      if (election == null) {
        return this.$nuxt.error({
          statusCode: 404,
          message: 'Election not found',
        })
      }
      return election
    },
    seats() {
      return this.$store.getters['seats/filterSeatsByElectionId'](
        this.$route.params.id
      )
    },
  },
  methods: {
    getSeatsByType(type) {
      return this.seats.filter((seat) => seat.type === type)
    },
  },
}
</script>
