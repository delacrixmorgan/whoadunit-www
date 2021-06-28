<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <div class="flex flex-col">
        <label class="form-label">Code</label>
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
          placeholder="Name"
        />
      </div>
      <div class="flex flex-col">
        <label class="form-label"> Name</label>
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
        <label class="form-label"> State </label>
        <div class="relative">
          <select
            v-model.trim="seat.state"
            class="
              block
              appearance-none
              w-full
              bg-grey-lighter
              border border-grey-lighter
              text-grey-darker
              py-3
              px-4
              pr-8
              rounded
            "
          >
            <option v-for="state in states" :key="state">
              {{ state }}
            </option>
          </select>
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              flex
              mr-4
              items-center
              text-grey-darker
            "
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="relative">
        <label class="form-label"> Seat Type </label>
        <div class="relative">
          <select
            class="
              block
              appearance-none
              w-full
              bg-grey-lighter
              border border-grey-lighter
              text-grey-darker
              py-3
              px-4
              pr-8
              rounded
            "
            v-model.trim="seat.type"
          >
            <option v-for="seatType in seatTypes" :key="seatType">
              {{ seatType }}
            </option>
          </select>
          <div
            class="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              flex
              mr-4
              items-center
              text-grey-darker
            "
          >
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
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
      seatTypes: ['ADUN', 'MP'],
      states: [
        'Perlis',
        'Kedah',
        'Kelantan',
        'Terrengganu',
        'Penang',
        'Perak',
        'Pahang',
        'Selangor',
        'Kuala Lumpur',
        'Putrajaya',
        'Negeri Sembilan',
        'Malacca',
        'Johor',
        'Labuan',
        'Sabah',
        'Sarawak',
      ],
      seat: {
        code: '',
        name: '',
        state: '',
        type: '',
      },
    }
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

<style scoped>
.form-label {
  @apply block
  uppercase
  tracking-wide
  text-gray-700 text-xs
  font-bold
  mb-2;
}
</style>
