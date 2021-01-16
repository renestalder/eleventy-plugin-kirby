import { createId } from "../transformer";

export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(pageById.name, pageById);
  eleventyConfig.addFilter(pagesByIds.name, pagesByIds);
  eleventyConfig.addFilter(urlForLanguage.name, urlForLanguage);
}

export function pageById(pages, id, languageCode) {
  let page;

  if (languageCode) {
    page = pages[createId({ id }, languageCode)];
  } else {
    page = pages[`${id}`];
  }

  if (!page) {
    console.info(
      `getPageById([pages], ${id}, ${languageCode}): No page found.`
    );
  }

  return page;
}

export function pagesByIds(pages, ids, languageCode) {
  if (!pages || !ids) {
    return null;
  }

  return ids.map((id) => pageById(pages, id, languageCode));
}

/**
 * Builds the Url for a specific language
 */
export function urlForLanguage(page, languageCode) {
  if (page.language === languageCode) {
    return page._permalink;
  }

  return page._translationIds[languageCode];
}
