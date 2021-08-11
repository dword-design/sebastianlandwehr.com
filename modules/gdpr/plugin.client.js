import options from './options'

export default context =>
  (window[`ga-disable-${options.googleAnalyticsId}`] =
    !context.store.getters['cookie-settings/settings'].statistics)
