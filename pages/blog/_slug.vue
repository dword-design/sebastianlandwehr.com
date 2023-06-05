<template>
  <main class="section">
    <article class="container is-content">
      <figure class="image is-devto-banner mb-5">
        <img alt="Cover image" :src="`/blog/${post.slug}/banner.png`" />
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
      <nuxt-content class="content mb-4" :document="post" />
      <div>
        <a class="button is-small is-rounded" href="/feed" target="_blank">
          <MdiRss class="icon" />
          <span>Subscribe via RSS</span>
        </a>
      </div>
    </article>
  </main>
</template>

<script setup>
import { property } from '@dword-design/functions'
import MdiRss from '@mdi/svg/svg/rss.svg'

import { queryContent, useAsyncData, useMeta } from '#imports'

const post =
  useAsyncData(() =>
    queryContent('/posts')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .findOne(),
  )
  |> await
  |> property('data')
useMeta({ title: post.title })
</script>
