<template>
  <div>
    <div class="p-5 flex flex-col">
      <h1
        class="
          sm:text-3xl
          text-2xl
          font-medium
          title-font
          mb-2
          text-gray-900
          py-4
        "
      >
        Seat Details
      </h1>
      {{ this.$route.params.id }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
}
</script>
