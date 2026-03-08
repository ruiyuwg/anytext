# bun outdated

Source: https://bun.com/docs/pm/cli/outdated

Check for outdated dependencies

Use `bun outdated` to check for outdated dependencies in your project. This command displays a table of dependencies that have newer versions available.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update    | Latest     |
| ------------------------------ | ------- | --------- | ---------- |
| @sinclair/typebox              | 0.34.15 | 0.34.16   | 0.34.16    |
| @types/bun (dev)               | 1.3.0   | 1.3.3     | 1.3.3      |
| eslint (dev)                   | 8.57.1  | 8.57.1    | 9.20.0     |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1     | 3.0.1      |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0    | 3.0.1      |
| expect-type (dev)              | 0.16.0  | 0.16.0    | 1.1.0      |
| prettier (dev)                 | 3.4.2   | 3.5.0     | 3.5.0      |
| tsup (dev)                     | 8.3.5   | 8.3.6     | 8.3.6      |
| typescript (dev)               | 5.7.2   | 5.7.3     | 5.7.3      |

```

## Version Information

The output table shows three version columns:

- **Current**: The version currently installed
- **Update**: The latest version that satisfies your package.json version range
- **Latest**: The latest version published to the registry

### Dependency Filters

`bun outdated` supports searching for outdated dependencies by package names and glob patterns.

To check if specific dependencies are outdated, pass the package names as positional arguments:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated eslint-plugin-security eslint-plugin-sonarjs
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update | Latest    |
| ------------------------------ | ------- | ------ | --------- |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1  | 3.0.1     |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0 | 3.0.1     |

```

