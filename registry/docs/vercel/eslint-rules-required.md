# ESLINT\_RULES\_REQUIRED

> **🔒 Permissions Required**: Conformance

This Conformance check requires that ESLint plugins are configured correctly
in your application, including:

- [@typescript-eslint](https://typescript-eslint.io/)
- [eslint-comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/)
- [import](https://github.com/import-js/eslint-plugin-import)

These plugins help to catch common issues, and ensure that ESLint is set
up to work with TypeScript where applicable.

## Example

```sh
A Conformance error occurred in test "ESLINT_RULES_REQUIRED".

These ESLint plugins must have rules configured to run: @typescript-eslint and import

To find out more information and how to fix this error, visit
https://vercel.com/docs/conformance/rules/ESLINT_RULES_REQUIRED.

If this violation should be ignored, add the following entry to
/apps/dashboard/.allowlists/ESLINT_RULES_REQUIRED.allowlist.json and
get approval from the appropriate person.

{
  "testName": "ESLINT_RULES_REQUIRED",
  "reason": "TODO: Add reason why this violation is allowed to be ignored.",
  "location": {
    "workspace": "dashboard"
  },
}
```

This check requires that certain ESLint plugins are installed and rules within
those plugins are configured to be errors. If you are missing required plugins,
you will receive an error such as:

```sh
ESLint configuration is missing required security plugins:
  Missing plugins: eslint-comments
  Registered plugins: import and @typescript-eslint
```

If all the required plugins are installed but some rules are not configured to
run or configured to be errors, you will receive an error such as:

```sh
`eslint-comments/no-unlimited-disable` must be specified as an error in the ESLint configuration, but is specified as off.
```

As a part of this test, some rules are forbidden from being disabled. If you
disable those rules, you will receive an error such as:

```sh
Disabling these ESLint rules is not allowed.
Please see the ESLint documentation for each rule for how to fix.
eslint-comments/disable-enable-pair
eslint-comments/no-restricted-disable
```

For more information on ESLint plugins and rules, see [plugins](https://eslint.org/docs/latest/user-guide/configuring/plugins) and [rules](https://eslint.org/docs/latest/user-guide/configuring/rules).

## How To Fix

The recommended approach for configuring ESLint in a monorepo is to have a
shared ESLint config in an internal package. See the [Turbo docs on ESLint](https://turborepo.com/docs/handbook/linting/eslint) to get started.

Once your monorepo has a shared ESLint config, you can add a `.eslintrc.cjs`
file to the root folder of your workspace with the contents:

```js copy filename=".eslintrc.cjs"
module.exports = {
  root: true,
  extends: ['eslint-config-custom/base'],
};
```

You should also add `"eslint-config-custom": "workspace:*"` to your
`devDependencies`.

title: "NEXTJS\_MISSING\_MODULARIZE\_IMPORTS"
description: "modularizeImports can improve dev compilation speed for packages that use barrel files."
last\_updated: "2026-03-08T05:03:12.648Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_MISSING\_MODULARIZE\_IMPORTS"

# NEXTJS\_MISSING\_MODULARIZE\_IMPORTS

> **🔒 Permissions Required**: Conformance

`modularizeImports` is a feature of Next 13 that can reduce dev compilation times
when importing packages that are exported as barrel files. Barrel files are
convenient ways to export code from a package from a single file to make it
straightforward to import any of the code from the package. However, since they export a
lot of code from the same file, importing these packages can cause tools to do
a lot of additional work analyzing files that are unused in the application.

## How to fix

To fix this, you can add a `modularizeImports` config to `next.config.js` for
the package that uses barrel files. For example:

```js filename="next.config.js"
modularizeImports: {
  lodash: {
    transform: 'lodash/{{member}}';
  }
}
```

The exact format of the transform may differ by package, so double check how
the package uses barrel files first.

See the [Next.js docs](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports) for
more information.

## Custom configuration

You can also specify required `modularizeImports` config for your own packages.

In your `conformance.config.jsonc` file, add:

```js filename="conformance.config.jsonc"
NEXTJS_MISSING_MODULARIZE_IMPORTS: {
  requiredModularizeImports: [
    {
      moduleDependency: 'your-package-name',
      requiredConfig: {
        transform: 'your-package-name/{{member}}',
      },
    },
  ];
}
```

This will require that any workspace in your monorepo that uses the
`your-package-name` package must use the provided `modularizeImports` config
in their `next.config.js` file.

See [Customizing Conformance](/docs/conformance/customize) for more information.

title: "NEXTJS\_MISSING\_NEXT13\_TYPESCRIPT\_PLUGIN"
description: "Applications using Next 13 should use the "
last\_updated: "2026-03-08T05:03:12.650Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_MISSING\_NEXT13\_TYPESCRIPT\_PLUGIN"

# NEXTJS\_MISSING\_NEXT13\_TYPESCRIPT\_PLUGIN

> **🔒 Permissions Required**: Conformance

Next 13 introduced a TypeScript plugin to provide richer information for
Next.js applications using TypeScript. See the [Next.js docs](https://nextjs.org/docs/app/building-your-application/configuring/typescript#using-the-typescript-plugin) for more information.

## How to fix

Add the following to `plugins` in the `compilerOptions` of your `tsconfig.json`
file.

```json filename="tsconfig.json"
  "compilerOptions": {
    "plugins": [{ "name": "next" }]
  }
```

title: "NEXTJS\_MISSING\_OPTIMIZE\_PACKAGE\_IMPORTS"
description: "optimizePackageImports improves compilation speed for packages that use barrel files or export many modules."
last\_updated: "2026-03-08T05:03:12.654Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_MISSING\_OPTIMIZE\_PACKAGE\_IMPORTS"

# NEXTJS\_MISSING\_OPTIMIZE\_PACKAGE\_IMPORTS

> **🔒 Permissions Required**: Conformance

[`optimizePackageImports`](https://nextjs.org/docs/pages/api-reference/next-config-js/optimizePackageImports)
is a feature added in Next 13.5 that improves compilation speed when importing packages that use barrel
exports and export many named exports. This replaces the [`modularizeImports`](https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports)
configuration option as it optimizes many of the most popular open source libraries automatically.

Barrel files make the process of exporting code from a package convenient by allowing all the code to be exported from a single file. This makes it easier to import any part of the package into your application. However, since they export a lot of code from the same file, importing these packages can cause tools to do additional work analyzing files that are unused in the application.

For further reading, see:

- [How we optimized package imports in Next.js](https://vercel.com/blog/how-we-optimized-package-imports-in-next-js)
- [`optimizePackageImports`](https://nextjs.org/docs/pages/api-reference/next-config-js/optimizePackageImports)

> **⚠️ Warning:** As of Next.js 14.2.3, this configuration option is still experimental. Check
> the Next.js documentation for the latest information here:
> [`optimizePackageImports`](https://nextjs.org/docs/pages/api-reference/next-config-js/optimizePackageImports).

## How to fix

To fix this, you can add a `modularizeImports` config to `next.config.js` for
the package that uses barrel files. For example:

```js filename="next.config.js"
experimental: {
  optimizePackageImports: ['@vercel/geistcn/components'];
}
```

title: "NEXTJS\_MISSING\_REACT\_STRICT\_MODE"
description: "Applications using Next.js should enable React Strict Mode"
last\_updated: "2026-03-08T05:03:12.674Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_MISSING\_REACT\_STRICT\_MODE"

# NEXTJS\_MISSING\_REACT\_STRICT\_MODE

> **🔒 Permissions Required**: Conformance

We strongly suggest you enable Strict Mode in your Next.js application
to better prepare your application for the future of React. See the [Next.js doc on React Strict Mode](https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode)
for more information.

## How to fix

Add the following to your `next.config.js` file.

```json filename="next.config.js"
module.exports = {
  reactStrictMode: true,
}
```

title: "NEXTJS\_MISSING\_SECURITY\_HEADERS"
description: "Requires that security headers are set correctly for Next.js apps and contain valid directives."
last\_updated: "2026-03-08T05:03:12.678Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_MISSING\_SECURITY\_HEADERS"

# NEXTJS\_MISSING\_SECURITY\_HEADERS

> **🔒 Permissions Required**: Conformance

Security headers are important to set to improve the security of your application.
Security headers can be set for all routes in \[`next.config.js` files]
(https://nextjs.org/docs/advanced-features/security-headers). This
conformance check requires that the security headers are set and use a valid
value.

Required headers:

- Content-Security-Policy
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Example

```sh
Conformance errors found!

A Conformance error occurred in test "NEXTJS_MISSING_SECURITY_HEADERS".

The security header "Strict-Transport-Security" is not set correctly. The "includeSubDomains" directive should be used in conjunction with the "preload" directive.

To find out more information and how to fix this error, visit
/docs/conformance/rules/NEXTJS_MISSING_SECURITY_HEADERS.

If this violation should be ignored, add the following entry to
/apps/docs/.allowlists/NEXTJS_MISSING_SECURITY_HEADERS.allowlist.json
and get approval from the appropriate person.

{
  "testName": "NEXTJS_MISSING_SECURITY_HEADERS",
  "reason": "TODO: Add reason why this violation is allowed to be ignored.",
  "location": {
    "workspace": "docs"
  },
  "details": {
    "header": "Strict-Transport-Security"
  }
}
```

## How to fix

Follow the [Next.js security headers documentation](https://nextjs.org/docs/advanced-features/security-headers)
to fix this Conformance test. That document will walk through each of the
headers and also links to further documentation to understand what the headers
do and how to set the best values for your application.

title: "NEXTJS\_NO\_ASYNC\_LAYOUT"
description: "Ensures that the exported Next.js "
last\_updated: "2026-03-08T05:03:12.690Z"
source: "https://vercel.com/docs/conformance/rules/NEXTJS\_NO\_ASYNC\_LAYOUT"
