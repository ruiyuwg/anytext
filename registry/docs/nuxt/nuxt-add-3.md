# nuxt add

```bash [Terminal]
npx nuxt add <TEMPLATE> <NAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--force]
```

## Arguments

| Argument   | Description                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TEMPLATE` | Specify which template to generate (options: \<api|app|app-config|component|composable|error|layer|layout|middleware|module|page|plugin|server-middleware|server-plugin|server-route|server-util>) |
| `NAME`     | Specify name of the generated file                                                                                                                                                                                |

## Options

| Option                             | Default | Description                              |
| ---------------------------------- | ------- | ---------------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory            |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level             |
| `--force`                          | `false` | Force override file if it already exists |

**Modifiers:**

Some templates support additional modifier flags to add a suffix (like `.client` or `.get`) to their name.

```bash [Terminal]
# Generates `/plugins/sockets.client.ts`
npx nuxt add plugin sockets --client
```

## `nuxt add component`

- Modifier flags: `--mode client|server` or `--client` or `--server`

```bash [Terminal]
# Generates `components/TheHeader.vue`
npx nuxt add component TheHeader
```

## `nuxt add composable`

```bash [Terminal]
# Generates `composables/foo.ts`
npx nuxt add composable foo
```

## `nuxt add layout`

```bash [Terminal]
# Generates `layouts/custom.vue`
npx nuxt add layout custom
```

## `nuxt add plugin`

- Modifier flags: `--mode client|server` or `--client`or `--server`

```bash [Terminal]
# Generates `plugins/analytics.ts`
npx nuxt add plugin analytics
```

## `nuxt add page`

```bash [Terminal]
# Generates `pages/about.vue`
npx nuxt add page about
```

```bash [Terminal]
# Generates `pages/category/[id].vue`
npx nuxt add page "category/[id]"
```

## `nuxt add middleware`

- Modifier flags: `--global`

```bash [Terminal]
# Generates `middleware/auth.ts`
npx nuxt add middleware auth
```

## `nuxt add api`

- Modifier flags: `--method` (can accept `connect`, `delete`, `get`, `head`, `options`, `patch`, `post`, `put` or `trace`) or alternatively you can directly use `--get`, `--post`, etc.

```bash [Terminal]
# Generates `server/api/hello.ts`
npx nuxt add api hello
```

## `nuxt add layer`

```bash [Terminal]
# Generates `layers/subscribe/nuxt.config.ts`
npx nuxt add layer subscribe
```

# nuxt analyze

```bash [Terminal]
npx nuxt analyze [ROOTDIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--dotenv] [-e, --extends=<layer-name>] [--name=<name>] [--no-serve]
```

The `analyze` command builds Nuxt and analyzes the production bundle (experimental).

## Arguments

| Argument      | Description                                    |
| ------------- | ---------------------------------------------- |
| `ROOTDIR="."` | Specifies the working directory (default: `.`) |

## Options

| Option                             | Default   | Description                                                                      |
| ---------------------------------- | --------- | -------------------------------------------------------------------------------- |
| `--cwd=<directory>`                |           | Specify the working directory, this takes precedence over ROOTDIR (default: `.`) |
| `--logLevel=<silent|info|verbose>` |           | Specify build-time log level                                                     |
| `--dotenv`                         |           | Path to `.env` file to load, relative to the root directory                      |
| `-e, --extends=<layer-name>`       |           | Extend from a Nuxt layer                                                         |
| `--name=<name>`                    | `default` | Name of the analysis                                                             |
| `--no-serve`                       |           | Skip serving the analysis results                                                |

::note
This command sets `process.env.NODE_ENV` to `production`.
::
