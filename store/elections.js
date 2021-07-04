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
  async nuxtServerInit(vuexContext, context) {
    return await this.getElections(vuexContext, context)
  },
  async getElections(vuexContext, context) {
    const response = await context.app.$axios.$get('/elections')
    vuexContext.commit('elections/setElections', response.data, {
      root: true,
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
