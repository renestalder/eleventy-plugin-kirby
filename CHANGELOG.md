# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
