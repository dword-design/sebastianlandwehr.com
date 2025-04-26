import tester from '@dword-design/tester';
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt';
import { chromium } from 'playwright';

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000/support-me');
      await this.page.setViewportSize({ height: 1, width: 1400 });
      const privacySettingsModal = await this.page.locator('.modal-content');

      await privacySettingsModal
        .getByRole('button', { exact: true, name: 'Accept all cookies' })
        .click({ force: true });

      await privacySettingsModal.waitFor({ state: 'detached' });
      const screenshot = await this.page.screenshot({ fullPage: true });
      expect(screenshot).toMatchImageSnapshot(this);
    },
  },
  [
    testerPluginNuxt(),
    {
      async afterEach() {
        await this.browser.close();
      },
      async beforeEach() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
      },
    },
  ],
);
