import { mapValues, values } from '@dword-design/functions'
import sequential from 'promise-sequential'

import options from './options'
import services from './services'

export default async context => {
  const settings = JSON.parse(localStorage.getItem('cookie-settings') || '{}')
  await context.store.dispatch('cookie-settings/init', settings)
  await sequential(
    services
      |> mapValues(
        (service, name) => () => service(settings, options.services[name])
      )
      |> values
  )
}
