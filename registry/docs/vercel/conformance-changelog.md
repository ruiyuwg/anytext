# Conformance changelog

> **🔒 Permissions Required**: Conformance

## Upgrade instructions

````
```bash
pnpm i @vercel-private/conformance
```


```bash
yarn i @vercel-private/conformance
```


```bash
npm i @vercel-private/conformance
```


```bash
bun i @vercel-private/conformance
```
````

## Releases

### `1.12.3`

- Support for Turborepo v2 configuration

### `1.12.2`

- Update dependencies listed in `THIRD_PARTY_LICENSES.md` file
- Update `NEXTJS_NO_CLIENT_DEPS_IN_MIDDLEWARE` rule to not treat `react` as just a client dependency

### `1.12.1`

- Adds a `THIRD_PARTY_LICENSES.md` file listing third party licenses

### `1.12.0`

- Update `NO_SERIAL_ASYNC_CALLS` rule to highlight the awaited call expression instead of the entire function

### `1.11.0`

- Update rule logic for detecting duplicate allowlist entries based on the details field

### `1.10.3`

This patch update has the following changes:

- Optimize checking allowlists for existing Conformance issues
- Isolate some work by moving it to a worker thread
- Fix error when trying to parse empty JavaScript/TypeScript files

### `1.10.2`

This patch update has the following changes:

- Parse ESLint JSON config with a JSONC parser
- Fix retrieving latest version of CLI during `init`

### `1.10.1`

This patch update has the following changes:

- Fix updating allowlist files when entries conflict or already exist

### `1.10.0`

This minor update has the following changes:

- Replace [`NEXTJS_MISSING_MODULARIZE_IMPORTS`](/docs/conformance/rules/NEXTJS_MISSING_MODULARIZE_IMPORTS) Next.js rule with [`NEXTJS_MISSING_OPTIMIZE_PACKAGE_IMPORTS`](/docs/conformance/rules/NEXTJS_MISSING_OPTIMIZE_PACKAGE_IMPORTS)
- Fix showing error messages for rules
- Update allowlist entry details for [`REQUIRE_CARET_DEPENDENCIES`](/docs/conformance/rules/REQUIRE_CARET_DEPENDENCIES)

### `1.9.0`

This minor update has the following changes:

- Ensure in-memory objects are cleaned up after each run
- Fix detection of Next.js apps in certain edge cases
- Bump dependencies for performance and security

### `1.8.1`

This patch update has the following changes:

- Fix the init command for Yarn classic (v1)
- Update AST caching to prevent potential out of memory issues
- Fix requesting git authentication when sending Conformance metrics

### `1.8.0`

This minor update has the following changes:

- Support non-numeric Node version numbers like `lts` in [`REQUIRE_NODE_VERSION_FILE`](/docs/conformance/rules/REQUIRE_NODE_VERSION_FILE).
- Add version range support for [`forbidden-packages`](/docs/conformance/custom-rules/forbidden-packages) custom rules.
- Updates dependencies for performance and security.

New rules:

- [`REQUIRE_DOCS_ON_EXPORTED_FUNCTIONS`](/docs/conformance/rules/REQUIRE_DOCS_ON_EXPORTED_FUNCTIONS).
  Requires that all exported functions have JSDoc comments.

### `1.7.0`

This minor update captures and sends Conformance runs metrics to Vercel.
Your team will be able to view those metrics in the Vercel dashboard.

The following rules also include these fixes:

- [`NEXTJS_REQUIRE_EXPLICIT_DYNAMIC`](/docs/conformance/rules/NEXTJS_REQUIRE_EXPLICIT_DYNAMIC):
  Improved error messaging.
- [`NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE`](/docs/conformance/rules/NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE):
  Improved error messaging.

### `1.6.0`

This minor update introduces multiple new rules, fixes and improvements for
existing rules and the CLI, and updates to some dependencies for performance
and security.

Notably, this release introduces a new `needsResolution` flag. This is used
by the CLI and will be used in future metrics as a mechanism to opt-out of
further tracking of this issue.

The following new rules have been added:

