<template>
  <div>
    <input
      v-model.trim="searchQuery"
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
      :placeholder="placeholder"
      @click="onChange"
      @input="onChange"
      @keydown.esc="onEsc"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.tab="onEnter"
      @keydown.enter="onEnter"
    />
    <ul v-show="isOpen" class="autocomplete-results">
      <li
        v-for="(item, index) in results"
        :key="index"
        class="autocomplete-result"
        :class="{ 'is-active': index === arrowCounter }"
        @click="setResult(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonAutoCompleteSearch',
  props: {
    items: {
      type: Array,
      require: false,
      default: null,
    },
    model: {
      type: Object,
      require: false,
      default: null,
    },
    mustMatchSelection: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  emits: ['select-item'],
  data() {
    return {
      placeholder: '',
      searchQuery: this.model.name.toString(),
      selectedItem: this.model,
      isOpen: false,
      results: [],
      arrowCounter: -1,
    }
  },
  methods: {
    onChange() {
      this.isOpen = true
      const query = this.searchQuery.toString().toLowerCase()
      this.results = this.items.filter((item) =>
        item.name.toString().toLowerCase().includes(query)
      )
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
      this.collapseSuggestionList()
    },
    onEnter() {
      if (this.arrowCounter >= 0) {
        this.setResult(this.results[this.arrowCounter])
      } else {
        const query = this.searchQuery.toString().toLowerCase()
        const item = this.items.find(
          (item) => item.toString().toLowerCase() === query
        )
        if (item != null) {
          this.setResult(item)
        } else {
          this.collapseSuggestionList()
        }
      }
    },
    setResult(item) {
      this.selectedItem = item
      this.searchQuery = item.name
      this.collapseSuggestionList()
      this.$emit('select-item', item)
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.collapseSuggestionList()
      }
    },
    collapseSuggestionList() {
      this.isOpen = false
      this.arrowCounter = -1
      this.clearSearchQueryIfNeeded()
    },
    clearSearchQueryIfNeeded() {
      if (this.mustMatchSelection && !this.selectedItem) {
        this.searchQuery = ''
        this.selectedItem = null
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
