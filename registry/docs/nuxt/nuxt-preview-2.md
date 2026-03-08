# nuxt preview

```bash [Terminal]
npx nuxt preview [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--envName] [-e, --extends=<layer-name>] [-p, --port] [--dotenv]
```

The `preview` command starts a server to preview your Nuxt application after running the `build` command. The `start` command is an alias for `preview`. When running your application in production refer to the [Deployment section](https://nuxt.com/docs/4.x/getting-started/deployment).

## Arguments

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

## Options

| Option                             | Default | Description                                                                                                                                          |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`)                                                                     |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                                                                                         |
| `--envName`                        |         | The environment to use when resolving configuration overrides (default is `production` when building, and `development` when running the dev server) |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                                                                                             |
| `-p, --port`                       |         | Port to listen on (use `PORT` environment variable to override)                                                                                      |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                                                                                          |

This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a `.env` file or as command-line argument.

::note
For convenience, in preview mode, your [`.env`](https://nuxt.com/docs/4.x/directory-structure/env) file will be loaded into `process.env`. (However, in production you will need to ensure your environment variables are set yourself. For example, with Node.js 20+ you could do this by running `node --env-file .env .output/server/index.mjs` to start your server.)
::

# nuxt test

```bash [Terminal]
npx nuxt test [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dev] [--watch]
```

The `test` command runs tests using [`@nuxt/test-utils`](https://nuxt.com/docs/4.x/getting-started/testing). This command sets `process.env.NODE_ENV` to `test` if not already set.

## Arguments

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

## Options

| Option                             | Default | Description                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                     |
| `--dev`                            |         | Run in dev mode                                                                  |
| `--watch`                          |         | Watch mode                                                                       |

::note
This command sets `process.env.NODE_ENV` to `test`.
::

# nuxt typecheck

```bash [Terminal]
npx nuxt typecheck [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [-e, --extends=<layer-name>]
```

The `typecheck` command runs [`vue-tsc`](https://github.com/vuejs/language-tools/tree/master/packages/tsc){rel=""nofollow""} to check types throughout your app.

## Arguments

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

## Options

| Option                             | Default | Description                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |         | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                                                     |
| `--dotenv`                         |         | Path to `.env` file to load, relative to the root directory                      |
| `-e, --extends=<layer-name>`       |         | Extend from a Nuxt layer                                                         |

::note
This command sets `process.env.NODE_ENV` to `production`. To override, define `NODE_ENV` in a [`.env`](https://nuxt.com/docs/4.x/directory-structure/env) file or as a command-line argument.
::

::read-more

Read more on how to enable type-checking at build or development time.
::

# nuxt upgrade

```bash [Terminal]
npx nuxt upgrade [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dedupe] [-f, --force] [-ch, --channel=<stable|nightly|v3|v4|v4-nightly|v3-nightly>]
```

The `upgrade` command upgrades Nuxt to the latest version.

## Arguments

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

## Options

| Option                                                        | Default  | Description                                                                      |
| ------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                                           |          | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>`                            |          | Specify build-time log level                                                     |
| `--dedupe`                                                    |          | Dedupe dependencies after upgrading                                              |
| `-f, --force`                                                 |          | Force upgrade to recreate lockfile and node\_modules                             |
| `-ch, --channel=<stable|nightly|v3|v4|v4-nightly|v3-nightly>` | `stable` | Specify a channel to install from (default: stable)                              |
