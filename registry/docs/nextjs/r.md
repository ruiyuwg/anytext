# R

## Redirect

Sending users from one URL to another. In Next.js, redirects can be configured in [`next.config.js`](/docs/app/api-reference/config/next-config-js/redirects), returned from [Proxy](/docs/app/api-reference/file-conventions/proxy), or triggered programmatically with the [`redirect()` function](/docs/app/api-reference/functions/redirect). Learn more in [Redirecting](/docs/app/guides/redirecting).

## Request time

The time when a user makes a request to your application. At request time, dynamic routes are rendered, cookies and headers are accessible, and request-specific data can be used.

## Request-time APIs

Functions that access request-specific data, causing a component to opt into [request-time rendering](#request-time-rendering). These include:

- [`cookies()`](/docs/app/api-reference/functions/cookies) - Access request cookies
- [`headers()`](/docs/app/api-reference/functions/headers) - Access request headers
- [`searchParams`](/docs/app/api-reference/file-conventions/page#searchparams-optional) - Access URL query parameters
- [`draftMode()`](/docs/app/api-reference/functions/draft-mode) - Enable or check draft mode

## Request-time rendering

When a component is rendered at [request time](#request-time) rather than [build time](#build-time). A component becomes dynamic when it uses [Request-time APIs](#request-time-apis).

## Revalidation

The process of updating cached data. Can be time-based (using [`cacheLife()`](/docs/app/api-reference/functions/cacheLife) to set cache duration) or on-demand (using [`cacheTag()`](/docs/app/api-reference/functions/cacheTag) to tag data, then [`updateTag()`](/docs/app/api-reference/functions/updateTag) to invalidate). Learn more in [Caching and Revalidating](/docs/app/getting-started/caching-and-revalidating).

## Rewrite

Mapping an incoming request path to a different destination path without changing the URL in the browser. Configured in [`next.config.js`](/docs/app/api-reference/config/next-config-js/rewrites) or returned from [Proxy](/docs/app/api-reference/file-conventions/proxy). Useful for proxying to external services or legacy URLs.

## Route Groups

A way to organize routes without affecting the URL structure. Created by wrapping a folder name in parentheses (e.g., `(marketing)`), route groups help organize related routes and enable per-group [layouts](#layout). Learn more in [Route Groups](/docs/app/api-reference/file-conventions/route-groups).

## Route Handler

A function that handles HTTP requests for a specific route, defined in a [`route.js` file](/docs/app/api-reference/file-conventions/route). Route Handlers use the Web Request and Response APIs and can handle `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS` methods. Learn more in [Route Handlers](/docs/app/getting-started/route-handlers).

## Route Segment

A part of the URL path (between two slashes) defined by a folder in the `app` directory. Each folder represents a segment in the URL structure. Learn more in [Project Structure](/docs/app/getting-started/project-structure).

## RSC Payload

The React Server Component Payload—a compact binary representation of the rendered React Server Components tree. Contains the rendered result of Server Components, placeholders for Client Components, and props passed between them. Learn more in [Server and Client Components](/docs/app/getting-started/server-and-client-components#how-do-server-and-client-components-work-in-nextjs).
