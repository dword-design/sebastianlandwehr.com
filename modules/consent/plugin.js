export default pluginContext =>
  pluginContext.store.registerModule('consent', {
    actions: {
      init: (context, settings) => context.commit('init', settings),
      open: context => context.commit('open'),
      set: (context, settings) => context.commit('set', settings),
    },
    getters: {
      isOpened: state => state.isOpened,
      settings: state => state.settings,
    },
    mutations: {
      init: (state, settings) => (state.settings = settings),
      open: state => (state.isOpened = true),
      set: (state, settings) => {
        state.isOpened = false
        state.settings = settings
        localStorage.setItem('consent', JSON.stringify(settings))
        window.location.reload()
      },
    },
    namespaced: true,
    state: () => ({ isOpened: false }),
  })
