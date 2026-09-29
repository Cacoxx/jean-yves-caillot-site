// Génère les images du site à partir de _sources/photos :
//  - grande version (1600 px max, WebP) avec filigrane discret
//  - vignette (800 px max, WebP)
// Les originaux haute définition ne sont JAMAIS publiés.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = '_sources/photos';
const OUT = 'public/img';
const WATERMARK = '© Jean-Yves Caillot';

function watermarkSvg(w, h) {
  const size = Math.round(Math.max(18, Math.min(w, h) * 0.045));
  const y = Math.round(h * 0.86);
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <style>text{font-family:Georgia,'Times New Roman',serif;font-size:${size}px;font-style:italic;letter-spacing:1px}</style>
    <text x="${w / 2 + 1}" y="${y + 1}" text-anchor="middle" fill="#000" fill-opacity="0.22">${WATERMARK}</text>
    <text x="${w / 2}" y="${y}" text-anchor="middle" fill="#fff" fill-opacity="0.34">${WATERMARK}</text>
  </svg>`);
}

async function make(src, dest, { long = 1600, mark = true, thumb = 800 } = {}) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  let img = sharp(src).rotate().resize({ width: long, height: long, fit: 'inside', withoutEnlargement: true });
  const buf = await img.toBuffer({ resolveWithObject: true });
  let pipeline = sharp(buf.data);
  if (mark) pipeline = pipeline.composite([{ input: watermarkSvg(buf.info.width, buf.info.height) }]);
  const out = dest.replace(/\.jpg$/, '.webp');
  const full = await pipeline.webp({ quality: 72, effort: 5 }).toBuffer({ resolveWithObject: true });
  fs.writeFileSync(out, full.data);
  if (thumb === 800) {
    await sharp(full.data).resize({ width: 240, height: 240, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 68, effort: 5 }).toFile(out.replace(/\.webp$/, '-s.webp'));
  }
  if (thumb) {
    await sharp(full.data).resize({ width: thumb, height: thumb, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 70, effort: 5 }).toFile(out.replace(/\.webp$/, '-t.webp'));
  }
  return full.info;
}

fs.rmSync(OUT, { recursive: true, force: true });
const dims = {};
for (const dir of fs.readdirSync(SRC)) {
  const files = fs.readdirSync(path.join(SRC, dir)).filter((f) => f.endsWith('.jpg'));
  for (const f of files) {
    const src = path.join(SRC, dir, f);
    const key = `${dir}/${f}`;
    let info;
    if (dir === 'extra' && f === 'portrait.jpg') info = await make(src, path.join(OUT, key), { long: 900, mark: false, thumb: 0 });
    else if (dir === 'extra' && f.startsWith('expo-')) info = await make(src, path.join(OUT, key), { long: 1100, mark: false, thumb: 500 });
    else info = await make(src, path.join(OUT, key));
    dims[key] = [info.width, info.height];
  }
  console.log('ok', dir, files.length);
}
fs.writeFileSync('src/data/dims.json', JSON.stringify(dims, null, 1));
