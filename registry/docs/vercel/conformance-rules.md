# Conformance Rules

> **🔒 Permissions Required**: Conformance

This page lists all the built-in rules that Conformance will check for by
default in your application.

#### \['Next.js'

These Conformance rules catch common issues that can happen in Next.js
applications.

| Test Name                                                                                                      | Description                                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ESLINT\_NEXT\_RULES\_REQUIRED](/docs/conformance/rules/ESLINT_NEXT_RULES_REQUIRED)                               | Requires that ESLint is configured for Next.js.                                                                                                                                    |
| [NEXTJS\_MISSING\_MODULARIZE\_IMPORTS](/docs/conformance/rules/NEXTJS_MISSING_MODULARIZE_IMPORTS)                 | Requires that Next.js applications that use libraries with barrel exports use `modularizeImports` to minimize impact on dev compilation speed and bundle size.                     |
| [NEXTJS\_MISSING\_OPTIMIZE\_PACKAGE\_IMPORTS](/docs/conformance/rules/NEXTJS_MISSING_OPTIMIZE_PACKAGE_IMPORTS)     | Requires that Next.js applications that use libraries with barrel exports use `optimizePackageImports` to minimize impact on dev compilation speed and bundle size.                |
| [NEXTJS\_MISSING\_NEXT13\_TYPESCRIPT\_PLUGIN](/docs/conformance/rules/NEXTJS_MISSING_NEXT13_TYPESCRIPT_PLUGIN)     | Applications using Next 13 should use the "next" TypeScript plugin for an improved Next.js experience.                                                                             |
| [NEXTJS\_MISSING\_REACT\_STRICT\_MODE](/docs/conformance/rules/NEXTJS_MISSING_REACT_STRICT_MODE)                   | Applications using Next.js should enable React Strict Mode to identify unsafe lifecycles and legacy API usage.                                                                     |
| [NEXTJS\_MISSING\_SECURITY\_HEADERS](/docs/conformance/rules/NEXTJS_MISSING_SECURITY_HEADERS)                     | Requires that important security headers are set correctly for Next.js apps and contain valid directives.                                                                          |
| [NEXTJS\_NO\_ASYNC\_LAYOUT](/docs/conformance/rules/NEXTJS_NO_ASYNC_LAYOUT)                                       | Ensures that the exported Next.js `layout` component and its transitive dependencies are not asynchronous, as that can block the rendering of the layout and the rest of the page. |
| [NEXTJS\_NO\_ASYNC\_PAGE](/docs/conformance/rules/NEXTJS_NO_ASYNC_PAGE)                                           | Ensures that the exported Next.js `page` component and its transitive dependencies are not asynchronous, as that blocks the rendering of the page.                                 |
| [NEXTJS\_NO\_BEFORE\_INTERACTIVE](/docs/conformance/rules/NEXTJS_NO_BEFORE_INTERACTIVE)                           | Requires review of usage of the `beforeInteractive` strategy in `Script` (`next/script`) elements as this can cause performance issues.                                            |
| [NEXTJS\_NO\_CLIENT\_DEPS\_IN\_MIDDLEWARE](/docs/conformance/rules/NEXTJS_NO_CLIENT_DEPS_IN_MIDDLEWARE)             | Disallows dependencies on client libraries to improve bundle size and execution time of Next.js middleware.                                                                        |
| [NEXTJS\_NO\_DYNAMIC\_AUTO](/docs/conformance/rules/NEXTJS_NO_DYNAMIC_AUTO)                                       | Prevent usage of `force-dynamic` as a dynamic page rendering strategy.                                                                                                             |
| [NEXTJS\_NO\_FETCH\_IN\_SERVER\_PROPS](/docs/conformance/rules/NEXTJS_NO_FETCH_IN_SERVER_PROPS)                     | Prevent relative `fetch` calls in `getServerSideProps` from being added to Next.js applications.                                                                                   |
| [NEXTJS\_NO\_GET\_INITIAL\_PROPS](/docs/conformance/rules/NEXTJS_NO_GET_INITIAL_PROPS)                             | Requires any use of `getInitialProps` in Next.js pages be reviewed and approved, and encourages using `getServerSideProps` or `getStaticProps` instead.                            |
| [NEXTJS\_NO\_PRODUCTION\_SOURCE\_MAPS](/docs/conformance/rules/NEXTJS_NO_PRODUCTION_SOURCE_MAPS)                   | Applications using Next.js should not enable production source maps so that they don't publicly share source code.                                                                 |
| [NEXTJS\_NO\_SELF\_HOSTED\_VIDEOS](/docs/conformance/rules/NEXTJS_NO_SELF_HOSTED_VIDEOS)                           | Prevent video files from being added to Next.js applications to improve performance and bandwidth usage.                                                                           |
| [NEXTJS\_NO\_TURBO\_CACHE](/docs/conformance/rules/NEXTJS_NO_TURBO_CACHE)                                         | Prevent Turborepo from caching the Next.js `.next/cache` folder to prevent an oversized cache.                                                                                     |
| [NEXTJS\_REQUIRE\_EXPLICIT\_DYNAMIC](/docs/conformance/rules/NEXTJS_REQUIRE_EXPLICIT_DYNAMIC)                     | Requires explicitly setting the `dynamic` route segment option for Next.js pages and routes.                                                                                       |
| [NEXTJS\_SAFE\_NEXT\_PUBLIC\_ENV\_USAGE](/docs/conformance/rules/NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE)                 | Usage process.env.NEXT*PUBLIC*\* environment variables must be allowlisted.                                                                                                        |
| [NEXTJS\_SAFE\_SVG\_IMAGES](/docs/conformance/rules/NEXTJS_SAFE_SVG_IMAGES)                                       | Prevent `dangerouslyAllowSVG` without Content Security Policy in Next.js applications.                                                                                             |
| [NEXTJS\_SAFE\_URL\_IMPORTS](/docs/conformance/rules/NEXTJS_SAFE_URL_IMPORTS)                                     | Prevent unsafe URL Imports from being added to Next.js applications.                                                                                                               |
| [NEXTJS\_UNNEEDED\_GET\_SERVER\_SIDE\_PROPS](/docs/conformance/rules/NEXTJS_UNNEEDED_GET_SERVER_SIDE_PROPS)         | Catches usages of `getServerSideProps` that could use static rendering instead, improving the performance of those pages.                                                          |
| [NEXTJS\_USE\_NATIVE\_FETCH](/docs/conformance/rules/NEXTJS_USE_NATIVE_FETCH)                                     | Requires using native `fetch` which Next.js provides, removing the need for third-party fetch libraries.                                                                           |
| [NEXTJS\_USE\_NEXT\_FONT](/docs/conformance/rules/NEXTJS_USE_NEXT_FONT)                                           | Requires using `next/font` (when possible), which optimizes fonts for improved privacy and performance.                                                                            |
| [NEXTJS\_USE\_NEXT\_IMAGE](/docs/conformance/rules/NEXTJS_USE_NEXT_IMAGE)                                         | Requires that `next/image` is used for all images for improved performance.                                                                                                        |
| [NEXTJS\_USE\_NEXT\_SCRIPT](/docs/conformance/rules/NEXTJS_USE_NEXT_SCRIPT)                                       | Requires that `next/script` is used for all scripts for improved performance.                                                                                                      |
| [NO\_FETCH\_FROM\_MIDDLEWARE](/docs/conformance/rules/NO_FETCH_FROM_MIDDLEWARE)                                   | Requires that any `fetch` call that is depended on transitively by Next.js middleware be reviewed and approved before use for performance reasons.                                 |
| [REACT\_NO\_STATIC\_IMPORTS\_IN\_EVENT\_HANDLERS](/docs/conformance/rules/REACT_NO_STATIC_IMPORTS_IN_EVENT_HANDLERS) | Prevent static imports that are referenced only in React event handlers from being eagerly loaded in React components.                                                             |

