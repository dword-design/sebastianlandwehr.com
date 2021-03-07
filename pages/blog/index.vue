<script>
import { map } from '@dword-design/functions'

export default {
  asyncData: async context => ({
    posts: await context
      .$content('posts')
      .only(['title', 'description', 'img', 'slug', 'author'])
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
          <h1 class="title">Blog Posts</h1>
          <ul>
            {this.posts
              |> map(post => (
                <li>
                  <a
                    href={
                      this.$router.resolve({
                        name: 'blog.slug',
                        params: { slug: post.slug },
                      }).href
                    }
                  >
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </a>
                </li>
              ))}
          </ul>
        </article>
      </section>
    )
  },
}
</script>
