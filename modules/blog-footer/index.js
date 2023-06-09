import { addServerPlugin, createResolver } from '@nuxt/kit'

const resolver = createResolver(import.meta.url)

export default (options, nuxt) => {
  nuxt.options.runtimeConfig.blogFooter = options.content
  addServerPlugin(resolver.resolve('./plugin.js'))
}
