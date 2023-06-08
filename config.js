import { endent, map } from '@dword-design/functions'
import packageName from 'depcheck-package-name'
import { URL } from 'url'

import { appName, appTitle } from './model/variables.js'

export default {
  css: ['@/assets/style.scss'],
  /* feed: [
    {
      create: async feed => {
        const $content = require('@nuxt/content').$content
        feed.options = {
          description: appTitle,
          link: `${process.env.BASE_URL}/blog`,
          title: appName,
        }

        const posts = await $content('blog')
          .sortBy('createdAt', 'desc')
          .fetch()
        for (const post of posts) {
          const url = `${process.env.BASE_URL}/blog/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: endent`
              <p><img alt="Cover image" src="${process.env.BASE_URL}/blog/${post.slug}/banner.png"></p>
              ${post.bodyHtml}
            `,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        }
      },
      path: '/feed',
      type: 'rss2',
    },
  ], */
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
  modules: [
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
        routes: async () => {
          const $content = require('@nuxt/content').$content

          return (
            $content('blog').sortBy('slug').fetch()
            |> await
            |> map(post => `blog/${post.slug}`)
          )
        },
      },
    ],
    ['@nuxt/content', {
      markdown: {
        anchorLinks: false,
        rehypePlugins: {
          [packageName`rehype-autolink-headings`]: {},
        },
      },
    }],
    'nuxt-content-git',
    /*[
      'nuxt-content-body-html',
      {
        highlighter: undefined,
        rehypePlugins: [
          [
            packageName`rehype-urls`,
            url => (url.host ? url : new URL(url.href, process.env.BASE_URL)),
          ],
        ],
      },
    ], */
    // '@nuxtjs/feed',
    ['nuxt-gtag', { gtag: { id: process.env.GOOGLE_ANALYTICS_ID } }],
  ],
  name: appName,
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: {
    linkActiveClass: 'is-active',
  },
  title: appTitle,
}
