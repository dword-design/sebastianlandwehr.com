<script>
export default {
  asyncData: async context => ({
    post: await context
      .$content('posts', context.params.slug)
      .fetch()
      .catch(() =>
        context.error({ message: 'Page not found', statusCode: 404 })
      ),
  }),
  head() {
    return {
      title: this.post.title,
    }
  },
  render() {
    return (
      <main class="section">
        <article class="container is-content">
          <figure class="image is-devto-banner mb-5">
            <img
              alt={`Cover image for ${this.post.title}`}
              src={`/blog/${this.post.slug}/banner.png`}
            />
          </figure>
          <h1 class="title">{this.post.title}</h1>
          <div class="subtitle is-size-6">
            {new Date(this.post.createdAt).toLocaleDateString('en', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </div>
          <nuxt-content class="content" document={this.post} />
          <b>If you like what I'm doing, follow me on <a href="https://twitter.com/DwordDesign">Twitter</a> or check out my <a href="https://sebastianlandwehr.com">website</a>. Also consider donating at <a href="https://www.buymeacoffee.com/dword">Buy Me a Coffee</a>, <a href="https://www.paypal.com/paypalme/SebastianLandwehr">PayPal</a> or <a href="https://www.patreon.com/dworddesign">Patreon</a>. Thank you so much! ❤️</b>
        </article>
      </main>
    )
  },
}
</script>
