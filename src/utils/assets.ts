import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Resolve caminhos relativos a /public em build-time (Node), pra saber se um
// arquivo de marca real já foi adicionado ou se ainda precisamos do placeholder.
// Isso evita ter que criar PNGs falsos ocupando o caminho reservado pro arquivo oficial.
const publicDir = fileURLToPath(new URL('../../public/', import.meta.url));

export function publicFileExists(relativePath: string): boolean {
  const clean = relativePath.replace(/^\/+/, '');
  return existsSync(`${publicDir}${clean}`);
}
