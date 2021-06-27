<script>
import { map } from '@dword-design/functions'

import firebaseUrl from '@/assets/libraries/firebase.png'
import nodejsUrl from '@/assets/libraries/nodejs.png'
import npmUrl from '@/assets/libraries/npm.png'
import nuxtUrl from '@/assets/libraries/nuxt.png'
import vueUrl from '@/assets/libraries/vue.png'

const libraries = [
  { imageUrl: nuxtUrl, title: 'Nuxt.js', websiteUrl: 'https://nuxtjs.org' },
  { imageUrl: vueUrl, title: 'Vue.js', websiteUrl: 'https://vuejs.org' },
  { imageUrl: nodejsUrl, title: 'Node.js', websiteUrl: 'https://nodejs.org' },
  { imageUrl: npmUrl, title: 'npm', websiteUrl: 'https://www.npmjs.com' },
  {
    imageUrl: firebaseUrl,
    title: 'Firebase',
    websiteUrl: 'https://firebase.google.com',
  },
]

export default {
  functional: true,
  render: () => (
    <ul class="level">
      {libraries
        |> map(library => (
          <li class="level-item" style={{ maxWidth: '10rem' }}>
            <a href={library.websiteUrl} target="_blank">
              <img alt={library.title} src={library.imageUrl} />
            </a>
          </li>
        ))}
    </ul>
  ),
}
</script>
