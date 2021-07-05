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
  addSeat(state, seat) {
    state.seats.push(seat)
  },
  editSeat(state, editedSeat) {
    const index = state.seats.findIndex((item) => item.id === editedSeat.id)
    state.seats[index] = editedSeat
  },
  deleteSeat(state, deletedSeat) {
    const index = state.seats.findIndex((item) => item.uuid === deletedSeat.id)
    state.seats.splice(index, 1)
  },
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.getSeats(vuexContext, context)
  },
  async getSeats(vuexContext, context) {
    const response = await context.app.$axios.$get('/seats')
    this.setSeats(vuexContext, response.data)
  },
  setSeats(vuexContext, seats) {
    vuexContext.commit('seats/setSeats', seats, {
      root: true,
    })
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
  addSeat(vuexContext, payload) {
    return this.$axios.$post('/seats', payload.seat).then((response) => {
      vuexContext.commit(
        'seats/addSeat',
        { id: response.id, ...payload.seat },
        { root: true }
      )
    })
  },
  async editSeat(vueContext, payload) {
    const payloadSeat = { ...payload }
    delete payloadSeat.id

    await this.$axios.$put('/seats/' + payload.id, payloadSeat)
    vueContext.commit('seats/editSeat', payload, { root: true })
  },
  deleteSeat(vueContext, payload) {
    return this.$axios.$delete('/seats', payload.id).then(() => {
      vueContext.commit('seats/deleteSeat', payload.id, { root: true })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
