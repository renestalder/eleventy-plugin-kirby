[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Functions

- [export&#x3D;](index.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`eleventyConfig`: *any*): *void*

**`example`** 
```js
require("dotenv").config();
const eleventyPluginKirby = require("eleventy-plugin-kirby");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyPluginKirby);
};
```

#### Parameters:

Name | Type |
------ | ------ |
`eleventyConfig` | *any* |

**Returns:** *void*

Defined in: src/index.ts:28
