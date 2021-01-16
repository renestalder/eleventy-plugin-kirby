export default function addFilters(eleventyConfig) {
  eleventyConfig.addFilter(toBlocks.name, toBlocks);
}

export function toBlocks(blocksField) {
  try {
    return JSON.parse(blocksField);
  } catch (e) {
    console.log(e);
  }

  return [];
}
