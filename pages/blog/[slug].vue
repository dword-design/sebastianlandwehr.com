<template>
  <main class="section">
    <article class="container is-content">
      <figure class="image is-devto-banner mb-5">
        <img alt="Cover image" :src="`${post._path}/banner.png`" />
      </figure>
      <h1 class="title">{{ post.title }}</h1>
      <div class="subtitle is-size-6">
        {{
          new Date(post.createdAt).toLocaleDateString('en', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        }}
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
import { property } from '@dword-design/functions';

import { queryContent, useAsyncData, useHead, useRoute } from '#imports';

const route = useRoute();

const post =
  useAsyncData(() => queryContent('blog', route.params.slug).findOne())
  |> await
  |> property('data');

useHead({ title: post.title });
</script>
