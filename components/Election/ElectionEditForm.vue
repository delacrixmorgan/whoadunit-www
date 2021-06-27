<template>
  <div class="flex flex-row space-x-4">
    <div class="w-full">
      <input
        v-model.trim="editedElection.year"
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
        placeholder="Year"
      />
    </div>
    <button
      class="
        col-start-3
        max-h-11
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
      @click="onSubmit"
    >
      Update
    </button>
  </div>
</template>

<script>
export default {
  name: 'ElectionEditForm',
  props: {
    election: { type: Object, require: false, default: null },
  },
  emits: ['submit'],
  data() {
    return {
      editedElection: this.election
        ? { ...this.election }
        : {
            year: '',
          },
    }
  },
  methods: {
    onSubmit() {
      if (this.election.year !== this.editedElection.year) {
        this.$emit('submit', this.editedElection)
      }
    },
  },
}
</script>

<style scoped></style>
