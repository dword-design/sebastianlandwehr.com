import { defineCollection, defineContentConfig, z } from '@nuxt/content';
import { asSitemapCollection } from '@nuxtjs/sitemap/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSitemapCollection({
        schema: z.object({
          bodyHtml: z.string(),
          createdAt: z.date(),
          updatedAt: z.date(),
        }),
        source: 'blog/*.md',
        type: 'page',
      }),
    ),
  },
});
