# C

## Cache Components

A feature that enables component and function-level caching using the [`"use cache"` directive](/docs/app/api-reference/directives/use-cache). Cache Components allows you to mix static, cached, and dynamic content within a single route by prerendering a static HTML shell that's served immediately, while dynamic content streams in when ready. Configure cache duration with [`cacheLife()`](/docs/app/api-reference/functions/cacheLife), tag cached data with [`cacheTag()`](/docs/app/api-reference/functions/cacheTag), and invalidate on-demand with [`updateTag()`](/docs/app/api-reference/functions/updateTag). Learn more in the [Cache Components guide](/docs/app/getting-started/cache-components).

## Catch-all Segments

Dynamic route segments that can match multiple URL parts using the `[...folder]/page.js` syntax. These segments capture all remaining URL segments and are useful for implementing features like documentation sites or file browsers. Learn more in [Dynamic Route Segments](/docs/app/api-reference/file-conventions/dynamic-routes#catch-all-segments).

## Client Bundles

JavaScript bundles sent to the browser. Next.js splits these automatically based on the [module graph](#module-graph) to reduce initial payload size and load only the necessary code for each page.

## Client Component

A React component that runs in the browser. In Next.js, Client Components can also be rendered on the server during initial page generation. They can use state, effects, event handlers, and browser APIs, and are marked with the [`"use client"` directive](#use-client-directive) at the top of a file. Learn more in [Server and Client Components](/docs/app/getting-started/server-and-client-components).

## Client-side navigation

A navigation technique where the page content updates dynamically without a full page reload. Next.js uses client-side navigation with the [`<Link>` component](/docs/app/api-reference/components/link), keeping shared layouts interactive and preserving browser state. Learn more in [Linking and Navigating](/docs/app/getting-started/linking-and-navigating#client-side-transitions).

## Code Splitting

The process of dividing your application into smaller JavaScript chunks based on routes. Instead of loading all code upfront, only the code needed for the current route is loaded, reducing initial load time. Next.js automatically performs code splitting based on routes. Learn more in the [Package Bundling guide](/docs/app/guides/package-bundling).

# D

## Dynamic rendering

See [Request-time rendering](#request-time-rendering).

## Dynamic route segments

[Route segments](#route-segment) that are generated from data at request time. Created by wrapping a folder name in square brackets (e.g., `[slug]`), they allow you to create routes from dynamic data like blog posts or product pages. Learn more in [Dynamic Route Segments](/docs/app/api-reference/file-conventions/dynamic-routes).

# E

## Environment Variables

Configuration values accessible at build time or request time. In Next.js, variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, while others are only available server-side. Learn more in [Environment Variables](/docs/app/guides/environment-variables).

## Error Boundary

A React component that catches JavaScript errors in its child component tree and displays a fallback UI. In Next.js, create an [`error.js` file](/docs/app/api-reference/file-conventions/error) to automatically wrap a route segment in an error boundary. Learn more in [Error Handling](/docs/app/getting-started/error-handling).

# F

## Font Optimization

Automatic font optimization using [`next/font`](/docs/app/api-reference/components/font). Next.js self-hosts fonts, eliminates layout shift, and applies best practices for performance. Works with Google Fonts and local font files. Learn more in [Fonts](/docs/app/getting-started/fonts).

## File-system caching

A Turbopack feature that stores compiler artifacts on disk between runs, reducing work across `next dev` or `next build` commands for significantly faster compile times. Learn more in [Turbopack FileSystem Caching](/docs/app/api-reference/config/next-config-js/turbopackFileSystemCache).

# H

## Hydration

React's process of attaching event handlers to the DOM to make server-rendered static HTML interactive. During hydration, React reconciles the server-rendered markup with the client-side JavaScript. Learn more in [Server and Client Components](/docs/app/getting-started/server-and-client-components#how-do-server-and-client-components-work-in-nextjs).

# I

## Import Aliases

Custom path mappings that provide shorthand references for frequently used directories. Import aliases reduce the complexity of relative imports and make code more readable and maintainable. Learn more in [Absolute Imports and Module Path Aliases](/docs/app/getting-started/installation#set-up-absolute-imports-and-module-path-aliases).

## Incremental Static Regeneration (ISR)

A technique that allows you to update static content without rebuilding the entire site. ISR enables you to use static generation on a per-page basis while revalidating pages in the background as traffic comes in. Learn more in the [ISR guide](/docs/app/guides/incremental-static-regeneration).

> **Good to know**: In Next.js, ISR is also known as [Revalidation](#revalidation).

## Intercepting Routes

A routing pattern that allows loading a route from another part of your application within the current layout. Useful for displaying content (like modals) without the user switching context, while keeping the URL shareable. Learn more in [Intercepting Routes](/docs/app/api-reference/file-conventions/intercepting-routes).

## Image Optimization

Automatic image optimization using the [`<Image>` component](/docs/app/api-reference/components/image). Next.js optimizes images on-demand, serves them in modern formats like WebP, and automatically handles lazy loading and responsive sizing. Learn more in [Images](/docs/app/getting-started/images).

# L

## Layout

UI that is shared between multiple pages. Layouts preserve state, remain interactive, and do not re-render on navigation. Defined by exporting a React component from a [`layout.js` file](/docs/app/api-reference/file-conventions/layout). Learn more in [Layouts and Pages](/docs/app/getting-started/layouts-and-pages).

## Loading UI

Fallback UI shown while a [route segment](#route-segment) is loading. Created by adding a [`loading.js` file](/docs/app/api-reference/file-conventions/loading) to a folder, which automatically wraps the page in a [Suspense boundary](#suspense-boundary). Learn more in [Loading UI](/docs/app/api-reference/file-conventions/loading).

# M

## Module Graph

A graph of file dependencies in your app. Each file (module) is a node, and import/export relationships form the edges. Next.js analyzes this graph to determine optimal bundling and code-splitting strategies. Learn more in [Server and Client Components](/docs/app/getting-started/server-and-client-components#reducing-js-bundle-size).

## Metadata

Information about a page used by browsers and search engines, such as title, description, and Open Graph images. In Next.js, define metadata using the [`metadata` export](/docs/app/api-reference/functions/generate-metadata) or [`generateMetadata` function](/docs/app/api-reference/functions/generate-metadata) in layout or page files. Learn more in [Metadata and OG Images](/docs/app/getting-started/metadata-and-og-images).

## Memoization

Caching the return value of a function so that calling the same function multiple times during a render pass (request) only executes it once. In Next.js, fetch requests with the same URL and options are automatically memoized. Learn more about [React Cache](https://react.dev/reference/react/cache).

## Middleware

See [Proxy](#proxy).

# N

## Not Found

A special component shown when a route doesn't exist or when the [`notFound()` function](/docs/app/api-reference/functions/not-found) is called. Created by adding a [`not-found.js` file](/docs/app/api-reference/file-conventions/not-found) to your app directory. Learn more in [Error Handling](/docs/app/getting-started/error-handling#not-found).
