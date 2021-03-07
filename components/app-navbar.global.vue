<script>
import { map } from '@dword-design/functions'
import MdiDevTo from '@mdi/svg/svg/dev-to.svg'
import MdiGitHub from '@mdi/svg/svg/github.svg'
import MdiInstagram from '@mdi/svg/svg/instagram.svg'
import MdiNpm from '@mdi/svg/svg/npm.svg'
import MdiTwitter from '@mdi/svg/svg/twitter.svg'

import Logo from '@/assets/logo.svg'
import { appName } from '@/model/variables'

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
    icon: MdiTwitter,
    title: 'Twitter',
    url: 'https://twitter.com/DwordDesign',
  },
  {
    icon: MdiInstagram,
    title: 'Instagram',
    url: 'https://instagram.com/dword.design',
  },
  {
    icon: MdiDevTo,
    size: 'is-medium',
    title: 'DEV Community Profile',
    url: 'https://dev.to/dworddesign',
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
      <b-navbar-item
        aria-label={appName}
        class="is-size-5"
        slot="brand"
        tag="nuxt-server-link"
        to={{ name: 'index' }}
      >
        <Logo aria-hidden="true" style={{ maxWidth: '24rem', width: '100%' }} />
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
