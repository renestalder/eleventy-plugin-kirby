import { dataNormalize } from "../transformer";
import { log } from "../logger";
import * as fs from "fs";
import * as path from "path";
import deepmerge from "deepmerge";
import { PluginOptions } from "../models/plugin-options-model";
import { getData, loadQueryFromFile } from "../util";

// @ts-ignore
import defaultLanguagesQuery from "../kql/get-languages.json";

// @ts-ignore
import defaultPagesQuery from "../kql/get-pages.json";

const defaultOptions: PluginOptions<Object> = {
  languagesQuery: defaultLanguagesQuery,
  pagesQuery: defaultPagesQuery,
  dataLog: false,
};

/**
 * Returns all pages in all languages from Kirby
 * @category Queries
 * @example
 *
 * **_data/kirby.js**:
 * ```js
 * const { getAll } = require("eleventy-plugin-kirby");
 *
 * module.exports = async function () {
 *   const data = await getAll();
 *   return data;
 * };
 * ```
 * **pages.liquid**:
 * ```html
 * ---
 * pagination:
 *     data: kirby.entities.pages
 *     size: 1
 *     alias: data
 *     resolve: values
 *     addAllPagesToCollections: true
 * permalink: "{{ data._permalink }}/index.html"
 * tags: "data"
 * ---
 * <h1>{{data.title}}</h1>
 * ```
 * @returns Object of the API result
 */
export async function getAll(opts: Partial<PluginOptions<string>> = {}) {
  opts = { ...opts, _defaults: defaultOptions };

  log(`Querying languages via ${opts.languagesQuery}`);
  const languages = await getData(
    opts.languagesQuery
      ? deepmerge(
          opts._defaults.languagesQuery,
          loadQueryFromFile(opts.languagesQuery)
        )
      : opts._defaults.languagesQuery
  );

  // Create multiple queryies per language as languages are retrieved by changing HTTP header
  log(`Querying pages via ${opts.pagesQuery}`);
  const baseQuery = opts.pagesQuery
    ? deepmerge(opts._defaults.pagesQuery, loadQueryFromFile(opts.pagesQuery))
    : opts._defaults.languagesQuery;

  log(`Languages: ${languages}`);

  let requests;
  if (languages && languages.length > 0) {
    // Get data per language
    requests = languages.map(async (code) =>
      getData(baseQuery, { "X-Language": code })
    );
  } else {
    // Get data once
    requests = [getData(baseQuery)];
  }

  const pages = await Promise.all(requests);
  const db = dataNormalize(pages, { languages });

  if (opts.dataLog) {
    try {
      fs.writeFileSync(
        `${process.cwd()}/.eleventy-plugin-kirby-data-log.json`,
        JSON.stringify(db, null, 2),
        "utf8"
      );
    } catch (e) {
      console.error(`Error writing Kirby data log file: ${e}`);
    }
  }

  return db;
}
