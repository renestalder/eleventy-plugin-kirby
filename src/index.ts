//  Eleventy data file to fetch content from Kirby CMS
//  This script gets all pages including their content via Kirby CMS' official API
//  and provides them via a collection called "kirby" (based on the file name of this script)
//
//  Requires:
//  - kql plugin for Kirby CMS to be installed
//  - A user with reading access to the panel setup
//  - An .env config with the API url and user credentials
import { dataNormalize } from "./transformer";
import { log } from "./logger";
import * as fs from "fs";
import * as path from "path";
import deepmerge = require("deepmerge");
// const fetch = require("node-fetch");
import pagesFilter from "./filters/pages-filter";
import fieldsFilter from "./filters/fields-filter";
import languageFilter from "./filters/language-filter";
import filesFilter from "./filters/files-filter";
import translationFilter from "./filters/translations-filter";
import templatesFilter from "./filters/templates-filter";
import { PluginOptions } from "./models/plugin-options-model";

import defaultLanguagesQuery from "./kql/get-languages.json";
import defaultPagesQuery from "./kql/get-pages.json";

const ENDPOINT = `${process.env.API_KIRBYCMS_PATH}/api/query`;

const PLACEHOLDER_IMAGE_SRC = "{{IMAGE_SRC}}";
const PLACEHOLDER_IMAGE_SRCSET = "{{IMAGE_SRCSET}}";
const DEFAULT_IMAGE_SRC = 1220;
const DEFAULT_IMAGE_SRCSET = [312, 480, 768, 1024, 1220, 1440];

/**
 * Set these login credentials in your .env file
 */
const basicAuthCredentials = Buffer.from(
  `${process.env.API_KIRBYCMS_USER}:${process.env.API_KIRBYCMS_PASSWORD}`
).toString("base64");

/**
 * Default API fetch options required to get data from Kirby CMS
 */
const defaultFetchOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${basicAuthCredentials}`,
  },
};

const defaultOptions: PluginOptions<Object> = {
  languagesQuery: defaultLanguagesQuery,
  pagesQuery: defaultPagesQuery,
};

export default function addFilter(eleventyConfig) {
  if (eleventyConfig) {
    pagesFilter(eleventyConfig);
    fieldsFilter(eleventyConfig);
    languageFilter(eleventyConfig);
    filesFilter(eleventyConfig);
    translationFilter(eleventyConfig);
    templatesFilter(eleventyConfig);
  }
}

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
    loadQueryFromFile(opts.languagesQuery),
    opts._defaults.languagesQuery
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

function loadQueryFromFile(relativePath, defaultQuery: object = {}) {
  const transforms = (queryStr) => {
    queryStr = queryStr.replace(PLACEHOLDER_IMAGE_SRC, DEFAULT_IMAGE_SRC);

    queryStr = queryStr.replace(
      PLACEHOLDER_IMAGE_SRCSET,
      `[${DEFAULT_IMAGE_SRCSET.join()}]`
    );

    return queryStr;
  };

  try {
    let queryFile = fs.readFileSync(`${__dirname}/${relativePath}`, "utf8");
    queryFile = transforms(queryFile);

    const query = JSON.parse(queryFile);

    return deepmerge(defaultQuery, query);
  } catch (e) {
    throw new Error(e);
  }
}

/**
 * Get a list of all pages including their children
 */
async function getData(query, headers = {}) {
  console.log(`Querying ${ENDPOINT}`);
  if (headers !== {}) {
    console.log(headers);
  }

  // @ts-ignore
  const response = await fetch(ENDPOINT, {
    ...defaultFetchOptions,
    headers: {
      ...defaultFetchOptions.headers,
      ...headers,
    },
    body: JSON.stringify(query),
  });

  const json = await response.json();

  if (json.code !== 200) {
    console.error(json.code);
    console.error(json.message);
    console.error(json.exception);
    console.error(json.key);
  }

  return json.result;
}
