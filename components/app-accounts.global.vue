<script>
import { map } from '@dword-design/functions'
import MdiDevTo from '@mdi/svg/svg/dev-to.svg'
import MdiGitHub from '@mdi/svg/svg/github.svg'
import MdiInstagram from '@mdi/svg/svg/instagram.svg'
import MdiNpm from '@mdi/svg/svg/npm.svg'
import MdiTwitter from '@mdi/svg/svg/twitter.svg'
import MdiXing from '@mdi/svg/svg/xing.svg'

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
  {
    icon: MdiXing,
    title: 'Xing',
    url: 'https://www.xing.com/profile/Sebastian_Landwehr3',
  },
]

export default {
  functional: true,
  render: () => (
    <div class="links is-wide">
      {accounts
        |> map(account => (
          <a
            aria-label={account.title}
            class="is-text"
            href={account.url}
            target="_blank"
          >
            <account.icon
              aria-hidden="true"
              class={['icon', ...(account.size ? [account.size] : [])]}
              icon={account.icon}
            />
          </a>
        ))}
    </div>
  ),
}
</script>
