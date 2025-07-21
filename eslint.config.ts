import config from '@dword-design/eslint-config';
import { globalIgnores } from 'eslint/config';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  globalIgnores(['eslint.config.ts', 'ecosystem.json']),
  config,
{
  rules: {
    'import-x/no-unresolved': ['error', { ignore: ['#content'] }],
  },
},
  {
    files: ['**/pages/**/*.{vue,ts}', 'server/api/**/*.ts'],
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
);