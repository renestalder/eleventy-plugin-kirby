import { EntityItems, Kirby } from "../models/kirby/kirby-model";
import { Page } from "../models/kirby/page-model";
import { LanguageCode } from "../models/language-model";
import { createId } from "../transformer";
import { log } from "../util/logger";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(pageById.name, pageById);
  eleventyConfig.addFilter(pagesByIds.name, pagesByIds);
  eleventyConfig.addFilter(urlForLanguage.name, urlForLanguage);
  eleventyConfig.addFilter(sortBy.name, sortBy);
  eleventyConfig.addFilter(findBy.name, findBy);
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

  if (!page._translationIds || page._translationIds.length === 0) {
    return page._permalink;
  }

  return page._translationIds[languageCode];
}

/**
 * Sort by given field. Only supports one level of sorting e.g. "date", "desc"
 * in comparison to the infinite level sorting in Kirby e.g. "date, "desc", "title", "asc"
 * @category Filter
 * @example liquid.js
 * ```html
 * {{ people | sortBy: "lastname", "asc" }}
 * ```
 * @param {Object[]} list Array of objects
 * @param {string[]} args Arguments
 * @return {string[]}
 */
export function sortBy(list: Object[], ...args: string[]) {
  const array = [...list];
  const field = args[0];
  const direction = args[1] || "asc";

  if (!["asc", "desc"].includes(direction)) {
    log(`${direction} is not a valid sort direction for sortBy filter`);
    return list;
  }

  return array.sort((a, b) => {
    if (a[field] && b[field]) {
      if (a[field] > b[field]) {
        return direction === "asc" ? 1 : -1;
      }

      if (a[field] < b[field]) {
        return direction === "asc" ? -1 : 1;
      }
    }

    return 0;
  });
}

/**
 * Find a single element by an attribute and its value
 * @category Filter
 * @example liquid.js
 * ```html
 * {{ kirby.entities.pages | findBy: "template", "contact" }}
 * ```
 * @param {string} attribute
 * @param {string} value
 * @return {Object[]}
 */
export function findBy<T = Kirby["entities"]["pages"]>(
  pages: T,
  attribute: string,
  value: string,
  languageCode?: LanguageCode
): T {
  return Object.values(pages)
    .filter((page) => (languageCode ? page.language === languageCode : true))
    .find((page) => page[attribute] === value);
}
