<script>
import { map } from '@dword-design/functions'

import firebaseUrl from '@/assets/libraries/firebase.png'
import nodejsUrl from '@/assets/libraries/nodejs.png'
import npmUrl from '@/assets/libraries/npm.png'
import nuxtUrl from '@/assets/libraries/nuxt.png'
import vueUrl from '@/assets/libraries/vue.png'

const libraries = [
  { title: 'Nuxt.js', url: nuxtUrl },
  { title: 'Vue.js', url: vueUrl },
  { title: 'Node.js', url: nodejsUrl },
  { title: 'NPM', url: npmUrl },
  { title: 'Firebase', url: firebaseUrl },
]

export default {
  functional: true,
  render: () => (
    <ul class="columns is-variable is-multiline is-centered is-vcentered is-10 is-mobile">
      {libraries
        |> map(library => (
          <li class="column is-half-mobile">
            <img alt={library.title} src={library.url} />
          </li>
        ))}
    </ul>
  ),
}
</script>
