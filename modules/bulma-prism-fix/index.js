import { createResolver, defineNuxtModule } from '@nuxt/kit'
import nuxtPushPlugins from 'nuxt-push-plugins'
import P from 'path'

const resolver = createResolver(import.meta.url)

export default defineNuxtModule(() => {
  nuxtPushPlugins(this, {
    fileName: P.join('bulma-prism-fix', 'plugin.js'),
    src: resolver.resolve('./plugin.js'),
  })
  this.addTemplate({
    fileName: P.join('bulma-prism-fix', 'custom-class.js'),
    src: resolver.resolve('./prism.js'),
  })
  this.options.css.push(resolver.resolve('./theme.scss'))
})
