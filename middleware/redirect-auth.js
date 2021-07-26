export default function (context) {
  const isAuth = context.store.getters['auth/isAuthenticated']
  console.log('isAuthenticated: ' + isAuth)

  if (!isAuth) {
    context.redirect('/auth')
  }
}
