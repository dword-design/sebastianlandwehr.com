import { execaCommand } from 'execa';
import fs from 'fs-extra';
import nuxtDevReady from 'nuxt-dev-ready';

export default async () => {
  const nuxt = execaCommand('base dev', { stdio: 'inherit' });
  await fs.outputFile('server-pid.txt', nuxt.pid.toString());
  await nuxtDevReady();
};
