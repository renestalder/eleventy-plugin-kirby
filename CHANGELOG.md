# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.5.0-alpha.6](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.5...v0.5.0-alpha.6) (2023-12-20)


### Bug Fixes

* **filters/files:** add backwards compatiblity for old content without UUID ([f837d05](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f837d0594d9c118c0194215c46c8ecf51727a485))

## [0.5.0-alpha.5](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.4...v0.5.0-alpha.5) (2023-12-20)


### Bug Fixes

* **filters/pages:** gracefully handle translated uuids in `pageByUUID` ([1b80dbe](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/1b80dbeda6f51d708e05627f7ba6bd9a5ae8d0bd))

## [0.5.0-alpha.4](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.3...v0.5.0-alpha.4) (2023-12-20)

## [0.5.0-alpha.3](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.2...v0.5.0-alpha.3) (2023-12-20)


### Bug Fixes

* **filters/pages:** fallback to `pageById` inside `pageByUUID` ([2527d6a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/2527d6a083149c6e44dd3b720fb59a8d1cd26484))

## [0.5.0-alpha.2](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.1...v0.5.0-alpha.2) (2023-12-20)


### Bug Fixes

* **filters/pages:** restore `pageById` filter ([185fbbe](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/185fbbeb68882f5591890190a1881ea4833a85ce))

## [0.5.0-alpha.1](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.5.0-alpha.0...v0.5.0-alpha.1) (2023-12-20)


### Bug Fixes

* **transformer:** normalize all files by their uuid ([24b034e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/24b034edaea42033e83a8ca54fb548e4c4d9766a))

## [0.5.0-alpha.0](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.4.0...v0.5.0-alpha.0) (2023-12-19)


### ⚠ BREAKING CHANGES

* If you rely on own filters that get
data from the dataset created by this plugin, you
might have to rewrite certain parts to correctly work
with new IDs e.g. `de/page://000000`.
* **filters/files:** the `file` and `image` filters now require
an UUID instead of an ID as their parameter
* **filters/page:** all queries require to contain UUID information
in the response to correctly resolve data.
* **filters/pages:** `pagesById` and `pagesByIds` were renamed
to `pagesByUUID` and `pagesByUUIDs` to reflect their new
meaning, only working with Kirby UUIDs.

### Bug Fixes

* correctly apply page model changes to `"parent"` calls ([75af29d](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/75af29da4e75de0245548c8a67f1f97dd4f56e78))
* **deps:** update dependency @11ty/eleventy to v2 ([8afa856](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8afa8569238221256437bd4cea048a99b0225d43))
* **deps:** update dependency deepmerge to v4.3.1 ([c762674](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/c762674ce243f75b5de5412167b87793de35cf01))
* **deps:** update dependency dotenv to v14 ([3fdc336](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/3fdc336f7df831c8c7f03db520354b6633ec4f55))
* **deps:** update dependency dotenv to v14.3.2 ([09d4564](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/09d456498016bc7c89098d2ccd45994f68e38442))
* **deps:** update dependency dotenv to v16 ([517d362](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/517d36255f82208d5f6306735ec4041d79cadd39))
* **deps:** update dependency dotenv to v16.0.1 ([429f368](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/429f368a53910e43c5c33605f13d6f4a3cf1766c))
* **deps:** update dependency dotenv to v16.0.2 ([d4b0f8a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d4b0f8a870b68863b0f25bbcd87845a328648169))
* **deps:** update dependency dotenv to v16.0.3 ([5553fd8](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/5553fd8c97f1c7e38b7c2f6a7f383b59a549fa64))
* **deps:** update dependency node-fetch to v2.6.5 ([8b1dd9e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8b1dd9ecc4e7cdd46d9145b4ba4c42fb1e24b28b))
* **deps:** update dependency node-fetch to v2.6.6 ([d77d289](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d77d2895577420712c4f0493f35cbdcbc2269895))
* **deps:** update dependency node-fetch to v2.6.7 ([93e86f3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/93e86f35e6e14a5f3a873629cfdb7714716610d1))
* **deps:** update dependency normalizr to v3.6.2 ([cff0d1e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/cff0d1e616ca6738baabcc090f23749322d1829a))
* **deps:** update dependency vlucas/phpdotenv to v5.4.0 ([847293a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/847293a291131163ac7b16a42f8be182e187b6e5))
* **deps:** update dependency vlucas/phpdotenv to v5.4.1 ([6ccb424](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/6ccb424195996ad3e212948db1f32ac8efe86c0b))
* **deps:** update dependency vlucas/phpdotenv to v5.5.0 ([f231b67](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f231b67750918981f488ff9b2146edd7d49aa7d5))
* **filters/files:** change `file` and `image` to UUID ([e7904e4](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/e7904e4c5b00bc80f81431fada08ae482947288b))
* **filters/page:** `templateSibling` filter now searches by UUID ([9c14f5d](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/9c14f5df6043565ac5fdb40277ea8fe48fb32f13))
* **filters/pages:** pages filters now use UUIDs instead of IDs ([79fa6f3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/79fa6f3aa0fae7f18420f14b1f7517a27239fad7))
* **filters/templateSiblings:** make null safe if parent is missing ([0442195](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/04421951b8eb3a2dab69536a9c388cc73199c42f))
* **kql:** correctly set `content` to `true`, not `"true"` ([68409ca](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/68409cab71467270dc8d070b165cb5b41de1fb53))
* **kql:** query `parent.id` null-safe ([150adf1](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/150adf1ff976f76317440292a9fa08c133ad33e2))
* normalize all data with UUIDs instead of IDs ([402d3ad](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/402d3ad945fcb656d269bef6cad4be3a13faa77d))

