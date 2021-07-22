export default ({ $axios, env }) => {
  $axios.onRequest((config) => {
    // config.headers.common.Authorization = `Bearer ${env.WP_API_KEY}`
  })
}
