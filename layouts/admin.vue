<template>
  <div class="flex flex-row">
    <admin-side-bar />
    <Nuxt class="flex-grow" />
  </div>
</template>

<script>
import AdminSideBar from '@/components/UI/AdminSideBar.vue'

export default {
  components: { AdminSideBar },
  middleware: ['auth', 'redirect-auth'],
}
</script>
