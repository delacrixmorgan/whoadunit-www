<template>
  <div>
    <div v-if="editedSeat" class="p-5 flex flex-col">
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
        Edit Seat
      </h1>
      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col">
          <label class="form-label">Code</label>
          <input
            v-model.trim="editedSeat.code"
            class="form-edit-text"
            type="text"
            placeholder="Code"
          />
        </div>
        <div class="flex flex-col">
          <label class="form-label">Name</label>
          <input
            v-model.trim="editedSeat.name"
            class="form-edit-text"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="relative">
          <label class="form-label">State</label>
          <div class="relative">
            <select v-model.lazy="editedSeat.state" class="form-select-field">
              <option
                v-for="item in states"
                :key="item"
                class="form-select-item"
              >
                {{ item }}
              </option>
            </select>
            <select-chevron-down />
          </div>
        </div>
        <div class="relative">
          <label class="form-label">Seat Type</label>
          <div class="relative">
            <select v-model.lazy="editedSeat.type" class="form-select-field">
              <option
                v-for="item in seatTypes"
                :key="item"
                class="form-select-item"
              >
                {{ item }}
              </option>
            </select>
            <select-chevron-down />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="flex flex-col">
          <label class="form-label">Election</label>
          <election-auto-complete-search
            :items="elections"
            :model="getElectionYear()"
            :must-match-selection="true"
            @select-item="updateSeatElection"
          />
        </div>
        <div class="flex flex-col">
          <label class="form-label">Elected Person</label>
          <person-auto-complete-search
            :items="persons"
            :model="getPersonName()"
            :must-match-selection="true"
            @select-item="updateSeatPerson"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <button
          class="
            col-start-3
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
          @click="onEdit"
        >
          Update
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
          @click="onDelete"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      seat: null,
      editedSeat: null,
    }
  },
  computed: {
    seatTypes() {
      return this.$store.getters['global/seatTypes']
    },
    states() {
      return this.$store.getters['global/states']
    },
    elections() {
      return this.$store.getters['elections/elections']
    },
    persons() {
      return this.$store.getters['persons/persons']
    },
    isSeatUpdated() {
      return JSON.stringify(this.editedSeat) !== JSON.stringify(this.seat)
    },
  },
  created() {
    const seat = this.$store.getters['seats/getSeatById'](this.$route.params.id)
    if (seat == null) {
      return this.error({
        statusCode: 404,
        message: 'Seat not found',
      })
    }
    this.seat = seat
    this.editedSeat = { ...seat }
  },
  methods: {
    updateSeatElection(item) {
      this.editedSeat.electionId = item.id
    },
    updateSeatPerson(item) {
      this.editedSeat.personId = item.id
    },
    getElectionYear() {
      return this.$store.getters['elections/getElectionById'](
        this.editedSeat.electionId
      )
    },
    getPersonName() {
      return this.$store.getters['persons/getPersonById'](
        this.editedSeat.personId
      )
    },
    onEdit() {
      if (this.isSeatUpdated) {
        this.$store
          .dispatch('seats/editSeat', this.editedSeat)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => alert(error.message))
      } else {
        this.$router.back()
      }
    },
    onDelete() {
      this.$store
        .dispatch('seats/deleteSeat', this.editedSeat.id)
        .then(() => {
          this.$router.back()
        })
        .catch((error) => alert(error.message))
    },
  },
}
</script>
