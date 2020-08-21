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
    ['@nuxtjs/google-gtag', { id: 'UA-77425155-4' }],
    [
      '@nuxtjs/recaptcha',
      {
        siteKey: process.env.RECAPTCHA_KEY,
        version: 2,
      },
    ],
  ],
  name: appName,
  router: {
    linkActiveClass: 'is-active',
  },
  title: appName,
}
