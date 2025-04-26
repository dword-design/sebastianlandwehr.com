import { delay } from '@dword-design/functions';
import tester from '@dword-design/tester';
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt';
import { chromium } from 'playwright';

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000');
      await this.page.setViewportSize({ height: 875, width: 1400 });

      const privacySettingsModal = await this.page.locator('.modal-content');
      
      await privacySettingsModal.hover({ trial: true });

      expect(await this.page.screenshot()).toMatchImageSnapshot(this);

      await privacySettingsModal
        .getByRole('button', { name: 'privacy policy', exact: true })
        .click();

      const privacyPolicyModal = await this.page
        .locator('.modal-content:has(h2:text("Privacy Policy"))')
      await privacyPolicyModal.hover({ trial: true });

      expect(await this.page.screenshot()).toMatchImageSnapshot(this);

      await this.page.mouse.click(10, 10);
      await privacyPolicyModal.waitFor({ state: 'detached' });

      expect(await this.page.screenshot()).toMatchImageSnapshot(this);

      await this.page
        .getByRole('button', { name: 'Accept all cookies', exact: true })
        .click({ force: true });

      await this.page.waitForNavigation();
      await this.page.setViewportSize({ height: 5100, width: 1400 });
      const card = await this.page.waitForSelector('.card');
      await card.hover();
      await delay(500);

      expect(
        await this.page.screenshot({ fullPage: true }),
      ).toMatchImageSnapshot(this);
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
