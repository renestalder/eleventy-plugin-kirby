export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(languageByCode.name, languageByCode);
  eleventyConfig.addFilter(languagesByCodes.name, languagesByCodes);
}

export function languageByCode(code) {
  if (!code) {
    return "";
  }

  return {
    name: new (Intl as any).DisplayNames([code], { type: "language" }).of(code),
    code,
  };
}

export function languagesByCodes(languageCodes = []) {
  return (Array.isArray(languageCodes)
    ? languageCodes
    : Object.values(languageCodes)
  ).map((code) => languageByCode(code));
}
