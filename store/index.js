import elections from './elections'
import persons from './persons'
import seats from './seats'

const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  nuxtServerInit(vuexContext, context) {
    return Promise.resolve(
      new Promise((resolve, reject) => {
        elections.actions.nuxtServerInit(vuexContext, context)
        persons.actions.nuxtServerInit(vuexContext, context)
        seats.actions.nuxtServerInit(vuexContext, context)
        resolve()
      })
    )
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
