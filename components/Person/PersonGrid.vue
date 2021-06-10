<template>
  <div>
    <div
      class="
        grid grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-4
      "
    >
      <person-grid-item
        v-for="person in persons"
        :key="person.id"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      persons: [],
      seats: [],
      filters: ['mp', 'adun'],
      searchQuery: '',
    }
  },
  created() {
    this.persons = this.$store.getters.persons
  },
}
</script>
