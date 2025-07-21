import { addComponent, defineNuxtModule } from '@nuxt/kit';
import packageName from 'depcheck-package-name';

export default defineNuxtModule({
  setup: () => {
    addComponent({
      filePath: packageName`@dword-design/legal-notice`,
      name: 'AppLegalNotice',
    });

    addComponent({
      filePath: packageName`@dword-design/privacy-policy`,
      name: 'AppPrivacyPolicy',
    });
  },
});
