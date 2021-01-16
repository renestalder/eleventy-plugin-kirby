export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(t.name, t);
}

/**
 * Get translation for a specific key.
 * This currently does nothing and is only a placeholder for alter implementation.
 */
export function t(key, langugage) {
  return key;
}
