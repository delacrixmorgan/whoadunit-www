<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <div class="flex flex-col">
        <label class="form-label">Code</label>
        <input
          v-model.trim="seat.code"
          class="form-edit-text"
          type="text"
          placeholder="Code"
        />
      </div>
      <div class="flex flex-col">
        <label class="form-label">Name</label>
        <input
          v-model.trim="seat.name"
          class="form-edit-text"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="relative">
        <label class="form-label">State</label>
        <div class="relative">
          <select v-model.trim="seat.state" class="form-select-field">
            <option
              v-for="state in states"
              :key="state"
              class="form-select-item"
            >
              {{ state }}
            </option>
          </select>
          <select-chevron-down />
        </div>
      </div>
      <div class="relative">
        <label class="form-label">Seat Type</label>
        <div class="relative">
          <select v-model.trim="seat.type" class="form-select-field">
            <option
              v-for="seatType in seatTypes"
              :key="seatType"
              class="form-select-item"
            >
              {{ seatType }}
            </option>
          </select>
          <select-chevron-down />
        </div>
      </div>
      <div class="flex items-end">
        <button
          class="
            bg-blue-500
            hover:bg-blue-600
            bottom-0
            max-h-11
            w-full
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
          @click="onSubmit"
        >
          <a href="#">Add</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['submit'],
  data() {
    return {
      seat: {
        code: '',
        name: '',
        state: '',
        type: '',
      },
    }
  },
  computed: {
    seatTypes() {
      return this.$store.getters['global/seatTypes']
    },
    states() {
      return this.$store.getters['global/states']
    },
  },
  created() {
    this.seat.state = this.states[0]
    this.seat.type = this.seatTypes[0]
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.seat)
    },
  },
}
</script>
