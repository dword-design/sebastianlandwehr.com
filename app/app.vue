<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const siteConfig = useSiteConfig();
useSeoMeta({ ogImage: () => `${siteConfig.url}/images/og-image.png` });
</script>
