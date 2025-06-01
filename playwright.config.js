import { defineConfig } from '@playwright/test';

export default defineConfig({
  globalSetup: './global-setup.js',
  globalTeardown: './global-teardown.js',
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  timeout: 60_000,
  use: { viewport: { height: 875, width: 1400 } },
});
