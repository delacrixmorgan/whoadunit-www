import seatsJson from 'assets/json/seats.json'

const state = () => ({
  seats: [],
})

const getters = {
  seats(state) {
    return state.seats
  },
  getSeatById(state) {
    return (id) => {
      return state.seats.find((item) => item.id === id)
    }
  },

  filterSeatsByIds(state) {
    return (seatIds) => {
      return state.seats.filter((seat) => seatIds.includes(seat.id))
    }
  },

  filterSeatsByElectionId(state) {
    return (id) => {
      return state.seats.filter((seat) => seat.electionId === id)
    }
  },
}

const mutations = {
  setSeats(state, seats) {
    state.seats = seats
  },
}

const actions = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, reject) => {
      vuexContext.commit('seats/setSeats', seatsJson.data)
      resolve()
    })
  },
  getSeats(vuexContext) {
    return this.$axios.$get('/seats').then((response) => {
      vuexContext.commit('seats/setSeats', response.data, {
        root: true,
      })
    })
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
//
// import ADUNJson from 'assets/json/adun_seats.json'
// import MPJson from 'assets/json/mp_seats.json'
// import seatsJson from 'assets/json/seats.json'
//
// const state = () => ({
//   seats: [],
// })
//
// const getters = {
//   legacySeats(state) {
//     return state.seats
//   },
//   mpSeats(state) {
//     return state.seats.filter(
//       (seat) =>
//         seat.federalseatcode != null &&
//         seat.stateseatcode == null &&
//         seat.state === 'Selangor'
//     )
//   },
//   adunSeats(state) {
//     return state.seats.filter(
//       (seat) => seat.federalseatcode != null && seat.stateseatcode != null
//     )
//   },
// }
//
// const mutations = {
//   setSeats(state, seats) {
//     state.seats = seats
//   },
//   setLegacySeats(state, seats) {
//     state.legacySeats = seats
//   },
// }
//
// const actions = {
//   nuxtServerInit(vuexContext, context) {
//     const seats = MPJson.concat(ADUNJson)
//     vuexContext.commit('seats/setSeats', seatsJson)
//
//     return vuexContext.commit('seats/setLegacySeats', seats)
//   },
//   setSeats(vuexContext, seats) {
//     vuexContext.commit('setSeats', seats)
//   },
//   findSeatByCode(context, payload) {
//     const federalSeatCode = payload.federalSeatCode
//     const stateSeatCode = payload.stateSeatCode
//
//     const filteredSeat = context.state.seats.filter(
//       (seat) =>
//         seat.federalseatcode === federalSeatCode &&
//         seat.stateseatcode === stateSeatCode
//     )
//
//     return filteredSeat[0]
//   },
// }
//
// export default {
//   state,
//   getters,
//   mutations,
//   actions,
// }
