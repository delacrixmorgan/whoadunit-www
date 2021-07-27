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
  filterSeatsByElectionIdAndSeatType(state) {
    return (id, type) => {
      return state.seats.filter(
        (seat) => seat.electionId === id && seat.type === type
      )
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
  addSeats(state, seats) {
    state.seats.push(seats)
  },
  editSeat(state, editedSeat) {
    const index = state.seats.findIndex((item) => item.id === editedSeat.id)
    state.seats[index] = editedSeat
  },
  deleteSeat(state, seatId) {
    const index = state.seats.findIndex((item) => item.id === seatId)
    state.seats.splice(index, 1)
  },
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.getSeats(vuexContext, context)
  },
  async getSeats(vuexContext, context) {
    const seats = vuexContext.getters.seats
    if (!seats) {
      const response = await context.app.$axios.$get('/seats')
      this.setSeats(vuexContext, response.data)
      return response.data
    } else {
      return seats
    }
  },
  setSeats(vuexContext, seats) {
    vuexContext.commit('seats/setSeats', seats, {
      root: true,
    })
  },
  async getSeatsByPersonId(vuexContext, payload) {
    const seats = vuexContext.getters.filterSeatsByIds(payload.seatIds)
    if (seats.length !== payload.seatIds.length) {
      const response = await vuexContext.$axios.$get(
        '/persons/' + payload.personId + '/seats'
      )
      vuexContext.addSeats(response.data)
      return response.data
    }
    return seats
  },
  async addSeat(vuexContext, payload) {
    const response = await this.$axios.$post('/seats', payload)
    vuexContext.commit(
      'seats/addSeat',
      { id: response.id, ...payload },
      { root: true }
    )
  },
  async editSeat(vueContext, payload) {
    const payloadSeat = { ...payload }
    delete payloadSeat.id

    await this.$axios.$put('/seats/' + payload.id, payloadSeat)
    vueContext.commit('seats/editSeat', payload, { root: true })
  },
  async deleteSeat(vueContext, payload) {
    await this.$axios.$delete('/seats/' + payload)
    vueContext.commit('seats/deleteSeat', payload, { root: true })
  },

  async assignSeats(vuexContext, payload) {
    const seatIds = payload.ids
    const personId = payload.personId

    await Promise.all(
      seatIds.map(async (item) => {
        await this.$axios.$put('/seats/' + item + '/assign', personId)
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
