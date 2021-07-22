export default async function (context) {
  console.log('[Middleware] Auth')
  await context.store.dispatch('auth/initAuth', context.req)
  const isAuth = context.store.getters['auth/isAuthenticated']
  console.log('isAuthenticated: ' + isAuth)

  if (!isAuth) {
    context.redirect('/auth')
  }
}
