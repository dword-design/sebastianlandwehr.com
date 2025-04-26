import { delay } from '@dword-design/functions';
import tester from '@dword-design/tester';
import testerPluginNuxt from '@dword-design/tester-plugin-nuxt';
import { chromium } from 'playwright';

export default tester(
  {
    async init() {
      await this.page.goto('http://localhost:3000');
      await this.page.setViewportSize({ height: 875, width: 1400 });

      const privacyPolicyButton = await this.page.waitForFunction(() =>
        [...document.querySelectorAll('.modal button')].find(
          el => el.innerText === 'privacy policy',
        ),
      );

      await delay(150);
      expect(await this.page.screenshot()).toMatchImageSnapshot(this);
      await privacyPolicyButton.click();
      await delay(300);
      expect(await this.page.screenshot()).toMatchImageSnapshot(this);
      await this.page.mouse.click(10, 10);
      await delay(150);
      expect(await this.page.screenshot()).toMatchImageSnapshot(this);

      await this.page
        .getByRole('button', { name: 'Accept all cookies' })
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
