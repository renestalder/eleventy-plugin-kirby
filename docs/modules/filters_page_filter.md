[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / filters/page-filter

# Module: filters/page-filter

## Table of contents

### Functions

- [templateSiblings](filters_page_filter.md#templatesiblings)

## Functions

### templateSiblings

▸ **templateSiblings**(`kirby`: [*Kirby*](../interfaces/models/kirby/kirby-model.kirby.md), `currentPage`: [*Page*](../interfaces/models/kirby/page-model.page.md), `self?`: *boolean*): [*Page*](../interfaces/models/kirby/page-model.page.md)[]

Returns siblings with the same template

**`example`** 
**liquid**:
```html
{% assign siblings = kirby | templateSiblings: data, false %}
{% for pageItem in siblings %}
  {{ pageItem.title }}
{% endfor %}
```

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`kirby` | [*Kirby*](../interfaces/models/kirby/kirby-model.kirby.md) | - | Kirby data object   |
`currentPage` | [*Page*](../interfaces/models/kirby/page-model.page.md) | - | The current page   |
`self` | *boolean* | true | - |

**Returns:** [*Page*](../interfaces/models/kirby/page-model.page.md)[]

List of pages

Defined in: src/filters/page-filter.ts:27
