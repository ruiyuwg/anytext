# P

## Private Folders

Folders prefixed with an underscore (e.g., `_components`) that are excluded from the routing system. These folders are used for code organization and shared utilities without creating accessible routes. Learn more in [Private Folders](/docs/app/getting-started/project-structure#private-folders).

## Page

UI that is unique to a route. Defined by exporting a React component from a [`page.js` file](/docs/app/api-reference/file-conventions/page) within the `app` directory. Learn more in [Layouts and Pages](/docs/app/getting-started/layouts-and-pages).

## Parallel Routes

A pattern that allows simultaneously or conditionally rendering multiple pages within the same layout. Created using named slots with the `@folder` convention, useful for dashboards, modals, and complex layouts. Learn more in [Parallel Routes](/docs/app/api-reference/file-conventions/parallel-routes).

## Partial Prerendering (PPR)

A rendering optimization that combines static and dynamic rendering in a single route. The static shell is served immediately while dynamic content streams in when ready, providing the best of both rendering strategies. Learn more in [Cache Components](/docs/app/getting-started/cache-components).

## Prefetching

Loading a route in the background before the user navigates to it. Next.js automatically prefetches routes linked with the [`<Link>` component](/docs/app/api-reference/components/link) when they enter the viewport, making navigation feel instant. Learn more in the [Prefetching guide](/docs/app/guides/prefetching).

## Prerendering

When a component is rendered at [build time](#build-time) or in the background during [revalidation](#revalidation). The result is HTML and [RSC Payload](#rsc-payload), which can be cached and served from a CDN. Prerendering is the default for components that don't use [Request-time APIs](#request-time-apis).

## Proxy

A file ([`proxy.js`](/docs/app/api-reference/file-conventions/proxy)) that runs code on the server before request is completed. Used to implement server-side logic like logging, redirects, and rewrites. Formerly known as Middleware. Learn more in the [Proxy guide](/docs/app/getting-started/proxy).
