import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.locator('.card').first().hover();
  // await waitForTransitionEnd(card);
  await expect(page).toHaveScreenshot({ fullPage: true });
});
