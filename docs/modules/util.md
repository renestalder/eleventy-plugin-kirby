[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / util

# Module: util

## Table of contents

### Variables

- [DEFAULT\_IMAGE\_SRC](util.md#default_image_src)
- [DEFAULT\_IMAGE\_SRCSET](util.md#default_image_srcset)
- [ENDPOINT](util.md#endpoint)
- [PLACEHOLDER\_IMAGE\_SRC](util.md#placeholder_image_src)
- [PLACEHOLDER\_IMAGE\_SRCSET](util.md#placeholder_image_srcset)
- [defaultFetchOptions](util.md#defaultfetchoptions)

### Functions

- [getData](util.md#getdata)
- [loadQueryFromFile](util.md#loadqueryfromfile)

## Variables

### DEFAULT\_IMAGE\_SRC

• `Const` **DEFAULT\_IMAGE\_SRC**: *1220*= 1220

Defined in: src/util.ts:9

___

### DEFAULT\_IMAGE\_SRCSET

• `Const` **DEFAULT\_IMAGE\_SRCSET**: *number*[]

Defined in: src/util.ts:10

___

### ENDPOINT

• `Const` **ENDPOINT**: *string*

Defined in: src/util.ts:5

___

### PLACEHOLDER\_IMAGE\_SRC

• `Const` **PLACEHOLDER\_IMAGE\_SRC**: *{{IMAGE_SRC}}*= "{{IMAGE\_SRC}}"

Defined in: src/util.ts:7

___

### PLACEHOLDER\_IMAGE\_SRCSET

• `Const` **PLACEHOLDER\_IMAGE\_SRCSET**: *{{IMAGE_SRCSET}}*= "{{IMAGE\_SRCSET}}"

Defined in: src/util.ts:8

___

### defaultFetchOptions

• `Const` **defaultFetchOptions**: *object*

Default API fetch options required to get data from Kirby CMS

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`headers` | *object* | { `Authorization`: *string* ; `Content-Type`: *string* = "application/json" } |
`method` | *string* | "POST" |

Defined in: src/util.ts:22

## Functions

### getData

▸ **getData**(`query`: *any*, `headers?`: {}): *Promise*<*any*\>

Get a list of all pages including their children

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`query` | *any* | - |
`headers` | {} | ... |

**Returns:** *Promise*<*any*\>

Defined in: src/util.ts:59

___

### loadQueryFromFile

▸ **loadQueryFromFile**(`absolutePath`: *string*): *object*

#### Parameters:

Name | Type |
------ | ------ |
`absolutePath` | *string* |

**Returns:** *object*

Defined in: src/util.ts:30
