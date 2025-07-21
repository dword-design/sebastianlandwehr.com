import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto(
    'http://localhost:3000/blog/sending-emails-with-nuxt-js-the-easy-way',
  );
  await expect(page).toHaveScreenshot({ fullPage: true });
});
