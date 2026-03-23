# REQUIRE\_DOCS\_ON\_EXPORTED\_FUNCTIONS

> **🔒 Permissions Required**: Conformance

Adding JSDoc to exported functions helps engineers to quickly understand the
purpose and application of those functions when reviewing or using them.

This is particularly important in packages where the source code may be
minified and/or obfuscated, and can save users time by avoiding the need to
find usage information in external documentation.

For more information on JSDoc, see [Getting started with JSDoc](https://jsdoc.app/about-getting-started).

Additionally, for non-TypeScript projects, JSDoc can be used to declare type
information for function parameters and return values. For packages, these
declarations can provide type information for both JavaScript and TypeScript
consumers.

## Examples

The below function is a minimal example of a function that would be caught by
this rule.

```ts
export function appendWorld(str: string): string {
  return str + ' world';
}
```

This rule will also catch references within the same file, and different ways
of declaring functions. For example:

```ts
const appendWorld = function (str: string): string {
  return str + ' world';
};

export default appendWorld;
```

This rule non-function exports and re-exports of functions.

## How to fix

To resolve this issue, add a JSDoc comment to the exported function.

```ts
/**
 * Modifies a string by appending `' world'` to it.
 */
export function appendWorld(str: string): string {
  return str + ' world';
}
```

You can add additional information to the JSDoc comment, such as descriptions
of the function's parameters and return value.

```ts
/**
 * Modifies a string by appending `' world'` to it.
 *
 * @param str - The string to modify.
 * @returns The modified string.
 */
export function appendWorld(str: string): string {
  return str + ' world';
}
```

The example above doesn't provide type information in the JSDoc comment, as
this information is already provided by the function signature. When working
without TypeScript, you can also provide this information using JSDoc.

```js
/**
 * Modifies a string by appending `' world'` to it.
 *
 * @param {string} str - The string to modify.
 * @returns {string} The modified string.
 */
export function appendWorld(str) {
  return str + ' world';
}
```

title: "REQUIRE\_NODE\_VERSION\_FILE"
description: "Requires that workspaces have a valid Node.js version file ("
last\_updated: "2026-03-23T09:40:07.843Z"
source: "https://vercel.com/docs/conformance/rules/REQUIRE\_NODE\_VERSION\_FILE"

# REQUIRE\_NODE\_VERSION\_FILE

> **🔒 Permissions Required**: Conformance

Using a Node.js version file (`.node-version` or `.nvmrc`) ensures that all
developers and tooling (e.g., CI systems) use the same version of Node.js. This
practice helps to avoid inconsistencies between environments and can even
prevent bugs from being shipped to production.

As another benefit, committing a Node.js version file improves developer
experience, as many Node.js version management tools can automatically detect
and use the version defined in the file. This includes [GitHub Actions](https://docs.github.com/en/actions),
and popular Node.js version managers such as [`fnm`](https://github.com/Schniz/fnm)
and [`nvm`](https://github.com/nvm-sh/nvm).

This rule also validates to ensure that the version in the file is defined
in a way that is compatible with common tooling.

By default, this rule is disabled. To enable it, refer to
[customizing Conformance](/docs/conformance/customize).

## How to fix

If you hit this issue, you can resolve it by adding a Node.js version file at
the root of your workspace.

The example `.node-version` file below requires that Node.js `20.9` is used in
the workspace, allowing for any patch version (i.e. `20.9.1`). The level of
strictness can be adjusted based on your teams needs.

```text filename=".node-version"
v20.9
```

title: "REQUIRE\_ONE\_VERSION\_POLICY"
description: "Requires all dependencies in a monorepo to have the same version policy."
last\_updated: "2026-03-23T09:40:07.847Z"
source: "https://vercel.com/docs/conformance/rules/REQUIRE\_ONE\_VERSION\_POLICY"

# REQUIRE\_ONE\_VERSION\_POLICY

> **🔒 Permissions Required**: Conformance

Dependency mismatch is a common and easily preventable problem. When there
are multiple versions of a single dependency, not only is there additional complexity
in maintaining different versions of that dependency, there are also code size complications
with bundling. Having multiple versions of a given dependency will likely result in bloated
code size as each dependency version will need to be bundled independently. Having multiple
versions might also leave developers confused and lead to possible security implications.

Additionally – keeping versions consistent reduces the possibility of type mismatches across
the monorepo.

By default, this rule is disabled. Enable it by [customizing Conformance](/docs/conformance/customize).

## How to fix

Ensure all `package.json` files in your monorepo that have a `dependency` are
aligned to all have the same version. Version ranges are not always reliable, so it's recommended that
you pin all versions to the same given version to ensure consistency.

## Exceptions

Sometimes it is useful to temporarily have two or more versions of a dependency whilst incrementally
migrating a monorepo to having the same version policy. In which case, it's acceptable to allowlist
this rule on specific parts of the codebase using by [customizing Conformance](/docs/conformance/customize)
until all packages have been successfully migrated.

title: "SET\_COOKIE\_VALIDATION"
description: "Prevents usage of cookies that do not conform to the allowed cookie policy."
last\_updated: "2026-03-23T09:40:07.850Z"
source: "https://vercel.com/docs/conformance/rules/SET\_COOKIE\_VALIDATION"

# SET\_COOKIE\_VALIDATION

> **🔒 Permissions Required**: Conformance

It's a good practice to enforce a cookie policy across a workspace to ensure only
certain cookies are allowed to be set.

## How to fix

Engineers should reach out to the appropriate engineer(s) or team(s) for a
review of the defined cookie and request the cookie name be added to the
allowed cookie policy list. This can be set in the `conformance.config.jsonc` configuration
file as follows:

```json filename="conformance.config.jsonc"
"SET_COOKIE_VALIDATION": {
  "cookieAllowList": ["some-cookie-name"]
}
```

title: "TESTS\_NO\_CONDITIONAL\_ASSERTIONS"
description: "Requires that assertions are not conditional, or that expect.assertions is used."
last\_updated: "2026-03-23T09:40:07.856Z"
source: "https://vercel.com/docs/conformance/rules/TESTS\_NO\_CONDITIONAL\_ASSERTIONS"
