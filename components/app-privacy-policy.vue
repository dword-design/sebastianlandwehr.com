<template>
  <div class="content" v-html="getPrivacyPolicy('en', { contact: true })" />
</template>

<script setup>
import getPrivacyPolicy from '@dword-design/get-privacy-policy'
</script>
