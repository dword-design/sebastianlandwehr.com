import nuxtMailUrl from '@/assets/projects/nuxt-mail.png';
import nuxtModernizrUrl from '@/assets/projects/nuxt-modernizr.png';
import nuxtRouteMetaUrl from '@/assets/projects/nuxt-route-meta.png';

export default [
  {
    description:
      'Adds email sending capability to a Nuxt.js app. Adds a server route, an injected variable, and uses nodemailer to send emails.',
    imageUrl: nuxtMailUrl,
    projectUrl: 'https://github.com/dword-design/nuxt-mail',
    title: 'nuxt-mail',
  },
  {
    description: 'Adds a Modernizr build to your Nuxt.js app.',
    imageUrl: nuxtModernizrUrl,
    projectUrl: 'https://github.com/dword-design/nuxt-modernizr',
    title: 'nuxt-modernizr',
  },
  {
    description: 'Adds Nuxt page data to route meta at build time.',
    imageUrl: nuxtRouteMetaUrl,
    projectUrl: 'https://github.com/dword-design/nuxt-route-meta',
    title: 'nuxt-route-meta',
  },
];
