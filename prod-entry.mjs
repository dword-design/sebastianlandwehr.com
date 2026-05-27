import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const { stdout: envVariablesString } = await execAsync('dotenv-json-extended get');
const envVariables = JSON.parse(envVariablesString);

Object.assign(process.env, envVariables);

await import('./.output/server/index.mjs');