[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / filters/pages-filter

# Module: filters/pages-filter

## Table of contents

### Filter Functions

- [pageById](filters_pages_filter.md#pagebyid)
- [pagesByIds](filters_pages_filter.md#pagesbyids)
- [urlForLanguage](filters_pages_filter.md#urlforlanguage)

## Filter Functions

### pageById

▸ **pageById**(`pages`: [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\>, `id`: *string*, `languageCode?`: [*LanguageCode*](models_language_model.md#languagecode)): [*Page*](../interfaces/models/kirby/page-model.page.md)

Returns any page from the content folder, except for drafts

#### Parameters:

| Name            | Type                                                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `pages`         | [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\> |
| `id`            | *string*                                                                                                                         |
| `languageCode?` | [*LanguageCode*](models_language_model.md#languagecode)                                                                          |

**Returns:** [*Page*](../interfaces/models/kirby/page-model.page.md)

Defined in: src/filters/pages-filter.ts:19

___

### pagesByIds

▸ **pagesByIds**(`pages`: [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\>, `ids`: *string*[], `languageCode?`: [*LanguageCode*](models_language_model.md#languagecode)): [*Page*](../interfaces/models/kirby/page-model.page.md)[]

Returns list of pages by their ids

#### Parameters:

| Name            | Type                                                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `pages`         | [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\> |
| `ids`           | *string*[]                                                                                                                       |
| `languageCode?` | [*LanguageCode*](models_language_model.md#languagecode)                                                                          |

**Returns:** [*Page*](../interfaces/models/kirby/page-model.page.md)[]

Defined in: src/filters/pages-filter.ts:45

___

### urlForLanguage

▸ **urlForLanguage**(`page`: [*Page*](../interfaces/models/kirby/page-model.page.md), `languageCode`: [*LanguageCode*](models_language_model.md#languagecode)): *string*

Builds the Url for a specific language

#### Parameters:

| Name           | Type                                                    |
| -------------- | ------------------------------------------------------- |
| `page`         | [*Page*](../interfaces/models/kirby/page-model.page.md) |
| `languageCode` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** *string*

Defined in: src/filters/pages-filter.ts:61
