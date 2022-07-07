<script>
import { map } from '@dword-design/functions'
import MdiRss from '@mdi/svg/svg/rss.svg'
import { format } from 'date-fns'
import truncate from 'lodash.truncate'

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
        <div class="container is-narrow">
          <div class="level is-align-items-flex-start mb-6">
            <div class="level-left">
              <div class="level-item">
                <h1 class="title">Blog</h1>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item content is-block has-text-right-tablet">
                <p class="mb-2">
                  <a
                    class="button is-small is-rounded"
                    href="/feed"
                    target="_blank"
                  >
                    <MdiRss class="icon" />
                    <span>Subscribe via RSS</span>
                  </a>
                </p>
                <p>
                  I'm also publishing on{' '}
                  <a href="https://dev.to/seblandwehr" target="_blank">
                    <strong>dev.to</strong>
                  </a>
                  ,{' '}
                  <a href="https://dworddesign.hashnode.dev" target="_blank">
                    <strong>Hashnode</strong>
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://sebastianlandwehr.medium.com"
                    target="_blank"
                  >
                    <strong>Medium</strong>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          {this.posts
            |> map((post, index) => (
              <article
                class="columns is-flex-direction-row-reverse"
                style={
                  index < this.posts.length - 1
                    ? 'margin-bottom: 2.25rem'
                    : undefined
                }
              >
                <header class="column is-two-fifths">
                  <div class="card is-shadowless">
                    <a
                      class="card-image"
                      href={
                        this.$router.resolve({
                          name: 'blog.slug',
                          params: { slug: post.slug },
                        }).href
                      }
                    >
                      <figure class="image is-devto-banner">
                        <img
                          alt={`Cover image for ${post.title}`}
                          src={`/blog/${post.slug}/banner.png`}
                        />
                      </figure>
                    </a>
                  </div>
                </header>
                <div class="column">
                  <h2 class="title is-size-4">
                    <a
                      class="is-stretched"
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
                  <div class="subtitle is-size-7" style="margin-bottom: .75rem">
                    <time
                      datetime={format(new Date(post.createdAt), 'yyyy-MM-dd')}
                    >
                      {format(new Date(post.createdAt), 'PP')}
                    </time>
                  </div>
                  <p>
                    {truncate(post.description, {
                      length: 200,
                      separator: ' ',
                    })}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </main>
    )
  },
}
</script>
