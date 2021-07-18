<script>
import MdiRss from '@mdi/svg/svg/rss.svg'

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
            <img alt="Cover image" src={`/blog/${this.post.slug}/banner.png`} />
          </figure>
          <h1 class="title">{this.post.title}</h1>
          <div class="subtitle is-size-6">
            {new Date(this.post.createdAt).toLocaleDateString('en', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </div>
          <nuxt-content class="content mb-4" document={this.post} />
          <div>
            <a class="button is-small is-rounded" href="/feed" target="_blank">
              <MdiRss class="icon" />
              <span>Subscribe via RSS</span>
            </a>
          </div>
        </article>
      </main>
    )
  },
}
</script>
