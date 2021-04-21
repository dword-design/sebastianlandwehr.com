import { map } from '@dword-design/functions'

import { appName } from './model/variables'
 
export default {
  css: ['@/assets/style.scss'],
  modules: [
    [
      '@dword-design/nuxt-buefy',
      {
        css: false,
        defaultLinkTags: ['a', 'button', 'nuxt-server-link'],
        materialDesignIcons: false,
      },
    ],
    '@dword-design/nuxt-server-link',
    [
      'nuxt-mail',
      {
        message: { to: 'info@dword-design.de' },
        smtp: process.env.MAIL_CONFIG || '{}' |> JSON.parse,
      },
    ],
    [
      '@nuxtjs/sitemap',
      {
        hostname: process.env.BASE_URL,
        routes: async () => {
          const $content = require('@nuxt/content').$content

          return (
            $content('posts').fetch()
            |> await
            |> map(post => `blog/${post.slug}`)
          )
        },
      },
    ],
    ['@nuxtjs/google-gtag', { id: 'UA-77425155-4' }],
    [
      '@nuxtjs/recaptcha',
      {
        siteKey: process.env.RECAPTCHA_KEY,
        version: 2,
      },
    ],
    'nuxt-content-git',
    '@nuxt/content',
  ],
  name: appName,
  router: {
    linkActiveClass: 'is-active',
  },
  title: 'Sebastian Landwehr',
}
