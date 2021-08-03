<template>
  <div
    class="
      transition
      duration-500
      ease-in-out
      transform
      hover:-translate-y-1
      hover:scale-105
    "
  >
    <a :href="goToPersonDetail(person)">
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          rounded-lg
          shadow
          overflow-hidden
        "
      >
        <img
          v-if="this.person.profilePictures[0]"
          :src="this.person.profilePictures[0]"
          class="
            object-cover
            h-48
            aspect-w-4 aspect-h-3
            w-full
            object-cover object-center
          "
          alt="profile picture"
        />
        <img
          v-else
          src="https://lp-cms-production.imgix.net/2020-11/shutterstock_1245391942.jpg"
          class="
            object-cover
            h-48
            aspect-w-4 aspect-h-3
            w-full
            object-cover object-center
          "
          alt="profile picture"
        />
        <div class="p-4">
          <h1 class="title-font text-lg font-medium text-gray-900 mb-1">
            {{ this.person.name }}
          </h1>
          <h2
            class="tracking-widest text-xs title-font font-medium text-gray-400"
          >
            {{ this.getFormattedSeat(this.person) }}
          </h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      require: false,
      default: null,
    },
  },
  methods: {
    goToPersonDetail(person) {
      return '/person/' + person.id
    },
    getFormattedSeat(person) {
      if (person.seatIds != null) {
        const election = this.$store.getters['elections/lastElection']
        const seat = this.$store.getters['seats/filterSeatsByIds'](
          person.seatIds
        ).find((item) => item.electionId === election.id)

        if (seat != null) {
          return seat.code + ' ' + seat.name + ', ' + seat.state
        } else {
          return ''
        }
      }
    },
  },
}
</script>
