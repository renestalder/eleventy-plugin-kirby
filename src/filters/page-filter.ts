import { Kirby } from "../models/kirby/kirby-model";
import { Page } from "../models/kirby/page-model";
import { createId } from "../transformer";

/**
 * @internal
 */
export default function addFilter(eleventyConfig) {
  eleventyConfig.addFilter(templateSiblings.name, templateSiblings);
}

/**
 * Returns siblings with the same template
 * @example
 * **liquid**:
 * ```html
 * {% assign siblings = kirby | templateSiblings: data, false %}
 * {% for pageItem in siblings %}
 *   {{ pageItem.title }}
 * {% endfor %}
 * ```
 * @param kirby Kirby data object
 * @param currentPage The current page
 * @param [self] If set to false, the current page is excluded
 * @return List of pages
 */
export function templateSiblings(
  kirby: Kirby,
  currentPage: Page,
  self = true,
): Page[] {
  if (!currentPage?.parent?.uuid) {
    if (self) {
      return [];
    } else {
      return [currentPage];
    }
  }

  const parentId = createId(currentPage.parent.uuid, currentPage.language);
  const parent = kirby.entities.pages[parentId];

  const siblings =
    parent?.children?.map((childPageId) => kirby.entities.pages[childPageId]) ||
    [];

  const siblingsOfTemplate = siblings.filter(
    (page) => page.template === currentPage.template,
  );

  if (self) {
    return siblingsOfTemplate;
  } else {
    return siblingsOfTemplate.filter((page) => page.uuid !== currentPage.uuid);
  }
}
