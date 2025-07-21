import kill from 'tree-kill-promise';

import pid from './global-pid';

export default () => kill(pid.value);
