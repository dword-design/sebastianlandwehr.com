import { appName } from './model/variables'

export default {
  css: ['@/assets/style.scss'],
  modules: [
    [
      '@dword-design/nuxt-buefy',
      {
        css: false,
        defaultLinkTags: ['a', 'button', 'nuxt-server-link'],
      },
    ],
    '@dword-design/nuxt-server-link',
    ['nuxt-mail', { smtp: process.env.MAIL_CONFIG || '{}' |> JSON.parse }],
    [
      '@nuxtjs/sitemap',
      {
        hostname: process.env.BASE_URL,
      },
    ],
    'nuxt-responsive-loader',
  ],
  name: appName,
  optimizedImages: {
    optimizeImages: true,
  },
  router: {
    linkActiveClass: 'is-active',
  },
  title: appName,
}
