<template>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div v-if="person != null && seat != null">
      <PersonDetails :person="person" :seat="seat"> </PersonDetails>
    </div>

    <div class="flex ml-6 items-center hidden">
      <span class="mr-3">Size</span>
      <div class="relative">
        <select
          class="
            rounded
            border
            appearance-none
            border-gray-300
            py-2
            focus:outline-none
            focus:ring-2 focus:ring-indigo-200
            focus:border-indigo-500
            text-base
            pl-3
            pr-10
          "
        >
          <option>SM</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <span
          class="
            absolute
            right-0
            top-0
            h-full
            w-10
            text-center text-gray-600
            pointer-events-none
            flex
            items-center
            justify-center
          "
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      seat: null,
      person: null,
    }
  },
  created() {
    this.findPersonById()
  },
  methods: {
    findPersonById() {
      this.id = this.$route.params.id
      this.$store
        .dispatch('findPersonById', {
          id: this.id,
        })
        .then((response) => {
          this.person = response
          this.findSeat()
        })
    },
    findSeat() {
      this.$store
        .dispatch('findSeatByCode', {
          federalSeatCode: this.person.federalseatcode,
          stateSeatCode: this.person.stateseatcode,
        })
        .then((response) => {
          this.seat = response
        })
    },
  },
}
</script>
