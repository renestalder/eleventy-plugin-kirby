import deepmerge = require("deepmerge");
import { normalize, schema } from "normalizr";
import { isPage, Page } from "./models/kirby/page-model";
import { LanguageCode } from "./models/language-model";
import { TransformerOptions } from "./models/transformer-options-model";
import { TranslationIds } from "./models/translation-ids-model";

const defaultTransFormerOptions: TransformerOptions = {
  languages: [],
};

/**
 * Normalize the deeply nested Kirby API data to a flat, normalized object with relations between individual dependencies.
 * @internal
 * @ignore
 */
export function dataNormalize(data, opts?) {
  const schema = createSchema(opts);

  const normalizeData = normalize(data, schema);

  // Fill the _translationIds
  if (opts?.languages?.length > 1) {
    const translationProps = ({
      id,
      uuid,
      status,
      slug,
      language,
      _permalink,
    }): Page["_translations"] => ({
      id,
      uuid,
      status,
      slug,
      language,
      _permalink,
    });

    for (const [entityGroupName, entityGroup] of Object.entries(
      normalizeData.entities,
    )) {
      for (const [entityName, entity] of Object.entries(entityGroup)) {
        if (isPage(entity)) {
          const { uuid } = entity;

          const _translationIds = opts.languages
            .filter((lang) => lang !== entity.language)
            .reduce((acc, lang) => {
              const translatedPage = entityGroup[`${lang}/${uuid}`] as Page;

              if (translatedPage?._permalink) {
                acc[lang] = translationProps(translatedPage);
                return acc;
              }

              return acc;
            }, {});

          entity._translations = _translationIds;
        }
      }
    }
  }

  return normalizeData;
}

/**
 * @internal
 * @ignore
 */
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
        let _permalink = entity.id === "home" ? "/" : `/${entity.uri}`;

        // Enable querying of other languages of the same page in a multilingial setup,
        // by adding the _translationIds key to the page, holding an object of processed
        // unique Ids to those pages, with the language code as key.
        let _translationIds: TranslationIds = null;
        if (opts.languages && opts.languages.length > 0) {
          _permalink =
            entity.id === "home"
              ? `/${entity.language}`
              : `/${entity.language}/${entity.uri}`;
        }

        return {
          ...entity,
          uri,
          _permalink,
        };
      },
    },
  );

  page.define({
    children: [page],
  });

  const image = new schema.Entity("images", {}, { idAttribute: "uuid" });
  const document = new schema.Entity("documents", {}, { idAttribute: "uuid" });
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
 * @internal
 * @ignore
 */
function initDefaultOptions(opts: Partial<TransformerOptions> = {}) {
  return deepmerge(defaultTransFormerOptions, opts);
}

/**
 * Return unique identifier for a Kirby page, including language code if given
 * @internal
 * @ignore
 */
export function createId(
  page: Page | string,
  language?: LanguageCode,
  opts: {
    translate?: boolean;
    key?: "id" | "uuid";
  } = {},
) {
  if (isPage(page)) {
    if (language || page?.language) {
      if (opts?.translate) {
        return `${language || page.language}/${
          page[opts?.key] || page.uuid || page.uri || page.id
        }`;
      } else {
        return `${language || page.language}/${page[opts?.key] || page.uuid}`;
      }
    }

    return page[opts?.key] || page.uuid;
  } else if (typeof page === "string") {
    if (language) {
      return `${language}/${page}`;
    }

    return page;
  }

  return null;
}
