<template>
  <div class="hover:bg-gray-100 border border-grey-200 rounded-lg">
    <a
      class="flex items-center mx-2 my-3"
      :href="formatContact(contact)"
      target="_blank"
    >
      <img
        alt="blog"
        src="https://dummyimage.com/104x104"
        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />
      <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium text-gray-900">{{
          getTitle(this.contact)
        }}</span>
        <span class="text-gray-400 text-xs tracking-widest mt-0.5">{{
          this.contact.value
        }}</span>
      </span>

      <div class="flex-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      require: false,
      default: null,
    },
  },
  methods: {
    formatContact(contact) {
      const value = contact.value
      const type = contact.type

      if (type === 'Phone Number') {
        return 'tel:' + value
      }
      if (type === 'Email') {
        return 'mailto:' + value
      }
      if (type === 'Facebook') {
        return value
      }
      if (type === 'Twitter') {
        return value
      }
    },
    getTitle(contact) {
      const type = contact.type
      if (type === 'Phone Number') {
        return 'Phone'
      }
      if (type === 'Email') {
        return 'Email'
      }
      if (type === 'Facebook') {
        return 'Facebook'
      }
      if (type === 'Twitter') {
        return 'Twitter'
      }
    },
  },
}
</script>
