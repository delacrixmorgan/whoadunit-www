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
        Edit Seat
      </h1>
      <p>{{ this.loadedSeat.name }}</p>

      <p>{{ this.loadedSeat }}</p>

      <div class="grid grid-cols-4 gap-4">
        <div class="flex flex-col">
          <label class="form-label">Code</label>
          <input class="form-edit-text" type="text" placeholder="Code" />
        </div>
        <div class="flex flex-col">
          <label class="form-label">Name</label>
          <input class="form-edit-text" type="text" placeholder="Name" />
        </div>
        <div class="flex flex-col">
          <label class="form-label">State</label>
          <input class="form-edit-text" type="text" placeholder="Name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  asyncData(context) {
    const seat = context.store.getters['seats/getSeatById'](context.params.id)
    if (seat == null) {
      return context.error({
        statusCode: 404,
        message: 'Seat not found',
      })
    }
    return { loadedSeat: seat }
  },
  computed: {
    seatTypes() {
      return this.$store.getters['global/seatTypes']
    },
    states() {
      return this.$store.getters['global/states']
    },
  },
}
</script>
