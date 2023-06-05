import VueConsent from '@dword-design/vue-consent'
import BConsent from '@dword-design/vue-consent-buefy'

import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueConsent, {
    services: {
      googleAnalytics: { id: process.env.GOOGLE_ANALYTICS_ID },
    },
  })
  nuxtApp.vueApp.use(BConsent)
})
