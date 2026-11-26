import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const source = join(dirname(decodeURIComponent(new URL(import.meta.url).pathname)), 'entry.png');
const output = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
mkdirSync(output, { recursive: true });
// Preserve the source bytes exactly on every run; no re-encoding or timestamps.
copyFileSync(source, join(output, 'entry.png'));
