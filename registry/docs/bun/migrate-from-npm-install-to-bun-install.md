# Migrate from npm install to bun install

Source: https://bun.com/docs/guides/install/from-npm-install-to-bun-install

`bun install` is a Node.js compatible npm client designed to be an incredibly fast successor to npm.

We've put a lot of work into making sure that the migration path from `npm install` to `bun install` is as easy as running `bun install` instead of `npm install`.

- **Designed for Node.js & Bun**: `bun install` installs a Node.js compatible `node_modules` folder. You can use it in place of `npm install` for Node.js projects without any code changes and without using Bun's runtime.
- **Automatically converts `package-lock.json`** to bun's `bun.lock` lockfile format, preserving your existing resolved dependency versions without any manual work on your part. You can secretly use `bun install` in place of `npm install` at work without anyone noticing.
- **`.npmrc` compatible**: bun install reads npm registry configuration from npm's `.npmrc`, so you can use the same configuration for both npm and Bun.
- **Hardlinks**: On Windows and Linux, `bun install` uses hardlinks to conserve disk space and install times.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# It only takes one command to migrate
bun i

# To add dependencies:
bun i @types/bun

# To add devDependencies:
bun i -d @types/bun

# To remove a dependency:
bun rm @types/bun
```

***

## Run package.json scripts faster

Run scripts from package.json, executables from `node_modules/.bin` (sort of like `npx`), and JavaScript/TypeScript files (just like `node`) - all from a single simple command.

| NPM                | Bun              |
| ------------------ | ---------------- |
| `npm run <script>` | `bun <script>`   |
| `npm exec <bin>`   | `bun <bin>`      |
| `node <file>`      | `bun <file>`     |
| `npx <package>`    | `bunx <package>` |

When you use `bun run <executable>`, it will choose the locally-installed executable

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Run a package.json script:
bun my-script
bun run my-script

# Run an executable in node_modules/.bin:
bun my-executable # such as tsc, esbuild, etc.
bun run my-executable

# Run a JavaScript/TypeScript file:
bun ./index.ts
```

***

## Workspaces? Yes.

`bun install` supports workspaces similarly to npm, with more features.

In package.json, you can set `"workspaces"` to an array of relative paths.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "workspaces": ["packages/*", "apps/*"]
}
```

***

### Filter scripts by workspace name

In Bun, the `--filter` flag accepts a glob pattern, and will run the command concurrently for all workspace packages with a `name` that matches the pattern, respecting dependency order.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun --filter 'lib-*' my-script
# instead of:
# npm run --workspace lib-foo --workspace lib-bar my-script
```

***

## Update dependencies

To update a dependency, you can use `bun update <package>`. This will update the dependency to the latest version that satisfies the semver range specified in package.json.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Update a single dependency
bun update @types/bun

# Update all dependencies
bun update

# Ignore semver, update to the latest version
bun update @types/bun --latest

# Update a dependency to a specific version
bun update @types/bun@1.3.3

# Update all dependencies to the latest versions
bun update --latest
```

***

### View outdated dependencies

To view outdated dependencies, run `bun outdated`. This is like `npm outdated` but with more compact output.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun outdated
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
┌────────────────────────────────────────┬─────────┬────────┬────────┐
│ Package                                │ Current │ Update │ Latest │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ @types/bun (dev)                       │ 1.1.6   │ 1.1.10 │ 1.1.10 │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ @types/react (dev)                     │ 18.3.3  │ 18.3.8 │ 18.3.8 │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ @typescript-eslint/eslint-plugin (dev) │ 7.16.1  │ 7.18.0 │ 8.6.0  │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ @typescript-eslint/parser (dev)        │ 7.16.1  │ 7.18.0 │ 8.6.0  │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ @vscode/debugadapter (dev)             │ 1.66.0  │ 1.67.0 │ 1.67.0 │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ esbuild (dev)                          │ 0.21.5  │ 0.21.5 │ 0.24.0 │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ eslint (dev)                           │ 9.7.0   │ 9.11.0 │ 9.11.0 │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ mitata (dev)                           │ 0.1.11  │ 0.1.14 │ 1.0.2  │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ prettier-plugin-organize-imports (dev) │ 4.0.0   │ 4.1.0  │ 4.1.0  │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ source-map-js (dev)                    │ 1.2.0   │ 1.2.1  │ 1.2.1  │
├────────────────────────────────────────┼─────────┼────────┼────────┤
│ typescript (dev)                       │ 5.5.3   │ 5.6.2  │ 5.6.2  │
└────────────────────────────────────────┴─────────┴────────┴────────┘
```

