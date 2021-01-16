import { dataNormalize } from "../transformer";
import { log } from "../logger";
import * as fs from "fs";
import * as path from "path";
import { PluginOptions } from "../models/plugin-options-model";
import { getData, loadQueryFromFile } from "../util";

// @ts-ignore
import defaultLanguagesQuery from "../kql/get-languages.json";

// @ts-ignore
import defaultPagesQuery from "../kql/get-pages.json";

const defaultOptions: PluginOptions<Object> = {
  languagesQuery: defaultLanguagesQuery,
  pagesQuery: defaultPagesQuery,
};

/**
 * Returns all pages in all languages from Kirby
 */

export async function getAll(opts: Partial<PluginOptions<string>> = {}) {
  opts = { ...opts, _defaults: defaultOptions };

  opts.languagesQuery = opts.languagesQuery
    ? path.relative(path.resolve(__dirname), opts.languagesQuery)
    : null;

  opts.pagesQuery = opts.pagesQuery
    ? path.relative(path.resolve(__dirname), opts.pagesQuery)
    : null;

  log(`Querying languages via ${opts.languagesQuery}`);
  const languages = await getData(
    loadQueryFromFile(opts.languagesQuery, opts._defaults.languagesQuery)
  );

  // Create multiple queryies per language as languages are retrieved by changing HTTP header
  log(`Querying pages via ${opts.pagesQuery}`);
  const baseQuery = loadQueryFromFile(
    opts.pagesQuery,
    opts._defaults.pagesQuery
  );

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

  try {
    fs.writeFileSync(
      `${process.cwd()}/.kirby-data-log.json`,
      JSON.stringify(db, null, 2),
      "utf8"
    );
  } catch (e) {
    console.log(`Error writing Kirby data log file: ${e}`);
  }

  return db;
}
