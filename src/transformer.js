const { normalize, schema } = require("normalizr");

module.exports = {
  dataNormalize,
  createId,
};

function createSchema(opts = {}) {
  opts = initDefaultOptions(opts);

  // Define a users schema
  const page = new schema.Entity(
    "pages",
    {},
    {
      idAttribute: (value) => createId(value),
      processStrategy: (entity) => {
        // Ensure the homepage is the index.html in the root later
        let _translationIds = [];
        const uri = entity.id === "home" ? "" : entity.uri;
        const _permalink =
          entity.id === "home"
            ? `/${entity.language}`
            : `/${entity.language}/${entity.uri}`;

        // Enable querying of other languages of the same page
        if (opts.languages && opts.languages.length > 0) {
          _translationIds = opts.languages
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

  return resultSchema;
}

function createSchemai18n(opts) {
  opts = initDefaultOptions(opts);

  let resultSchema = createSchema(opts);
  const languages = new schema.Values("languages");

  resultSchema = {
    languages,
    ...resultSchema,
  };

  const i18nResultSchema = [resultSchema];

  return i18nResultSchema;
}

function initDefaultOptions(opts = {}) {
  opts.defaultLanguage = opts.defaultLanguage || "en";
  opts.languages = opts.languages || [];

  return opts;
}

function dataNormalize(data, opts) {
  const schema =
    opts?.languages?.length >= 2 ? createSchemai18n(opts) : createSchema(opts);
  return normalize(data, schema);
}

function createId(value, language) {
  return `${language || value.language}/${value.id}`;
}
