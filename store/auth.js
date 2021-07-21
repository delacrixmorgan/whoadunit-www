const state = () => ({
  state: {
    token: null,
  },
})

const getters = {
  isAuthenticated(state) {
    return state.token != null
  },
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    // TODO: Init with Session Token
  },

  initAuth(vuexContext, req) {
    const token = localStorage.getItem('token')
    vuexContext.commit('auth/setToken', token)
  },

  async loginUser(vuexContext, payload) {
    const response = await vuexContext.$axios.$post('auth/login', {
      email: payload.email,
      password: payload.password,
    })
    vuexContext.commit('auth/setToken', response.token)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
