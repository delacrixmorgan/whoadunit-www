export default ({ $axios, env, store }) => {
  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${store.getters['auth/token']}`
  })
}
