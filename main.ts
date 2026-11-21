import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORKING_JOKE = "I asked my agent for a quick fix; it shipped a migration, a monorepo, and a philosophy.";

const outputDirs = new Set(['/output', process.env.MAKEFUN_OUTPUT_DIR].filter((dir): dir is string => Boolean(dir)));
for (const dir of outputDirs) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'entry.txt'), WORKING_JOKE, 'utf8');
}

console.log(`Wrote entry.txt: ${Array.from(WORKING_JOKE).length} chars`);
