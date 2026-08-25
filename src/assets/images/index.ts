import anothershots1 from "./anothershots-1.webp";
import anothershots2 from "./anothershots-2.webp";
import anothershots3 from "./anothershots-3.webp";
import anothershots4 from "./anothershots-4.webp";
import anothershots5 from "./anothershots-5.webp";
import anothershots6 from "./anothershots-6.webp";
import anothershots7 from "./anothershots-7.webp";
import blogEnterprise from "./blog-enterprise.webp";
import blogSocketio from "./blog-socketio.webp";
import imageSearch from "./image-search.webp";
import portfolioSs from "./portfolio-ss.webp";
import portrait from "./portrait.webp";
import wallArt1 from "./wall-art-1.webp";
import wallArt2 from "./wall-art-2.webp";
import wallArt3 from "./wall-art-3.webp";

export const images = {
  portrait,
  "anothershots-1": anothershots1,
  "anothershots-2": anothershots2,
  "anothershots-3": anothershots3,
  "anothershots-4": anothershots4,
  "anothershots-5": anothershots5,
  "anothershots-6": anothershots6,
  "anothershots-7": anothershots7,
  "wall-art-1": wallArt1,
  "wall-art-2": wallArt2,
  "wall-art-3": wallArt3,
  "portfolio-ss": portfolioSs,
  "image-search": imageSearch,
  "blog-socketio": blogSocketio,
  "blog-enterprise": blogEnterprise,
} as const;

export type ImageKey = keyof typeof images;
