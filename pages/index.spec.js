import { expect, test } from '@playwright/test';

const waitForStable = locator => locator.hover({ trial: true });

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.setViewportSize({ height: 875, width: 1400 });
  const privacySettingsModal = await page.locator('.modal-content');
  await waitForStable(privacySettingsModal);
  await expect(page).toHaveScreenshot();

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'privacy policy' })
    .click();

  const privacyPolicyModal = await page.locator(
    '.modal-content:has(h2:text("Privacy Policy"))',
  );

  await waitForStable(privacyPolicyModal);
  await expect(page).toHaveScreenshot();
  await page.mouse.click(10, 10);
  await privacyPolicyModal.waitFor({ state: 'hidden' });
  await expect(page).toHaveScreenshot();

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'Accept all cookies' })
    .click({ force: true });

  await privacySettingsModal.waitFor({ state: 'hidden' });
  await page.setViewportSize({ height: 5100, width: 1400 });
  const card = await page.waitForSelector('.card');
  await card.hover();
  // await waitForTransitionEnd(card);
  await expect(page).toHaveScreenshot();
});
