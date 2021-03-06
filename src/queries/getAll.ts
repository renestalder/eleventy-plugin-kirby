import { dataNormalize } from "../transformer";
import { log, logFs } from "../util/logger";
import * as fs from "fs";
import deepmerge from "deepmerge";
import { PluginSettings } from "../models/plugin-options-model";
import { getData } from "../util/api";
import { loadQueryFromFile } from "../util/queries";

// @ts-ignore
import defaultLanguagesQuery from "../kql/get-languages.json";

// @ts-ignore
import defaultPagesQuery from "../kql/get-pages.json";
import { getLanguages } from "./getLanguages";

const defaultOptions: PluginSettings<Object> = {
  languagesQuery: defaultLanguagesQuery,
  pagesQuery: defaultPagesQuery,
  debug: false,
  omitLanguages: [],
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
export async function getAll(opts: Partial<PluginSettings> = {}) {
  opts = { ...opts, _defaults: defaultOptions };
  let baseQuery = opts._defaults.pagesQuery;

  if (opts.pagesQuery) {
    const userDefinedPagesQuery = loadQueryFromFile(opts.pagesQuery);
    baseQuery = deepmerge(baseQuery, userDefinedPagesQuery);
  }

  const languages = await getLanguages(opts);

  let requests = [getData(baseQuery)];
  let data;

  log(`Get all data`);
  logFs("base-query", baseQuery, opts);
  if (languages && languages.length > 0) {
    // Get data per language
    // Create multiple queryies per language as languages are retrieved by changing HTTP header
    // There is currently no other way around this.
    requests = languages.map(async (code) =>
      getData(baseQuery, { "X-Language": code })
    );

    data = await Promise.all(requests);
  } else {
    data = await getData(baseQuery);
  }

  if (!data || data.length === 0) {
    log(`...No data found.`);
  } else {
    logFs("base-result", data, opts);
    const db = dataNormalize(data, { languages });

    logFs("kirby", db, opts);
    return db;
  }
}
