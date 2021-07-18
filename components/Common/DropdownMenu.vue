<template>
  <div>
    <div class="relative inline-block text-left">
      <div>
        <button
          id="options-menu"
          type="button"
          class="
            inline-flex
            justify-center
            w-full
            rounded-md
            border border-gray-300
            shadow-sm
            px-6
            py-3
            bg-white
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-100
            focus:ring-indigo-500
          "
          aria-expanded="true"
          aria-haspopup="true"
          @click="isDropdownExpanded = !isDropdownExpanded"
        >
          {{ dropdown.placeholder }}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        class="
          origin-top-left
          absolute
          left-0
          mt-2
          w-full
          rounded-md
          shadow-lg
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
        role="menu"
        :class="[isDropdownExpanded ? '' : 'hidden']"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1" role="none">
          <a
            v-for="item in dropdown.items"
            :key="item"
            role="menuitem"
            class="
              block
              select-none
              px-4
              py-2
              text-sm text-gray-700
              hover:bg-gray-100
              hover:text-gray-900
            "
            @click="isDropdownExpanded = !isDropdownExpanded"
            >{{ item }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dropdown: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDropdownExpanded: false,
    }
  },
}
</script>
