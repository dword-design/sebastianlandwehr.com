<template>
  <main class="section">
    <div class="container is-content">
      <!-- eslint-disable vue/no-v-html -->
      <div class="content" v-html="legalNotice" />
      <!-- eslint-enable -->
      <div class="content">
        <h3>Credits</h3>
        Xing icon by{{ ' ' }}
        <a href="https://www.svgrepo.com/svg/50992/xing-logo">svgrepo.com</a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { en as legalNotice } from '@dword-design/legal-notice'

import { useHead } from '#imports'

useHead({ title: 'Legal Notice' })
</script>
