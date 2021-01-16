const fs = require("fs");
const test = require("ava");
const transformer = require("../dist/transformer");

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
    5,
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

function loadJSONMock(path) {
  return JSON.parse(fs.readFileSync(`${__dirname}/${path}`, "utf8"));
}
