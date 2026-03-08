# bun add

Source: https://bun.com/docs/pm/cli/add

Add packages to your project with Bun's fast package manager

To add a particular package:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add preact
```

To specify a version, version range, or tag:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod@3.20.0
bun add zod@^3.0.0
bun add zod@latest
```

## `--dev`

**Alias** — `--development`, `-d`, `-D`

To add a package as a dev dependency (`"devDependencies"`):

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add --dev @types/react
bun add -d @types/react
```

## `--optional`

To add a package as an optional dependency (`"optionalDependencies"`):

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add --optional lodash
```

## `--peer`

To add a package as a peer dependency (`"peerDependencies"`):

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add --peer @types/bun
```

## `--exact`

**Alias** — `-E`

To add a package and pin to the resolved version, use `--exact`. This will resolve the version of the package and add it to your `package.json` with an exact version number instead of a version range.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add react --exact
bun add react -E
```

This will add the following to your `package.json`:

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    // without --exact
    "react": "^18.2.0", // this matches >= 18.2.0 < 19.0.0

    // with --exact
    "react": "18.2.0" // this matches only 18.2.0 exactly
  }
}
```

To view a complete list of options for this command:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add --help
```

## `--global`

**Note** — This would not modify package.json of your current project folder. **Alias** - `bun add --global`, `bun add
      -g`, `bun install --global` and `bun install -g`

To install a package globally, use the `-g`/`--global` flag. This will not modify the `package.json` of your current project. Typically this is used for installing command-line tools.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add --global cowsay # or `bun add -g cowsay`
cowsay "Bun!"
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
 ______
< Bun! >
 ------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```toml bunfig.toml icon="settings" theme={"theme":{"light":"github-light","dark":"dracula"}}
[install]
# where `bun add --global` installs packages
globalDir = "~/.bun/install/global"

# where globally-installed package bins are linked
globalBinDir = "~/.bun/bin"
```

## Trusted dependencies

Unlike other npm clients, Bun does not execute arbitrary lifecycle scripts for installed dependencies, such as `postinstall`. These scripts represent a potential security risk, as they can execute arbitrary code on your machine.

To tell Bun to allow lifecycle scripts for a particular package, add the package to `trustedDependencies` in your package.json.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "name": "my-app",
  "version": "1.0.0",
  "trustedDependencies": ["my-trusted-package"] // [!code ++]
}
```

Bun reads this field and will run lifecycle scripts for `my-trusted-package`.

## Git dependencies

To add a dependency from a public or private git repository:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add git@github.com:moment/moment.git
```

To install private repositories, your system needs the appropriate SSH credentials to access the repository.

Bun supports a variety of protocols, including [`github`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#github-urls), [`git`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#git-urls-as-dependencies), `git+ssh`, `git+https`, and many more.

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    "dayjs": "git+https://github.com/iamkun/dayjs.git",
    "lodash": "git+ssh://github.com/lodash/lodash.git#4.17.21",
    "moment": "git@github.com:moment/moment.git",
    "zod": "github:colinhacks/zod"
  }
}
```

## Tarball dependencies

A package name can correspond to a publicly hosted `.tgz` file. During installation, Bun will download and install the package from the specified tarball URL, rather than from the package registry.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add zod@https://registry.npmjs.org/zod/-/zod-3.21.4.tgz
```

This will add the following line to your `package.json`:

```json package.json icon="file-json" theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  "dependencies": {
    "zod": "https://registry.npmjs.org/zod/-/zod-3.21.4.tgz"
  }
}
```

***

## CLI Usage

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add <package> <@version>
```

### Dependency Management

Don't install devDependencies. Alias: -p

Exclude dev, optional, or peer dependencies from install

Install globally. Alias: -g

Add dependency to devDependencies. Alias: -d

Add dependency to optionalDependencies

Add dependency to peerDependencies

Add the exact version instead of the ^ range. Alias: -E

Only add dependencies to package.json if they are not already present

### Project Files & Lockfiles

Write a yarn.lock file (yarn v1). Alias: -y

Don't update package.json or save a lockfile

Save to package.json (true by default)

Disallow changes to lockfile

Add to trustedDependencies in the project's package.json and install the package(s)

Save a text-based lockfile

Generate a lockfile without installing dependencies

### Installation Control

Don't install anything

Always request the latest versions from the registry & reinstall all dependencies. Alias: -f

Skip verifying integrity of newly downloaded packages

Skip lifecycle scripts in the project's package.json (dependency scripts are never run)

Recursively analyze & install dependencies of files passed as arguments (using Bun's bundler). Alias:
-a

### Network & Registry

Provide a Certificate Authority signing certificate

Same as --ca, but as a file path to the certificate

Use a specific registry by default, overriding .npmrc, bunfig.toml, and environment
variables

Maximum number of concurrent network requests (default 48)

### Performance & Resource

Platform-specific optimizations for installing dependencies. Possible values: clonefile (default),
hardlink, symlink, copyfile

Maximum number of concurrent jobs for lifecycle scripts (default 5)

### Caching

Store & load cached data from a specific directory path

Ignore manifest cache entirely

### Output & Logging

Don't log anything

Excessively verbose logging

Disable the progress bar

Don't print a summary

### Global Configuration & Context

Specify path to config file (bunfig.toml). Alias: -c

Set a specific current working directory

### Help

Print this help menu. Alias: -h
