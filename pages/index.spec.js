import { expect, test } from '@playwright/test';

const waitForStable = locator => locator.hover({ trial: true });

const waitForTransitionEnd = (locator, timeout = 5000) =>
  locator.evaluate((el, _timeout) => {
    const isTransitioning = element => {
      const computedStyle = window.getComputedStyle(element);
      const duration = computedStyle.transitionDuration;
      const delay = computedStyle.transitionDelay;
      const durations = duration.split(',').map(d => parseFloat(d) || 0);
      const delays = delay.split(',').map(d => parseFloat(d) || 0);

      const maxDuration = Math.max(
        ...durations.map((d, i) => d + (delays[i] || 0)),
      );

      return maxDuration > 0;
    };

    return new Promise(resolve => {
      if (!isTransitioning(el)) {
        resolve();
        return;
      }

      const handler = () => {
        el.removeEventListener('transitionend', handler);
        resolve();
      };

      el.addEventListener('transitionend', handler);

      // Safety timeout in case transitionend doesn't fire
      setTimeout(() => {
        el.removeEventListener('transitionend', handler);
        resolve();
      }, _timeout);
    });
  }, timeout);

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
    '.modal-content:has(h2:text("Privacy Policyfoo"))',
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
  await waitForTransitionEnd(card);
  await expect(page).toHaveScreenshot();
});
