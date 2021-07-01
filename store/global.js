const state = () => ({
  seatTypes: ['ADUN', 'MP'],
  states: [
    'Perlis',
    'Kedah',
    'Kelantan',
    'Terrengganu',
    'Penang',
    'Perak',
    'Pahang',
    'Selangor',
    'Kuala Lumpur',
    'Putrajaya',
    'Negeri Sembilan',
    'Malacca',
    'Johor',
    'Labuan',
    'Sabah',
    'Sarawak',
  ],
})

const getters = {
  seatTypes(state) {
    return state.seatTypes
  },
  states(state) {
    return state.states
  },
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
