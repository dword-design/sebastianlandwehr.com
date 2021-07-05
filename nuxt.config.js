import { map } from '@dword-design/functions'

import blogFooter from './content/blog-footer'
import { appName, appTitle } from './model/variables'

export default {
  css: ['@/assets/style.scss'],
  feed: [
    {
      create: async feed => {
        const $content = require('@nuxt/content').$content
        feed.options = {
          description: appTitle,
          link: `${process.env.BASE_URL}/blog`,
          title: appName,
        }

        const posts = await $content('posts')
          .sortBy('createdAt', 'desc')
          .fetch()
        posts.forEach(post => {
          const url = `${process.env.BASE_URL}/blog/${post.slug}`
          feed.addItem({
            author: post.authors,
            content: post.description,
            date: new Date(post.createdAt),
            description: post.description,
            id: url,
            link: url,
            title: post.title,
          })
        })
      },
      path: '/feed',
      type: 'rss2',
    },
  ],
  head: {
    link: [
      {
        href: '/feed',
        rel: 'alternate',
        title: 'Blog',
        type: 'application/rss+xml',
      },
    ],
  },
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
        message: { to: 'info@sebastianlandwehr.com' },
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
            $content('posts').sortBy('slug').fetch()
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
    ['~/modules/blog-footer', { text: blogFooter }],
    '@nuxt/content',
    '~/modules/bulma-prism-fix',
    '@nuxtjs/feed',
  ],
  name: appName,
  ogImage: `${process.env.BASE_URL}/images/og-image.png`,
  router: {
    linkActiveClass: 'is-active',
  },
  title: appTitle,
}
