# CLI Usage

```bash theme={"theme":{"light":"github-light","dark":"dracula"}}
bun patch <package>@<version>
```

### Patch Generation

Install a package containing modifications in dir

The directory to put the patch file in (only if --commit is used)

### Dependency Management

Don't install devDependencies. Alias: -p

Skip lifecycle scripts in the project's package.json (dependency scripts are never run)

Add to trustedDependencies in the project's package.json and install the package(s)

Install globally. Alias: -g

Exclude dev, optional, or peer dependencies from install

### Project Files & Lockfiles

Write a yarn.lock file (yarn v1). Alias: -y

Don't update package.json or save a lockfile

Save to package.json (true by default)

Disallow changes to lockfile

Save a text-based lockfile

Generate a lockfile without installing dependencies

### Installation Control

Platform-specific optimizations for installing dependencies. Possible values: clonefile (default),
hardlink, symlink, copyfile

Linker strategy (one of isolated or hoisted)

Don't install anything

Always request the latest versions from the registry & reinstall all dependencies. Alias: -f

Skip verifying integrity of newly downloaded packages

### Network & Registry

Provide a Certificate Authority signing certificate

Same as --ca, but as a file path to the certificate

Use a specific registry by default, overriding .npmrc, bunfig.toml, and environment
variables

Maximum number of concurrent network requests (default 48)

### Performance & Resource

Maximum number of concurrent jobs for lifecycle scripts (default 5)

### Caching

Store & load cached data from a specific directory path

Ignore manifest cache entirely

### Output & Logging

Don't log anything

Only show tarball name when packing

Excessively verbose logging

Disable the progress bar

Don't print a summary

### Platform Targeting

Override CPU architecture for optional dependencies (e.g., x64, arm64, \* for
all)

Override operating system for optional dependencies (e.g., linux, darwin, \* for
all)

### Global Configuration & Context

Specify path to config file (bunfig.toml). Alias: -c

Set a specific current working directory

### Help

Print this help menu. Alias: -h