#### 'Performance'

These Conformance rules catch issues that negatively affect the performance
of your website.

| Test Name                                                                                                            | Description                                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [BFCACHE\_INTEGRITY\_NO\_UNLOAD\_LISTENERS](/docs/conformance/rules/BFCACHE_INTEGRITY_NO_UNLOAD_LISTENERS)               | Disallows the use of the `unload` event to eliminate a source of eviction from the browser's Back-Forward Cache.                                                                   |
| [BFCACHE\_INTEGRITY\_REQUIRE\_NOOPENER\_ATTRIBUTE](/docs/conformance/rules/BFCACHE_INTEGRITY_REQUIRE_NOOPENER_ATTRIBUTE) | Requires that links opened with `window.open` use the `noopener` attribute to eliminate a source of eviction from the browser's Back-Forward Cache.                                |
| [NEXTJS\_NO\_ASYNC\_LAYOUT](/docs/conformance/rules/NEXTJS_NO_ASYNC_LAYOUT)                                             | Ensures that the exported Next.js `layout` component and its transitive dependencies are not asynchronous, as that can block the rendering of the layout and the rest of the page. |
| [NEXTJS\_NO\_ASYNC\_PAGE](/docs/conformance/rules/NEXTJS_NO_ASYNC_PAGE)                                                 | Ensures that the exported Next.js `page` component and its transitive dependencies are not asynchronous, as that blocks the rendering of the page.                                 |
| [NEXTJS\_NO\_BEFORE\_INTERACTIVE](/docs/conformance/rules/NEXTJS_NO_BEFORE_INTERACTIVE)                                 | Requires review of usage of the `beforeInteractive` strategy in `Script` (`next/script`) elements as this can cause performance issues.                                            |
| [NEXTJS\_NO\_CLIENT\_DEPS\_IN\_MIDDLEWARE](/docs/conformance/rules/NEXTJS_NO_CLIENT_DEPS_IN_MIDDLEWARE)                   | Disallows dependencies on client libraries to improve bundle size and execution time of Next.js middleware.                                                                        |
| [NEXTJS\_NO\_DYNAMIC\_AUTO](/docs/conformance/rules/NEXTJS_NO_DYNAMIC_AUTO)                                             | Prevent usage of `force-dynamic` as a dynamic page rendering strategy.                                                                                                             |
| [NEXTJS\_NO\_FETCH\_IN\_SERVER\_PROPS](/docs/conformance/rules/NEXTJS_NO_FETCH_IN_SERVER_PROPS)                           | Prevent relative `fetch` calls in `getServerSideProps` from being added to Next.js applications.                                                                                   |
| [NEXTJS\_NO\_GET\_INITIAL\_PROPS](/docs/conformance/rules/NEXTJS_NO_GET_INITIAL_PROPS)                                   | Requires any use of `getInitialProps` in Next.js pages be reviewed and approved, and encourages using `getServerSideProps` or `getStaticProps` instead.                            |
| [NEXTJS\_REQUIRE\_EXPLICIT\_DYNAMIC](/docs/conformance/rules/NEXTJS_REQUIRE_EXPLICIT_DYNAMIC)                           | Requires explicitly setting the `dynamic` route segment option for Next.js pages and routes.                                                                                       |
| [NEXTJS\_UNNEEDED\_GET\_SERVER\_SIDE\_PROPS](/docs/conformance/rules/NEXTJS_UNNEEDED_GET_SERVER_SIDE_PROPS)               | Catches usages of `getServerSideProps` that could use static rendering instead, improving the performance of those pages.                                                          |
| [NEXTJS\_USE\_NATIVE\_FETCH](/docs/conformance/rules/NEXTJS_USE_NATIVE_FETCH)                                           | Requires using native `fetch` which Next.js provides, removing the need for third-party fetch libraries.                                                                           |
| [NEXTJS\_USE\_NEXT\_IMAGE](/docs/conformance/rules/NEXTJS_USE_NEXT_IMAGE)                                               | Requires that `next/image` is used for all images for improved performance.                                                                                                        |
| [NEXTJS\_USE\_NEXT\_SCRIPT](/docs/conformance/rules/NEXTJS_USE_NEXT_SCRIPT)                                             | Requires that `next/script` is used for all scripts for improved performance.                                                                                                      |
| [NO\_EXTERNAL\_CSS\_AT\_IMPORTS](/docs/conformance/rules/NO_EXTERNAL_CSS_AT_IMPORTS)                                     | Disallows `@import` at-rules that import from external URLs.                                                                                                                       |
| [NO\_FETCH\_FROM\_MIDDLEWARE](/docs/conformance/rules/NO_FETCH_FROM_MIDDLEWARE)                                         | Requires that any `fetch` call that is depended on transitively by Next.js middleware be reviewed and approved before use for performance reasons.                                 |
| [NO\_INLINE\_SVG](/docs/conformance/rules/NO_INLINE_SVG)                                                               | Prevent the use of `svg` tags inline.                                                                                                                                              |
| [NO\_MIXED\_ASYNC\_MODULES](/docs/conformance/rules/NO_MIXED_ASYNC_MODULES)                                             | Prevent imports to modules that contain top-level awaits in your applications.                                                                                                     |
| [NO\_POSTINSTALL\_SCRIPT](/docs/conformance/rules/NO_POSTINSTALL_SCRIPT)                                               | Prevent the use of `"postinstall"` script in packages.                                                                                                                             |
| [NO\_SERIAL\_ASYNC\_CALLS](/docs/conformance/rules/NO_SERIAL_ASYNC_CALLS)                                               | Prevent blocking serial async await calls in your applications.                                                                                                                    |
| [REACT\_NO\_STATIC\_IMPORTS\_IN\_EVENT\_HANDLERS](/docs/conformance/rules/REACT_NO_STATIC_IMPORTS_IN_EVENT_HANDLERS)       | Prevent static imports that are referenced only in React event handlers from being eagerly loaded in React components.                                                             |
| [REACT\_STABLE\_CONTEXT\_PROVIDER\_VALUE](/docs/conformance/rules/REACT_STABLE_CONTEXT_PROVIDER_VALUE)                   | Prevent non-stable values from being used in React Context providers that could cause unnecessary re-renders.                                                                      |

