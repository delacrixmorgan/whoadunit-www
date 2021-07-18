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
        v-for="person in this.filteredPersons"
        :key="person.id"
        :person="person"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loadedPersons: {
      type: Array,
      require: true,
      default: null,
    },
    filters: {
      type: Array,
      require: true,
      default: null,
    },
    searchQuery: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      search: '',
      persons: [],
      seats: [],
    }
  },
  computed: {
    filteredPersons() {
      const persons = this.filter(this.searchQuery.toLowerCase())
      return persons
    },
  },
  created() {
    this.persons = this.loadedPersons
  },
  methods: {
    filter(query) {
      let filteredPersons = this.persons.filter((seat) =>
        seat.name.toLowerCase().includes(query)
      )

      if (this.filters.length === 0) {
        filteredPersons = []
      }

      if (this.filters.length === 1) {
        if (this.filters.includes('mp')) {
          filteredPersons = filteredPersons.filter(
            (seat) => seat.type.toLowerCase() === 'mp'
          )
        }

        if (this.filters.includes('adun')) {
          filteredPersons = filteredPersons.filter(
            (seat) => seat.type.toLowerCase() === 'adun'
          )
        }
      }

      return filteredPersons
    },
  },
}
</script>
