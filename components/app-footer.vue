<script>
export default {
  functional: true,
  render: context => (
    <footer {...context.data} class="footer">
      <nav>
        <ul class="columns is-centered has-text-centered has-separator-dot">
          <li class="column is-narrow">
            <nuxt-server-link to={{ name: 'legal-notice' }}>
              Legal Notice
            </nuxt-server-link>
          </li>
          <li class="column is-narrow">
            <nuxt-server-link to={{ name: 'privacy-policy' }}>
              Privacy Policy
            </nuxt-server-link>
          </li>
          <li class="column is-narrow">
            <b-button
              class="is-link"
              v-on:click={() => context.parent.$consent.open()}
            >
              Privacy Settings
            </b-button>
          </li>
        </ul>
      </nav>
    </footer>
  ),
}
</script>
