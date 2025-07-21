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

<script>
export default { head: { title: 'Privacy Policy' } };
</script>
