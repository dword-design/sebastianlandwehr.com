import { createResolver } from '@nuxt/kit';
import packageName from 'depcheck-package-name';

import { appName, appTitle } from './model/variables.js';

const resolver = createResolver(import.meta.url);

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
    '@nuxtjs/sitemap',
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
  nitro: { externals: { inline: [resolver.resolve('./model')] } },
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: { options: { linkActiveClass: 'is-active' } },
  runtimeConfig: { public: { gtag: { id: process.env.GOOGLE_ANALYTICS_ID } } },
  site: { url: process.env.BASE_URL },
  title: appTitle,
};
