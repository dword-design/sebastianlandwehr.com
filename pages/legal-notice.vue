<template>
  <main class="section">
    <div class="container is-content">
      <div class="content">
        <app-legal-notice locale="en" />
      </div>
      <div class="content">
        <h3>Credits</h3>
        Xing icon by{{ ' ' }}
        <a href="https://www.svgrepo.com/svg/50992/xing-logo">svgrepo.com</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({ title: 'Legal Notice' });
</script>
