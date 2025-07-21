import { createResolver } from '@nuxt/kit';
import packageName from 'depcheck-package-name';

import { appName, appTitle } from './model/variables';

const resolver = createResolver(import.meta.url);

/* if (process.env.CODESPACES) {
  process.env.BASE_URL = `https://${process.env.CODESPACE_NAME}-${process.env.PORT}.app.github.dev`;
} */

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
  devtools: { enabled: false },
  modules: [
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
        ...(process.env.CODESPACES && { watch: false }),
        build: {
          markdown: {
            highlight: { theme: 'light-plus' },
            rehypePlugins: {
              [packageName`rehype-slug`]: {},
              [packageName`rehype-autolink-headings`]: {
                options: {
                  content: {
                    children: [],
                    properties: { className: 'hash-link' },
                    tagName: 'span',
                    type: 'element',
                  },
                },
              },
            },
          },
        },
        renderer: { anchorLinks: false },
      },
    ],
    'nuxt-content-git',
    [
      'nuxt-content-body-html',
      {
        fields: {
          bodyHtml: {
            highlight: false,
            rehypePlugins: {
              [packageName`rehype-urls`]: {
                options: url => {
                  if (url.host || !url.path) {
                    return url;
                  }

                  return new URL(url.href, process.env.BASE_URL);
                },
              },
            },
          },
        },
      },
    ],
    'nuxt-gtag',
    /* ...process.env.CODESPACES ? [(options, nuxt) => nuxt.hook('nitro:config', () => nuxt.hook("nitro:init", nitro => {
      nitro.options.runtimeConfig.public.content.wsUrl = `wss://${process.env.CODESPACE_NAME}-4000.app.github.dev/`
    }))] : [], */
  ],
  name: appName,
  nitro: { externals: { inline: [resolver.resolve('./model')] } },
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: { options: { linkActiveClass: 'is-active' } },
  runtimeConfig: { public: { gtag: { id: process.env.GOOGLE_ANALYTICS_ID } } },
  site: { url: process.env.BASE_URL },
  title: appTitle,
};
