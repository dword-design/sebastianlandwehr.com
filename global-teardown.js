import kill from 'tree-kill-promise';

import pid from './global-pid.js';

export default () => kill(pid.value);