***

## List installed packages

To list installed packages, you can use `bun pm ls`. This will list all the packages that are installed in the `node_modules` folder using Bun's lockfile as the source of truth. You can pass the `-a` flag to list all installed packages, including transitive dependencies.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# List top-level installed packages:
bun pm ls
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
my-pkg node_modules (781)
├── @types/node@20.16.5
├── @types/react@18.3.8
├── @types/react-dom@18.3.0
├── eslint@8.57.1
├── eslint-config-next@14.2.8
...
```

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# List all installed packages:
bun pm ls -a
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
my-pkg node_modules
├── @alloc/quick-lru@5.2.0
├── @isaacs/cliui@8.0.2
│   └── strip-ansi@7.1.0
│       └── ansi-regex@6.1.0
├── @jridgewell/gen-mapping@0.3.5
├── @jridgewell/resolve-uri@3.1.2
...
```

***

## Create a package tarball

To create a package tarball, you can use `bun pm pack`. This will create a tarball of the package in the current directory.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Create a tarball
bun pm pack
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Total files: 46
Shasum: 2ee19b6f0c6b001358449ca0eadead703f326216
Integrity: sha512-ZV0lzWTEkGAMz[...]Gl4f8lA9sl97g==
Unpacked size: 0.41MB
Packed size: 117.50KB
```

***

## Shebang

If the package references `node` in the `#!/usr/bin/env node` shebang, `bun run` will by default respect it and use the system's `node` executable. You can force it to use Bun's `node` by passing `--bun` to `bun run`.

When you pass `--bun` to `bun run`, we create a symlink to the locally-installed Bun executable named `"node"` in a temporary directory and add that to your `PATH` for the duration of the script's execution.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Force using Bun's runtime instead of node
bun --bun my-script

# This also works:
bun run --bun my-script
```

***

## Global installs

You can install packages globally using `bun i -g <package>`. This will install into a `.bun/install/global/node_modules` folder inside your home directory by default.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# Install a package globally
bun i -g eslint

# Run a globally-installed package without the `bun run` prefix
eslint --init
```

# Configure git to diff Bun's lockb lockfile

Source: https://bun.com/docs/guides/install/git-diff-bun-lockfile

