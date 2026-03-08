# deno outdated

> Check for outdated dependencies in your project and safely update them with an interactive CLI

URL: https://docs.deno.com/runtime/reference/cli/outdated

## Checking for outdated dependencies

The `outdated` subcommand checks for new versions of NPM and JSR dependencies
listed in `deno.json` or `package.json` files, and displays dependencies that
could be updated. Workspaces are fully supported, including workspaces where
some members use `package.json` and others use `deno.json`.

For example, take a project with a `deno.json` file:

```json
{
  "imports": {
    "@std/fmt": "jsr:@std/fmt@^1.0.0",
    "@std/async": "jsr:@std/async@1.0.1",
    "chalk": "npm:chalk@4"
  }
}
```

and a lockfile that has `@std/fmt` at version `1.0.0`.

```bash
$ deno outdated
┌────────────────┬─────────┬────────┬────────┐
│ Package        │ Current │ Update │ Latest │
├────────────────┼─────────┼────────┼────────┤
│ jsr:@std/fmt   │ 1.0.0   │ 1.0.3  │ 1.0.3  │
├────────────────┼─────────┼────────┼────────┤
│ jsr:@std/async │ 1.0.1   │ 1.0.1  │ 1.0.8  │
├────────────────┼─────────┼────────┼────────┤
│ npm:chalk      │ 4.1.2   │ 4.1.2  │ 5.3.0  │
└────────────────┴─────────┴────────┴────────┘
```

The `Update` column lists the newest semver-compatible version, while the
`Latest` column lists the latest version.

Notice that `jsr:@std/async` is listed, even though there is no
semver-compatible version to update to. If you would prefer to only show
packages that have new compatible versions you can pass the `--compatible` flag.

```bash
$ deno outdated --compatible
┌────────────────┬─────────┬────────┬────────┐
│ Package        │ Current │ Update │ Latest │
├────────────────┼─────────┼────────┼────────┤
│ jsr:@std/fmt   │ 1.0.0   │ 1.0.3  │ 1.0.3  │
└────────────────┴─────────┴────────┴────────┘
```

`jsr:@std/fmt` is still listed, since it could be compatibly updated to `1.0.3`,
but `jsr:@std/async` is no longer shown.

## Updating dependencies

The `outdated` subcommand can also update dependencies with the `--update` flag.
By default, it will only update dependencies to semver-compatible versions (i.e.
it won't update to a breaking version).

```bash
$ deno outdated --update
Updated 1 dependency:
 - jsr:@std/fmt 1.0.0 -> 1.0.3
```

To update to the latest versions (regardless of whether it's semver compatible),
pass the `--latest` flag.

```bash
$ deno outdated --update --latest
Updated 3 dependencies:
 - jsr:@std/async 1.0.1 -> 1.0.8
 - jsr:@std/fmt   1.0.0 -> 1.0.3
 - npm:chalk      4.1.2 -> 5.3.0
```

## Selecting packages

The `outdated` subcommand also supports selecting which packages to operate on.
This works with or without the \`--update flag.

```bash
$ deno outdated --update --latest chalk
Updated 1 dependency:
 - npm:chalk 4.1.2 -> 5.3.0
```

Multiple selectors can be passed, and wildcards (`*`) or exclusions (`!`) are
also supported.

For instance, to update all packages with the `@std` scope, except for
`@std/fmt`:

```bash
$ deno outdated --update --latest "@std/*" "!@std/fmt"
Updated 1 dependency:
 - jsr:@std/async 1.0.1 -> 1.0.8
```

Note that if you use wildcards, you will probably need to surround the argument
in quotes to prevent the shell from trying to expand them.

### Updating to specific versions

In addition to selecting packages to update, the `--update` flag also supports
selecting the new *version* specifying the version after `@`.

```bash
❯ deno outdated --update chalk@5.2 @std/async@1.0.6
Updated 2 dependencies:
 - jsr:@std/async 1.0.1 -> 1.0.6
 - npm:chalk      4.1.2 -> 5.2.0
```

## Workspaces

In a workspace setting, by default `outdated` will only operate on the *current*
workspace member.

For instance, given a workspace:

```json
{
  "workspace": ["./member-a", "./member-b"]
}
```

Running

```bash
deno outdated
```

from the `./member-a` directory will only check for outdated dependencies listed
in `./member-a/deno.json` or `./member-a/package.json`.

To include all workspace members, pass the `--recursive` flag (the `-r`
shorthand is also accepted)

```bash
deno outdated --recursive
deno outdated --update --latest -r
```

***

# deno publish

> Publish your package or workspace to the JSR registry

URL: https://docs.deno.com/runtime/reference/cli/publish

## Package Requirements

Your package must have a `name` and `version` and an `exports` field in its
`deno.json` or `jsr.json` file.

- The `name` field must be unique and follow the `@<scope_name>/<package_name>`
  convention.
- The `version` field must be a valid semver version.
- The `exports` field must point to the main entry point of the package. The
  exports field can either be specified as a single string, or as an object
  mapping entrypoint names to paths in your package.

Example:

```json title="deno.json"
{
  "name": "@scope_name/package_name",
  "version": "1.0.0",
  "exports": "./main.ts"
}
```

Before you publish your package, you must create it in the registry by visiting
[JSR - Publish a package](https://jsr.io/new).

## Examples

Publish your current workspace

```bash
deno publish
```

Publish your current workspace with a specific token, bypassing interactive
authentication

```bash
deno publish --token c00921b1-0d4f-4d18-b8c8-ac98227f9275
```

Publish and check for errors in remote modules

```bash
deno publish --check=all
```

Perform a dry run to simulate publishing.

```bash
deno publish --dry-run
```

Publish using settings from a specific configuration file

```bash
deno publish --config custom-config.json
```

***

# deno remove

> Remove a dependency from your project

URL: https://docs.deno.com/runtime/reference/cli/remove

***
