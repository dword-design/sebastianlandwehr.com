<script>
export default {
  functional: true,
  render: context => (
    <footer {...context.data} class="footer">
      <div class="content has-text-centered">
        <p>
          <nuxt-server-link to={{ name: 'imprint' }}>Imprint</nuxt-server-link>
        </p>
        <p>
          <nuxt-server-link to={{ name: 'data-privacy' }}>
            Data Privacy
          </nuxt-server-link>
        </p>
      </div>
    </footer>
  ),
}
</script>
