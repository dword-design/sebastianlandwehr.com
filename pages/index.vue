<script>
import portraitUrl from '@/assets/portrait.jpg?resize&size=420'

export default {
  head: {
    title: 'Sebastian Landwehr',
  },
  render: () => (
    <div>
      <section class="section is-medium">
        <div class="container">
          <div class="columns is-variable is-8">
            <div class="column is-three-fifths">
              <div class="content">
                <p>
                  I'm Sebastian Landwehr, a web developer from Bonn in Germany.
                  My passion is all about JavaScript, especially related
                  to-client side development. Most projects I'm developing are
                  based on Vue.js and Nuxt.js, which allows me to use the whole
                  tech stach from server to client. I'm also heavily into open
                  source development and I'm contributing lots of packages in
                  the NPM world.
                </p>
                <p>
                  When I'm developing apps, I prefer to use Firebase as a BaaS.
                </p>
                <p>
                  Besides programming, I'm writing songs, playing guitar and
                  singing at concerts or karaoke sessions. I'm also into deep
                  discussions, philosophy, psychology, and good movies.
                </p>
              </div>
              <app-libraries />
            </div>
            <div class="column is-two-fifths">
              <img alt="Portrait" src={portraitUrl} />
            </div>
          </div>
        </div>
      </section>
      <section class="hero is-light is-medium">
        <div class="hero-body">
          <div class="container">
            <h2 class="title">Projects</h2>
            <app-projects />
          </div>
        </div>
      </section>
      <section class="hero is-medium">
        <div class="hero-body">
          <contact-form />
        </div>
      </section>
    </div>
  ),
}
</script>
