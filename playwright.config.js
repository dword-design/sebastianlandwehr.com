import { defineConfig } from '@playwright/test';

export default defineConfig({
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',

  use: { trace: 'retain-on-failure' },
  webServer: {
    command: 'base dev',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    timeout: 120000,
    url: 'http://localhost:3000',
  },
});
