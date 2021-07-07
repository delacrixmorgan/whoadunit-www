const state = () => ({
  seatTypes: ['ADUN', 'MP'],
  contactDetailTypes: ['Email', 'Phone Number', 'Facebook', 'Twitter'],
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
  contactDetailTypes(state) {
    return state.contactDetailTypes
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