Bun v1.1.39 introduced `bun.lock`, a JSONC formatted lockfile. `bun.lock` is human-readable and git-diffable without
configuration, at no cost to performance. In 1.2.0+ it is the default format used for new projects. [**Learn
more.**](/pm/lockfile#text-based-lockfile)

***

To teach `git` how to generate a human-readable diff of Bun's binary lockfile format (`.lockb`), add the following to your local or global `.gitattributes` file:

```js gitattributes icon="file-code" theme={"theme":{"light":"github-light","dark":"dracula"}}
*.lockb binary diff=lockb
```

***

Then add the following to you local git config with:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
git config diff.lockb.textconv bun
git config diff.lockb.binary true
```

***

To globally configure git to diff Bun's lockfile, add the following to your global git config with:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
git config --global diff.lockb.textconv bun
git config --global diff.lockb.binary true
```

***

## How this works

Why this works:

- `textconv` tells git to run bun on the file before diffing
- `binary` tells git to treat the file as binary (so it doesn't try to diff it line-by-line)

In Bun, you can execute Bun's lockfile (`bun ./bun.lockb`) to generate a human-readable version of the lockfile and `git diff` can then use that to generate a human-readable diff.

# Using bun install with Artifactory

Source: https://bun.com/docs/guides/install/jfrog-artifactory

[JFrog Artifactory](https://jfrog.com/artifactory/) is a package management system for npm, Docker, Maven, NuGet, Ruby, Helm, and more. It allows you to host your own private npm registry, npm packages, and other types of packages as well.

To use it with `bun install`, add a `bunfig.toml` file to your project with the following contents:

***

### Configure with bunfig.toml

Make sure to replace `MY_SUBDOMAIN` with your JFrog Artifactory subdomain, such as `jarred1234` and MY\_TOKEN with your JFrog Artifactory token.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install.registry]
url = "https://MY_SUBDOMAIN.jfrog.io/artifactory/api/npm/npm/_auth=MY_TOKEN"
# You can use an environment variable here
# url = "$NPM_CONFIG_REGISTRY"
```

***

### Configure with `$NPM_CONFIG_REGISTRY`

Like with npm, you can use the `NPM_CONFIG_REGISTRY` environment variable to configure JFrog Artifactory with bun install.

# Install a package under a different name

Source: https://bun.com/docs/guides/install/npm-alias

To install an npm package under an alias:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add my-custom-name@npm:zod
```

***

The `zod` package can now be imported as `my-custom-name`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { z } from "my-custom-name";

z.string();
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Configure a private registry for an organization scope with bun install

Source: https://bun.com/docs/guides/install/registry-scope

Private registries can be configured using either [`.npmrc`](/pm/npmrc) or [`bunfig.toml`](/runtime/bunfig#install-registry). While both are supported, we recommend using **bunfig.toml** for enhanced flexibility and Bun-specific options.

To configure a registry for a particular npm scope:

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install.scopes]
# as a string
"@myorg1" = "https://usertitle:password@registry.myorg.com/"

# as an object with username/password
# you can reference environment variables
"@myorg2" = {
  username = "myusername",
  password = "$npm_pass",
  url = "https://registry.myorg.com/"
}

# as an object with token
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }

```

***

Your `bunfig.toml` can reference environment variables. Bun automatically loads environment variables from `.env.local`, `.env.[NODE_ENV]`, and `.env`. See [Docs > Environment variables](/runtime/environment-variables) for more information.

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install.scopes]
"@myorg3" = { token = "$npm_token", url = "https://registry.myorg.com/" }
```

***

See [Docs > Package manager](/pm/cli/install) for complete documentation of Bun's package manager.

# Add a trusted dependency

Source: https://bun.com/docs/guides/install/trusted

Unlike other npm clients, Bun does not execute arbitrary lifecycle scripts for installed dependencies, such as `postinstall` and `node-gyp` builds. These scripts represent a potential security risk, as they can execute arbitrary code on your machine.

Bun includes a default allowlist of popular packages containing `postinstall` scripts that are known to be safe. You
can see this list [here](https://github.com/oven-sh/bun/blob/main/src/install/default-trusted-dependencies.txt). This
default list only applies to packages installed from npm. For packages from other sources (such as `file:`, `link:`,
`git:`, or `github:` dependencies), you must explicitly add them to `trustedDependencies`.

***

If you are seeing one of the following errors, you are probably trying to use a package that uses `postinstall` to work properly:

- `error: could not determine executable to run for package`
- `InvalidExe`

***

To allow Bun to execute lifecycle scripts for a specific package, add the package to `trustedDependencies` in your package.json file. You can do this automatically by running the command `bun pm trust <pkg>`.

Note that this only allows lifecycle scripts for the specific package listed in `trustedDependencies`, *not* the
dependencies of that dependency!

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "version": "1.0.0",
  "trustedDependencies": ["my-trusted-package"] // [!code ++]
}
```

***

Once this is added, run a fresh install. Bun will re-install your dependencies and properly install

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
rm -rf node_modules
rm bun.lock
bun install
```

***

See [Docs > Package manager > Trusted dependencies](/pm/lifecycle) for complete documentation of trusted dependencies.
