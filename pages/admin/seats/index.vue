<template>
  <div class="p-5 flex flex-col">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      Seats
    </h1>
    <seat-create-form class="mt-4" @submit="onSeatAdd" />
    <seat-data-table class="mt-4" :items="seats" />
  </div>
</template>

<script>
import SeatDataTable from '@/components/Admin/DataTable/SeatDataTable'

export default {
  components: { SeatDataTable },
  layout: 'admin',
  computed: {
    seats() {
      return this.$store.getters['seats/seats']
    },
  },
  methods: {
    onSeatAdd(seat) {
      const election = this.$store.getters['elections/lastElection']
      this.$store
        .dispatch('seats/addSeat', {
          electionId: election.id,
          ...seat,
        })
        .catch((error) => alert(error.message))
    },
  },
}
</script>
