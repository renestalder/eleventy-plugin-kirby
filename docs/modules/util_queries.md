[eleventy-plugin-kirby](../README.md) / [Exports](../modules.md) / util/queries

# Module: util/queries

## Table of contents

### Variables

- [DEFAULT\_IMAGE\_SRC](util_queries.md#default_image_src)
- [DEFAULT\_IMAGE\_SRCSET](util_queries.md#default_image_srcset)
- [PLACEHOLDER\_IMAGE\_SRC](util_queries.md#placeholder_image_src)
- [PLACEHOLDER\_IMAGE\_SRCSET](util_queries.md#placeholder_image_srcset)

### Functions

- [applyQueryProcessors](util_queries.md#applyqueryprocessors)
- [loadQueryFromFile](util_queries.md#loadqueryfromfile)

## Variables

### DEFAULT\_IMAGE\_SRC

• `Const` **DEFAULT\_IMAGE\_SRC**: *1220*= 1220

Defined in: src/util/queries.ts:5

___

### DEFAULT\_IMAGE\_SRCSET

• `Const` **DEFAULT\_IMAGE\_SRCSET**: *number*[]

Defined in: src/util/queries.ts:6

___

### PLACEHOLDER\_IMAGE\_SRC

• `Const` **PLACEHOLDER\_IMAGE\_SRC**: *{{IMAGE_SRC}}*= "{{IMAGE\_SRC}}"

Defined in: src/util/queries.ts:3

___

### PLACEHOLDER\_IMAGE\_SRCSET

• `Const` **PLACEHOLDER\_IMAGE\_SRCSET**: *{{IMAGE_SRCSET}}*= "{{IMAGE\_SRCSET}}"

Defined in: src/util/queries.ts:4

## Functions

### applyQueryProcessors

▸ **applyQueryProcessors**<T\>(`query`: T): *string*

#### Type parameters:

Name | Default |
------ | ------ |
`T` | *string* \\| *object* |

#### Parameters:

Name | Type |
------ | ------ |
`query` | T |

**Returns:** *string*

Defined in: src/util/queries.ts:19

___

### loadQueryFromFile

▸ **loadQueryFromFile**(`absolutePath`: *string*): *object*

#### Parameters:

Name | Type |
------ | ------ |
`absolutePath` | *string* |

**Returns:** *object*

Defined in: src/util/queries.ts:8
