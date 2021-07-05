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
      <div class="grid grid-cols-4 gap-4">
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
        <label class="form-label">Profile Pictures</label>
        <input
          v-model.trim="editedPerson.address"
          class="form-edit-text"
          type="text"
          placeholder="Code"
        />
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
    this.editedPerson = { ...person }
  },
  methods: {
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
