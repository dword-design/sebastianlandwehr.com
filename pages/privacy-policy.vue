<template>
  <main class="section">
    <div class="container is-content">
      <div class="content">
        <app-privacy-policy
          :config="{ contact: true, matomo: true }"
          locale="en"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  meta: [{ content: 'noindex', name: 'robots' }],
  script: [
    {
      defer: true,
      src: 'https://matomo.sebastianlandwehr.com/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=en&showIntro=1',
    },
  ],
  title: 'Privacy Policy',
});
</script>
