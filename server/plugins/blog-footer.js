import { defineNitroPlugin } from '#imports'
import blogFooter from '@/content/blog-footer.js'

export default defineNitroPlugin(nitroApp =>
  nitroApp.hooks.hook('content:file:beforeParse', file => {
    file.data += `\n${blogFooter}`
  })
)
