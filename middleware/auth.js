export default async function (context) {
  await context.store.dispatch('auth/initAuth', context.req)
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/auth')
  }
}
