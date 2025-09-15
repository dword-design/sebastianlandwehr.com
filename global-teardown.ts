import kill from 'tree-kill-promise';

import pid from './global-pid';

export default async () => {
  if (!pid.value) {
    return;
  }

  await kill(pid.value);
};
