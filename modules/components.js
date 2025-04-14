import { addComponent, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  setup: () =>
    addComponent({
      filePath: '@dword-design/legal-notice',
      name: 'AppLegalNotice',
    }),
});
