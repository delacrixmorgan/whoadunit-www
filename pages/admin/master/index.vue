<template>
  <div class="p-5 space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
        >
          First Name
        </label>
        <input
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
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
        >
          Last Name
        </label>
        <input
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
    </div>
    <div>
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        Password
      </label>
      <input
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
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="relative">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
        >
          Seat Type
        </label>
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

      <div class="relative">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
        >
          State
        </label>
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
          >
            <option v-for="state in states" :key="state">{{ state }}</option>
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
    </div>

    <div>
      <label
        class="
          block
          uppercase
          tracking-wide
          text-gray-700 text-xs
          font-bold
          mb-2
        "
      >
        Assign Person
      </label>
      <auto-complete-search :items="seats" />
    </div>

    <div class="grid grid-cols-4 gap-4">
      <button
        class="
          col-start-3
          bg-blue-500
          hover:bg-blue-600
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
      >
        <a href="#">Add</a>
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
      >
        <a href="#">Delete</a>
      </button>
    </div>
  </div>
</template>

<script>
import autoCompleteSearch from '@/components/Common/AutoCompleteSearch'
export default {
  components: { autoCompleteSearch },
  layout: 'blank',
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
      seats: [
        'Sungai Air Tawar',
        'Sabak',
        'Sungai Panjang',
        'Sekinchan',
        'Hulu Bernam',
        'Kuala Kubu Baharu',
        'Batang Kali',
        'Sungai Burong',
        'Permatang',
        'Bukit Melawati',
      ],
    }
  },
}
</script>

<style scoped></style>
