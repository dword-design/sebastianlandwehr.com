<script>
import { map } from '@dword-design/functions'

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
            <b-icon
              aria-hidden="true"
              icon={account.icon}
              size={account.size}
            />
          </a>
        ))}
    </div>
  ),
}
</script>
