# Command Line Interface (CLI)

Strapi comes with a full featured Command Line Interface (CLI) which lets you scaffold and manage your project in seconds. The CLI works with both the `yarn` and `npm` package managers.

Interactive commands such as `strapi admin:create-user` don't display prompts with `npm`. Please consider using the `yarn` package manager.

It is recommended to install Strapi locally only, which requires prefixing all of the following `strapi` commands with the package manager used for the project setup (e.g `npm run strapi help` or `yarn strapi help`) or a dedicated node package executor (e.g. `npx strapi help`).

To pass options with `npm` use the syntax: `npm run strapi <command> -- --<option>`.

To pass options with `yarn` use the syntax: `yarn strapi <command> --<option>`

ℹ️ Strapi v4 CLI commands removed from Strapi 5:

The `strapi install`, `strapi uninstall`, `strapi new`, and `strapi watch-admin` commands from Strapi v4 have been removed in Strapi 5:

| Strapi v4 command         | Strapi 5 equivalent                                                                                                                                                                                |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `strapi install [plugin]` | Use the npx command corresponding to the plugin (found on the Marketplace, see [Marketplace](/cms/plugins/installing-plugins-via-marketplace))                                                     |
| `strapi new`              | Use the equivalent yarn or npx command to create a new Strapi project (see [CLI installation guide](/cms/installation/cli))                                                                        |
| `strapi watch-admin`      | `yarn develop` or `npm run develop` always starts the Strapi server in "watch-admin" mode. To disable this in Strapi 5, run `yarn develop --no-watch-admin` or `npm run develop --no-watch-admin`. |

## strapi develop

**Alias**: `dev`

Start a Strapi application with auto-reloading enabled.

Strapi modifies/creates files at runtime and needs to restart when new files are created. To achieve this, `strapi develop` adds a file watcher and restarts the application when necessary.

Strapi also adds middlewares to support HMR (Hot Module Replacement) for the administration panel. This allows you to customize the administration panel without having to restart the application or run a separate server.

```shell
strapi develop
options: [--bundler | --open | --no-watch-admin | --no-build-admin | --polling | --debug | --silent]
```

- **strapi develop --bundler \[bundler]**
  Selects the bundler for the admin panel build (`vite` or `webpack`).
- **strapi develop --open**
  Starts your application with auto-reloading enabled & open your default browser with the administration panel running.
- **strapi develop --no-watch-admin**
  Prevents the server from auto-reload when changes are made to the admin panel code.
- **strapi develop --no-build-admin**
  Prevents the admin panel from being built when `--no-watch-admin` is enabled.
- **strapi develop --polling**
  Watches for file changes in network directories.
- **strapi develop --debug**
  Enables debugging mode with verbose logs.
- **strapi develop --silent**
  Suppresses logs.

You should never use this command to run a Strapi application in production.

## strapi start

Start a Strapi application with auto-reloading disabled.

