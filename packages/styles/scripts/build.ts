import { browserslistToTargets, transform } from 'lightningcss';
import browserslist from 'browserslist';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

const cssFiles = await glob('src/**/*.css');

for (const file of cssFiles) {
  const css = await fs.readFile(file, 'utf8');

  const result = transform({
    filename: file,
    code: Buffer.from(css),
    minify: true,
    targets: browserslistToTargets(browserslist('>= 0.25%'))
  });

  const outputPath = file.replace('src/', 'dist/');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, result.code);
}
