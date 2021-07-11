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
        {{ isEditMode ? 'Edit' : 'Create' }} Person
      </h1>

      <div class="mt-4">
        <label class="form-label">Profile Picture</label>
        <div v-if="editedPerson.profilePictures.length > 0">
          <div
            v-for="(_, index) in editedPerson.profilePictures"
            :key="index"
            class="flex flex-row space-x-2 mt-4"
          >
            <input
              v-model.lazy="editedPerson.profilePictures[index]"
              class="form-edit-text"
              type="text"
              placeholder="URL"
            />
            <button class="btn-action-blue" @click="onProfilePictureAdd(index)">
              Add
            </button>
            <button
              class="btn-action-red"
              @click="onProfilePictureDelete(index)"
            >
              Delete
            </button>
          </div>
        </div>
        <div v-else>
          <button
            class="
              w-full
              border border-gray-200
              hover:bg-gray-100
              text-gray-400
              py-3
              px-4
            "
            @click="onProfilePictureAdd(0)"
          >
            Add +
          </button>
        </div>
      </div>
      <div class="grid grid-cols-8 gap-4 mt-4">
        <div class="flex flex-col col-span-1">
          <label class="form-label">Status</label>
          <div class="relative flex-grow">
            <select
              v-model.lazy="editedPerson.status"
              class="form-select-field"
            >
              <option
                v-for="item in personStatus"
                :key="item"
                class="form-select-item"
              >
                {{ item }}
              </option>
            </select>
            <select-chevron-down />
          </div>
        </div>
        <div class="flex flex-col col-span-3">
          <label class="form-label">Name</label>
          <input
            v-model.trim="editedPerson.name"
            class="form-edit-text"
            type="text"
            placeholder="Code"
          />
        </div>
        <div class="flex flex-col col-span-4">
          <label class="form-label">Address</label>
          <input
            v-model.trim="editedPerson.address"
            class="form-edit-text"
            type="text"
            placeholder="Code"
          />
        </div>
      </div>
      <div class="mt-4">
        <div class="flex flex-col">
          <label class="form-label">Seats</label>
          <div v-if="editedSeats.length > 0">
            <div
              v-for="(seat, index) in editedSeats"
              :key="index"
              class="flex flex-row space-x-2 mt-2"
            >
              <div class="relative w-72">
                <select
                  v-model.lazy="seat.electionId"
                  class="form-select-field"
                >
                  <option
                    v-for="item in elections"
                    :key="item.id"
                    :value="item.id"
                    class="form-select-item"
                  >
                    {{ item.year }}
                  </option>
                </select>
                <select-chevron-down />
              </div>
              <div class="relative w-72">
                <select
                  v-model.lazy="seat.type"
                  class="form-select-field"
                  @change="clearSeat(seat)"
                >
                  <option
                    v-for="item in seatTypes"
                    :key="item"
                    :value="item"
                    class="form-select-item"
                  >
                    {{ item }}
                  </option>
                </select>
                <select-chevron-down />
              </div>
              <seat-auto-complete-search
                :model="seat"
                :must-match-selection="true"
                @select-item="updateSeatElection"
              />
              <button class="btn-action-blue" @click="onSeatAdd(index)">
                Add
              </button>
              <button class="btn-action-red" @click="onSeatDelete(index)">
                Delete
              </button>
            </div>
          </div>
          <div v-else>
            <button
              class="
                w-full
                border border-gray-200
                hover:bg-gray-100
                text-gray-400
                py-3
                px-4
              "
              @click="onSeatAdd(0)"
            >
              Create New +
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label class="form-label">Contact Details</label>
        <div v-if="editedPerson.contactDetails.length > 0">
          <div
            v-for="(contactDetail, index) in editedPerson.contactDetails"
            :key="index"
            class="flex flex-row space-x-2 mt-4"
          >
            <div class="relative w-72">
              <select
                v-model.lazy="contactDetail.type"
                class="form-select-field"
              >
                <option
                  v-for="item in contactDetailTypes"
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
              @click="onContactDetailAdd(contactDetail.type, index)"
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
        <div v-else>
          <button
            class="
              w-full
              border border-gray-200
              hover:bg-gray-100
              text-gray-400
              py-3
              px-4
            "
            @click="onContactDetailAdd(contactDetailTypes[0], 0)"
          >
            Create New +
          </button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 mt-4">
        <button class="col-start-3 btn-action-green" @click="onAction">
          {{ isEditMode === true ? 'Update' : 'Create' }}
        </button>
        <button class="btn-action-red" @click="onDelete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  props: {
    person: {
      type: Object,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      isEditMode: false,
      editedPerson: null,
      editedSeats: [],
    }
  },
  computed: {
    personStatus() {
      return this.$store.getters['global/personStatus']
    },
    contactDetailTypes() {
      return this.$store.getters['global/contactDetailTypes']
    },
    seatTypes() {
      return this.$store.getters['global/seatTypes']
    },
    elections() {
      return this.$store.getters['elections/elections']
    },
  },
  created() {
    this.isEditMode = this.person
    if (this.isEditMode) {
      this.editedPerson = JSON.parse(JSON.stringify(this.person))
      this.editedSeats = this.$store.getters['seats/filterSeatsByIds'](
        this.editedPerson.seatIds
      ).map((seat) => JSON.parse(JSON.stringify(seat)))
    } else {
      this.editedPerson = {
        id: '',
        name: '',
        address: '',
        status: 'Incumbent',
        seatIds: [],
        contactDetails: [],
        profilePictures: [],
      }
    }
  },
  methods: {
    onProfilePictureAdd(index) {
      this.editedPerson.profilePictures.splice(index + 1, 0, '')
    },
    onProfilePictureDelete(index) {
      this.editedPerson.profilePictures.splice(index, 1)
    },
    onContactDetailAdd(contactType, index) {
      this.editedPerson.contactDetails.splice(index + 1, 0, {
        type: contactType,
        value: '',
      })
    },
    onContactDetailDelete(contact, index) {
      this.editedPerson.contactDetails.splice(index, 1)
    },
    onSeatAdd(index) {
      this.editedSeats.splice(index + 1, 0, {
        id: index,
        type: 'ADUN',
        personId: this.editedPerson.id,
        state: '',
        code: '',
        name: '',
        electionId: this.elections[0].id,
      })
    },
    onSeatDelete(index) {
      this.editedSeats.splice(index, 1)
    },
    clearSeat(seat) {
      seat.code = ''
      seat.name = ''
      this.$nuxt.$emit('clear-seat', seat.id)
    },
    updateSeatElection(oldSeat, newSeat) {
      const seat = this.editedSeats.find((item) => item.id === oldSeat.id)
      seat.id = newSeat.id
      seat.code = newSeat.code
      seat.name = newSeat.name
    },
    onAction() {
      if (this.isEditMode) {
        if (this.isSeatUpdated) {
          this.$store
            .dispatch('persons/editPerson', this.editedPerson)
            .then(() => {
              this.$router.back()
            })
            .catch((error) => alert(error.message))
        } else {
          this.$router.back()
        }
      } else {
        this.$store
          .dispatch('persons/addPerson', this.editedPerson)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => alert(error.message))
      }
    },
    onDelete() {
      if (this.isEditMode) {
        this.this.$store
          .dispatch('persons/deletePerson', this.editedPerson.id)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => alert(error.message))
      } else {
        this.$router.back()
      }
    },
  },
}
</script>