- [`NO_UNNECESSARY_PROP_SPREADING`](/docs/conformance/rules/NO_UNNECESSARY_PROP_SPREADING):
  Disallows the usage of object spreading in JSX components.

The following rules had fixes and improvements:

- [`REQUIRE_CARET_DEPENDENCIES`](/docs/conformance/rules/REQUIRE_CARET_DEPENDENCIES):
  Additional cases are now covered by this rule.
- [`NO_INSTANCEOF_ERROR`](/docs/conformance/rules/NO_INSTANCEOF_ERROR):
  Multiple issues in the same file are no longer reported as a single issue.
- [`NO_INLINE_SVG`](/docs/conformance/rules/NO_INLINE_SVG):
  Multiple issues in the same file are no longer reported as a single issue.
- [`REQUIRE_ONE_VERSION_POLICY`](/docs/conformance/rules/REQUIRE_ONE_VERSION_POLICY):
  Multiple issues in the same file are now differentiated by the package name
  and the location of the entry in `package.json`.

### `1.5.0`

This minor update introduces a new rule and improvements to our telemetry.

The following new rules have been added:

- [`NO_INSTANCEOF_ERROR`](/docs/conformance/rules/NO_INSTANCEOF_ERROR):
  Disallows using `error instanceof Error` comparisons due to risk of false negatives.

### `1.4.0`

This minor update introduces multiple new rules, fixes and improvements for
existing rules and the CLI, and updates to some dependencies for performance
and security.

The following new rules have been added:

- [`NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE`](/docs/conformance/rules/NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE):
  Requires allowlist entries for any usage of `NEXT_PUBLIC_*` environment variables.
- [`NO_POSTINSTALL_SCRIPT`](/docs/conformance/rules/NO_POSTINSTALL_SCRIPT):
  Prevents the use of `"postinstall"` script in package for performance reasons.
- [`REQUIRE_CARET_DEPENDENCIES`](/docs/conformance/rules/REQUIRE_CARET_DEPENDENCIES):
  Requires that all `dependencies` and `devDependencies` have a `^` prefix.

The following rules had fixes and improvements:

- [`PACKAGE_MANAGEMENT_REQUIRED_README`](/docs/conformance/rules/PACKAGE_MANAGEMENT_REQUIRED_README):
  Lowercase `readme.md` files are now considered valid.
- [`REQUIRE_NODE_VERSION_FILE`](/docs/conformance/rules/REQUIRE_NODE_VERSION_FILE):
  Resolved an issue preventing this rule from correctly reporting issues.
- [`NO_INLINE_SVG`](/docs/conformance/rules/NO_INLINE_SVG):
  Detection logic now handles template strings alongside string literals.
