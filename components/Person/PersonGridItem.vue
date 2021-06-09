<template>
  <div
    class="
      transition
      duration-500
      ease-in-out
      transform
      hover:-translate-y-1
      hover:scale-105
    "
  >
    <a :href="goToPersonDetail(person)">
      <div
        class="
          h-full
          border-2 border-gray-200 border-opacity-60
          rounded-lg
          shadow
          overflow-hidden
        "
      >
        <img
          class="
            lg:h-48
            aspect-w-4 aspect-h-3
            w-full
            object-cover object-center
          "
          src="https://cdn.i-scmp.com/sites/default/files/d8/images/author/pic/2019/05/09/santiago12.jpg"
          alt="blog"
        />
        <div class="p-4">
          <h1 class="title-font text-lg font-medium text-gray-900 mb-1">
            {{ this.person.name }}
          </h1>
          <h2
            class="tracking-widest text-xs title-font font-medium text-gray-400"
          >
            P110 Klang, Selangor
          </h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      require: false,
      default: null,
    },
  },
  methods: {
    goToPersonDetail(person) {
      return '/person/' + person.id
    },
  },
}
</script>
