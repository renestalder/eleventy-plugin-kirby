[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / util/api

# Module: util/api

## Table of contents

### Variables

- [ENDPOINT](util_api.md#endpoint)
- [defaultFetchOptions](util_api.md#defaultfetchoptions)

### Functions

- [getData](util_api.md#getdata)

## Variables

### ENDPOINT

• `Const` **ENDPOINT**: *string*

Defined in: src/util/api.ts:5

___

### defaultFetchOptions

• `Const` **defaultFetchOptions**: *object*

Default API fetch options required to get data from Kirby CMS

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`headers` | *object* | { `Authorization`: *string* ; `Content-Type`: *string* = "application/json" } |
`method` | *string* | "POST" |

Defined in: src/util/api.ts:17

## Functions

### getData

▸ **getData**(`query`: *any*, `headers?`: *object*): *Promise*<*any*\>

Get a list of all pages including their children

#### Parameters:

Name | Type |
------ | ------ |
`query` | *any* |
`headers?` | *object* |

**Returns:** *Promise*<*any*\>

Defined in: src/util/api.ts:28
