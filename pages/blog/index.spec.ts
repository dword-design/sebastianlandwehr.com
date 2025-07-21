import { expect, test } from '@playwright/test';

test('init', async ({ page }) => {
  await page.goto('http://localhost:3000/blog');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
