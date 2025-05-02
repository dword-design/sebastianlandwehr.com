<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="content privacy-policy-content"
    v-html="getPrivacyPolicy('en', { contact: true })"
  />
  <!-- eslint-enable -->
</template>

<script setup>
import getPrivacyPolicy from '@dword-design/get-privacy-policy';
</script>
