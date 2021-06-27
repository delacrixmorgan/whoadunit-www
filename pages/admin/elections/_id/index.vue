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
        Election {{ loadedElection.year }}
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
        Edit Year
      </h1>

      <election-edit-form :election="loadedElection" @submit="onSubmitted" />

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
      <!--      <seat-create class="mb-4" />-->
      <seat-data-table :items="seats" />
    </div>
  </div>
</template>

<script>
import SeatDataTable from '@/components/Admin/DataTable/SeatDataTable'
import ElectionEditForm from '@/components/Election/ElectionEditForm'

export default {
  components: { SeatDataTable, ElectionEditForm },
  layout: 'admin',
  asyncData(context) {
    const election = context.store.getters['elections/getElectionById'](
      context.params.id
    )
    if (election == null) {
      return context.error({
        statusCode: 404,
        message: 'Election not found',
      })
    }
    return { loadedElection: election }
  },
  computed: {
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
    onSubmitted(editedElection) {
      this.$store
        .dispatch('elections/editElection')
        .then((data) => {
          alert(editedElection.year)
        })
        .catch((error) => alert(error.message))
    },
  },
}
</script>
