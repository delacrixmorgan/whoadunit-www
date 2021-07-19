const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async nuxtServerInit(vuexContext, context) {
    // TODO: Init with Session Token
  },
  async loginUser(vuexContext, payload) {
    const response = await vuexContext.$axios.$post('login', {
      email: payload.email,
      password: payload.password,
    })
    // TODO: Save Token
    console.log(response.token)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
