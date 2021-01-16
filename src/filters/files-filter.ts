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
export function file(kirby: Kirby, id: string): object {
  return kirby.entities.documents[id];
}

/**
 * Return image with given id
 * @category Filter
 */
export function image(kirby: Kirby, id: string): object {
  return kirby.entities.images[id];
}
