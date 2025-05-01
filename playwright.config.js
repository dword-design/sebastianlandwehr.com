import { defineConfig } from '@playwright/test';
import { isCI } from 'std-env';

export default defineConfig({
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',

  use: { trace: 'retain-on-failure' },
  webServer: {
    command: 'NODE_ENV=development nuxt dev',
    // reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    timeout: 120000,
    url: 'http://localhost:3000',
  },
  workers: isCI ? 1 : undefined,
});
