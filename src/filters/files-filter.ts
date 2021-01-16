export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(file.name, file);
  eleventyConfig.addFulter(image.name, image);
}

export function file(site, id) {
  return site.entities.documents[id];
}

export function image(site, id) {
  return site.entities.images[id];
}
