<template>
  <div class="flex flex-row">
    <AdminSideBar />
    <Nuxt class="flex-grow" />
  </div>
</template>

<script>
import AdminSideBar from '@/components/UI/AdminSideBar.vue'

export default {
  components: { AdminSideBar },
}
</script>