You can also pass glob patterns to check for outdated packages:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated 'eslint*'
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update | Latest     |
| ------------------------------ | ------- | ------ | ---------- |
| eslint (dev)                   | 8.57.1  | 8.57.1 | 9.20.0     |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1  | 3.0.1      |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0 | 3.0.1      |
```

For example, to check for outdated `@types/*` packages:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated '@types/*'
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package            | Current | Update | Latest |
| ------------------ | ------- | ------ | ------ |
| @types/bun (dev)   | 1.3.0   | 1.3.3  | 1.3.3 |
```

Or to exclude all `@types/*` packages:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated '!@types/*'
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update    | Latest     |
| ------------------------------ | ------- | --------- | ---------- |
| @sinclair/typebox              | 0.34.15 | 0.34.16   | 0.34.16    |
| eslint (dev)                   | 8.57.1  | 8.57.1    | 9.20.0     |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1     | 3.0.1      |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0    | 3.0.1      |
| expect-type (dev)              | 0.16.0  | 0.16.0    | 1.1.0      |
| prettier (dev)                 | 3.4.2   | 3.5.0     | 3.5.0      |
| tsup (dev)                     | 8.3.5   | 8.3.6     | 8.3.6      |
| typescript (dev)               | 5.7.2   | 5.7.3     | 5.7.3      |
```

### Workspace Filters

Use the `--filter` flag to check for outdated dependencies in a different workspace package:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated --filter='@monorepo/types'
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package            | Current | Update | Latest |
| ------------------ | ------- | ------ | ------ |
| tsup (dev)         | 8.3.5   | 8.3.6  | 8.3.6  |
| typescript (dev)   | 5.7.2   | 5.7.3  | 5.7.3  |
```

You can pass multiple `--filter` flags to check multiple workspaces:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated --filter @monorepo/types --filter @monorepo/cli
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update | Latest     |
| ------------------------------ | ------- | ------ | ---------- |
| eslint (dev)                 	 | 8.57.1  | 8.57.1 | 9.20.0     |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1  | 3.0.1      |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0 | 3.0.1      |
| expect-type (dev)              | 0.16.0  | 0.16.0 | 1.1.0      |
| tsup (dev)                     | 8.3.5   | 8.3.6  | 8.3.6      |
| typescript (dev)               | 5.7.2   | 5.7.3  | 5.7.3      |
```

You can also pass glob patterns to filter by workspace names:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated --filter='@monorepo/{types,cli}'
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
| Package                        | Current | Update | Latest     |
| ------------------------------ | ------- | ------ | ---------- |
| eslint (dev)                   | 8.57.1  | 8.57.1 | 9.20.0     |
| eslint-plugin-security (dev)   | 2.1.1   | 2.1.1  | 3.0.1      |
| eslint-plugin-sonarjs (dev)    | 0.23.0  | 0.23.0 | 3.0.1      |
| expect-type (dev)              | 0.16.0  | 0.16.0 | 1.1.0      |
| tsup (dev)                     | 8.3.5   | 8.3.6  | 8.3.6      |
| typescript (dev)               | 5.7.2   | 5.7.3  | 5.7.3      |
```

### Catalog Dependencies

`bun outdated` supports checking catalog dependencies defined in`package.json`:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated -r
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
┌────────────────────┬─────────┬─────────┬─────────┬────────────────────────────────┐
│ Package            │ Current │ Update  │ Latest  │ Workspace                      │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ body-parser        │ 1.19.0  │ 1.19.0  │ 2.2.0   │ @test/shared                   │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ cors               │ 2.8.0   │ 2.8.0   │ 2.8.5   │ @test/shared                   │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ chalk              │ 4.0.0   │ 4.0.0   │ 5.6.2   │ @test/utils                    │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ uuid               │ 8.0.0   │ 8.0.0   │ 13.0.0  │ @test/utils                    │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ axios              │ 0.21.0  │ 0.21.0  │ 1.12.2  │ catalog (@test/app)            │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ lodash             │ 4.17.15 │ 4.17.15 │ 4.17.21 │ catalog (@test/app, @test/app) │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ react              │ 17.0.0  │ 17.0.0  │ 19.1.1  │ catalog (@test/app)            │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ react-dom          │ 17.0.0  │ 17.0.0  │ 19.1.1  │ catalog (@test/app)            │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ express            │ 4.17.0  │ 4.17.0  │ 5.1.0   │ catalog (@test/shared)         │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ moment             │ 2.24.0  │ 2.24.0  │ 2.30.1  │ catalog (@test/utils)          │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ @types/node (dev)  │ 14.0.0  │ 14.0.0  │ 24.5.2  │ @test/shared                   │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ @types/react (dev) │ 17.0.0  │ 17.0.0  │ 19.1.15 │ catalog:testing (@test/app)    │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ eslint (dev)       │ 7.0.0   │ 7.0.0   │ 9.36.0  │ catalog:testing (@test/app)    │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ typescript (dev)   │ 4.9.5   │ 4.9.5   │ 5.9.2   │ catalog:build (@test/app)      │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ jest (dev)         │ 26.0.0  │ 26.0.0  │ 30.2.0  │ catalog:testing (@test/shared) │
├────────────────────┼─────────┼─────────┼─────────┼────────────────────────────────┤
│ prettier (dev)     │ 2.0.0   │ 2.0.0   │ 3.6.2   │ catalog:build (@test/utils)    │
└────────────────────┴─────────┴─────────┴─────────┴────────────────────────────────┘
```

***

## CLI Usage

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated <filter>
```

### General Options

Specify path to config file (bunfig.toml)

Set a specific cwd

Print this help menu

Display outdated dependencies for each matching workspace

### Output & Logging

Don't log anything

Excessively verbose logging

Disable the progress bar

Don't print a summary

### Dependency Scope & Target

Don't install devDependencies

Exclude dev, optional, or peer dependencies from install

Install globally

### Lockfile & Package.json

Write a yarn.lock file (yarn v1)

Don't update package.json or save a lockfile

Save to package.json (true by default)

Disallow changes to lockfile

Save a text-based lockfile

Generate a lockfile without installing dependencies

Add to trustedDependencies in the project's package.json and install the package(s)

### Network & Registry

Provide a Certificate Authority signing certificate

Same as --ca, but as a file path to the certificate

Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables

Maximum number of concurrent network requests (default 48)

### Caching

Store & load cached data from a specific directory path

Ignore manifest cache entirely

### Execution Behavior

Don't install anything

Always request the latest versions from the registry & reinstall all dependencies

Skip verifying integrity of newly downloaded packages

Skip lifecycle scripts in the project's package.json (dependency scripts are never run)

Platform-specific optimizations for installing dependencies. Possible values: clonefile (default),
hardlink, symlink, copyfile

Maximum number of concurrent jobs for lifecycle scripts (default 5)