#### 'Security'

These Conformance rules catch issues that could become security vulnerabilities
in your application.

| Test Name                                                                                      | Description                                                                                                                              |
| :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [NEXTJS\_MISSING\_SECURITY\_HEADERS](/docs/conformance/rules/NEXTJS_MISSING_SECURITY_HEADERS)     | Requires that important security headers are set correctly for Next.js apps and contain valid directives.                                |
| [NEXTJS\_NO\_PRODUCTION\_SOURCE\_MAPS](/docs/conformance/rules/NEXTJS_NO_PRODUCTION_SOURCE_MAPS)   | Applications using Next.js should not enable production source maps so that they don't publicly share source code.                       |
| [NEXTJS\_SAFE\_NEXT\_PUBLIC\_ENV\_USAGE](/docs/conformance/rules/NEXTJS_SAFE_NEXT_PUBLIC_ENV_USAGE) | Usage process.env.NEXT*PUBLIC*\* environment variables must be allowlisted.                                                              |
| [NEXTJS\_SAFE\_SVG\_IMAGES](/docs/conformance/rules/NEXTJS_SAFE_SVG_IMAGES)                       | Prevent `dangerouslyAllowSVG` without Content Security Policy in Next.js applications.                                                   |
| [NEXTJS\_SAFE\_URL\_IMPORTS](/docs/conformance/rules/NEXTJS_SAFE_URL_IMPORTS)                     | Prevent unsafe URL Imports from being added to Next.js applications                                                                      |
| [NO\_ASSIGN\_WINDOW\_LOCATION](/docs/conformance/rules/NO_ASSIGN_WINDOW_LOCATION)                 | Prevent unsafe assignment to `window.location.href` in your application.                                                                 |
| [NO\_CORS\_HEADERS](/docs/conformance/rules/NO_CORS_HEADERS)                                     | Requires that CORS header configuration is reviewed and allowlisted since these headers can open up servers to security vulnerabilities. |
| [NO\_DANGEROUS\_HTML](/docs/conformance/rules/NO_DANGEROUS_HTML)                                 | Prevent the unsafe creation of DOM through HTML methods in your application which could lead to security vulnerabilities.                |
| [NO\_DOCUMENT\_WRITE](/docs/conformance/rules/NO_DOCUMENT_WRITE)                                 | Prevent unsafe usage of `document.write()` in your application.                                                                          |
| [NO\_EVAL](/docs/conformance/rules/NO_EVAL)                                                     | Prevent unsafe usage of `eval()` in your application since this allows arbitrary code execution.                                         |
| [NO\_VARIABLE\_IMPORT\_REFERENCES](/docs/conformance/rules/NO_VARIABLE_IMPORT_REFERENCES)         | Prevents loading of arbitrary modules from `import` or `require` statements which could lead to security vulnerabilities.                |
| [REQUIRE\_CARET\_DEPENDENCIES](/docs/conformance/rules/REQUIRE_CARET_DEPENDENCIES)               | Prevent the use of dependencies without a caret ("^") as a prefix.                                                                       |
| [SET\_COOKIE\_VALIDATION](/docs/conformance/rules/SET_COOKIE_VALIDATION)                         | Prevents usage of cookies that do not conform to the allowed cookie policy.                                                              |

