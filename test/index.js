const fs = require("fs");
const test = require("ava");
const transformer = require("../dist/transformer");
const { templateSiblings } = require("../dist/filters/page-filter");
const { sortBy } = require("../dist/filters/pages-filter");
const {
  applyQueryProcessors,
  PLACEHOLDER_IMAGE_SRC,
  PLACEHOLDER_IMAGE_SRCSET,
} = require("../dist/util/queries");

test("normalize single language page data", (t) => {
  const defaultJSON = loadJSONMock(
    "datamocks/api-responses/pages/default.json"
  );
  const normalizedData = transformer.dataNormalize(defaultJSON);

  t.truthy(normalizedData.entities.pages, "Pages are normalized");

  t.is(
    normalizedData.result.languages.length,
    0,
    "Should not have any languages in the language list"
  );

  t.falsy(
    normalizedData.result.language,
    "Should have a language in the result set"
  );

  t.truthy(
    Array.isArray(normalizedData.result.pages),
    "Pages in result set are in a array of IDs"
  );

  t.is(
    Object.keys(normalizedData.entities.pages).length,
    3,
    "All pages should be listed, normalized in entities"
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
    "All pages should be listed, normalized in entities, flattened in all languages"
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
    "Placeholder for image src should be replaced"
  );
  t.truthy(
    processedQuery.indexOf(PLACEHOLDER_IMAGE_SRCSET) === -1,
    "Placeholder for image srcset should be replaced"
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

  const id = transformer.createId(
    kirby.entities.pages["en/blog/article-1"].parent,
    kirby.entities.pages["en/blog/article-1"].language
  );

  const blogPage = kirby.entities.pages["en/blog/article-1"];
  const resultWithSelf = templateSiblings(kirby, blogPage);
  const resultWithoutSelf = templateSiblings(kirby, blogPage, false);

  t.is(
    resultWithSelf.length,
    2,
    "The found siblings, including the given page, should be exactly 2"
  );
  t.is(
    resultWithoutSelf.length,
    1,
    "The found siblings, excluding the given page, should be exactly 1"
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
    "List should sort correctly in ascending direction"
  );
  t.is(
    testList[1],
    sortedListDesc[0],
    "List should sort correctly in descending direction"
  );

  t.log(testList);
  t.log(sortedListDesc);
});
