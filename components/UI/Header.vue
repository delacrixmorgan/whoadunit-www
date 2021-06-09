<template>
  <header class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex flex-wrap
        p-5
        flex-col
        md:flex-row
        items-center
      "
    >
      <nuxt-link to="/">
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-900
            mb-4
            md:mb-0
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>

          <span class="ml-3 text-xl font-bold">WHOADUNIT</span>
        </a></nuxt-link
      >

      <nav
        class="
          md:ml-auto
          flex flex-wrap
          items-center
          text-base
          justify-center
          space-x-5
          mr-5
        "
      >
        <nuxt-link
          class="menuItem-active-link hover:text-indigo-500"
          to="/seats"
          >Seats</nuxt-link
        >
        <nuxt-link
          class="menuItem-active-link hover:text-indigo-500"
          to="/person"
          >Person</nuxt-link
        >
        <nuxt-link
          class="menuItem-active-link hover:text-indigo-500"
          to="/about"
          >About</nuxt-link
        >
      </nav>
      <button
        class="
          inline-flex
          items-center
          bg-indigo-100
          border-0
          py-1
          px-3
          focus:outline-none
          hover:bg-indigo-200
          rounded
          text-base
          mt-4
          md:mt-0
        "
      >
        <nuxt-link to="/volunteer"> Volunteer </nuxt-link>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<style>
.nuxt-link-active.menuItem-active-link {
  color: #4f46e5;
}
</style>