#### 'Code Health']

These Conformance rules catch issues that can negatively affect your codebase
or code health.

| Test Name                                                                                                    | Description                                                                                                                                                    |
| :----------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ESLINT\_CONFIGURATION](/docs/conformance/rules/ESLINT_CONFIGURATION)                                         | Requires that a workspace package is configured with ESLint.                                                                                                   |
| [ESLINT\_REACT\_RULES\_REQUIRED](/docs/conformance/rules/ESLINT_REACT_RULES_REQUIRED)                           | Requires that ESLint is configured for React.                                                                                                                  |
| [ESLINT\_RULES\_REQUIRED](/docs/conformance/rules/ESLINT_RULES_REQUIRED)                                       | Requires that ESLint has plugins and rules configured correctly.                                                                                               |
| [NEXTJS\_MISSING\_MODULARIZE\_IMPORTS](/docs/conformance/rules/NEXTJS_MISSING_MODULARIZE_IMPORTS)               | Requires that Next.js applications that use libraries with barrel exports use `modularizeImports` to minimize impact on dev compilation speed and bundle size. |
| [NO\_ASSIGN\_WINDOW\_LOCATION](/docs/conformance/rules/NO_ASSIGN_WINDOW_LOCATION)                               | Prevent unsafe assignment to `window.location.href` in your application.                                                                                       |
| [NO\_INSTANCEOF\_ERROR](/docs/conformance/rules/NO_INSTANCEOF_ERROR)                                           | Disallows using `error instanceof Error` comparisons due to risk of false negatives.                                                                           |
| [NO\_UNNECESSARY\_PROP\_SPREADING](/docs/conformance/rules/NO_UNNECESSARY_PROP_SPREADING)                       | Prevent the use of object spreading as a prop in a JSX component                                                                                               |
| [PACKAGE\_JSON\_DESCRIPTION\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_DESCRIPTION_REQUIRED)               | Requires that every `package.json` file has the `description` field set.                                                                                       |
| [PACKAGE\_JSON\_DUPLICATE\_DEPENDENCIES](/docs/conformance/rules/PACKAGE_JSON_DUPLICATE_DEPENDENCIES)           | Found duplicate dependencies between the list of `dependencies` and `devDependencies` or `peerDependencies` in a `package.json` file.                          |
| [PACKAGE\_JSON\_NAME\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_NAME_REQUIRED)                             | Requires that every `package.json` file has the `name` field set to ensure each workspace has a unique identifier.                                             |
| [PACKAGE\_JSON\_PRIVATE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_PRIVATE_REQUIRED)                       | Requires that every `package.json` file has the `private` field set to prevent accidental publishing to npm.                                                   |
| [PACKAGE\_JSON\_SIDE\_EFFECTS\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_SIDE_EFFECTS_REQUIRED)             | Requires that every `package.json` file has the `sideEffects` field set to ensure tree-shaking works optimally.                                                |
| [PACKAGE\_JSON\_TYPE\_REQUIRED](/docs/conformance/rules/PACKAGE_JSON_TYPE_REQUIRED)                             | Requires that every `package.json` file has the `type` field set to encourage using `esm` since `commonjs` is the default.                                     |
| [PACKAGE\_MANAGEMENT\_NO\_CIRCULAR\_IMPORTS](/docs/conformance/rules/PACKAGE_MANAGEMENT_NO_CIRCULAR_IMPORTS)     | Circular imports between two files are not allowed.                                                                                                            |
| [PACKAGE\_MANAGEMENT\_NO\_UNRESOLVED\_IMPORTS](/docs/conformance/rules/PACKAGE_MANAGEMENT_NO_UNRESOLVED_IMPORTS) | Import statements that can not be resolved to a local file or a package from `package.json` dependencies are not allowed.                                      |
| [PACKAGE\_MANAGEMENT\_REQUIRED\_README](/docs/conformance/rules/PACKAGE_MANAGEMENT_REQUIRED_README)             | Requires that every workspace has a `README.md` file in the root of the workspace.                                                                             |
| [REQUIRE\_DOCS\_ON\_EXPORTED\_FUNCTIONS](/docs/conformance/rules/REQUIRE_DOCS_ON_EXPORTED_FUNCTIONS)             | Requires that all exported functions have JSDoc comments.                                                                                                      |
| [REQUIRE\_NODE\_VERSION\_FILE](/docs/conformance/rules/REQUIRE_NODE_VERSION_FILE)                               | Requires that workspaces have a valid Node.js version file (`.node-version` or `.nvmrc`) file defined.                                                         |
| [REQUIRE\_ONE\_VERSION\_POLICY](/docs/conformance/rules/REQUIRE_ONE_VERSION_POLICY)                             | Requires all dependencies in a monorepo to have the same version policy.                                                                                       |
| [TESTS\_NO\_CONDITIONAL\_ASSERTIONS](/docs/conformance/rules/TESTS_NO_CONDITIONAL_ASSERTIONS)                   | Requires that assertions are not conditional, or that `expect.assertions` is used.                                                                             |
| [TESTS\_NO\_ONLY](/docs/conformance/rules/TESTS_NO_ONLY)                                                       | Requires that focused tests (i.e. `it.only()`) are unfocused.                                                                                                  |
| [TYPESCRIPT\_CONFIGURATION](/docs/conformance/rules/TYPESCRIPT_CONFIGURATION)                                 | Requires that a workspace package that uses TypeScript files has configured TypeScript correctly for that workspace.                                           |
| [TYPESCRIPT\_ONLY](/docs/conformance/rules/TYPESCRIPT_ONLY)                                                   | Requires that a workspace package may only contain TypeScript files and no JavaScript or JSX files.                                                            |
| [WORKSPACE\_MISSING\_CONFORMANCE\_SCRIPT](/docs/conformance/rules/WORKSPACE_MISSING_CONFORMANCE_SCRIPT)         | All packages must define a `conformance` script that invokes the CLI binary.                                                                                   |
| [WORKSPACE\_MISSING\_PACKAGE\_JSON](/docs/conformance/rules/WORKSPACE_MISSING_PACKAGE_JSON)                     | All directories that match a workspace glob must include a `package.json` file.                                                                                |

