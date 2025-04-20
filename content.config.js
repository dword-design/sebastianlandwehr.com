import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      schema: z.object({ createdAt: z.date(), updatedAt: z.date() }),
      source: 'blog/*.md',
      type: 'page',
    }),
  },
});
