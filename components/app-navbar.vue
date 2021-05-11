<script>
import { map } from '@dword-design/functions'
import MdiDevTo from '@mdi/svg/svg/dev-to.svg'
import MdiFacebook from '@mdi/svg/svg/facebook.svg'
import MdiGitHub from '@mdi/svg/svg/github.svg'
import MdiInstagram from '@mdi/svg/svg/instagram.svg'
import MdiNpm from '@mdi/svg/svg/npm.svg'
import MdiTwitter from '@mdi/svg/svg/twitter.svg'

import IconMedium from '@/assets/icon-medium.svg'
import { appName, appTitle } from '@/model/variables'

const accounts = [
  {
    icon: MdiGitHub,
    title: 'GitHub',
    url: 'https://github.com/dword-design',
  },
  {
    icon: MdiNpm,
    size: 'is-large',
    title: 'NPM',
    url: 'https://www.npmjs.com/~dword-design',
  },
  {
    icon: MdiDevTo,
    size: 'is-medium',
    title: 'DEV Community Profile',
    url: 'https://dev.to/dworddesign',
  },
  {
    icon: IconMedium,
    title: 'Medium',
    url: 'https://dworddesign.medium.com',
  },
  {
    icon: MdiTwitter,
    title: 'Twitter',
    url: 'https://twitter.com/seblandwehr',
  },
  {
    icon: MdiInstagram,
    title: 'Instagram',
    url: 'https://www.instagram.com/sebastian.landwehr',
  },
  {
    icon: MdiFacebook,
    title: 'Facebook',
    url: 'https://www.facebook.com/Sebastian-Landwehr-101161921820497',
  },
]

export default {
  functional: true,
  render: context => (
    <b-navbar
      {...context.data}
      class="has-shadow is-spaced"
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
      <b-navbar-item
        href={context.parent.$router.resolve({ name: 'blog' }).href}
        slot="end"
        tag="a"
      >
        Blog
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
      {/* <app-accounts /> */}
      {/* <b-navbar-item slot="end" tag="div">
        <app-accounts />
      </b-navbar-item> */}
    </b-navbar>
  ),
}
</script>
