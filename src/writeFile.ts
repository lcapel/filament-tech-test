import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default function writeFile<T>(data: T, filename: string): void {
  const filePath = path.join(__dirname, './output', filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
