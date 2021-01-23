[eleventy-plugin-kirby](../../README.md) / [Exports](../../modules.md) / [models/plugin-options-model](../../modules/models_plugin_options_model.md) / PluginSettings

# Interface: PluginSettings<T\>

[models/plugin-options-model](../../modules/models_plugin_options_model.md).PluginSettings

## Type parameters

Name | Default |
------ | ------ |
`T` | *string* |

## Hierarchy

* **PluginSettings**

## Table of contents

### Properties

- [debug](plugin-options-model.pluginsettings.md#debug)
- [languagesQuery](plugin-options-model.pluginsettings.md#languagesquery)
- [options](plugin-options-model.pluginsettings.md#options)
- [pagesQuery](plugin-options-model.pluginsettings.md#pagesquery)

## Properties

### debug

• **debug**: *boolean*

Write to .eleventy-plugin-kirby folder, allowing to
inspect the queries, API results and the data that is passed to the templates

Defined in: src/models/plugin-options-model.ts:20

___

### languagesQuery

• **languagesQuery**: T

The query for getting all language information. Will be merged with
the default query.

Defined in: src/models/plugin-options-model.ts:8

___

### options

• `Optional` **options**: *Partial*<[*Options*](kirby/options-model.options.md)\>

Reflects the Kirby configuration options that have similar
effect on the client-side. Those options do not change any
settings that are part of the config.php of your Kirby instance.
Those affect your queries only and therefore, only a subset
of the original options are available.

**`see`** https://getkirby.com/docs/reference/system/options

Defined in: src/models/plugin-options-model.ts:30

___

### pagesQuery

• **pagesQuery**: T

The query for getting all the CMS content. Will me merged with
the default query

Defined in: src/models/plugin-options-model.ts:14
