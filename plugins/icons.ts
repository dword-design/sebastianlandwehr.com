import MdiArrowRightBoldIcon from '@mdi/svg/svg/arrow-right-bold.svg?component';
import MdiFacebookIcon from '@mdi/svg/svg/facebook.svg?component';
import MdiGithubIcon from '@mdi/svg/svg/github.svg?component';
import MdiHeartIcon from '@mdi/svg/svg/heart.svg?component';
import MdiInstagramIcon from '@mdi/svg/svg/instagram.svg?component';
import MdiLinkedinIcon from '@mdi/svg/svg/linkedin.svg?component';
import MdiRssIcon from '@mdi/svg/svg/rss.svg?component';
import MdiSendIcon from '@mdi/svg/svg/send.svg?component';
import MdiTwitterIcon from '@mdi/svg/svg/twitter.svg?component';

import XingIcon from '@/assets/xing-icon.svg?component';

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
};

export default defineNuxtPlugin(nuxtApp => {
  for (const [name, icon] of Object.entries(icons)) {
    nuxtApp.vueApp.component(name, icon);
  }
});
