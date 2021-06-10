<template>
  <div
    class="
      flex flex-col
      w-80
      h-screen
      px-4
      py-8
      bg-white
      border-r
      dark:bg-gray-800
      dark:border-gray-600
    "
  >
    <div class="flex flex-row">
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

      <span class="ml-3 text-xl font-bold place-self-center">WHOADUNIT</span>
    </div>

    <div class="relative mt-6">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>

      <input
        type="text"
        class="
          w-full
          py-3
          pl-10
          pr-4
          text-gray-700
          bg-white
          border border-gray-300
          rounded-md
          dark:bg-gray-800
          dark:text-gray-300
          dark:border-gray-600
          focus:border-blue-500
          dark:focus:border-blue-500
          focus:outline-none
          focus:ring
        "
        placeholder="Search"
      />
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav>
        <admin-side-bar-item
          v-for="item in primaryItems"
          :key="item.title"
          :item="item"
        />

        <hr class="my-6 dark:border-gray-600" />

        <admin-side-bar-item
          v-for="item in secondaryItems"
          :key="item.title"
          :item="item"
        />
      </nav>

      <div class="flex items-center px-4 -mx-2">
        <img
          class="object-cover mx-2 rounded-full h-9 w-9"
          src="https://pbs.twimg.com/profile_images/1176092733988950017/U1ru5J7d_400x400.jpg"
          alt="avatar"
        />
        <h4
          class="
            mx-2
            font-medium
            text-gray-800
            dark:text-gray-200
            hover:underline
          "
        >
          Morgan Koh
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSideBarItem from './AdminSideBarItem.vue'
export default {
  components: { AdminSideBarItem },
  data() {
    return {
      primaryItems: [
        {
          title: 'Election',
          action: {},
        },
        {
          title: 'Seats',
          action: {},
        },
        {
          title: 'Person',
          action: {},
        },
      ],
      secondaryItems: [
        {
          title: 'Settings',
          action: {},
        },
      ],
    }
  },
}
</script>
