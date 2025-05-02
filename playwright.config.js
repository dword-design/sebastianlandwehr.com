import { defineConfig } from '@playwright/test';

export default defineConfig({
  snapshotPathTemplate:
    '{snapshotDir}/{testFileDir}/{testFileName}-snapshots/{arg}{-projectName}{ext}',
  
  retries: 3,
  webServer: {
    command: 'base dev',
    stdout: 'pipe',
    timeout: 120000,
    url: 'http://localhost:3000',
  },
});