- The [`forbidden-imports`](/docs/conformance/custom-rules/forbidden-imports)
  custom rule type now supports `paths` being defined in [rule configuration](/docs/conformance/custom-rules/forbidden-imports#configuring-this-rule-type).

### `1.3.0`

This minor update introduces new rules to improve Next.js app performance,
resolves an issue where TypeScript's `baseUrl` wasn't respected when traversing
files, and fixes an issue with dependency traversal which caused some rules to
return false positives in specific cases.

The following new rules have been added:

- [`NEXTJS_REQUIRE_EXPLICIT_DYNAMIC`](/docs/conformance/rules/NEXTJS_REQUIRE_EXPLICIT_DYNAMIC):
  Requires explicitly setting the `dynamic` route segment option for Next.js pages and routes.
- [`NO_INLINE_SVG`](/docs/conformance/rules/NO_INLINE_SVG):
  Prevents the use of `svg` tags inline, which can negatively impact the
  performance of both browser and server rendering.

### `1.2.1`

This patch updates some Conformance dependencies for performance and security,
and improves handling of edge case for both [`NEXTJS_NO_ASYNC_LAYOUT`](/docs/conformance/rules/NEXTJS_NO_ASYNC_LAYOUT)
and [`NEXTJS_NO_ASYNC_PAGE`](/docs/conformance/rules/NEXTJS_NO_ASYNC_PAGE).

### `1.2.0`

This minor update introduces a new rule, and improvements to both
`NEXTJS_NO_ASYNC_LAYOUT` and `NEXTJS_NO_ASYNC_PAGE`.

The following new rules have been added:

- [`REQUIRE_NODE_VERSION_FILE`](/docs/conformance/rules/REQUIRE_NODE_VERSION_FILE):
  Requires that workspaces have a valid Node.js version file (`.node-version` or `.nvmrc`) file defined.

### `1.1.0`

This minor update introduces new rules to improve Next.js app performance,
enhancements to the CLI output, and improvements to our telemetry. While
telemetry improvements are not directly user-facing, they enhance our ability
to monitor and optimize performance.

The following new rules have been added:

- [`NEXTJS_NO_ASYNC_PAGE`](/docs/conformance/rules/NEXTJS_NO_ASYNC_PAGE):
  Ensures that the exported Next.js page component and its transitive dependencies are not asynchronous,
  as that blocks the rendering of the page.
- [`NEXTJS_NO_ASYNC_LAYOUT`](/docs/conformance/rules/NEXTJS_NO_ASYNC_LAYOUT):
  Ensures that the exported Next.js layout component and its transitive dependencies are not asynchronous,
  as that can block the rendering of the layout and the rest of the page.
- [`NEXTJS_USE_NATIVE_FETCH`](/docs/conformance/rules/NEXTJS_USE_NATIVE_FETCH):
  Requires using native `fetch` which Next.js polyfills, removing the need for
  third-party fetch libraries.
- [`NEXTJS_USE_NEXT_FONT`](/docs/conformance/rules/NEXTJS_USE_NEXT_FONT):
  Requires using `next/font` (when possible), which optimizes fonts for
  improved privacy and performance.
- [`NEXTJS_USE_NEXT_IMAGE`](/docs/conformance/rules/NEXTJS_USE_NEXT_IMAGE):
  Requires that `next/image` is used for all images for improved performance.
- [`NEXTJS_USE_NEXT_SCRIPT`](/docs/conformance/rules/NEXTJS_USE_NEXT_SCRIPT):
  Requires that `next/script` is used for all scripts for improved performance.

### `1.0.0`

Initial release of Conformance.

title: "vercel-conformance"
description: "Learn how Conformance improves collaboration, productivity, and software quality at scale."
last\_updated: "2026-03-23T09:40:07.370Z"
source: "https://vercel.com/docs/conformance/cli"

# vercel-conformance

> **🔒 Permissions Required**: Conformance

The `vercel-conformance` command is used to run
[Conformance](/docs/conformance) on your code.

## Using the CLI

The Conformance CLI is separate to the [Vercel CLI](/docs/cli). However you
**must** ensure that the Vercel CLI is
[installed](/docs/cli#installing-vercel-cli) and that you are [logged
in](/docs/cli/login) to use the Conformance CLI.

## Sub-commands

The following sub-commands are available for this CLI.

### `audit`

The `audit` command runs Conformance on code without needing to install any NPM
dependencies or build any of the code. This is useful for viewing Conformance
results on a repository that you don't own and may not have permissions to
modify or build.

````
```bash
pnpm i 
```


```bash
yarn i 
```


```bash
npm i 
```


```bash
bun i 
```
````

> **⚠️ Warning:** `yarn dlx` only works with Yarn version 2 or newer, for Yarn v1 use the npx
> command.

If you would like to store the results of the conformance audit in a file, you
can redirect `stderr` to a file:

````
```bash
pnpm i 
```


```bash
yarn i 
```


```bash
npm i 
```


```bash
bun i 
```
````

### `init`

The `init` command installs Conformance in the repository. See
[Getting Started](/docs/conformance/getting-started#initialize-conformance) for more information on
using this command.

title: "forbidden-code"
description: "Learn how to set custom rules to disallow code and code patterns through string and regular expression matches."
last\_updated: "2026-03-23T09:40:07.389Z"
source: "https://vercel.com/docs/conformance/custom-rules/forbidden-code"