### [0.4.3](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.4.0...v0.4.3) (2023-12-15)


### Bug Fixes

* correctly apply page model changes to `"parent"` calls ([75af29d](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/75af29da4e75de0245548c8a67f1f97dd4f56e78))
* **deps:** update dependency @11ty/eleventy to v2 ([8afa856](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8afa8569238221256437bd4cea048a99b0225d43))
* **deps:** update dependency deepmerge to v4.3.1 ([c762674](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/c762674ce243f75b5de5412167b87793de35cf01))
* **deps:** update dependency dotenv to v14 ([3fdc336](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/3fdc336f7df831c8c7f03db520354b6633ec4f55))
* **deps:** update dependency dotenv to v14.3.2 ([09d4564](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/09d456498016bc7c89098d2ccd45994f68e38442))
* **deps:** update dependency dotenv to v16 ([517d362](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/517d36255f82208d5f6306735ec4041d79cadd39))
* **deps:** update dependency dotenv to v16.0.1 ([429f368](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/429f368a53910e43c5c33605f13d6f4a3cf1766c))
* **deps:** update dependency dotenv to v16.0.2 ([d4b0f8a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d4b0f8a870b68863b0f25bbcd87845a328648169))
* **deps:** update dependency dotenv to v16.0.3 ([5553fd8](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/5553fd8c97f1c7e38b7c2f6a7f383b59a549fa64))
* **deps:** update dependency node-fetch to v2.6.5 ([8b1dd9e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8b1dd9ecc4e7cdd46d9145b4ba4c42fb1e24b28b))
* **deps:** update dependency node-fetch to v2.6.6 ([d77d289](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d77d2895577420712c4f0493f35cbdcbc2269895))
* **deps:** update dependency node-fetch to v2.6.7 ([93e86f3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/93e86f35e6e14a5f3a873629cfdb7714716610d1))
* **deps:** update dependency normalizr to v3.6.2 ([cff0d1e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/cff0d1e616ca6738baabcc090f23749322d1829a))
* **deps:** update dependency vlucas/phpdotenv to v5.4.0 ([847293a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/847293a291131163ac7b16a42f8be182e187b6e5))
* **deps:** update dependency vlucas/phpdotenv to v5.4.1 ([6ccb424](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/6ccb424195996ad3e212948db1f32ac8efe86c0b))
* **deps:** update dependency vlucas/phpdotenv to v5.5.0 ([f231b67](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f231b67750918981f488ff9b2146edd7d49aa7d5))
* **filters/templateSiblings:** make null safe if parent is missing ([0442195](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/04421951b8eb3a2dab69536a9c388cc73199c42f))
* **kql:** correctly set `content` to `true`, not `"true"` ([68409ca](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/68409cab71467270dc8d070b165cb5b41de1fb53))
* **kql:** query `parent.id` null-safe ([150adf1](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/150adf1ff976f76317440292a9fa08c133ad33e2))

