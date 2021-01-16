[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / queries/getAll

# Module: queries/getAll

## Table of contents

### Queries Functions

- [getAll](queries_getall.md#getall)

## Queries Functions

### getAll

▸ **getAll**(`opts?`: *Partial*<[*PluginOptions*](../interfaces/models/plugin-options-model.pluginoptions.md)<*string*\>\>): *Promise*<*NormalizedSchema*<{ [key: string]: { [key: string]: T;  } \| *undefined*;  }, *any*\>\>

Returns all pages in all languages from Kirby

**`example`** 

**_data/kirby.js**:
```js
const { getAll } = require("eleventy-plugin-kirby");

module.exports = async function () {
  const data = await getAll();
  return data;
};
```
**pages.liquid**:
```html
---
pagination:
    data: kirby.entities.pages
    size: 1
    alias: data
    resolve: values
    addAllPagesToCollections: true
permalink: "{{ data._permalink }}/index.html"
tags: "data"
---
<h1>{{data.title}}</h1>
```

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`opts` | *Partial*<[*PluginOptions*](../interfaces/models/plugin-options-model.pluginoptions.md)<*string*\>\> | ... |

**Returns:** *Promise*<*NormalizedSchema*<{ [key: string]: { [key: string]: T;  } \| *undefined*;  }, *any*\>\>

Object of the API result

Defined in: src/queries/getAll.ts:51
