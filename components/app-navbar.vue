<script>
import { map } from '@dword-design/functions'
import MdiFacebook from '@mdi/svg/svg/facebook.svg'
import MdiGitHub from '@mdi/svg/svg/github.svg'
import MdiHeart from '@mdi/svg/svg/heart.svg'
import MdiInstagram from '@mdi/svg/svg/instagram.svg'
import MdiLinkedIn from '@mdi/svg/svg/linkedin.svg'
import MdiPencil from '@mdi/svg/svg/pencil.svg'
import MdiTwitter from '@mdi/svg/svg/twitter.svg'

import XingIcon from '@/assets/xing-icon.svg'
import { appName, appTitle } from '@/model/variables'

const accounts = [
  {
    icon: MdiGitHub,
    title: 'GitHub',
    url: 'https://github.com/dword-design',
  },
  {
    icon: MdiTwitter,
    title: 'Twitter',
    url: 'https://twitter.com/seblandwehr',
  },
  {
    icon: MdiInstagram,
    title: 'Instagram',
    url: 'https://instagram.com/sebastian.landwehr',
  },
  {
    icon: MdiFacebook,
    title: 'Facebook',
    url: 'https://facebook.com/Sebastian-Landwehr-101161921820497',
  },
  {
    icon: MdiLinkedIn,
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebastian-landwehr-9393aaa5/',
  },
  {
    icon: XingIcon,
    title: 'Xing',
    url: 'https://www.xing.com/profile/Sebastian_Landwehr3',
  },
]

export default {
  functional: true,
  render: context => (
    <b-navbar
      {...context.data}
      active
      class="has-shadow is-spaced"
      close-on-click={false}
      mobile-burger={false}
      wrapper-class="container"
    >
      <b-navbar-item slot="brand" tag="div">
        <div>
          <h1 class="is-4 title">
            <nuxt-server-link
              class="has-text-grey-darker"
              to={{ name: 'index' }}
            >
              {appName}
            </nuxt-server-link>
          </h1>
          <p class="is-6 subtitle">{appTitle}</p>
        </div>
      </b-navbar-item>
      {/* <b-navbar-item
        href={context.parent.$router.resolve({ name: 'support-me' }).href}
        slot="end"
      >
        <MdiHeart aria-hidden="true" class="icon has-text-danger" />
        <span>Support me</span>
      </b-navbar-item>
      <b-navbar-item
        href={context.parent.$router.resolve({ name: 'blog' }).href}
        slot="end"
      >
        <MdiPencil aria-hidden="true" class="icon has-text-secondary" />
        <span>Blog</span>
      </b-navbar-item> */}
      <b-navbar-item slot="end" tag="div">
        <div class="buttons">
          <a
            class="button is-light"
            href={context.parent.$router.resolve({ name: 'support-me' }).href}
          >
            <MdiHeart aria-hidden="true" class="icon has-text-danger" />
            <span>Support me</span>
          </a>
          <a
            class="button is-light"
            href={context.parent.$router.resolve({ name: 'blog' }).href}
          >
            <MdiPencil aria-hidden="true" class="icon has-text-secondary" />
            <span>Blog</span>
          </a>
        </div>
      </b-navbar-item>
      {accounts
        |> map(account => (
          <b-navbar-item
            aria-label={account.title}
            class="navbar-item"
            href={account.url}
            slot="end"
            tag="a"
            target="_blank"
          >
            <account.icon
              aria-hidden="true"
              class={['icon', ...(account.size ? [account.size] : [])]}
              icon={account.icon}
            />
          </b-navbar-item>
        ))}
    </b-navbar>
  ),
}
</script>
