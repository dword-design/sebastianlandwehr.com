import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

export default function () {
  nuxtPushPlugins(this, {
    fileName: P.join('bulma-prism-fix', 'plugin.js'),
    src: require.resolve('./plugin'),
  })
  this.addTemplate({
    fileName: P.join('bulma-prism-fix', 'custom-class.js'),
    src: require.resolve('./prism'),
  })
  this.options.css.push(require.resolve('./theme.scss'))
}
