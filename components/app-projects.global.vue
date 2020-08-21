<script>
import { map } from '@dword-design/functions'

import crosswindMusicUrl from '@/assets/projects/crosswind-music.png'
import feedbutlerUrl from '@/assets/projects/feedbutler.png'
import flatoutFolkUrl from '@/assets/projects/flatout-folk.png'
import furtherAlongUrl from '@/assets/projects/furtheralong.png'
import myNpmStatsUrl from '@/assets/projects/my-npm-stats.png'
import sebastianLandwehrMusicUrl from '@/assets/projects/sebastianlandwehr-music.png'
import songs4lifeUrl from '@/assets/projects/songs4life.png'
import stoutUrl from '@/assets/projects/stout.png'

const projects = [
  {
    description:
      'Feedbutler sends the newest posts of your subscribed feeds summed up as a single mail to you. So you stay up to date without having to open an extra feed reader.',
    imageUrl: feedbutlerUrl,
    projectUrl: 'https://feedbutler.app',
    title: 'Feedbutler',
  },
  {
    description: 'Package stats and dependents for NPM authors.',
    imageUrl: myNpmStatsUrl,
    projectUrl: 'https://my-npm-stats.org',
    title: 'my-npm-stats',
  },
  {
    description:
      'I am a former member of this great Irish folk band from Germany. And I also built the website :).',
    imageUrl: crosswindMusicUrl,
    projectUrl: 'https://crosswind-music.de',
    title: 'Crosswind',
  },
  {
    description: 'My very own music and songwriting project.',
    imageUrl: sebastianLandwehrMusicUrl,
    projectUrl: 'https://sebastianlandwehr-music.de',
    title: 'Sebastian Landwehr Music',
  },
  {
    description:
      'I built this website for a befriended folk band, who had pretty destinct ideas of how their website should look like.',
    imageUrl: stoutUrl,
    projectUrl: 'https://stout-music.de',
    title: 'Stout',
  },
  {
    description:
      'A concert project where multiple songwriters share the stage.',
    imageUrl: songs4lifeUrl,
    projectUrl: 'https://songs4life.de',
    title: 'Songs4Life',
  },
  {
    description: 'A befriended folk band who needed a nice looking website.',
    imageUrl: flatoutFolkUrl,
    projectUrl: 'https://flatout-folk.de',
    title: 'Flatout',
  },
  {
    description: 'A befriended folk band who needed a nice looking website.',
    imageUrl: furtherAlongUrl,
    projectUrl: 'https://furtheralong.de',
    title: 'Further Along',
  },
]

export default {
  functional: true,
  render: () => (
    <div class="columns is-multiline is-centered">
      {projects
        |> map(project => (
          <div class="column is-half">
            <article class="card is-hover-image" style={{ height: '100%' }}>
              <header class="card-image">
                <figure class="image is-3by2">
                  <img aria-hidden="true" src={project.imageUrl} />
                </figure>
              </header>
              <main class="card-content is-size-7">
                <h3 class="title is-5">
                  <a class="boxlink" href={project.projectUrl} target="_blank">
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
              </main>
            </article>
          </div>
        ))}
    </div>
  ),
}
</script>
