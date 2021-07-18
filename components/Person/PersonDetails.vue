<template>
  <div class="rounded-lg shadow">
    <div>
      <img
        class="mb-4 h-64 w-full object-cover rounded-t-lg"
        src="https://images.unsplash.com/photo-1520452112805-c6692c840af0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80"
      />

      <img
        v-if="this.person.profilePictures[0]"
        :src="this.person.profilePictures[0]"
        class="object-cover w-32 h-32 rounded-full ml-4 shadow -mt-28"
        alt=""
      />
      <img
        v-else
        src="https://lp-cms-production.imgix.net/2020-11/shutterstock_1245391942.jpg"
        class="object-cover w-32 h-32 rounded-full ml-4 shadow -mt-28"
        alt=""
      />

      <div class="p-4">
        <div class="mb-4">
          <div class="flex">
            <div class="flex-grow flex space-x-2">
              <h1
                class="
                  sm:text-3xl
                  text-2xl
                  font-medium
                  title-font
                  mb-1
                  text-gray-900
                "
              >
                {{ this.person.name }}
              </h1>
            </div>
            <div class="flex-none">
              <p
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  text-sm
                  font-normal
                  rounded-full
                  text-indigo-700
                  bg-indigo-100
                "
              >
                MP
              </p>
            </div>
          </div>

          <div class="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            {{ currentSeat.code }}
            {{ currentSeat.name }},
            {{ currentSeat.state }}
          </div>
        </div>
        <div class="mb-4">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-2
              text-gray-900
            "
          >
            Summary
          </h1>
          <p class="leading-relaxed text-base">
            Locavore cardigan small batch roof party blue bottle blog meggings
            sartorial jean shorts kickstarter migas sriracha church-key synth
            succulents. Actually taiyaki neutra, distillery gastropub pok pok
            ugh.
          </p>
        </div>
        <div class="mb-4">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-2
              text-gray-900
            "
          >
            Contact Info
          </h1>

          <p class="leading-relaxed text-base">
            Locavore cardigan small batch roof party blue bottle blog meggings
            sartorial jean shorts kickstarter migas sriracha church-key synth
            succulents. Actually taiyaki neutra, distillery gastropub pok pok
            ugh.
          </p>

          <div class="flex-col mt-4 space-y-2">
            <person-contact-details
              v-for="contact in person.contactDetails"
              :key="contact.value"
              :contact="contact"
            />
          </div>
        </div>

        <div class="mt-4">
          <button
            class="
              text-white
              bg-indigo-500
              border-0
              py-4
              px-10
              focus:outline-none
              hover:bg-indigo-600
              rounded
              text-lg
            "
          >
            <a href="mailto:delacrixmorgan@pm.me">Something wrong? Tell us</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonContactDetails from './PersonContactDetails.vue'

export default {
  components: { PersonContactDetails },
  props: {
    person: {
      type: Object,
      require: false,
      default: null,
    },
    seats: { type: Array, require: false, default: null },
  },
  computed: {
    currentSeat() {
      const election = this.$store.getters['elections/lastElection']
      return this.seats.find((item) => item.electionId === election.id)
    },
  },
}
</script>
