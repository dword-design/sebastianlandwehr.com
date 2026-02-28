<template>
  <b-navbar
    active
    class="has-shadow is-spaced"
    :close-on-click="false"
    wrapper-class="container"
  >
    <template #brand>
      <b-navbar-item tag="div">
        <div>
          <h1 class="is-4 title">
            <nuxt-link class="has-text-grey-darker" :to="{ name: 'index' }">
              {{ appName }}
            </nuxt-link>
          </h1>
          <p class="is-6 subtitle">{{ appTitle }}</p>
        </div>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link class="button is-light" :to="{ name: 'support-me' }">
            <b-icon
              aria-hidden="true"
              class="has-text-danger"
              icon="mdi-heart"
            />
            <span>Support me</span>
          </nuxt-link>
          <nuxt-link class="button is-light" :to="{ name: 'blog' }">
            <b-icon
              aria-hidden="true"
              class="has-text-secondary"
              icon="mdi-rss"
            />
            <span>Blog</span>
          </nuxt-link>
        </div>
      </b-navbar-item>
      <b-navbar-item
        v-for="account in accounts"
        :key="account.url"
        :aria-label="account.title"
        class="navbar-item is-inline-flex"
        :href="account.url"
        rel="noopener"
        tag="a"
        target="_blank"
      >
        <b-icon
          aria-hidden="true"
          class="icon is-large"
          :icon="account.icon"
          :style="{ color: account.color }"
        />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';

const accounts = [
  {
    icon: 'mdi-github',
    title: 'GitHub',
    url: 'https://github.com/dword-design',
  },
  {
    color: '#1D9BF0',
    icon: 'mdi-twitter',
    title: 'Twitter',
    url: 'https://twitter.com/seblandwehr',
  },
  {
    color: '#CA4163',
    icon: 'mdi-instagram',
    title: 'Instagram',
    url: 'https://instagram.com/sebastian.landwehr',
  },
  {
    color: '#1A74E4',
    icon: 'mdi-facebook',
    title: 'Facebook',
    url: 'https://facebook.com/Sebastian-Landwehr-101161921820497',
  },
  {
    color: '#0966C2',
    icon: 'mdi-linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebastian-landwehr-9393aaa5/',
  },
  {
    color: '#0698A0',
    icon: 'xing',
    title: 'Xing',
    url: 'https://www.xing.com/profile/Sebastian_Landwehr3',
  },
];
</script>
