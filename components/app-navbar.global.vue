<script>
import { map } from '@dword-design/functions'

import Logo from '@/assets/logo.svg'
import { appName } from '@/model/variables'

const accounts = [
  {
    icon: 'github',
    title: 'GitHub',
    url: 'https://github.com/dword-design',
  },
  {
    icon: 'npm',
    size: 'is-large',
    title: 'NPM',
    url: 'https://www.npmjs.com/~dword-design',
  },
  {
    icon: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/DwordSebastian',
  },
  {
    icon: 'xing',
    title: 'Xing',
    url: 'https://www.xing.com/profile/Sebastian_Landwehr3',
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
        class="is-size-5"
        slot="brand"
        tag="nuxt-server-link"
        to={{ name: 'index' }}
      >
        <Logo aria-hidden="true" style={{ width: '20rem' }} />
        <span class="is-sr-only">{appName}</span>
      </b-navbar-item>
      <b-navbar-item slot="end" tag="div">
        <div class="links is-wide">
          {accounts
            |> map(account => (
              <a
                aria-label={account.title}
                class="is-text"
                href={account.url}
                target="_blank"
              >
                <b-icon
                  aria-hidden="true"
                  icon={account.icon}
                  size={account.size}
                />
              </a>
            ))}
        </div>
      </b-navbar-item>
    </b-navbar>
  ),
}
</script>