This command is to run a Strapi application without restarts and file writes, primarily for use in production.
Certain features such as the Content-type Builder are disabled in the `strapi start` mode because they require application restarts. The `start` command can be prefaced with [environment variables](/cms/configurations/environment#strapi) to customize the application start.

## strapi build

Builds your admin panel.

```bash
strapi build
```

| Option              | Type | Description                                              |
| ------------------- | :--: | -------------------------------------------------------- |
| `-d, --debug`       |  -   | Enable debugging mode with verbose logs (default: false) |
| `--minify`          |  -   | Minify the output (default: true)                        |
| `--no-optimization` |  -   | \[DEPRECATED]: use minify instead                         |
| `--silent`          |  -   | Don't log anything (default: false)                      |
| `--sourcemaps`      |  -   | Produce sourcemaps (default: false)                      |
| `--stats`           |  -   | Print build statistics to the console (default: false)   |

## strapi login

Logs in to Strapi Cloud (see [Cloud CLI](/cloud/cli/cloud-cli#strapi-login) documentation).

## strapi logout

Logs out from Strapi Cloud (see [Cloud CLI](/cloud/cli/cloud-cli#strapi-logout) documentation).

## strapi deploy

Deploys to Strapi Cloud (see [Cloud CLI](/cloud/cli/cloud-cli#strapi-deploy) documentation).

## strapi export

[Exports your project data](/cms/features/data-management). The default settings create a `.tar` file, compressed using `gzip` and encrypted using `aes-128-ecb`.

```bash
strapi export
```

The archive contains folders such as `configuration`, `entities`, `links`, and `schemas` with data stored in

## strapi openapi generate

[Generate OpenAPI specifications](/cms/api/openapi) for your Strapi application.

```bash
strapi openapi generate
```

| Option     | Type     | Default               | Description                                      |
| ---------- | -------- | --------------------- | ------------------------------------------------ |
| `--output` | `string` | `./openapi-spec.json` | Output file path for the generated specification |

### Examples

## strapi templates:generate

Create a template from the current Strapi project.

```bash
strapi templates:generate <path>
```

- **strapi templates:generate \<path>**
  Generates a Strapi template at `<path>`

  Example: `strapi templates:generate ../strapi-template-name` will copy the required files and folders to a `template` directory inside `../strapi-template-name`

## strapi ts:generate-types

Generate [TypeScript](/cms/typescript) typings for the project schemas.

```bash
strapi ts:generate-types
```

- **strapi ts:generate-types --debug**
  Generate typings with the debug mode enabled, displaying a detailed table of the generated schemas.
- **strapi ts:generate-types --silent** or **strapi ts:generate-types -s**
  Generate typings with the silent mode enabled, completely removing all the logs in the terminal. Cannot be combined with `debug`
- **strapi ts:generate-types --out-dir \<path>** or **strapi ts:generate-types -o \<path>**
  Generate typings specifying the output directory in which the file will be created.

Strapi requires the project types to be generated in the `types` directory for them to work. The `--out-dir` option should not be used for most cases. However, it can be useful for cases such as generating a second copy to compare the difference between your existing and updated types after changing your content structure.

## strapi routes:list

Display a list of all the available [routes](/cms/backend-customization/routes).

```bash
strapi routes:list
```

## strapi policies:list

Display a list of all the registered [policies](/cms/backend-customization/policies).

```bash
strapi policies:list
```

## strapi middlewares:list

Display a list of all the registered [middlewares](/cms/backend-customization/middlewares).

```bash
strapi middlewares:list
```

## strapi content-types:list

Display a list of all the existing [content-types](/cms/backend-customization/models).

```bash
strapi content-types:list
```

## strapi hooks:list

Display a list of all the available hooks.

```bash
strapi hooks:list
```

## strapi controllers:list

Display a list of all the registered [controllers](/cms/backend-customization/controllers).

```bash
strapi controllers:list
```

## strapi services:list

Display a list of all the registered [services](/cms/backend-customization/services).

```bash
strapi services:list
```

## strapi telemetry:disable

Disable data collection for the project (see [Usage Information](/cms/usage-information)).

```bash
strapi telemetry:disable
```

## strapi telemetry:enable

Re-enable data collection for the project after it was disabled (see [Usage Information](/cms/usage-information)).

```bash
strapi telemetry:enable
```

## strapi console

Start the server and evaluate commands in your application in real time.

```bash
strapi console
```

The `console` command compiles and loads your application, starts the server in the background, then opens a Node.js . The REPL provides a prompt based on your application's name and gives access to all Strapi APIs through the global `strapi` object. Closing the REPL by pressing `Ctrl-C` twice gracefully stops the server.

### Available helpers

The `strapi` object exposes the following getters and methods to interact with your application:

- `strapi.services` and `strapi.service(uid)` to use [services](/cms/backend-customization/services)
- `strapi.controllers` and `strapi.controller(uid)` to call [controllers](/cms/backend-customization/controllers)
- `strapi.contentTypes` and `strapi.contentType(uid)` to inspect [content-types](/cms/backend-customization/models)
- `strapi.components` to list components
- `strapi.policies` and `strapi.policy(name)` for [policies](/cms/backend-customization/policies)
- `strapi.middlewares` and `strapi.middleware(name)` for [middlewares](/cms/backend-customization/middlewares)
- `strapi.plugins` and `strapi.plugin(name)` for plugins
- `strapi.hooks` and `strapi.hook(name)` for hooks
- `strapi.apis` and `strapi.api(name)` for APIs
- `strapi.db` to directly query the database through the [Query Engine API](/cms/api/query-engine), for example as follows:
  ```js
  await strapi.db.query('api::article.article').findMany();
  ```

Use this environment to test code and inspect your project with direct access to all Strapi APIs.

Strapi uses a Node.js feature called  to make the context available anywhere.

## strapi version

Print the currently installed Strapi version.
It will output the current globally installed version if this command is strapi is installed globally, or the current version of Strapi within a Strapi project if the command is run from a given folder containing a Strapi project.

```bash
strapi version
```

## strapi help

List CLI commands.

```bash
strapi help
```

# Configurations

Source: //cms/configurations
