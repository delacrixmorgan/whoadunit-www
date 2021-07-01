<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <div class="flex flex-col">
        <EditTextLabel label="Code" />
        <input
          v-model.trim="seat.code"
          class="
            w-full
            focus:outline-none
            focus:ring
            focus:border-blue-300
            text-sm text-black
            placeholder-gray-500
            border border-gray-200
            rounded-md
            py-3
            pl-5
          "
          type="text"
          placeholder="Code"
        />
      </div>
      <div class="flex flex-col">
        <EditTextLabel label="Name" />
        <input
          v-model.trim="seat.name"
          class="
            w-full
            focus:outline-none
            focus:ring
            focus:border-blue-300
            text-sm text-black
            placeholder-gray-500
            border border-gray-200
            rounded-md
            py-3
            pl-5
          "
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="relative">
        <EditTextLabel label="State" />
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
        <EditTextLabel label="Seat Type" />
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
import EditTextLabel from '@/components/UI/EditTextLabel'
import SelectChevronDown from '@/components/UI/SelectChevronDown'

export default {
  components: { EditTextLabel, SelectChevronDown },
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