### [0.4.2](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.4.0...v0.4.2) (2023-12-15)


### Bug Fixes

* **deps:** update dependency @11ty/eleventy to v2 ([8afa856](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8afa8569238221256437bd4cea048a99b0225d43))
* **deps:** update dependency deepmerge to v4.3.1 ([c762674](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/c762674ce243f75b5de5412167b87793de35cf01))
* **deps:** update dependency dotenv to v14 ([3fdc336](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/3fdc336f7df831c8c7f03db520354b6633ec4f55))
* **deps:** update dependency dotenv to v14.3.2 ([09d4564](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/09d456498016bc7c89098d2ccd45994f68e38442))
* **deps:** update dependency dotenv to v16 ([517d362](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/517d36255f82208d5f6306735ec4041d79cadd39))
* **deps:** update dependency dotenv to v16.0.1 ([429f368](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/429f368a53910e43c5c33605f13d6f4a3cf1766c))
* **deps:** update dependency dotenv to v16.0.2 ([d4b0f8a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d4b0f8a870b68863b0f25bbcd87845a328648169))
* **deps:** update dependency dotenv to v16.0.3 ([5553fd8](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/5553fd8c97f1c7e38b7c2f6a7f383b59a549fa64))
* **deps:** update dependency node-fetch to v2.6.5 ([8b1dd9e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8b1dd9ecc4e7cdd46d9145b4ba4c42fb1e24b28b))
* **deps:** update dependency node-fetch to v2.6.6 ([d77d289](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d77d2895577420712c4f0493f35cbdcbc2269895))
* **deps:** update dependency node-fetch to v2.6.7 ([93e86f3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/93e86f35e6e14a5f3a873629cfdb7714716610d1))
* **deps:** update dependency normalizr to v3.6.2 ([cff0d1e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/cff0d1e616ca6738baabcc090f23749322d1829a))
* **deps:** update dependency vlucas/phpdotenv to v5.4.0 ([847293a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/847293a291131163ac7b16a42f8be182e187b6e5))
* **deps:** update dependency vlucas/phpdotenv to v5.4.1 ([6ccb424](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/6ccb424195996ad3e212948db1f32ac8efe86c0b))
* **deps:** update dependency vlucas/phpdotenv to v5.5.0 ([f231b67](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f231b67750918981f488ff9b2146edd7d49aa7d5))
* **filters/templateSiblings:** make null safe if parent is missing ([0442195](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/04421951b8eb3a2dab69536a9c388cc73199c42f))
* **kql:** correctly set `content` to `true`, not `"true"` ([68409ca](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/68409cab71467270dc8d070b165cb5b41de1fb53))
* **kql:** query `parent.id` null-safe ([150adf1](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/150adf1ff976f76317440292a9fa08c133ad33e2))

### [0.4.1](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.4.0...v0.4.1) (2023-12-15)


### Bug Fixes

