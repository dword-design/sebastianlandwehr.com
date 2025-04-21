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
                href="/feed"
                icon-left="mdi-rss"
                tag="a"
                target="_blank"
                type="is-small is-rounded"
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
        :key="post.path"
        class="columns is-flex-direction-row-reverse"
        :style="
          index < posts.length - 1 ? { marginBottom: '2.25rem' } : undefined
        "
      >
        <header class="column is-two-fifths">
          <div class="card is-shadowless">
            <nuxt-link class="card-image" :to="post.path">
              <figure class="image is-devto-banner">
                <img
                  :alt="`Cover image for ${post.title}`"
                  :src="`${post.path}/banner.png`"
                />
              </figure>
            </nuxt-link>
          </div>
        </header>
        <div class="column">
          <h2 class="title is-size-4">
            <nuxt-link class="is-stretched" :to="post.path">
              {{ post.title }}
            </nuxt-link>
          </h2>
          <div class="subtitle is-size-7" style="margin-bottom: 0.75rem">
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
import { truncate } from 'lodash-es';

import { queryCollection, useAsyncData, useHead } from '#imports';

useHead({ title: 'Blog' });

const { data: posts } = await useAsyncData(
  () =>
    queryCollection('blog')
      .select(
        ...Object.keys({
          createdAt: true,
          description: true,
          path: true,
          title: true,
        }),
      )
      .order('createdAt', 'DESC')
      .all(),
  {
    transform: _ =>
      _.map(post => ({ ...post, createdAt: new Date(post.createdAt) })),
  },
);
</script>
