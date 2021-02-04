[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / filters/pages-filter

# Module: filters/pages-filter

## Table of contents

### Filter Functions

- [findBy](filters_pages_filter.md#findby)
- [pageById](filters_pages_filter.md#pagebyid)
- [pagesByIds](filters_pages_filter.md#pagesbyids)
- [sortBy](filters_pages_filter.md#sortby)
- [urlForLanguage](filters_pages_filter.md#urlforlanguage)

## Filter Functions

### findBy

▸ **findBy**<T\>(`pages`: T, `attribute`: *string*, `value`: *string*): T

Find a single element by an attribute and its value

**`example`** liquid.js
```html
{{ kirby.entities.pages | findBy: "template", "contact" }}
```

#### Type parameters:

Name | Default |
------ | ------ |
`T` | [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)<*string*[]\\>\\> |

#### Parameters:

Name | Type |
------ | ------ |
`pages` | T |
`attribute` | *string* |
`value` | *string* |

**Returns:** T

Defined in: src/filters/pages-filter.ts:120

___

### pageById

▸ **pageById**(`pages`: [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\>, `id`: *string*, `languageCode?`: [*LanguageCode*](models_language_model.md#languagecode)): [*Page*](../interfaces/models/kirby/page-model.page.md)

Returns any page from the content folder, except for drafts

#### Parameters:

Name | Type |
------ | ------ |
`pages` | [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\> |
`id` | *string* |
`languageCode?` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** [*Page*](../interfaces/models/kirby/page-model.page.md)

Defined in: src/filters/pages-filter.ts:22

___

### pagesByIds

▸ **pagesByIds**(`pages`: [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\>, `ids`: *string*[], `languageCode?`: [*LanguageCode*](models_language_model.md#languagecode)): [*Page*](../interfaces/models/kirby/page-model.page.md)[]

Returns list of pages by their ids

#### Parameters:

Name | Type |
------ | ------ |
`pages` | [*EntityItems*](../interfaces/models/kirby/kirby-model.entityitems.md)<[*Page*](../interfaces/models/kirby/page-model.page.md)\> |
`ids` | *string*[] |
`languageCode?` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** [*Page*](../interfaces/models/kirby/page-model.page.md)[]

Defined in: src/filters/pages-filter.ts:48

___

### sortBy

▸ **sortBy**(`list`: Object[], ...`args`: *string*[]): Object[]

Sort by given field. Only supports one level of sorting e.g. "date", "desc"
in comparison to the infinite level sorting in Kirby e.g. "date, "desc", "title", "asc"

**`example`** liquid.js
```html
{{ people | sortBy: "lastname", "asc" }}
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`list` | Object[] | Array of objects   |
`...args` | *string*[] | Arguments   |

**Returns:** Object[]

Defined in: src/filters/pages-filter.ts:84

___

### urlForLanguage

▸ **urlForLanguage**(`page`: [*Page*](../interfaces/models/kirby/page-model.page.md), `languageCode`: [*LanguageCode*](models_language_model.md#languagecode)): *string*

Builds the Url for a specific language

#### Parameters:

Name | Type |
------ | ------ |
`page` | [*Page*](../interfaces/models/kirby/page-model.page.md) |
`languageCode` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** *string*

Defined in: src/filters/pages-filter.ts:64
