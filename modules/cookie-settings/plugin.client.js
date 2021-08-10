export default async context => {
  const settings = JSON.parse(localStorage.getItem('cookie-settings') || '{}')
  await context.store.dispatch('cookie-settings/init', settings)
}