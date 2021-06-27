import electionJson from 'assets/json/elections.json'

const state = () => ({
  elections: [],
})

const getters = {
  elections(state) {
    return state.elections
  },
  getElectionById(state) {
    return (id) => {
      return state.elections.find((item) => item.id === id)
    }
  },
}

const mutations = {
  setElections(state, elections) {
    state.elections = elections
  },
}

const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      vuexContext.commit('elections/setElections', electionJson.data)
      resolve()
    })
  },
  getElections(vuexContext) {
    return this.$axios.$get('/elections').then((response) => {
      vuexContext.commit('elections/setElections', response.data, {
        root: true,
      })
    })
  },
  editElection(vuexContext, editedElection) {
    // this.$axios.$put()
    return null
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
