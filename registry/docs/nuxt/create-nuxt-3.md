# create nuxt

```bash [Terminal]
npm create nuxt@latest [DIR] [--cwd=<directory>] [--logLevel=<silent|info|verbose>] [-t, --template] [-f, --force] [--offline] [--preferOffline] [--no-install] [--gitInit] [--shell] [--packageManager] [-M, --modules] [--no-modules] [--nightly]
```

The `create-nuxt` command initializes a fresh Nuxt project using [unjs/giget](https://github.com/unjs/giget){rel=""nofollow""}.

## Arguments

| Argument | Description       |
| -------- | ----------------- |
| `DIR=""` | Project directory |

## Options

| Option                             | Default | Description                                              |
| ---------------------------------- | ------- | -------------------------------------------------------- |
| `--cwd=<directory>`                | `.`     | Specify the working directory                            |
| `--logLevel=<silent|info|verbose>` |         | Specify build-time log level                             |
| `-t, --template`                   |         | Template name                                            |
| `-f, --force`                      |         | Override existing directory                              |
| `--offline`                        |         | Force offline mode                                       |
| `--preferOffline`                  |         | Prefer offline mode                                      |
| `--no-install`                     |         | Skip installing dependencies                             |
| `--gitInit`                        |         | Initialize git repository                                |
| `--shell`                          |         | Start shell after installation in project directory      |
| `--packageManager`                 |         | Package manager choice (npm, pnpm, yarn, bun)            |
| `-M, --modules`                    |         | Nuxt modules to install (comma separated without spaces) |
| `--no-modules`                     |         | Skip module installation prompt                          |
| `--nightly`                        |         | Use Nuxt nightly release channel (3x or latest)          |

## Environment variables

- `NUXI_INIT_REGISTRY`: Set to a custom template registry. ([learn more](https://github.com/unjs/giget#custom-registry){rel=""nofollow""}).
  - Default registry is loaded from [nuxt/starter/templates](https://github.com/nuxt/starter/tree/templates/templates){rel=""nofollow""}
