<template>
  <main class="section">
    <div class="container is-content">
      <div class="content" v-html="legalNotice" />
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

import { useMeta } from '#imports'

useMeta({ title: 'Legal Notice' })
</script>
