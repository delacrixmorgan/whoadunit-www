import ADUNJson from 'assets/json/adun_seats.json'
import MPJson from 'assets/json/mp_seats.json'

const state = () => ({
  seats: [],
})

const getters = {
  seats(state) {
    return state.seats
  },
  mpSeats(state) {
    return state.seats.filter(
      (seat) =>
        seat.federalseatcode != null &&
        seat.stateseatcode == null &&
        seat.state === 'Selangor'
    )
  },
  adunSeats(state) {
    return state.seats.filter(
      (seat) => seat.federalseatcode != null && seat.stateseatcode != null
    )
  },
}

const mutations = {
  setSeats(state, seats) {
    state.seats = seats
  },
}

const actions = {
  nuxtServerInit(vuexContext, context) {
    const seats = MPJson.concat(ADUNJson)
    return vuexContext.commit('seats/setSeats', seats)
  },
  setSeats(vuexContext, seats) {
    vuexContext.commit('setSeats', seats)
  },
  findSeatByCode(context, payload) {
    const federalSeatCode = payload.federalSeatCode
    const stateSeatCode = payload.stateSeatCode

    const filteredSeat = context.state.seats.filter(
      (seat) =>
        seat.federalseatcode === federalSeatCode &&
        seat.stateseatcode === stateSeatCode
    )

    return filteredSeat[0]
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
