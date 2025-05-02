import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 3,

  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  webServer: {
    command: 'base dev',
    stdout: 'pipe',
    timeout: 120000,
    url: 'http://localhost:3000',
  },
});
