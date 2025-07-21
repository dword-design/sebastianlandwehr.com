import endent from 'endent';
import { Feed } from 'feed';

import { appName, appTitle } from '@/model/variables';

export default defineEventHandler(async event => {
  const posts = await queryCollection(event, 'blog')
    .select(
      ...Object.keys({
        bodyHtml: true,
        createdAt: true,
        description: true,
        path: true,
        title: true,
      }),
    )
    .order('createdAt', 'DESC')
    .all();

  const feed = new Feed({
    description: appTitle,
    link: `${process.env.BASE_URL}/blog`,
    title: appName,
  });

  for (const post of posts) {
    const url = `${process.env.BASE_URL}${post.path}`;

    feed.addItem({
      content: endent`
        <p><img alt="Cover image" src="${process.env.BASE_URL}${post.path}/banner.png"></p>
        ${post.bodyHtml}
      `,
      date: new Date(post.createdAt),
      description: post.description,
      id: url,
      link: url,
      title: post.title,
    });
  }

  event.res.setHeader('content-type', 'application/rss+xml; charset=utf-8');
  event.res.end(feed.rss2());
});
