# S

## Server Component

The default component type in the App Router. Server Components render on the server, can fetch data directly, and don't add to the client JavaScript bundle. They cannot use state or browser APIs. Learn more in [Server and Client Components](/docs/app/getting-started/server-and-client-components).

## Server Action

A [Server Function](#server-function) that is passed to a Client Component as a prop or bound to a form action. Server Actions are commonly used for form submissions and data mutations. Learn more in [Server Actions and Mutations](/docs/app/getting-started/updating-data).

## Server Function

An asynchronous function that runs on the server, marked with the [`"use server"` directive](/docs/app/api-reference/directives/use-server). Server Functions can be invoked from Client Components. When passed as a prop to a Client Component or bound to a form action, they are called [Server Actions](#server-action). Learn more in [React Server Functions](https://react.dev/reference/rsc/server-functions).

## Static Export

A deployment mode that generates a fully static site with HTML, CSS, and JavaScript files. Enabled by setting `output: 'export'` in `next.config.js`. Static exports can be hosted on any static file server without a Node.js server. Learn more in [Static Exports](/docs/app/guides/static-exports).

## Static rendering

See [Prerendering](#prerendering).

## Static Assets

Files such as images, fonts, videos, and other media that are served directly without processing. Static assets are typically stored in the `public` directory and referenced by their relative paths. Learn more in [Static Assets](/docs/app/api-reference/file-conventions/public-folder).

## Static Shell

The prerendered HTML structure of a page that's served immediately to the browser. With [Partial Prerendering](#partial-prerendering-ppr), the static shell includes all statically renderable content plus [Suspense boundary](#suspense-boundary) fallbacks for dynamic content that streams in later.

## Streaming

A technique that allows the server to send parts of a page to the client as they become ready, rather than waiting for the entire page to render. Enabled automatically with [`loading.js`](/docs/app/api-reference/file-conventions/loading) or manual `<Suspense>` boundaries. Learn more in [Linking and Navigating - Streaming](/docs/app/getting-started/linking-and-navigating#streaming).

## Suspense boundary

A React [`<Suspense>`](https://react.dev/reference/react/Suspense) component that wraps async content and displays fallback UI while it loads. In Next.js, Suspense boundaries define where the [static shell](#static-shell) ends and [streaming](#streaming) begins, enabling [Partial Prerendering](#partial-prerendering-ppr).

# T

## Turbopack

A fast, Rust-based bundler built for Next.js. Turbopack is the default bundler for `next dev` and available for `next build`. It provides significantly faster compilation times compared to Webpack. Learn more in [Turbopack](/docs/app/api-reference/turbopack).

## Tree Shaking

The process of removing unused code from your JavaScript bundles during the build process. Next.js automatically tree-shakes your code to reduce bundle sizes. Learn more in the [Package Bundling guide](/docs/app/guides/package-bundling).

# U

## `"use cache"` Directive

A directive that marks a component or function as cacheable. It can be placed at the top of a file to indicate that all exports in the file are cacheable, or inline at the top of a function or component to mark that specific scope as cacheable. Learn more in the [`"use cache"` reference](/docs/app/api-reference/directives/use-cache).

## `"use client"` Directive

A special React directive that marks the boundary between server and client code. It must be placed at the top of a file, before any imports or other code. It indicates that React Components, helper functions, variable declarations, and all imported dependencies should be included in the [client bundle](#client-bundles). Learn more in the [`"use client"` reference](/docs/app/api-reference/directives/use-client).

## `"use server"` Directive

A directive that marks a function as a [Server Function](#server-function) that can be called from client-side code. It can be placed at the top of a file to indicate that all exports in the file are Server Functions, or inline at the top of a function to mark that specific function. Learn more in the [`"use server"` reference](/docs/app/api-reference/directives/use-server).

# V

## Version skew

After a new version of your application is deployed, clients that are still active may reference JavaScript, CSS, or data from an older build. This mismatch between client and server versions is called version skew, and it can cause missing assets, Server Action errors, and navigation failures. Next.js uses [`deploymentId`](/docs/app/api-reference/config/next-config-js/deploymentId) to detect and handle version skew. Learn more in [Self-Hosting - Version Skew](/docs/app/guides/self-hosting#version-skew).

# Getting Started

- [Installation](/docs/pages/getting-started/installation)
- [Project Structure](/docs/pages/getting-started/project-structure)
- [Images](/docs/pages/getting-started/images)
- [Fonts](/docs/pages/getting-started/fonts)
- [CSS](/docs/pages/getting-started/css)
- [Deploying](/docs/pages/getting-started/deploying)
