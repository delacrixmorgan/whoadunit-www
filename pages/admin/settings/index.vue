<template>
  <div class="p-5 flex flex-col">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
      Settings
    </h1>

    <button class="btn-action-red" @click="onLogout">Logout</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  methods: {
    onLogout() {
      this.$store.dispatch('auth/logoutUser').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
