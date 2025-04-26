import fs from 'fs-extra';
import kill from 'tree-kill-promise';

export default async () => {
  const pidString = await fs.readFile('server-pid.txt', 'utf-8');
  const pid = parseInt(pidString, 10);
  await kill(pid);
};
