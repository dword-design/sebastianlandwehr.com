<template>
  <b-navbar
    active
    class="has-is-spaced"
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
  </b-navbar>
</template>

<script setup lang="ts">
import { appName, appTitle } from '@@/model/variables';
</script>
