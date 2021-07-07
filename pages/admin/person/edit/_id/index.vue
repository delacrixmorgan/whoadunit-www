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
        Edit Person
      </h1>
      {{ editedPerson }}
      <div class="mt-4">
        <label class="form-label">Profile Picture</label>
        <div v-if="editedPerson.profilePictures.length > 0">
          <div
            v-for="(picture, index) in editedPerson.profilePictures"
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
      <div class="grid grid-cols-4 gap-4 mt-4">
        <div class="flex flex-col">
          <label class="form-label">Name</label>
          <input
            v-model.trim="editedPerson.name"
            class="form-edit-text"
            type="text"
            placeholder="Code"
          />
        </div>
        <div class="flex flex-col col-span-3">
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
      person: null,
      editedPerson: null,
    }
  },
  computed: {
    contactDetailTypes() {
      return this.$store.getters['global/contactDetailTypes']
    },
  },
  created() {
    const person = this.$store.getters['persons/getPersonById'](
      this.$route.params.id
    )
    if (person == null) {
      return this.error({
        statusCode: 404,
        message: 'Person not found',
      })
    }

    this.person = person
    this.editedPerson = JSON.parse(JSON.stringify(person))
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
    onEdit() {
      if (this.isSeatUpdated) {
        this.$store
          .dispatch('persons', this.editedPerson)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => alert(error.message))
      } else {
        this.$router.back()
      }
    },
    onDelete() {
      // this.$store
      //   .dispatch('seats/deleteSeat', this.editedSeat.id)
      //   .then(() => {
      //     this.$router.back()
      //   })
      //   .catch((error) => alert(error.message))
    },
  },
}
</script>
