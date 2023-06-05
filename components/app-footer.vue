<template>
  <footer class="footer">
    <nav>
      <ul class="columns is-centered has-text-centered has-separator-dot">
        <li class="column is-narrow">
          <nuxt-locale-link :to="{ name: 'legal-notice' }">
            Legal Notice
          </nuxt-locale-link>
        </li>
        <li class="column is-narrow">
          <nuxt-locale-link :to="{ name: 'privacy-policy' }">
            Privacy Policy
          </nuxt-locale-link>
        </li>
        <li class="column is-narrow">
          <b-button class="is-link" @click="$consent.open()">
            Privacy Settings
          </b-button>
        </li>
      </ul>
    </nav>
  </footer>
</template>
