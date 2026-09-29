// Génère l'image de prévisualisation (réseaux sociaux) et les favicons.
import sharp from 'sharp';
import fs from 'node:fs';

// --- Aperçu réseaux sociaux : 1200 x 630 ---
const W = 1200, H = 630;
const base = await sharp('_sources/photos/cambodge/06.jpg').resize(W, H, { fit: 'cover', position: 'centre' }).toBuffer();
const overlay = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0.35" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="64" y="500" font-family="Georgia, 'Times New Roman', serif" font-size="92" fill="#fff">Jean-Yves <tspan font-style="italic">Caillot</tspan></text>
  <text x="68" y="556" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="5" fill="#fff" fill-opacity="0.88">PHOTOGRAPHE · ARGENTIQUE NOIR &amp; BLANC</text>
  <text x="${W - 64}" y="${H - 34}" text-anchor="end" font-family="Georgia, serif" font-size="20" font-style="italic" fill="#fff" fill-opacity="0.6">© Jean-Yves Caillot</text>
</svg>`);
await sharp(base).composite([{ input: overlay }]).jpeg({ quality: 82, mozjpeg: true }).toFile('public/og-image.jpg');

// --- Favicons ---
const svg = fs.readFileSync('public/favicon.svg');
await sharp(svg, { density: 384 }).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(svg, { density: 384 }).resize(192, 192).png().toFile('public/icon-192.png');
await sharp(svg, { density: 384 }).resize(512, 512).png().toFile('public/icon-512.png');
await sharp(svg, { density: 384 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('assets ok');
