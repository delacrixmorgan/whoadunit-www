<template>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <PersonDetails :person="this.person" :seats="this.seats" />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const personId = context.params.id
    const person = await context.store.dispatch('persons/findPersonById', {
      id: personId,
    })
    const seats = await context.store.dispatch('seats/getSeatsByPersonId', {
      id: personId,
      seatIds: person.seatIds,
    })
    return { person, seats }
  },
}
</script>
