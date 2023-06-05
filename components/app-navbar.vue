<template>
  <b-navbar
    active
    class="has-shadow is-spaced"
    close-on-click={false}
    mobile-burger={false}
    wrapper-class="container"
  >
    <template #brand>
      <b-navbar-item slot="brand" tag="div">
        <div>
          <h1 class="is-4 title">
            <nuxt-locale-link
              class="has-text-grey-darker"
              to={{ name: 'index' }}
            >
              {appName}
            </nuxt-locale-link>
          </h1>
          <p class="is-6 subtitle">{appTitle}</p>
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
          <a
            class="button is-light"
            href={context.parent.$router.resolve({ name: 'support-me' }).href}
          >
            <MdiHeart aria-hidden="true" class="icon has-text-danger" />
            <span>Support me</span>
          </a>
          <a
            class="button is-light"
            href={context.parent.$router.resolve({ name: 'blog' }).href}
          >
            <MdiRss aria-hidden="true" class="icon has-text-secondary" />
            <span>Blog</span>
          </a>
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
          :is="account.icon"
          aria-hidden="true"
          class="icon is-large"
          :icon="account.icon"
          :style="{ color: account.color }"
        />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script setup>
import { appName, appTitle } from '@/model/variables.js'

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
    icon: 'mdi-xing',
    title: 'Xing',
    url: 'https://www.xing.com/profile/Sebastian_Landwehr3',
  },
]
</script>
