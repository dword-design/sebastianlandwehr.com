import { expect, test } from '@playwright/test';

test.only('init', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
