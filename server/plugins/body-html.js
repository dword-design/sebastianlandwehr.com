import { defineNitroPlugin, useNuxtContentBodyHtml } from '#imports'
import packageName from 'depcheck-package-name'

const nuxtContentBodyHtml = useNuxtContentBodyHtml()

export default defineNitroPlugin(nitroApp => {
  const bodyHtmls = {}

  nitroApp.hooks.hook('content:file:beforeParse', async file => {
    bodyHtmls[file._id] = await nuxtContentBodyHtml.generate(file, {
      rehypePlugins: {
        [packageName`rehype-urls`]: { transform: url => (url.host ? url : new URL(url.href, process.env.BASE_URL)) },
      },
    })
    console.log(bodyHtmls[file._id])
  })
  nitroApp.hooks.hook('content:file:afterParse', file => (file.bodyHtml = bodyHtmls[file._id]))
})