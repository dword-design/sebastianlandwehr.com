import MdiArrowRightBoldIcon from '@mdi/svg/svg/arrow-right-bold.svg'
import MdiFacebookIcon from '@mdi/svg/svg/facebook.svg'
import MdiGithubIcon from '@mdi/svg/svg/github.svg'
import MdiHeartIcon from '@mdi/svg/svg/heart.svg'
import MdiInstagramIcon from '@mdi/svg/svg/instagram.svg'
import MdiLinkedinIcon from '@mdi/svg/svg/linkedin.svg'
import MdiRssIcon from '@mdi/svg/svg/rss.svg'
import MdiSendIcon from '@mdi/svg/svg/send.svg'
import MdiTwitterIcon from '@mdi/svg/svg/twitter.svg'

import XingIcon from '@/assets/xing-icon.svg'
import { defineNuxtPlugin } from '#imports'

const icons = {
  MdiArrowRightBoldIcon,
  MdiFacebookIcon,
  MdiGithubIcon,
  MdiHeartIcon,
  MdiInstagramIcon,
  MdiLinkedinIcon,
  MdiRssIcon,
  MdiSendIcon,
  MdiTwitterIcon,
  XingIcon,
}

export default defineNuxtPlugin(nuxtApp => {
  for (const entry of Object.entries(icons)) {
    nuxtApp.vueApp.component(entry[0], entry[1])
  }
})
