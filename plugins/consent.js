import VueConsent from '@dword-design/vue-consent';
import BConsent from '@dword-design/vue-consent-buefy';

import { defineNuxtPlugin, useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();

  nuxtApp.vueApp.use(VueConsent, {
    services: { googleAnalytics: { id: runtimeConfig.public.gtag.id } },
  });

  nuxtApp.vueApp.use(BConsent);
});
