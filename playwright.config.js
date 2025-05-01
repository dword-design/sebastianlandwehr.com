import { defineConfig } from '@playwright/test';

export default defineConfig({
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  // globalSetup: './global-setup',
  // globalTeardown: './global-teardown',
  webServer: {
    command: 'base dev',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    url: 'http://localhost:3000',
  },
});
