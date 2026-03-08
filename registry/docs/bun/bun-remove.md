# bun remove

Source: https://bun.com/docs/pm/cli/remove

Remove dependencies from your project

## Basic Usage

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun remove ts-node
```

***

## CLI Usage

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun remove <package>
```

### General Information

Print this help menu. Alias: -h

### Configuration

Specify path to config file (bunfig.toml). Alias: -c

### Package.json Interaction

Don't update package.json or save a lockfile

Save to package.json (true by default)

Add to trustedDependencies in the project's package.json and install the package(s)

### Lockfile Behavior

Write a yarn.lock file (yarn v1). Alias: -y

Disallow changes to lockfile

Save a text-based lockfile

Generate a lockfile without installing dependencies

### Dependency Filtering

Don't install devDependencies. Alias: -p

Exclude dev, optional, or peer dependencies from install

### Network & Registry

Provide a Certificate Authority signing certificate

Same as --ca, but as a file path to the certificate

Use a specific registry by default, overriding .npmrc, bunfig.toml and environment variables

### Execution Control & Validation

Don't install anything

Always request the latest versions from the registry & reinstall all dependencies. Alias: -f

Skip verifying integrity of newly downloaded packages

### Output & Logging

Don't log anything

Excessively verbose logging

Disable the progress bar

Don't print a summary

### Caching

Store & load cached data from a specific directory path

Ignore manifest cache entirely

### Script Execution

Skip lifecycle scripts in the project's package.json (dependency scripts are never run)

Maximum number of concurrent jobs for lifecycle scripts (default 5)

### Scope & Path

Install globally. Alias: -g

Set a specific cwd

### Advanced & Performance

Platform-specific optimizations for installing dependencies. Possible values: clonefile (default),
hardlink, symlink, copyfile

Maximum number of concurrent network requests (default 48)
