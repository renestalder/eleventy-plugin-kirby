[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Functions

- [export&#x3D;](index.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`eleventyConfig`: *any*, `settings`: [*PluginSettings*](../interfaces/models/plugin-options-model.pluginsettings.md)): *void*

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
`settings` | [*PluginSettings*](../interfaces/models/plugin-options-model.pluginsettings.md) |

**Returns:** *void*

Defined in: src/index.ts:32
