<script>
export default {
  functional: true,
  render: context => (
    <footer {...context.data} class="footer">
      <div class="content has-text-centered">
        <p>
          <nuxt-server-link to={{ name: 'imprint' }}>Imprint</nuxt-server-link>
        </p>
        <p class="columns is-mobile">
          <span class="column has-text-right">
            <nuxt-server-link to={{ name: 'data-privacy' }}>
              Data Privacy
            </nuxt-server-link>
          </span>
          <span class="column has-text-left">
            <b-button
              class="is-link"
              v-on:click={() =>
                context.parent.$store.dispatch('consent-management/open')
              }
            >
              Privacy Settings
            </b-button>
          </span>
        </p>
      </div>
    </footer>
  ),
}
</script>
