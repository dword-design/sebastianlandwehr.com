import { expect, test } from '@playwright/test';

test.only('init', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('div.foo')).toHaveText('Hi');
  await expect(page.locator('div.foo')).toHaveCSS('line-height', '30.6px');
  await expect(page).toHaveScreenshot({ fullPage: true });
});
