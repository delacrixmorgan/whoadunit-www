export default async function (context) {
  console.log('[Middleware] Auth')
  await context.store.dispatch('auth/initAuth', context)
}
