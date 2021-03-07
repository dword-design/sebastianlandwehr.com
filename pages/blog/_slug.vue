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
      <section class="section">
        <article class="container is-content">
          <figure class="image is-devto-banner mb-5">
            <img
              alt={`Cover image for ${this.post.title}`}
              src={`/blog/${this.post.slug}/banner.png`}
            />
          </figure>
          <h1 class="title">{this.post.title}</h1>
          <nuxt-content class="content" document={this.post} />
        </article>
      </section>
    )
  },
}
</script>
