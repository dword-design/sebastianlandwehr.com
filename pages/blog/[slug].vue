<template>
  <main class="section">
    <article class="container is-content">
      <figure class="image is-devto-banner mb-5">
        <img alt="Cover image" :src="`${post.path}/banner.png`" />
      </figure>
      <h1 class="title">{{ post.title }}</h1>
      <div class="subtitle is-size-6">
        <time
          data-allow-mismatch="text"
          :datetime="post.createdAt.toISOString()"
        >
          {{
            post.createdAt.toLocaleDateString('en', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })
          }}
        </time>
      </div>
      <content-renderer class="content mb-4" :value="post" />
      <div>
        <b-button
          href="/feed"
          icon-left="mdi-rss"
          tag="a"
          target="_blank"
          type="is-small is-rounded"
        >
          Subscribe via RSS
        </b-button>
      </div>
    </article>
  </main>
</template>

<script setup>
import { queryCollection, useAsyncData, useHead, useRoute } from '#imports';

const route = useRoute();

const { data: post } = await useAsyncData(
  route.path,
  () =>
    queryCollection('blog')
      .path(route.path)
      .select(
        ...Object.keys({
          body: true,
          createdAt: true,
          path: true,
          title: true,
        }),
      )
      .first(),
  { transform: _ => ({ ..._, createdAt: new Date(_.createdAt) }) },
);

useHead({ title: () => post.value.title });
</script>
