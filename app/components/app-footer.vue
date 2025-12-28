<template>
  <footer class="footer">
    <nav>
      <ul class="columns is-centered has-text-centered has-separator-dot">
        <li class="column is-narrow">
          <nuxt-link :to="{ name: 'privacy-policy' }">
            Privacy Policy
          </nuxt-link>
        </li>
        <li class="column is-narrow">
          <nuxt-link :to="{ name: 'legal-notice' }"> Legal Notice </nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>
