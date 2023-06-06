<template>
  <b-navbar
    active
    class="has-shadow is-spaced"
    :close-on-click="false"
    :mobile-burger="false"
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
    <!--<b-navbar-item
      href={context.parent.$router.resolve({ name: 'support-me' }).href}
      slot="end"
    >
      <MdiHeart aria-hidden="true" class="icon has-text-danger" />
      <span>Support me</span>
    </b-navbar-item>
    <b-navbar-item
      href={context.parent.$router.resolve({ name: 'blog' }).href}
      slot="end"
    >
      <MdiRss aria-hidden="true" class="icon has-text-secondary" />
      <span>Blog</span>
    </b-navbar-item>-->
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            :tag="NuxtLink"
            type="is-light"
            :to="{ name: 'support-me' }"
          >
            <b-icon
              icon="mdi-heart"
              aria-hidden="true"
              class="has-text-danger"
            />
            <span>Support me</span>
          </b-button>
          <b-button :tag="NuxtLink" type="is-light" :to="{ name: 'blog' }">
            <b-icon
              icon="mdi-rss"
              aria-hidden="true"
              class="has-text-secondary"
            />
            <span>Blog</span>
          </b-button>
        </div>
      </b-navbar-item>
      <b-navbar-item
        v-for="account in accounts"
        :key="account.url"
        :aria-label="account.title"
        class="navbar-item"
        :href="account.url"
        tag="a"
        target="_blank"
      >
        <b-icon
          :icon="account.icon"
          aria-hidden="true"
          class="icon is-large"
          :style="{ color: account.color }"
        />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script setup>
import { appName, appTitle } from '@/model/variables.js'
import { resolveComponent } from '#imports'

const NuxtLink = resolveComponent('NuxtLink')

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
]
</script>
