<template>
  <main class="section">
    <div class="container is-content">
      <div class="content">
        <app-privacy-policy
          :config="{
            contact: true,
            matomo: { optOutContainerClasses: 'has-border p-4' },
          }"
          locale="en"
        >
          <app-privacy-policy-brevo />
        </app-privacy-policy>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
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
