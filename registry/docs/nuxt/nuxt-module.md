# nuxt module

Nuxt provides a few utilities to work with [Nuxt modules](https://nuxt.com/modules) seamlessly.

## nuxt module add

```bash [Terminal]
npx nuxt module add <MODULENAME> [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [--skipInstall] [--skipConfig] [--dev]
```

| Argument     | Description                                                         |
| ------------ | ------------------------------------------------------------------- |
| `MODULENAME` | Specify one or more modules to install by name, separated by spaces |

| Option                             | Default | Description                         |
| ---------------------------------- | ------- | ----------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory       |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level        |
| `--skipInstall`                    |         | Skip npm install                    |
| `--skipConfig`                     |         | Skip nuxt.config.ts update          |
| `--dev`                            |         | Install modules as dev dependencies |

The command lets you install [Nuxt modules](https://nuxt.com/modules) in your application with no manual work.

When running the command, it will:

- install the module as a dependency using your package manager
- add it to your [package.json](https://nuxt.com/docs/4.x/directory-structure/package) file
- update your [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file

**Example:**

Installing the [`Pinia`](https://nuxt.com/modules/pinia) module

```bash [Terminal]
npx nuxt module add pinia
```

## nuxt module search

```bash [Terminal]
npx nuxt module search <QUERY> [--cwd=<directory>] [--nuxtVersion=<2|3>]
```

### Arguments

| Argument | Description            |
| -------- | ---------------------- |
| `QUERY`  | keywords to search for |

### Options

| Option                | Default | Description                                                                        |
| --------------------- | ------- | ---------------------------------------------------------------------------------- |
| `--cwd=<directory>`   | `.`     | Specify the working directory                                                      |
| `--nuxtVersion=<2|3>` |         | Filter by Nuxt version and list compatible modules only (auto detected by default) |

The command searches for Nuxt modules matching your query that are compatible with your Nuxt version.

**Example:**

```bash [Terminal]
npx nuxt module search pinia
```
