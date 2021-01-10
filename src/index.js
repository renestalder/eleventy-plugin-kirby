//  Eleventy data file to fetch content from Kirby CMS
//  This script gets all pages including their content via Kirby CMS' official API
//  and provides them via a collection called "kirby" (based on the file name of this script)
//
//  Requires:
//  - kql plugin for Kirby CMS to be installed
//  - A user with reading access to the panel setup
//  - An .env config with the API url and user credentials
const transformer = require("./transformer");
const logger = require("./logger");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const merge = require("deepmerge");
const pagesFilter = require("./filters/pages-filter");
const fieldsFilter = require("./filters/fields-filter");
const languageFilter = require("./filters/language-filter");
const filesFilter = require("./filters/files-filter");
const translationFilter = require("./filters/translations-filter");
const templatesFilter = require("./filters/templates-filter");

const ENDPOINT = process.env.API_KIRBYCMS_PATH;

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

const defaultOptions = {
  languagesQuery: `${__dirname}/kql/get-languages.json`,
  pagesQuery: `${__dirname}/kql/get-pages.json`,
};

module.exports = function (eleventyConfig) {
  if (eleventyConfig) {
    eleventyConfig.addFilter(
      "languagesByCodes",
      languageFilter.getLanguagesByCodes
    );
    eleventyConfig.addFilter(
      "languageByCode",
      languageFilter.getLanguageByCode
    );
    eleventyConfig.addFilter("pageById", pagesFilter.getPageById);
    eleventyConfig.addFilter("pagesByIds", pagesFilter.getPagesByIds);
    eleventyConfig.addFilter("urlForLanguage", pagesFilter.urlForLanguage);
    eleventyConfig.addFilter("toBlocks", fieldsFilter.toBlocks);
    eleventyConfig.addFilter("file", filesFilter.getFile);
    eleventyConfig.addFilter("image", filesFilter.getImage);
    eleventyConfig.addFilter(
      "fallbackTemplate",
      templatesFilter.getTemplateOrFallback
    );
    eleventyConfig.addFilter("t", translationFilter.translate);
    eleventyConfig.addFilter("translate", translationFilter.translate);
  }
};

module.exports.getAll = getAll;

/**
 * Returns all pages in all languages from Kirby
 */
async function getAll(opts = defaultOptions) {
  opts = { ...defaultOptions, ...opts, _defaults: defaultOptions };

  opts.languagesQuery = path.relative(
    path.resolve(__dirname),
    opts.languagesQuery
  );
  opts.pagesQuery = path.relative(path.resolve(__dirname), opts.pagesQuery);

  logger.log(`Querying languages via ${opts.languagesQuery}`);
  const languages = await getData(
    loadQueryFromFile(opts.languagesQuery),
    opts._defaults.languagesQuery
  );

  // Create multiple queryies per language as languages are retrieved by changing HTTP header
  logger.log(`Querying pages via ${opts.pagesQuery}`);
  const baseQuery = loadQueryFromFile(
    opts.pagesQuery,
    opts._defaults.pagesQuery
  );

  logger.log(`Languages: ${languages}`);

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
  const db = transformer.dataNormalize(pages, { languages });

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

function loadQueryFromFile(relativePath, defaultQueryFile = null) {
  let defaultQuery = {};

  const transforms = (queryStr) => {
    queryStr = queryStr.replace(PLACEHOLDER_IMAGE_SRC, DEFAULT_IMAGE_SRC);

    queryStr = queryStr.replace(
      PLACEHOLDER_IMAGE_SRCSET,
      `[${DEFAULT_IMAGE_SRCSET.join()}]`
    );

    return queryStr;
  };

  if (defaultQueryFile) {
    try {
      queryDefaultFile = fs.readFileSync(defaultQueryFile, "utf8");
      queryDefaultFile = transforms(queryDefaultFile);
      defaultQuery = JSON.parse(queryDefaultFile);
    } catch (e) {
      console.error(e);
    }
  }

  try {
    let queryFile = fs.readFileSync(`${__dirname}/${relativePath}`, "utf8");
    queryFile = transforms(queryFile);

    const query = JSON.parse(queryFile);

    return merge(defaultQuery, query);
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
