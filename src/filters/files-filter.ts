import { Kirby } from "../models/kirby/kirby-model";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(file.name, file);
  eleventyConfig.addFilter(image.name, image);
}

/**
 * Return file with given id
 * @category Filter
 */
export function file(kirby: Kirby, uuid: string): object {
  if (!uuid.startsWith("file://")) {
    return fileById(kirby, uuid);
  }

  return kirby.entities.documents[uuid];
}

/**
 * Return image with given id
 * @category Filter
 */
export function image(kirby: Kirby, uuid: string): object {
  if (!uuid.startsWith("file://")) {
    return imageById(kirby, uuid);
  }

  return kirby.entities.images[uuid];
}

/**
 * Internal only fallback function for legacy content from older Kirby versions without UUID
 */
function fileById(kirby: Kirby, id: string): object {
  return Object.values(kirby.entities.documents).find(
    (file) => file?.id === id,
  );
}

/**
 * Internal only fallback function for legacy content from older Kirby versions without UUID
 */
function imageById(kirby: Kirby, id: string): object {
  return Object.values(kirby.entities.images).find((image) => image?.id === id);
}
