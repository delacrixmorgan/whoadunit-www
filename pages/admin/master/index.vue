<template>
  <div class="p-5 space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label class="form-label"> First Name</label>
        <input class="form-edit-text" type="text" placeholder="Name" />
      </div>
      <div class="flex flex-col">
        <label class="form-label"> Last Name </label>
        <input class="form-edit-text" type="text" placeholder="Name" />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="flex flex-col col-span-1">
        <label class="form-label"> Password </label>
        <input class="form-edit-text" type="password" placeholder="Password" />
      </div>
      <div class="flex flex-col col-span-3">
        <label class="form-label">Confirm Password </label>
        <input class="form-edit-text" type="password" placeholder="Password" />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
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
        <label class="form-label"> State </label>
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
    </div>

    <div>
      <div>
        <label class="form-label">Contact Details</label>

        <div
          v-for="(contactDetail, index) in contactDetails"
          :key="contactDetail.value"
          class="flex flex-row space-x-2 mt-4"
        >
          <div class="relative w-64">
            <select v-model.lazy="contactDetail.type" class="form-select-field">
              <option
                v-for="item in contactTypes"
                :key="item"
                class="form-select-item"
              >
                {{ item }}
              </option>
            </select>
            <select-chevron-down />
          </div>
          <input
            v-model.lazy="contactDetail.value"
            class="form-edit-text"
            type="text"
            placeholder="Phone Number"
          />
          <button
            class="btn-action-blue"
            @click="onContactDetailAdd(contactDetail, index)"
          >
            Add
          </button>
          <button
            class="btn-action-red"
            @click="onContactDetailDelete(contactDetail, index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <div>
      <label class="form-label"> Assign Person </label>
      <auto-complete-search :items="seats" @select-item="updateSelectedItem" />
    </div>

    <div>
      <label class="form-label"> Search Person </label>
      <search-bar @select-item="updateSelectedItem" />
    </div>

    <div class="grid grid-cols-4 gap-4">
      <button class="btn-action-blue col-start-3">Add</button>
      <button class="btn-action-red">Delete</button>
    </div>
  </div>
</template>

<script>
import AutoCompleteSearch from '@/components/Common/AutoCompleteSearch'
import SearchBar from '@/components/Common/SearchBar'

export default {
  components: { AutoCompleteSearch, SearchBar },
  layout: 'blank',
  data() {
    return {
      contactDetails: [
        {
          type: 'Email',
          value: 'khim@selangor.gov.my',
        },
        {
          type: 'Phone Number',
          value: '+603-3341 4982',
        },
        {
          type: 'Facebook',
          value: 'https://www.facebook.com/tengchangkhimpage',
        },
        {
          type: 'Twitter',
          value: 'https://twitter.com/tengchangkhim',
        },
      ],
      contactTypes: ['Email', 'Phone Number', 'Facebook', 'Twitter'],
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
  methods: {
    updateSelectedItem(item) {
      alert(item)
    },
    onContactDetailAdd(contact, index) {
      this.contactDetails.splice(index + 1, 0, {
        type: contact.type,
        value: '',
      })
    },
    onContactDetailDelete(contact, index) {
      this.contactDetails.splice(index, 1)
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
