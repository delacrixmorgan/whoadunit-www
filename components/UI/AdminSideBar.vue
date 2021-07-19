<template>
  <div
    class="
      flex flex-col
      h-screen
      px-4
      py-8
      bg-white
      border-r
      dark:bg-gray-800
      dark:border-gray-600
    "
  >
    <nuxt-link to="/admin">
      <div class="flex flex-row w-80">
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
    </nuxt-link>

    <div class="flex flex-col justify-between flex-1 mt-6">
      <nav class="space-y-2">
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
          title: 'Elections',
          action: '/admin/elections',
        },
        {
          title: 'Seats',
          action: '/admin/seats',
        },
        {
          title: 'Person',
          action: '/admin/person',
        },
      ],
      secondaryItems: [
        {
          title: 'Settings',
          action: '/admin/settings',
        },
      ],
    }
  },
}
</script>
