# TYPESCRIPT\_ONLY

> **🔒 Permissions Required**: Conformance

[TypeScript](https://typescriptlang.org) is a superset of JavaScript that adds optional static typing. Using TypeScript in your codebase provides the following benefits:

- Type Safety: TypeScript is a strongly-typed language, which means that it
  allows you to catch errors at compile-time rather than at runtime. This can
  help you catch bugs earlier in the development process, making your code more
  reliable and easier to maintain over time.
- Tooling: TypeScript has excellent tooling support, including autocompletion,
  type checking, and refactoring tools. This can help you write code faster
  and with fewer errors.
- JavaScript Compatibility: TypeScript is a superset of JavaScript, which
  means that any valid JavaScript code is also valid TypeScript code. This
  means that you can gradually introduce TypeScript into your project without
  having to rewrite your entire codebase.
- Scalability: TypeScript is designed to work well with large-scale
  applications. With features like interfaces and classes, it allows you to
  write code that is easier to read and maintain, even as your project grows
  in complexity.

## Example

```sh
Conformance errors found!

A Conformance error occurred in test "TYPESCRIPT_ONLY".

JavaScript files are not allowed. Please convert the file to TypeScript.

To find out more information and how to fix this error, visit
/docs/conformance/rules/TYPESCRIPT_ONLY.

If this violation should be ignored, add the following entry to
/apps/docs/.allowlists/TYPESCRIPT_ONLY.allowlist.json
and get approval from the appropriate person.

{
  "testName": "TYPESCRIPT_ONLY",
  "reason": "TODO: Add reason why this violation is allowed to be ignored.",
  "location": {
    "filePath": "apps/docs/src/add-numbers.js"
  }
}
```

## How To Fix

To fix this error, you must convert the JavaScript file to TypeScript.
You can do this by changing the file extension from `.js` to `.ts` or `.jsx` to `.tsx` and
adding the appropriate type annotations.

```sh filename="diff"
--- a/apps/docs/src/add-numbers.js
+++ b/apps/docs/src/add-numbers.ts
-export function addNumbers(a, b) {
+export function addNumbers(a: number, b: number): number {
  return a + b;
}
```

## Customization

The check supports custom file globs and ignore file globs that can be specified on `conformance.config.jsonc`.
The globs take effect from the root of the workspace package.

```json filename="conformance.config.jsonc"
{
  "rules": {
    "TYPESCRIPT_ONLY": {
      "files": ["**/*.js", "**/*.jsx"],
      "ignoreFiles": ["**/*.custom-config.js"]
    }
  }
}
```

The default configuration is:

```jsonc filename="conformance.config.jsonc"
{
  "rules": {
    "TYPESCRIPT_ONLY": {
      "files": ["**/*.{cjs,mjs,js,jsx}"],
      "ignoreFiles": [
        "dist/**",
        "node_modules/**",
        ".next/**", // Next.js output
        ".eslintrc.{cjs,js}", // Common ESLint config file name
        "*.config.{cjs,mjs,js}", // Common config file name
        "*.setup.{cjs,mjs,js}", // Common setup file name
      ],
    },
  },
}
```

title: "WORKSPACE\_MISSING\_CONFORMANCE\_SCRIPT"
description: "All packages must define a conformance script that invokes the Conformance package."
last\_updated: "2026-03-08T05:03:12.906Z"
source: "https://vercel.com/docs/conformance/rules/WORKSPACE\_MISSING\_CONFORMANCE\_SCRIPT"

# WORKSPACE\_MISSING\_CONFORMANCE\_SCRIPT

> **🔒 Permissions Required**: Conformance

Conformance requires a script to exist in every workspace in the
repository. This makes sure that Conformance rules are running on all code.
This test throws an error if a workspace does not define a `conformance` script
in the `package.json` file.

## Example

A workspace contains a `package.json` file that looks like:

```json filename="package.json"
{
  "name": "test-workspace",
  "scripts": {
    "build": "tsc -b"
  }
}
```

It does not contain a `conformance` script, so this check will fail.

## How to fix

Install the `@vercel-private/conformance` package in this workspace and define
a `conformance` script in the `package.json` file.

```json filename="package.json"
{
  "name": "test-workspace",
  "scripts": {
    "build": "tsc -b",
    "conformance": "vercel conformance"
  },
  "devDependencies": {
    "@vercel-private/conformance": "^1.0.0"
  }
}
```

title: "WORKSPACE\_MISSING\_PACKAGE\_JSON"
description: "All directories that match a workspace glob must include a package.json file."
last\_updated: "2026-03-08T05:03:12.909Z"
source: "https://vercel.com/docs/conformance/rules/WORKSPACE\_MISSING\_PACKAGE\_JSON"

# WORKSPACE\_MISSING\_PACKAGE\_JSON

> **🔒 Permissions Required**: Conformance

All directories that match a glob used to configure package manager workspaces
must be defined as a package and contain a `package.json` file. This check
prevents confusion where a new directory may be placed within a directory that
is configured to be a workspace but the new directory is not actually a
workspace.

## Example

The repository configures pnpm workspaces in this file:

```yaml filename="pnpm-workspace.yaml"
packages:
  - 'apps/*'
  - 'packages/*'
```

If a directory is defined in `packages/not-a-package`, then this test will fail
saying that the `not-a-package` directory must contain a `package.json` file.

## How to fix

Directories that match a workspace glob but do not have a `package.json` file
should either be converted to a package, be moved to a different directory, or
be excluded in the workspaces configuration.

title: "Conformance Rules"
description: "Learn how Conformance improves collaboration, productivity, and software quality at scale."
last\_updated: "2026-03-08T05:03:12.937Z"
source: "https://vercel.com/docs/conformance/rules"
