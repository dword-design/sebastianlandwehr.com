<script>
import { map } from '@dword-design/functions'

export default {
  asyncData: async context => ({
    posts: await context
      .$content('posts')
      .only(['title', 'description', 'img', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch(),
  }),
  head: {
    title: 'Blog',
  },
  render() {
    return (
      <section class="section">
        <article class="container">
          <h1 class="title">Blog</h1>
          <ul>
            {this.posts
              |> map(post => (
                <li>
                  <h2 class="title is-size-4">
                    <a
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
                    {new Date(post.createdAt).toLocaleDateString('en', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                  <p>{post.description}</p>
                </li>
              ))}
          </ul>
        </article>
      </section>
    )
  },
}
</script>
