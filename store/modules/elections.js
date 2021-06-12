import ElectionJson from '@/assets/json/elections.json'

const state = () => ({
  elections: [],
})

const getters = {
  elections(state) {
    return state.elections
  },
}

const mutations = {
  setElections(state, elections) {
    state.elections = elections
  },
}

const actions = {
  nuxtServerInit(vuexContext, context) {
    return vuexContext.commit('setElections', ElectionJson)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
