import { execaCommand } from 'execa';
import portReady from 'port-ready';

import pid from './global-pid.js';

export default async () => {
  await execaCommand('nuxt-babel build', { stdio: 'inherit' });
  const nuxt = execaCommand('base start', { stderr: 'inherit' });
  await portReady(3000);
  pid.value = nuxt.pid;
};
