<template>
  <div class="flex flex-row space-x-4">
    <div class="w-full">
      <input
        v-model.trim="searchQuery"
        class="form-edit-text"
        type="text"
        :placeholder="placeholder"
        @keydown.esc="onEsc"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.tab="onEnter"
        @keydown.enter="onChange"
      />
      <ul v-show="isOpen" class="autocomplete-results">
        <li
          v-for="(item, index) in results"
          :key="index"
          class="autocomplete-result"
          :class="{ 'is-active': index === arrowCounter }"
          @click="setResult(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <button class="btn-action-green" @click="onChange">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  emits: ['select-item'],
  data() {
    return {
      placeholder: '',
      searchQuery: '',
      selectedItem: null,
      isOpen: false,
      results: [],
      arrowCounter: -1,
    }
  },
  methods: {
    onChange() {
      this.isOpen = true
      const query = this.searchQuery.toLowerCase()
      this.results = this.searchItem(query)
    },
    searchItem(query) {
      const seats = [
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
      ]
      return seats.filter((item) => item.toLowerCase().includes(query))
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1) {
        this.arrowCounter = this.arrowCounter + 1
      } else {
        this.arrowCounter = 0
      }
    },
    onArrowUp() {
      if (this.arrowCounter >= 1) {
        this.arrowCounter = this.arrowCounter - 1
      } else {
        this.arrowCounter = this.results.length - 1
      }
    },
    onEsc() {
      this.isOpen = false
      this.arrowCounter = -1
    },
    onEnter() {
      const seat = this.results[this.arrowCounter]
      if (this.arrowCounter >= 0) {
        this.setResult(seat)
      }
    },
    setResult(item) {
      this.selectedItem = item
      this.searchQuery = item
      this.isOpen = false
      this.arrowCounter = -1
      this.$emit('select-item', item)
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style scoped>
.autocomplete-results {
  @apply overflow-auto rounded border max-h-52;
}

.autocomplete-result {
  @apply px-4 py-4 text-left cursor-pointer;
}

.autocomplete-result:hover {
  @apply text-white bg-indigo-500;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  @apply text-white bg-indigo-500;
}
</style>
