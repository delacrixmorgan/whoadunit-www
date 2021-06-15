import ElectionJson from 'assets/json/elections.json'

const state = () => ({
  elections: [],
})

const getters = {
  elections(state) {
    return state.elections
  },
  getElectionById(state) {
    return (electionId) => {
      return state.elections.find((election) => election.id === electionId)
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
      vuexContext.commit('elections/setElections', ElectionJson)
      resolve()
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
