const fs = require("fs");
const test = require("ava");
const transformer = require("../dist/transformer");
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
    10,
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
