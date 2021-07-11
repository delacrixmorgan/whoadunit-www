<template>
  <div>
    <person-form :person="editedPerson" />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      editedPerson: null,
    }
  },
  created() {
    const person = this.$store.getters['persons/getPersonById'](
      this.$route.params.id
    )
    if (person == null) {
      return this.error({
        statusCode: 404,
        message: 'Person not found',
      })
    }
    this.editedPerson = person
  },
}
</script>
