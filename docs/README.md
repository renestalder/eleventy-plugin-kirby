eleventy-plugin-kirby / [Exports](modules.md)

# Eleventy plugin Kirby CMS

This is a plugin for the static-site generator
[Eleventy (11ty)](https://11ty.dev) that helps to build decoupled front-ends
based on content from [Kirby CMS](https://getkirby.com). It offers functions to
retrieve content from Kirby via it's API, generate pages from that data and adds
filters to work with the content.

**Important note**: While in it's current form it's already functional and can
be used in projects, this is in an early try-and-error phase, gradually changed
and improved for the best workflow, and thus is indented to change, including
breaking changes. If you're willing to use it in it's current form, be prepared
for bigger changes. This is currently successfully used in at least 3 projects.

The manual in the README might not be complete yet.

<!-- TOC -->

-   [Eleventy plugin Kirby CMS](#eleventy-plugin-kirby-cms)
    -   [Requirements](#requirements)
    -   [Setup](#setup)
        -   [Plugin](#plugin)
            -   [Installation](#installation)
            -   [Configuration](#configuration)
        -   [Kirby CMS API user](#kirby-cms-api-user)
    -   [Usage](#usage)
        -   [Generate all pages](#generate-all-pages)
    -   [Reference](#reference)
    -   [Development](#development)
        -   [Development environment](#development-environment)
            -   [One-time setup](#one-time-setup)
            -   [Usage](#usage-1)
        -   [Requirements to run locally without Docker](#requirements-to-run-locally-without-docker)

<!-- /TOC -->

## Requirements

1. [Node.js v14.x.x](https://nodejs.org/en/)\*
2. [`@11ty/eleventy`](https://github.com/11ty/eleventy/)
3. A Kirby CMS installation
4. [Kirby KQL Plugin](https://github.com/getkirby/kql) installed

\*_Might work with older Node.js versions too, without a garantuee_

## Setup

### Plugin

#### Installation

Then install the plugin via npm:

```sh
$ npm install eleventy-plugin-kirby
```

#### Configuration

Add the plugin to your `.eleventy.js` configuration. You need a user in your
Kirby CMS instance (see [Kirby CMS API user](#Kirby-CMS-API-user)) for read
access on the API.

Currently, the configuration can only be done via Node.js environment variables.

**Recommended way with [dotenv]()**

```js
require("dotenv").config();
const eleventyPluginKirby = require("eleventy-plugin-kirby");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyPluginKirby);
};
```

Required environment variables:

```sh
# URL to the Kirby CMS installation
API_KIRBYCMS_URL="https://example.com"

# API user
API_KIRBYCMS_USER="user@example.com"

# API user password
API_KIRBYCMS_PASSWORD="password"
```

Refer to the dotenv documentation for proper setup with the .env file.

_Using dotenv is completely optional to pass the configuration to the
environment variables_.

### Kirby CMS API user

To retrieve data from the CMS, you need a user with read access to all data
**including the panel**.

1. **Create user permission blueprint**: You'll find a prepared user blueprint
   for the permissions of such a user in `src/blueprints/users/api.yml` of this
   plugins repository, to be placed in `site/blueprints/users` of your Kirby CMS
   installation.
2. **Create a user in your CMS with the given permissions.**
3. **Pass user and password via environment variables to the Eleventy plugin,
   see [Configuration](#Configuration).**

## Usage

See [documentation](docs/modules.md) for all filters and query functions that
are available. In the following section, we highlight some useful features to
make it easier getting started with the plugin.

### Generate all pages

The intendet way to use this plugin is to let it generate all public pages for
the front-end instead of querying every page individually. In this example we
use Liquid as templating engine, but it should work with most other
[templating engines supported by Eleventy](https://www.11ty.dev/docs/languages/)
which work with the pagination option.

1. **Create `_data/kirby.js`**  
   Create a data file to retrieve all pages from Kirby. You can name it whatever
   you want. In this example we use `kirby.js` and will later refer to this as
   `kirby`.

    ```js
    const { getAll } = require("eleventy-plugin-kirby");

    module.exports = async function () {
        const data = await getAll();

        return data;
    };
    ```

2. **Create pages.liquid**  
   This is the template generating all the pages. We alias the individual page's
   data to `data` for easier access.

    ```liquid
    ---
    pagination:
        data: kirby.entities.pages
        size: 1
        alias: data
        resolve: values
        addAllPagesToCollections: true
    permalink: "{{ data._permalink }}/index.html"
    tags: "data"
    ---
    <h1>{{data.title}}</h1>
    ```

## Reference

See [documentation](docs/modules.md).

## Development

This part is for people who want to contribute to the plugin

### Development environment

The default development environment is Docker with Docker Compose. Even though
to go up and running withdocker-copose up
`don't want to use Docker, make sure the`demo/kirbycms`is served by an Apache server locally and`demo/11ty-web-frontend`
can reach it's address.project. it's not necessary to use Docker to run the
project locally, I recommend it because it comes with two services, one for for
the demo front-end and one for the dem Kirby CMS.

#### One-time setup

1. Duplicate `demo/kirbycms/.env.example` to `.env`.
2. Start the Kirby CMS

    ```sh
    $ docker-compose up kirbycms
    ```

3. Navigate to [localhost:3002/panel](http://localhost:3002/panel) and setup
   your personal, local admin CMS user.
4. Go to user accounts and add a new user named "api@example.com" with the user
   permissions "API".
5. Duplicate `demo/11ty-web-frontend/.env.example` as `.env` and fill in the
6. credentials of previously created API user.
7. Stop the Docker environment
    ```sh
    $ docker-compose down
    ```

#### Usage

```sh
$ docker-compose up
```

This starts two services: The 11ty-web-frontend
([localhost:3000](http://localhost:3000)) and the kirbycms
([localhost:3002/panel](http://localhost:3002/panel)). You're now ready to make
changes to the plugin.

### Requirements to run locally without Docker

If you don't want to use Docker, make sure the `demo/kirbycms` is served by an
Apache server locally and `demo/11ty-web-frontend` can reach it's address.

-   `demo/kirbycms` needs to be run with an Apache PHP server, e.g. Mamp.
-   `demo/11ty-web-frontend` needs to be run with the predefined Node.js
    version, see `.nvmrc`.
-   Path to Kirby CMS has to be correctly changed in `.env` of both, the
    `demo/11ty-web-frontend` and the `demo/kirbycms` folders.
