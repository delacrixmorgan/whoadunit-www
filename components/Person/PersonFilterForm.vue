<template>
  <div>
    <div class="grid grid-cols-5 gap-4">
      <div class="flex flex-col">
        <label class="form-label">Search</label>
        <input
          v-model.trim="searchQuery"
          class="form-edit-text"
          type="text"
          placeholder="Person Name"
          @input="onChange"
        />
      </div>
      <div class="flex items-end">
        <button class="btn-action-blue">
          <nuxt-link to="person/create">Create Person +</nuxt-link>
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
      searchQuery: '',
    }
  },
  methods: {
    onChange() {
      this.$emit('search', this.searchQuery.toLowerCase())
    },
  },
}
</script>
