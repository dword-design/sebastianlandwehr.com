import buyMeACoffeeImageUrl from '@/assets/buymeacoffee.svg?url'
import githubSponsorsImageUrl from '@/assets/github-sponsors.svg?url'
import patreonImageUrl from '@/static/images/patreon.svg?url'
import payPalImageUrl from '@/static/images/paypal.svg?url'

export default [
  {
    description:
      'First of all, GitHub has its very own donation system called GitHub Sponsors where you can support developers regularly.',
    imageMaxWidth: '6rem',
    imageUrl: githubSponsorsImageUrl,
    title: 'Github Sponsors',
    url: 'https://github.com/sponsors/dword-design',
  },
  {
    description: 'A great platform for quick one-time donations.',
    imageUrl: buyMeACoffeeImageUrl,
    title: 'Buy Me a Coffee',
    url: 'https://www.buymeacoffee.com/dword',
  },
  {
    description: 'Also for one time donations if you are using PayPal.',
    imageUrl: payPalImageUrl,
    title: 'PayPal',
    url: 'https://paypal.me/SebastianLandwehr',
  },
  {
    description:
      'Here you can support me regularly, which is great so I can steadily work on projects.',
    imageUrl: patreonImageUrl,
    title: 'Patreon',
    url: 'https://patreon.com/dworddesign',
  },
]
