import { expect, test } from '@playwright/test';

const waitForStable = locator => locator.hover({ trial: true });

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const privacySettingsModal = page.locator('.modal-content');
  await waitForStable(privacySettingsModal);
  await expect(page).toHaveScreenshot();

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'privacy policy' })
    .click();

  const privacyPolicyModal = page.locator(
    '.modal-content:has(h2:text("Privacy Policy"))',
  );

  await waitForStable(privacyPolicyModal);
  await expect(page).toHaveScreenshot();
  await page.mouse.click(10, 10);
  await expect(privacyPolicyModal).toBeHidden();
  await expect(page).toHaveScreenshot();

  await privacySettingsModal
    .getByRole('button', { exact: true, name: 'Accept all cookies' })
    .click();

  await expect(privacySettingsModal).toBeHidden();
  await page.locator('.card').first().hover();
  // await waitForTransitionEnd(card);
  await expect(page).toHaveScreenshot({ fullPage: true });
});
