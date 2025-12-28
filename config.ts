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
  content: {
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
  css: ['@/assets/style.scss'],
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },
  modules: [
    '@dword-design/nuxt-buefy',
    'nuxt-svgo-loader',
    [
      'nuxt-mail',
      {
        message: { to: 'info@sebastianlandwehr.com' },
        smtp: JSON.parse(process.env.MAIL_CONFIG || '{}'),
      },
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-content-git',
    [
      'nuxt-content-body-html',
      {
        fields: {
          bodyHtml: {
            highlight: false,
            rehypePlugins: {
              [packageName`rehype-urls`]: {
                options: (url: URL) => {
                  if (url.host || !url.pathname) {
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
    /* ...process.env.CODESPACES ? [(options, nuxt) => nuxt.hook('nitro:config', () => nuxt.hook("nitro:init", nitro => {
      nitro.options.runtimeConfig.public.content.wsUrl = `wss://${process.env.CODESPACE_NAME}-4000.app.github.dev/`
    }))] : [], */
  ],
  name: appName,
  nitro: { externals: { inline: [resolver.resolve('./model')] } },
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: { options: { linkActiveClass: 'is-active' } },
  site: { url: process.env.BASE_URL },
  title: appTitle,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true, // TODO: https://github.com/jgthms/bulma/issues/4026
        },
      },
    },
    optimizeDeps: {
      include: Object.keys({
        '@dword-design/legal-notice': true,
        '@dword-design/privacy-policy': true,
        endent: true,
        'lodash-es': true,
      }),
    },
  },
};
