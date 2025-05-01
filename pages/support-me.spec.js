import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000/support-me');
  await page.setViewportSize({ height: 1, width: 1400 });
  const privacySettingsModal = await page.locator('.modal-content');

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'Accept all cookies' })
    .click({ force: true });

  await privacySettingsModal.waitFor({ state: 'hidden' });
  await expect(page).toHaveScreenshot({ fullPage: true });
});
