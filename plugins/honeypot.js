import VueHoneypot from 'vue-honeypot'

import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(nuxtApp => nuxtApp.vueApp.use(VueHoneypot))
