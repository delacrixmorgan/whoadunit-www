const state = () => ({
  elections: [],
})

const getters = {
  elections(state) {
    return state.elections
  },
  lastElection(state) {
    return state.elections.slice().sort((a, b) => {
      return b.year - a.year
    })[0]
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
  addElection(state, election) {
    state.elections.push(election)
  },
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.getElections(vuexContext, context)
  },
  async getElections(vuexContext, context) {
    const response = await context.app.$axios.$get('/elections')
    this.setElections(vuexContext, response.data)
  },
  setElections(vuexContext, elections) {
    vuexContext.commit('elections/setElections', elections, {
      root: true,
    })
  },
  async addElection(vuexContext, payload) {
    const response = await this.$axios.$post('/elections', payload)
    vuexContext.commit('elections/addElection', { id: response.id, ...payload })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
