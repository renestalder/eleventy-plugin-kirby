//  Eleventy data file to fetch content from Kirby CMS
//  This script gets all pages including their content via Kirby CMS' official API
//  and provides them via a collection called "kirby" (based on the file name of this script)
//
//  Requires:
//  - kql plugin for Kirby CMS to be installed
//  - A user with reading access to the panel setup
//  - An .env config with the API url and user credentials
// const fetch = require("node-fetch");
import pagesFilter from "./filters/pages-filter";
import fieldsFilter from "./filters/fields-filter";
import languageFilter from "./filters/language-filter";
import filesFilter from "./filters/files-filter";
import translationFilter from "./filters/translations-filter";
import templatesFilter from "./filters/templates-filter";

/**
 * @example
 * ```js
 * require("dotenv").config();
 * const eleventyPluginKirby = require("eleventy-plugin-kirby");
 *
 * module.exports = function (eleventyConfig) {
 *   eleventyConfig.addPlugin(eleventyPluginKirby);
 * };
 * ```
 */
function main(eleventyConfig) {
  if (eleventyConfig) {
    pagesFilter(eleventyConfig);
    fieldsFilter(eleventyConfig);
    languageFilter(eleventyConfig);
    filesFilter(eleventyConfig);
    translationFilter(eleventyConfig);
    templatesFilter(eleventyConfig);
  }
}

export = main;
