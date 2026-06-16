import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id_here";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlFor = (source: Image) => {
  return imageBuilder.image(source);
};
