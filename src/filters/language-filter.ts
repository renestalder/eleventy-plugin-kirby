import { Language, LanguageCode } from "../models/language-model";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(languageByCode.name, languageByCode);
  eleventyConfig.addFilter(languagesByCodes.name, languagesByCodes);
}

/**
 * Return language information for given code
 * @category Filter
 * @example
 * **liquid**:
 * ```html
 * {% assign lang = data.language | languageByCode %}
 * {{ lang.name }}
 * ```
 */
export function languageByCode(code: LanguageCode): Language {
  if (!code) {
    return null;
  }

  // @ts-ignore
  const name = new Intl.DisplayNames([code], { type: "language" }).of(code);

  return {
    name,
    code,
  };
}

/**
 * Returns language information for an array of language codes
 * @category Filter
 * @example
 * **liquid**:
 * ```html
 * {% assign languages = kirby.languages | languagesByCodes %}
 * {% for lang in languages %}
 *   {{ lang.name }}
 * {% endfor %}
 * ```
 */
export function languagesByCodes(languageCodes = []): Language[] {
  return (Array.isArray(languageCodes)
    ? languageCodes
    : Object.values(languageCodes)
  ).map((code) => languageByCode(code));
}
