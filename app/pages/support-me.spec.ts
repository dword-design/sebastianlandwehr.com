import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000/support-me');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
