[eleventy-plugin-kirby](../../README.md) / [Exports](../../modules.md) / [models/plugin-options-model](../../modules/models_plugin_options_model.md) / PluginOptions

# Interface: PluginOptions<T\>

[models/plugin-options-model](../../modules/models_plugin_options_model.md).PluginOptions

## Type parameters

Name | Default |
------ | ------ |
`T` | *string* |

## Hierarchy

* **PluginOptions**

## Table of contents

### Properties

- [dataLog](plugin-options-model.pluginoptions.md#datalog)
- [languagesQuery](plugin-options-model.pluginoptions.md#languagesquery)
- [pagesQuery](plugin-options-model.pluginoptions.md#pagesquery)

## Properties

### dataLog

• **dataLog**: *boolean*

Write .eleventy-plugin-kirby-data-log.json to project folder, allowing to
inspect the data that is passed to the templates

Defined in: src/models/plugin-options-model.ts:18

___

### languagesQuery

• **languagesQuery**: T

The query for getting all language information. Will be merged with
the default query.

Defined in: src/models/plugin-options-model.ts:6

___

### pagesQuery

• **pagesQuery**: T

The query for getting all the CMS content. Will me merged with
the default query

Defined in: src/models/plugin-options-model.ts:12
