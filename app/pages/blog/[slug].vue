<template>
  <main v-if="post" class="section">
    <article class="container is-content">
      <figure class="image mb-5">
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

<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(
  route.path,
  () =>
    queryCollection('blog')
      .path(route.path)
      .select('body', 'createdAt', 'path', 'title')
      .first(),
  {
    default: () => null,
    transform: rawPost =>
      rawPost
        ? { ...rawPost, createdAt: new Date(rawPost.createdAt) }
        : rawPost,
  },
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' });
}

useHead({ title: () => post.value!.title });
</script>
