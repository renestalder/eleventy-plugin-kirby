# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
