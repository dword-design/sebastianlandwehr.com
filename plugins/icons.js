import MdiFacebookIcon from '@mdi/svg/svg/facebook.svg'
import MdiGitHubIcon from '@mdi/svg/svg/github.svg'
import MdiHeartIcon from '@mdi/svg/svg/heart.svg'
import MdiInstagramIcon from '@mdi/svg/svg/instagram.svg'
import MdiLinkedInIcon from '@mdi/svg/svg/linkedin.svg'
import MdiRssIcon from '@mdi/svg/svg/rss.svg'
import MdiTwitterIcon from '@mdi/svg/svg/twitter.svg'
import MdiSendIcon from '@mdi/svg/svg/send.svg'

import XingIcon from '@/assets/xing-icon.svg'

import { defineNuxtPlugin } from '#imports'

const icons = {
  MdiFacebookIcon,
  MdiGitHubIcon,
  MdiHeartIcon,
  MdiInstagramIcon,
  MdiLinkedInIcon,
  MdiRssIcon,
  MdiTwitterIcon,
  XingIcon,
  MdiSendIcon,
}

export default defineNuxtPlugin(nuxtApp => {
  for (const entry of Object.entries(icons)) {
    nuxtApp.vueApp.component(entry[0], entry[1])
  }
})