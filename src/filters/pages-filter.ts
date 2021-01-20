import { EntityItems } from "../models/kirby/kirby-model";
import { Page } from "../models/kirby/page-model";
import { LanguageCode } from "../models/language-model";
import { createId } from "../transformer";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(pageById.name, pageById);
  eleventyConfig.addFilter(pagesByIds.name, pagesByIds);
  eleventyConfig.addFilter(urlForLanguage.name, urlForLanguage);
}

/**
 * Returns any page from the content folder, except for drafts
 * @category Filter
 */
export function pageById(
  pages: EntityItems<Page>,
  id: string,
  languageCode?: LanguageCode
): Page {
  let page;

  if (languageCode) {
    page = pages[createId(id, languageCode)];
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

/**
 * Returns list of pages by their ids
 * @category Filter
 */
export function pagesByIds(
  pages: EntityItems<Page>,
  ids: string[],
  languageCode?: LanguageCode
): Page[] {
  if (!pages || !ids) {
    return null;
  }

  return ids.map((id) => pageById(pages, id, languageCode));
}

/**
 * Builds the Url for a specific language
 * @category Filter
 */
export function urlForLanguage(page: Page, languageCode: LanguageCode): string {
  if (page.language === languageCode) {
    return page._permalink;
  }

  return page._translationIds[languageCode];
}