* **deps:** update dependency @11ty/eleventy to v2 ([8afa856](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8afa8569238221256437bd4cea048a99b0225d43))
* **deps:** update dependency deepmerge to v4.3.1 ([c762674](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/c762674ce243f75b5de5412167b87793de35cf01))
* **deps:** update dependency dotenv to v14 ([3fdc336](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/3fdc336f7df831c8c7f03db520354b6633ec4f55))
* **deps:** update dependency dotenv to v14.3.2 ([09d4564](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/09d456498016bc7c89098d2ccd45994f68e38442))
* **deps:** update dependency dotenv to v16 ([517d362](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/517d36255f82208d5f6306735ec4041d79cadd39))
* **deps:** update dependency dotenv to v16.0.1 ([429f368](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/429f368a53910e43c5c33605f13d6f4a3cf1766c))
* **deps:** update dependency dotenv to v16.0.2 ([d4b0f8a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d4b0f8a870b68863b0f25bbcd87845a328648169))
* **deps:** update dependency dotenv to v16.0.3 ([5553fd8](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/5553fd8c97f1c7e38b7c2f6a7f383b59a549fa64))
* **deps:** update dependency node-fetch to v2.6.5 ([8b1dd9e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/8b1dd9ecc4e7cdd46d9145b4ba4c42fb1e24b28b))
* **deps:** update dependency node-fetch to v2.6.6 ([d77d289](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/d77d2895577420712c4f0493f35cbdcbc2269895))
* **deps:** update dependency node-fetch to v2.6.7 ([93e86f3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/93e86f35e6e14a5f3a873629cfdb7714716610d1))
* **deps:** update dependency normalizr to v3.6.2 ([cff0d1e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/cff0d1e616ca6738baabcc090f23749322d1829a))
* **deps:** update dependency vlucas/phpdotenv to v5.4.0 ([847293a](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/847293a291131163ac7b16a42f8be182e187b6e5))
* **deps:** update dependency vlucas/phpdotenv to v5.4.1 ([6ccb424](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/6ccb424195996ad3e212948db1f32ac8efe86c0b))
* **deps:** update dependency vlucas/phpdotenv to v5.5.0 ([f231b67](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f231b67750918981f488ff9b2146edd7d49aa7d5))
* **kql:** correctly set `content` to `true`, not `"true"` ([68409ca](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/68409cab71467270dc8d070b165cb5b41de1fb53))
* **kql:** query `parent.id` null-safe ([150adf1](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/150adf1ff976f76317440292a9fa08c133ad33e2))

## [0.4.0](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.6...v0.4.0) (2021-10-27)


### ⚠ BREAKING CHANGES

* `page._translationIds` is now `page._translations` and
contains the language information as objects. These objects contain
the `id`, `slug`, `status`, `language` and `_permalink` of the
translated page.

### Features

* support for translated slugs ([57abc90](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/57abc905310bf54aab47730871367da7c5133e5c))


### Bug Fixes

* **deps:** update dependency @11ty/eleventy to ^0.12.0 ([830b529](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/830b529baa8d7a8cd3c6994418cb47d309a662c6))
* **deps:** update dependency dotenv to v10 ([4da79d5](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/4da79d5abae1e2e7e31916cf7276a58cf7dd06e8))
* **deps:** update dependency dotenv to v8.6.0 ([b747e1e](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/b747e1e1b04468d7c4b41177c7459e714ae32ce9))
* **deps:** update dependency dotenv to v9 ([43da0d7](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/43da0d72caced31e18047d5e0d350b0366f7c39c))
* **deps:** update dependency dotenv to v9.0.2 ([f712a6c](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/f712a6c7ea6cf601245f37c2aa10a987ea787130))
* **deps:** update dependency getkirby/cms to v3.5.3 ([a557003](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/a557003cb4d827fe0fb5402685d638356ddf7e11))
* **deps:** update dependency node-fetch to v2.6.2 ([1711163](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/1711163f013a6d63299f1f27e9f7fc0c22609004))
* **deps:** update dependency node-fetch to v3 ([fd31774](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/fd31774180f41cbe47ad853ac0e6bc89255f2b44))
* **deps:** update dependency vlucas/phpdotenv to v5.3.0 ([651f2fe](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/651f2fe69962871d4c5c4eea36dd43bc45991d60))
* **deps:** update dependency vlucas/phpdotenv to v5.3.1 ([b575717](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/b575717850421541adbb52343afabe630f4c97fe))

### [0.3.6](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.5...v0.3.6) (2021-03-06)


### Bug Fixes

* **filters:** handle one language setups in urlForLanguage ([cdc710c](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/cdc710c0509481cbb04dc0155f7257b7e35b3808))

### [0.3.5](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.4...v0.3.5) (2021-03-06)


