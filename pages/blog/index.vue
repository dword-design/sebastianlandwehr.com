<template>
  <main class="section">
    <div class="container is-narrow">
      <div class="level is-align-items-flex-start mb-6">
        <div class="level-left">
          <div class="level-item">
            <h1 class="title">Blog</h1>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item content is-block has-text-right-tablet">
            <p class="mb-2">
              <b-button
                tag="a"
                type="is-small is-rounded"
                href="/feed"
                target="_blank"
                icon-left="mdi-rss"
              >
                Subscribe via RSS
              </b-button>
            </p>
            <p>
              I'm also publishing on{{ ' ' }}
              <a href="https://dev.to/seblandwehr" target="_blank">
                <strong>dev.to</strong>
              </a>
              ,{{ ' ' }}
              <a href="https://dworddesign.hashnode.dev" target="_blank">
                <strong>Hashnode</strong> </a
              >{{ ' ' }} and{{ ' ' }}
              <a href="https://sebastianlandwehr.medium.com" target="_blank">
                <strong>Medium</strong>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <article
        v-for="(post, index) in posts"
        :key="post._path"
        class="columns is-flex-direction-row-reverse"
        :style="
          index < posts.length - 1 ? { marginBottom: '2.25rem' } : undefined
        "
      >
        <header class="column is-two-fifths">
          <div class="card is-shadowless">
            <nuxt-link class="card-image" :to="post._path">
              <figure class="image is-devto-banner">
                <img
                  :alt="`Cover image for ${post.title}`"
                  :src="`/blog/${post.slug}/banner.png`"
                />
              </figure>
            </nuxt-link>
          </div>
        </header>
        <div class="column">
          <h2 class="title is-size-4">
            <nuxt-link class="is-stretched" :to="post._path">
              {{ post.title }}
            </nuxt-link>
          </h2>
          <div class="subtitle is-size-7" style="margin-bottom: 0.75rem">
            <time :datetime="format(new Date(post.createdAt), 'yyyy-MM-dd')">
              {{ format(new Date(post.createdAt), 'PP') }}
            </time>
          </div>
          <p>
            {{
              truncate(post.description, {
                length: 200,
                separator: ' ',
              })
            }}
          </p>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { property } from '@dword-design/functions'
import { format } from 'date-fns'
import truncate from 'lodash.truncate'

import { queryContent, useAsyncData, useHead } from '#imports'

useHead({ title: 'Blog' })

const posts =
  useAsyncData(() =>
    queryContent('blog')
      .only(['title', 'description', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .find(),
  )
  |> await
  |> property('data')
</script>
