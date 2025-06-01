import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto(
    'http://localhost:3000/blog/sending-emails-with-nuxt-js-the-easy-way',
  );

  const privacySettingsModal = page.locator('.modal-content');

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'Accept all cookies' })
    .click();

  await expect(privacySettingsModal).toBeHidden();
  await expect(page).toHaveScreenshot({ fullPage: true });
});
