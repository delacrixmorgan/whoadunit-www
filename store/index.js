import electionsJSON from '@/assets/json/elections.json'
import personJSON from '@/assets/json/persons.json'
import seatJSON from '@/assets/json/seats.json'

import elections from './elections'
import persons from './persons'
import seats from './seats'

const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    const isDebug = false

    if (isDebug) {
      await Promise.all([
        elections.actions.setElections(vuexContext, electionsJSON.data),
        persons.actions.setPersons(vuexContext, personJSON.data),
        seats.actions.setSeats(vuexContext, seatJSON.data),
      ])
    } else {
      await Promise.all([
        elections.actions.nuxtServerInit(vuexContext, context),
        persons.actions.nuxtServerInit(vuexContext, context),
        seats.actions.nuxtServerInit(vuexContext, context),
      ])
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
