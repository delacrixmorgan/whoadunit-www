const state = () => ({
  persons: [],
})

const getters = {
  persons(state) {
    return state.persons
  },
  getPersonById(state) {
    return (id) => {
      return state.persons.find((item) => item.id === id)
    }
  },
}

const mutations = {
  setPersons(state, persons) {
    state.persons = persons
  },
  addPerson(state, person) {
    state.persons.push(person)
  },
  editPerson(state, editedPerson) {
    const index = state.persons.findIndex((item) => item.id === editedPerson.id)
    state.persons[index] = editedPerson
  },
  deletePerson(state, deletedPerson) {
    const index = state.persons.findIndex(
      (item) => item.id === deletedPerson.id
    )
    state.persons.splice(index, 1)
  },
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.getPersons(vuexContext, context)
  },
  async getPersons(vuexContext, context) {
    const response = await context.app.$axios.$get('/persons')
    this.setPersons(vuexContext, response.data)
  },
  setPersons(vuexContext, persons) {
    vuexContext.commit('persons/setPersons', persons, {
      root: true,
    })
  },
  findPersonById(context, payload) {
    const person = getters['persons/getPersonById'](payload.id)
    if (person == null) {
      // Make API Call
      return context.state.persons.filter(
        (person) => person.id === payload.id
      )[0]
    } else {
      return person
    }
  },
  findPersonBySeat(context, payload) {
    const federalSeatCode = payload.federalSeatCode
    const stateSeatCode = payload.stateSeatCode

    const filteredPerson = context.state.persons.filter(
      (person) =>
        person.federalseatcode === federalSeatCode &&
        person.stateseatcode === stateSeatCode
    )
    return filteredPerson[0]
  },
  async addPerson(vuexContext, payload) {
    const response = await this.$axios.$post('/persons', payload.seat)
    vuexContext.commit(
      'persons/addPerson',
      { id: response.id, ...payload.person },
      { root: true }
    )
  },
  async editPerson(vueContext, payload) {
    const payloadPerson = { ...payload }
    delete payloadPerson.id

    await this.$axios.$put('/persons/' + payload.id, payloadPerson)
    vueContext.commit('persons/editPerson', payload, { root: true })
  },
  async deletePerson(vueContext, payload) {
    await this.$axios.$delete('/persons', payload.id)
    vueContext.commit('persons/deletePerson', payload.id, { root: true })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
