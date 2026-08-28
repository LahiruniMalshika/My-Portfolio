import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "src/assets/images");

// [source path relative to repo root, output filename, max width, quality]
const jobs = [
  // Hero / About portrait
  ["my_images/lahiruni.jpg", "portrait.webp", 900, 80],

  // Anothershots (Photography platform) project screenshots
  ["images/sp4.jpg", "anothershots-1.webp", 1200, 78],
  ["images/sp2.jpg", "anothershots-2.webp", 1200, 78],
  ["images/sp3.jpg", "anothershots-3.webp", 1200, 78],
  ["images/sp5.jpg", "anothershots-4.webp", 1200, 78],
  ["images/sp6.jpg", "anothershots-5.webp", 1200, 78],
  ["images/sp7.jpg", "anothershots-6.webp", 1200, 78],
  ["images/sp8.jpg", "anothershots-7.webp", 1200, 78],

  // Multi-Colour Wall Art Machine
  ["images/hp.jpeg", "wall-art-1.webp", 1200, 78],
  ["images/hp 2.jpeg", "wall-art-2.webp", 1200, 78],
  ["images/hp3.jpg", "wall-art-3.webp", 1200, 78],

  // My Portfolio project card
  ["images/portfolio ss.png", "portfolio-ss.webp", 1200, 78],

  // Image Search Application
  ["images/image search.png", "image-search.webp", 1200, 78],

  // Blog thumbnails
  ["images/Screenshot 2024-09-20 204948.png", "blog-socketio.webp", 800, 78],
  ["images/blog01.jpg", "blog-enterprise.webp", 800, 78],
];

await mkdir(OUT_DIR, { recursive: true });

for (const [src, outName, width, quality] of jobs) {
  const srcPath = path.join(ROOT, src);
  const outPath = path.join(OUT_DIR, outName);
  const before = (await sharp(srcPath).metadata()).size ?? 0;
  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outPath);
  const { size: after } = await sharp(outPath).metadata();
  console.log(
    `${src} -> src/assets/images/${outName} (${width}w, q${quality})`
  );
}

console.log("\nDone.");
