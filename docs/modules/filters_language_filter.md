[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / filters/language-filter

# Module: filters/language-filter

## Table of contents

### Filter Functions

- [languageByCode](filters_language_filter.md#languagebycode)
- [languagesByCodes](filters_language_filter.md#languagesbycodes)

## Filter Functions

### languageByCode

▸ **languageByCode**(`code`: [*LanguageCode*](models_language_model.md#languagecode)): [*Language*](../interfaces/models/language-model.language.md)

Return language information for given code

**`example`** 
**liquid**:
```html
{% assign lang = data.language | languageByCode %}
{{ lang.name }}
```

#### Parameters:

Name | Type |
------ | ------ |
`code` | [*LanguageCode*](models_language_model.md#languagecode) |

**Returns:** [*Language*](../interfaces/models/language-model.language.md)

Defined in: src/filters/language-filter.ts:21

___

### languagesByCodes

▸ **languagesByCodes**(`languageCodes?`: *any*[]): [*Language*](../interfaces/models/language-model.language.md)[]

Returns language information for an array of language codes

**`example`** 
**liquid**:
```html
{% assign languages = kirby.languages | languagesByCodes %}
{% for lang in languages %}
  {{ lang.name }}
{% endfor %}
```

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`languageCodes` | *any*[] | ... |

**Returns:** [*Language*](../interfaces/models/language-model.language.md)[]

Defined in: src/filters/language-filter.ts:47
