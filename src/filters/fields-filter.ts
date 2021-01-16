/**
 * @internal
 */
export default function addFilters(eleventyConfig) {
  eleventyConfig.addFilter(toBlocks.name, toBlocks);
}

/**
 * @category Filter
 */
export function toBlocks(blocksField) {
  try {
    return JSON.parse(blocksField);
  } catch (e) {
    console.log(e);
  }

  return [];
}