### Bug Fixes

* do not create translation ids for one language ([c9593c0](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/c9593c0e96f284b2d2b248af511a9b4de008ddab))

### [0.3.4](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.3...v0.3.4) (2021-03-06)


### Features

* add omitLanguages configuration property ([429e176](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/429e176f9f4201b06817ed9c89f2ca68af6add05))

### [0.3.3](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.2...v0.3.3) (2021-02-04)


### Features

* **filters:** add language code parameter to pages.findBy filter ([81e6da9](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/81e6da96584e5ff578cccaf77706ce19adbd27ea))

### [0.3.2](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.1...v0.3.2) (2021-02-04)


### Features

* **filters:** add pages.findBy filter ([0d2b228](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/0d2b228854a6dc65b423260c52b5406f4c6d3721))

### [0.3.1](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.3.0...v0.3.1) (2021-02-04)


### Features

* **filters:** add sortBy filter ([6797bb5](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/6797bb5f74e8508f2e6a7edbafd789fb2f0e92b5))

## [0.3.0](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.16...v0.3.0) (2021-01-21)


### ⚠ BREAKING CHANGES

* **logger:** The plugin option `dataLog` was renamed to `debug`
and the log files are now stored in a subfolder
`.evelenty-plugin-kirby`, which should be added to .gitignore.

* **logger:** add more verbose logs ([b00553f](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/b00553f1a86513c5f689b814cf5dbd15a02011db))

### [0.2.16](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.15...v0.2.16) (2021-01-20)


### Features

* **filters:** add templateSiblings filter ([b81d3f4](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/b81d3f44afbe51c88bab4fd0762ae380f6da4a8d))


### Bug Fixes

* put page children into page query ([88628b1](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/88628b1a2dacafbdaaeb59596beb9c3f98e01b76))

### [0.2.15](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.14...v0.2.15) (2021-01-20)

### [0.2.14](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.13...v0.2.14) (2021-01-20)

### [0.2.13](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.12...v0.2.13) (2021-01-16)

### [0.2.12](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.11...v0.2.12) (2021-01-16)


### Bug Fixes

* **getAll:** use correct query for retrieving pages ([2b3c521](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/2b3c521736b37dd21ac12df11a08ed677d07bff0))

### [0.2.11](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.10...v0.2.11) (2021-01-16)


### Features

* add dataLog option to enable log file explicitly ([2bac0bd](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/2bac0bd5c7691cfcd7d957f642d1a067f3013577))


### Bug Fixes

* correctly handle path of input query files ([4621ea4](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/4621ea46e09474067c58e400813b35a653a29fec))

### [0.2.10](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.9...v0.2.10) (2021-01-16)


### Bug Fixes

* add missing fetch library ([1af65ae](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/1af65aec1021d6d30316b1c5ac86ae9985c9c601))

### [0.2.9](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.8...v0.2.9) (2021-01-16)


### Bug Fixes

* correctly fallback to default queries if none given ([04e459c](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/04e459c79e139a835c75a66703315f6b4b30a878))

### [0.2.8](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.7...v0.2.8) (2021-01-16)


### Bug Fixes

* ensure the plugin exports only one function per default ([448e189](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/448e189c9950981957d973ff37f6c368ec4b6bd8))
* use object for default query loading in file handler ([5eee77f](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/5eee77f7915292173edf92178500c3e89f7790b0))

### [0.2.7](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.6...v0.2.7) (2021-01-16)


### Bug Fixes

* **filters:** fix typo in files filter initialization ([efe9d3d](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/efe9d3d7ef5a413716e317836e8bb3681fbb8d39))

### [0.2.6](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.5...v0.2.6) (2021-01-16)


### Bug Fixes

* load standard kql queries via json import ([abac1c3](https://gitlab.com/renestalder/eleventy-plugin-kirby/commit/abac1c3e3d009c57bcef72147bfacf4db709c06d))

### [0.2.5](https://gitlab.com/renestalder/eleventy-plugin-kirby/compare/v0.2.4...v0.2.5) (2021-01-16)
