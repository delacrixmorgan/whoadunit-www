<template>
  <div class="p-5 flex flex-col">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      Seats
    </h1>
    <seat-data-table :items="seats" />
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
}
</script>
