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
        <b-button
          tag="a"
          variant="is-small is-rounded"
          href="/feed"
          target="_blank"
          icon-left="mdi-rss"
        >
          Subscribe via RSS
        </b-button>
      </div>
    </article>
  </main>
</template>

<script setup>
import { property } from '@dword-design/functions'

import { queryContent, useAsyncData, useHead } from '#imports'

const post =
  useAsyncData(() =>
    queryContent('/posts')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .findOne(),
  )
  |> await
  |> property('data')
useHead({ title: post.title })
</script>
