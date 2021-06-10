<template>
  <section class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start
          md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1
          class="
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-5xl
            md:text-6xl
            mb-4
          "
          v-if="error.statusCode === 404"
        >
          <span class="block xl:inline">404</span>
          {{ ' ' }}
          <span class="block text-indigo-600 xl:inline">Page not found</span>
        </h1>
        <h1
          class="
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-5xl
            md:text-6xl
            mb-4
          "
          v-else
        >
          <span class="block xl:inline">Oops, something went</span>
          {{ ' ' }}
          <span class="block text-indigo-600 xl:inline">wrong!</span>
        </h1>
        <p class="mb-8 leading-relaxed">
          The page you're looking for isn't available. Try searching again or
          use the Go Back button below.
        </p>
        <div class="sm:flex sm:justify-center lg:justify-start">
          <a
            class="mt-3 text-indigo-500 font-light inline-flex items-center"
            href="/"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>

            Go Back
          </a>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
