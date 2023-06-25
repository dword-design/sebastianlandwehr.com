import packageName from 'depcheck-package-name'

import { appName, appTitle } from './model/variables.js'

export default {
  app: {
    head: {
      link: [
        {
          href: '/feed',
          rel: 'alternate',
          title: appName,
          type: 'application/rss+xml',
        },
      ],
    },
  },
  css: ['@/assets/style.scss'],
  modules: [
    '@nuxt/devtools',
    '@dword-design/nuxt-buefy',
    [
      'nuxt-mail',
      {
        message: { to: 'info@sebastianlandwehr.com' },
        smtp: JSON.parse(process.env.MAIL_CONFIG || '{}'),
      },
    ],
    [
      '@funken-studio/sitemap-nuxt-3',
      {
        hostname: process.env.BASE_URL,
        routes: async () =>
          (await $fetch('/api/_content/query?_path=blog&only=_path')).map(
            _ => _._path,
          ),
      },
    ],
    [
      '@nuxt/content',
      {
        highlight: { theme: 'light-plus' },
        markdown: {
          anchorLinks: false,
          rehypePlugins: {
            [packageName`rehype-autolink-headings`]: {
              content: {
                properties: { className: 'hash-link' },
                tagName: 'span',
                type: 'element',
              },
            },
          },
        },
      },
    ],
    'nuxt-content-git',
    'nuxt-content-body-html',
    'nuxt-gtag',
  ],
  name: appName,
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: {
    options: {
      linkActiveClass: 'is-active',
    },
  },
  runtimeConfig: {
    public: {
      gtag: { id: process.env.GOOGLE_ANALYTICS_ID },
    },
  },
  title: appTitle,
}
