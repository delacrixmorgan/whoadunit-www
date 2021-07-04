import elections from './elections'
import persons from './persons'
import seats from './seats'

const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    await Promise.all([
      elections.actions.nuxtServerInit(vuexContext, context),
      persons.actions.nuxtServerInit(vuexContext, context),
      seats.actions.nuxtServerInit(vuexContext, context),
    ])
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
