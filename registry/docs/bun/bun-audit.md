# bun audit

Source: https://bun.com/docs/pm/cli/audit

Check your installed packages for known security vulnerabilities

Run the command in a project with a `bun.lock` file:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun audit
```

Bun sends the list of installed packages and versions to NPM, and prints a report of any vulnerabilities that were found. Packages installed from registries other than the default registry are skipped.

If no vulnerabilities are found, the command prints:

```
No vulnerabilities found
```

When vulnerabilities are detected, each affected package is listed along with the severity, a short description and a link to the advisory. At the end of the report Bun prints a summary and hints for updating:

```
3 vulnerabilities (1 high, 2 moderate)
To update all dependencies to the latest compatible versions:
  bun update
To update all dependencies to the latest versions (including breaking changes):
  bun update --latest
```

### Filtering options

**`--audit-level=<low|moderate|high|critical>`** - Only show vulnerabilities at this severity level or higher:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun audit --audit-level=high
```

**`--prod`** - Audit only production dependencies (excludes devDependencies):

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun audit --prod
```

**`--ignore <CVE>`** - Ignore specific CVEs (can be used multiple times):

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun audit --ignore CVE-2022-25883 --ignore CVE-2023-26136
```

### `--json`

Use the `--json` flag to print the raw JSON response from the registry instead of the formatted report:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun audit --json
```

### Exit code

`bun audit` will exit with code `0` if no vulnerabilities are found and `1` if the report lists any vulnerabilities. This will still happen even if `--json` is passed.

# bun info

Source: https://bun.com/docs/pm/cli/info

Display package metadata from the npm registry

`bun info` displays package metadata from the npm registry.

## Usage

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun info react
```

This will display information about the `react` package, including its latest version, description, homepage, dependencies, and more.

## Viewing specific versions

To view information about a specific version:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun info react@18.0.0
```

## Viewing specific properties

You can also query specific properties from the package metadata:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun info react version
bun info react dependencies
bun info react repository.url
```

## JSON output

To get the output in JSON format, use the `--json` flag:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun info react --json
```

## Alias

`bun pm view` is an alias for `bun info`:

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun pm view react  # equivalent to: bun info react
```

## Examples

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
# View basic package information
bun info is-number

# View a specific version
bun info is-number@7.0.0

# View all available versions
bun info is-number versions

# View package dependencies
bun info express dependencies

# View package homepage
bun info lodash homepage

# Get JSON output
bun info react --json
```
