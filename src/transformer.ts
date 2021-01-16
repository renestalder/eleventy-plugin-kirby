import deepmerge = require("deepmerge");
import { normalize, schema } from "normalizr";
import { LanguageCode } from "./models/language-model";
import { TransformerOptions } from "./models/transformer-options-model";
import { TranslationIds } from "./models/translation-ids-model";

const defaultTransFormerOptions: TransformerOptions = {
  languages: [],
};

/**
 * Normalize the deeply nested Kirby API data to a flat, normalized object with relations between individual dependencies.
 */
export function dataNormalize(data, opts) {
  const schema = createSchema(opts);

  return normalize(data, schema);
}

function createSchema(opts: Partial<TransformerOptions> = {}) {
  opts = initDefaultOptions(opts);

  // Define a users schema
  const page = new schema.Entity(
    "pages",
    {},
    {
      idAttribute: (value) => createId(value),
      processStrategy: (entity) => {
        // Ensure the homepage is the index.html in the root later
        const uri = entity.id === "home" ? "" : entity.uri;
        const _permalink =
          entity.id === "home"
            ? `/${entity.language}`
            : `/${entity.language}/${entity.uri}`;

        // Enable querying of other languages of the same page in a multilingial setup,
        // by adding the _translationIds key to the page, holding an object of processed
        // unique Ids to those pages, with the language code as key.
        let _translationIds: TranslationIds = null;
        if (opts.languages && opts.languages.length > 0) {
          _translationIds = opts.languages
            // Exclude the current language of the page object
            .filter((lang) => lang !== entity.language)
            .reduce((acc, lang) => {
              acc[lang] = `/${createId(entity, lang)}`;
              return acc;
            }, {});
        }

        return {
          ...entity,
          uri,
          _permalink,
          _translationIds,
        };
      },
    }
  );

  page.define({
    children: [page],
  });

  const image = new schema.Entity("images");
  const document = new schema.Entity("documents");
  const imageGroup = {
    site: new schema.Array(image),
    pages: new schema.Array(image),
  };

  const documentGroup = {
    site: new schema.Array(document),
    pages: new schema.Array(document),
  };

  const uploads = {
    images: imageGroup,
    documents: documentGroup,
  };

  const resultSchema = {
    pages: [page],
    uploads,
  };

  if (opts.languages.length >= 2) {
    // const language = new schema.Entity("languages");
    // const languages = new schema.Values(language);

    return [
      {
        ...resultSchema,
        // languages,
      },
    ];
  }

  return resultSchema;
}

/**
 *
 */
function initDefaultOptions(opts: Partial<TransformerOptions> = {}) {
  return deepmerge(defaultTransFormerOptions, opts);
}

/**
 * Return unique identifier for a Kirby page, including language code if given
 */
export function createId(page, language?: LanguageCode) {
  if (language || page.language) {
    return `${language || page.language}/${page.id}`;
  }

  return page.id;
}
