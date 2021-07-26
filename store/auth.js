import Cookie from 'js-cookie'

const state = () => ({
  state: {
    token: null,
  },
})

const getters = {
  isAuthenticated(state) {
    return state.token != null
  },
  token(state) {
    return state.token
  },
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
}

const actions = {
  initAuth(vuexContext, context) {
    let token
    if (context.req) {
      if (!context.req.headers.cookie) {
        vuexContext.dispatch('auth/logoutUser')
        return
      }
      const jwtCookie = context.req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
    } else if (process.client) {
      token = localStorage.getItem('token')
    }
    vuexContext.commit('auth/setToken', token, {
      root: true,
    })
  },

  async loginUser(vuexContext, payload) {
    const response = await this.$axios.$post('auth/login', {
      username: payload.email,
      password: payload.password,
    })
    const token = response.token
    vuexContext.commit('auth/setToken', token, {
      root: true,
    })
    localStorage.setItem('token', token)
    Cookie.set('jwt', token)
    this.$axios.setToken(token, 'Bearer')

    return response
  },

  logoutUser(vuexContext) {
    vuexContext.commit('auth/clearToken', {
      root: true,
    })
    Cookie.remove('jwt')
    if (process.client) {
      localStorage.removeItem('token')
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
