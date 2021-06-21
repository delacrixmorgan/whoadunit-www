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
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteSearch',
  props: {
    items: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      placeholder: '',
      searchQuery: '',
      selectedItem: null,
      isOpen: false,
      results: [],
      arrowCounter: -1,
      person: null,
    }
  },
  methods: {
    onChange() {
      this.isOpen = true
      const query = this.searchQuery.toLowerCase()
      this.results = this.items.filter((item) =>
        item.toLowerCase().includes(query)
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
