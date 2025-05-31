import config from '@dword-design/eslint-config';
import { globalIgnores } from 'eslint/config';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  globalIgnores(['eslint.config.js']),
  config,
  {
    rules: {
      'import/no-unresolved': ['error', { ignore: ['#content'] }],
    },
  },
  {
    files: ['**/pages/**/*.{vue,js,ts}', 'server/api/**/*.{js,ts}'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
);