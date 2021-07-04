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
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.getPersons(vuexContext, context)
  },
  async getPersons(vuexContext, context) {
    const response = await context.app.$axios.$get('/persons')
    vuexContext.commit('persons/setPersons', response.data, {
      root: true,
    })
  },
  setPersons(vuexContext, persons) {
    vuexContext.commit('setPersons', persons)
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
}

export default {
  state,
  getters,
  mutations,
  actions,
}

// import ADUNJson from 'assets/json/adun_persons.json'
// import MPJson from 'assets/json/mp_persons.json'
//
// const state = () => ({
//   persons: [],
// })
//
// const getters = {
//   persons(state) {
//     return state.persons
//   },
//   mpPersons(state) {
//     return state.persons.filter(
//       (person) => person.federalseatcode != null && person.stateseatcode == null
//     )
//   },
//   adunPersons(state) {
//     return state.persons.filter(
//       (person) => person.federalseatcode != null && person.stateseatcode != null
//     )
//   },
// }
//
// const mutations = {
//   setPersons(state, persons) {
//     state.persons = persons
//   },
// }
//
// const actions = {
//   nuxtServerInit(vuexContext, context) {
//     const persons = MPJson.concat(ADUNJson)
//     for (let index = 0; index < persons.length; index++) {
//       const person = persons[index]
//       person.email = [person.email]
//       person.phonenumber = [person.phonenumber]
//     }
//     return vuexContext.commit('persons/setPersons', persons)
//   },
//   setPersons(vuexContext, persons) {
//     vuexContext.commit('setPersons', persons)
//   },
//   findPersonById(context, payload) {
//     const filteredPerson = context.state.persons.filter(
//       (person) => person.id === payload.id
//     )
//     return filteredPerson[0]
//   },
//   findPersonBySeat(context, payload) {
//     const federalSeatCode = payload.federalSeatCode
//     const stateSeatCode = payload.stateSeatCode
//
//     const filteredPerson = context.state.persons.filter(
//       (person) =>
//         person.federalseatcode === federalSeatCode &&
//         person.stateseatcode === stateSeatCode
//     )
//     return filteredPerson[0]
//   },
// }
//
// export default {
//   state,
//   getters,
//   mutations,
//   actions,
// }
