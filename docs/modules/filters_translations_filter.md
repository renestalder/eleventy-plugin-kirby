[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / filters/translations-filter

# Module: filters/translations-filter

## Table of contents

### Filter Functions

- [t](filters_translations_filter.md#t)

## Filter Functions

### t

▸ **t**(`key`: *string*, `langugage`: [*LanguageCode*](models_language_model.md#languagecode)): *string*

Get translation for a specific key.
This currently does nothing and is only a placeholder for alter implementation.

**`todo`** Implement functionality

**`example`** 
```html
{{ "closeActionLabel" | t: data.language }}
```

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |
`langugage` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** *string*

Defined in: src/filters/translations-filter.ts:20
