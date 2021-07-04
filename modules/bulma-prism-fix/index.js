import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

export default function () {
  nuxtPushPlugins(this, { src: require.resolve('./plugin'), fileName: P.join('bulma-prism-fix', 'plugin.js') })
  this.addTemplate({ src: require.resolve('./custom-class'), fileName: P.join('bulma-prism-fix', 'custom-class.js') })
}
