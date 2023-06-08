import blogFooter from '@/model/blog-footer.js'
import { defineNitroPlugin } from '#imports'

export default defineNitroPlugin(nitroApp =>
  nitroApp.hooks.hook('content:file:beforeParse', file => file.body += `\n${blogFooter}`),
)
