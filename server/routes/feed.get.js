import { endent } from '@dword-design/functions'
import { Feed } from 'feed'

import { appName, appTitle } from '@/model/variables.js'
import { serverQueryContent } from '#content/server'
import { defineEventHandler } from '#imports'

export default defineEventHandler(async event => {
  const posts = await serverQueryContent(event).sort({ createdAt: -1 }).find()

  const feed = new Feed({
    description: appTitle,
    link: `${process.env.BASE_URL}/blog`,
    title: appName,
  })
  for (const post of posts) {
    const url = `${process.env.BASE_URL}${post._path}`
    feed.addItem({
      author: post.authors,
      content: endent`
        <p><img alt="Cover image" src="${process.env.BASE_URL}${post._path}/banner.png"></p>
        ${post.bodyHtml}
      `,
      date: new Date(post.createdAt),
      description: post.description,
      id: url,
      link: url,
      title: post.title,
    })
  }
  event.res.setHeader('content-type', 'application/rss+xml')
  event.res.end(feed.rss2())
})
