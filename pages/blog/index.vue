<script>
import { map } from '@dword-design/functions'
import MdiRss from '@mdi/svg/svg/rss.svg'
import { format } from 'date-fns'

export default {
  asyncData: async context => ({
    posts: await context
      .$content('posts')
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch(),
  }),
  head: {
    title: 'Blog',
  },
  render() {
    return (
      <main class="section">
        <div class="container is-content">
          <div class="level mb-1">
            <div class="level-left">
              <div class="level-item">
                <h1 class="title">Blog</h1>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a
                  class="button is-small is-rounded"
                  href="/feed"
                  target="_blank"
                >
                  <MdiRss class="icon" />
                  <span>Subscribe via RSS</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <p class="has-text-right">
              I'm also publishing on{' '}
              <a href="https://dev.to/seblandwehr" target="_blank">
                <strong>dev.to</strong>
              </a>
              ,{' '}
              <a href="https://dworddesign.hashnode.dev" target="_blank">
                <strong>Hashnode</strong>
              </a>{' '}
              and{' '}
              <a href="https://sebastianlandwehr.medium.com" target="_blank">
                <strong>Medium</strong>
              </a>
              .
            </p>
          </div>
          <div class="tile is-ancestor is-vertical">
            {this.posts
              |> map(post => (
                <div class="tile is-parent">
                  <article class="card tile is-child">
                    <header class="card-image">
                      <figure class="image is-devto-banner">
                        <img
                          alt={`Cover image for ${post.title}`}
                          src={`/blog/${post.slug}/banner.png`}
                        />
                      </figure>
                    </header>
                    <div class="card-content">
                      <h2 class="title is-size-4">
                        <a
                          class="boxlink"
                          href={
                            this.$router.resolve({
                              name: 'blog.slug',
                              params: { slug: post.slug },
                            }).href
                          }
                        >
                          {post.title}
                        </a>
                      </h2>
                      <div class="subtitle is-size-7">
                        <time
                          datetime={format(
                            new Date(post.createdAt),
                            'yyyy-MM-dd'
                          )}
                        >
                          {format(new Date(post.createdAt), 'PP')}
                        </time>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </main>
    )
  },
}
</script>
