const fs = require("fs");
const test = require("ava");
const transformer = require("../dist/transformer");
const { templateSiblings } = require("../dist/filters/page-filter");
const { sortBy, findBy, pageById } = require("../dist/filters/pages-filter");
const {
  applyQueryProcessors,
  PLACEHOLDER_IMAGE_SRC,
  PLACEHOLDER_IMAGE_SRCSET,
} = require("../dist/util/queries");

test("normalize single language page data", (t) => {
  const defaultJSON = loadJSONMock(
    "datamocks/api-responses/pages/default.json",
  );
  const normalizedData = transformer.dataNormalize(defaultJSON);

  t.truthy(normalizedData.entities.pages, "Pages are normalized");

  t.is(
    normalizedData.result.languages.length,
    0,
    "Should not have any languages in the language list",
  );

  t.falsy(
    normalizedData.result.language,
    "Should have a language in the result set",
  );

  t.truthy(
    Array.isArray(normalizedData.result.pages),
    "Pages in result set are in a array of string",
  );

  t.truthy(
    normalizedData.result.pages[0].startsWith("page://"),
    "Pages in result set are build on UUIDs",
  );

  t.is(
    Object.keys(normalizedData.entities.pages).length,
    3,
    "All pages should be listed, normalized in entities",
  );

  t.truthy(
    Object.keys(normalizedData.entities.images).includes("file://000000001"),
    "Files are correctly normalized with UUID",
  );

  t.log(normalizedData);
});

test("normalize multilingual page data", (t) => {
  const languages = ["en", "de"];
  const de = loadJSONMock("datamocks/api-responses/pages/i18n-de.json");
  const en = loadJSONMock("datamocks/api-responses/pages/i18n-en.json");
  const dataToNormalize = [de, en];
  const normalizedData = transformer.dataNormalize(dataToNormalize, {
    languages,
  });

  t.truthy(Array.isArray(normalizedData.result), "Results should be an array");

  t.is(
    Object.keys(normalizedData.entities.pages).length,
    12,
    "All pages should be listed, normalized in entities, flattened in all languages",
  );

  t.is(
    Object.keys(normalizedData.entities.pages).filter(
      (key) =>
        key.includes("page://") &&
        (key.startsWith(languages[0]) || key.startsWith(languages[1])),
    ).length,
    12,
    "All normalized page keys start with the language code and contain the UUID path",
  );

  t.log(normalizedData);
});

test("query transforms", (t) => {
  const pagesQuery = loadJSONMock("../src/kql/get-pages.json");

  const processedQuery = applyQueryProcessors(pagesQuery);
  t.log(processedQuery);
  t.log(JSON.stringify(processedQuery).replace("IMAGE_SRC", "HELLO WORLD"));

  t.truthy(
    processedQuery.indexOf(PLACEHOLDER_IMAGE_SRC) === -1,
    "Placeholder for image src should be replaced",
  );
  t.truthy(
    processedQuery.indexOf(PLACEHOLDER_IMAGE_SRCSET) === -1,
    "Placeholder for image srcset should be replaced",
  );
});

function loadJSONMock(path) {
  return JSON.parse(fs.readFileSync(`${__dirname}/${path}`, "utf8"));
}

test("Filter: page.templateSiblings", (t) => {
  const languages = ["en", "de"];
  const de = loadJSONMock("datamocks/api-responses/pages/i18n-de.json");
  const en = loadJSONMock("datamocks/api-responses/pages/i18n-en.json");
  const dataToNormalize = [de, en];
  const kirby = transformer.dataNormalize(dataToNormalize, {
    languages,
  });

  const blogPage = kirby.entities.pages["de/page://000000002"];
  const resultWithSelf = templateSiblings(kirby, blogPage);
  const resultWithoutSelf = templateSiblings(kirby, blogPage, false);

  t.is(
    resultWithSelf.length,
    2,
    "The found siblings, including the given page, should be exactly 2",
  );
  t.is(
    resultWithoutSelf.length,
    1,
    "The found siblings, excluding the given page, should be exactly 1",
  );
});

test("Filter: sortBy", (t) => {
  const testList = [
    {
      num: 2,
      title: "Test Number 2",
    },
    {
      num: 4,
      title: "Test Number 4",
    },
    {
      num: 1,
      title: "Test Number 1",
    },
  ];

  const sortedListAsc = sortBy(testList, "num", "asc");
  const sortedListDesc = sortBy(testList, "num", "desc");

  t.is(
    testList[2],
    sortedListAsc[0],
    "List should sort correctly in ascending direction",
  );
  t.is(
    testList[1],
    sortedListDesc[0],
    "List should sort correctly in descending direction",
  );

  t.log(testList);
  t.log(sortedListDesc);
});

test("Filter: pages.findBy", (t) => {
  const testSet = {
    "page-1": {
      template: "company",
      language: "de",
    },
    "page-2": {
      template: "index",
      language: "en",
    },
    "page-3": {
      template: "home",
      language: "de",
    },
    "page-4": {
      template: "index",
      language: "de",
    },
  };

  const foundPage = findBy(testSet, "template", "index");

  t.is(
    testSet["page-2"],
    foundPage,
    "Found page should equal one and an exact match",
  );

  const foundPageWithLanguage = findBy(testSet, "template", "index", "de");

  t.is(
    testSet["page-4"],
    foundPageWithLanguage,
    "Found page should equal one and an exact match from the given language",
  );
});

test("Filter: pageByID", (t) => {
  const languages = ["en", "de"];
  const de = loadJSONMock("datamocks/api-responses/pages/i18n-de.json");
  const en = loadJSONMock("datamocks/api-responses/pages/i18n-en.json");
  const dataToNormalize = [de, en];
  const kirby = transformer.dataNormalize(dataToNormalize, {
    languages,
  });

  const foundPage = pageById(kirby.entities.pages, "blog", "de");

  t.truthy(foundPage, "Found exactly one page");

  t.is(foundPage.language, "de", "Found page has the correct language");
});
