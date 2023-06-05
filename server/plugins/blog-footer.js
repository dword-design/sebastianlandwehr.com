import blogFooter from '@/content/blog-footer.js'
import { defineNitroPlugin } from '#imports'

export default defineNitroPlugin(nitroApp =>
  nitroApp.hooks.hook('content:file:beforeParse', file => {
    file.data += `\n${blogFooter}`
  }),
)
