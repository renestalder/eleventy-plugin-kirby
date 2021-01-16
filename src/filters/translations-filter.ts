import { LanguageCode } from "../models/language-model";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(t.name, t);
}

/**
 * Get translation for a specific key.
 * This currently does nothing and is only a placeholder for alter implementation.
 * @category Filter
 * @todo Implement functionality
 * @example
 * ```html
 * {{ "closeActionLabel" | t: data.language }}
 * ```
 */
export function t(key: string, langugage: LanguageCode): string {
  return key;
}