title: "Connectivity"
description: "Connect your Vercel projects to backend services with static IPs and secure networking options."
last\_updated: "2026-03-08T05:03:12.943Z"
source: "https://vercel.com/docs/connectivity"

# Connectivity

Connect your projects to backend services that require IP allowlisting or private network access.

## Static IPs (shared pool)

When your database or API needs to see traffic from known IP addresses, Static IPs give you shared static egress IPs that won't change. Perfect for Pro and Enterprise teams who need IP allowlisting without the complexity.

- **Use case**: IP allowlisting for databases, APIs, and legacy systems
- **Network**: Shared VPC with subnet-level isolation
- [**Pricing**](/docs/connectivity/static-ips#pricing): /month per project + [Private Data Transfer](/docs/pricing/regional-pricing) at regional rates

[Learn more about Static IPs](/docs/connectivity/static-ips)

## Secure Compute

For when you need your own private Virtual Private Cloud (VPC). Secure Compute gives you dedicated networks with VPC peering — your infrastructure stays completely isolated from other customers.

- **Use case**: Full network isolation and VPC peering
- **Network**: Dedicated VPC per customer

[Learn more about Secure Compute](/docs/connectivity/secure-compute)

## Pricing

Both connectivity options are billed on **Private Data Transfer** priced regionally based on the [regional pricing documentation](/docs/pricing/regional-pricing).

### Understanding data transfer costs

Data transfer costs kick in for all outbound traffic from your Vercel Functions to external services:

- Database queries and responses
- API calls to third-party services
- File uploads and downloads
- Any other outbound network traffic

Keep tabs on your usage in the **Team Settings** **Usage** tab under the **Private Data Transfer** section.

title: "Secure Compute"
description: "Secure Compute provides dedicated private networks with VPC peering for Enterprise teams."
last\_updated: "2026-03-08T05:03:12.967Z"
source: "https://vercel.com/docs/connectivity/secure-compute"
