import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup',
  globalTeardown: './global-teardown',
});
