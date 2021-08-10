export default async context =>
  context.store.registerModule('cookie-settings', {
    state: () => ({ isOpened: false }),
    mutations: {
      init: (state, settings) => (state.settings = settings),
      open: state => (state.isOpened = true),
      set: (state, settings) => {
        state.isOpened = false
        state.settings = settings
        localStorage.setItem('cookie-settings', JSON.stringify(settings))
      },
    },
    actions: {
      init: (context, settings) => context.commit('init', settings),
      open: context => context.commit('open'),
      set: (context, settings) => context.commit('set', settings),
    },
    getters: {
      isOpened: state => state.isOpened,
      settings: state => state.settings,
    },
    namespaced: true,
  })
  