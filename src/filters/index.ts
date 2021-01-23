import pagesFilter from "./pages-filter";
import fieldsFilter from "./fields-filter";
import languageFilter from "./language-filter";
import filesFilter from "./files-filter";
import translationFilter from "./translations-filter";
import templatesFilter from "./templates-filter";
import pageFilter from "./page-filter";

/**
 * Init all available filters
 * @param {object} eleventyConfig Eleventy Configuration
 */
export default function addFilters(eleventyConfig) {
  pagesFilter(eleventyConfig);
  pageFilter(eleventyConfig);
  fieldsFilter(eleventyConfig);
  languageFilter(eleventyConfig);
  filesFilter(eleventyConfig);
  translationFilter(eleventyConfig);
  templatesFilter(eleventyConfig);
}
