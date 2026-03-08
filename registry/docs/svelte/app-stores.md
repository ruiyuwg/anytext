# $app/stores

This module contains store-based equivalents of the exports from [`$app/state`]($app-state). If you're using SvelteKit 2.12 or later, use that module instead.

```js
// @noErrors
import { getStores, navigating, page, updated } from '$app/stores';
```

## getStores

```dts
function getStores(): {
	page: typeof page;

	navigating: typeof navigating;

	updated: typeof updated;
};
```

## navigating

Use `navigating` from `$app/state` instead (requires Svelte 5, [see docs for more info](/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))

A readable store.
When navigating starts, its value is a `Navigation` object with `from`, `to`, `type` and (if `type === 'popstate'`) `delta` properties.
When navigating finishes, its value reverts to `null`.

On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.

```dts
const navigating: import('svelte/store').Readable<
	import('@sveltejs/kit').Navigation | null
>;
```

## page

Use `page` from `$app/state` instead (requires Svelte 5, [see docs for more info](/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))

A readable store whose value contains page data.

On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.

```dts
const page: import('svelte/store').Readable<
	import('@sveltejs/kit').Page
>;
```

## updated

Use `updated` from `$app/state` instead (requires Svelte 5, [see docs for more info](/docs/kit/migrating-to-sveltekit-2#SvelteKit-2.12:-$app-stores-deprecated))

A readable store whose initial value is `false`. If [`version.pollInterval`](/docs/kit/configuration#version) is a non-zero value, SvelteKit will poll for new versions of the app and update the store value to `true` when it detects one. `updated.check()` will force an immediate check, regardless of polling.

On the server, this store can only be subscribed to during component initialization. In the browser, it can be subscribed to at any time.

```dts
const updated: import('svelte/store').Readable<boolean> & {
	check(): Promise<boolean>;
};
```

# $app/types

This module contains generated types for the routes in your app.

```
Available since 2.26
```

```js
// @noErrors
import type { RouteId, RouteParams, LayoutParams } from '$app/types';
```

## Asset

A union of all the filenames of assets contained in your `static` directory, plus a `string` wildcard for asset paths generated from `import` declarations.

```dts
type Asset = '/favicon.png' | '/robots.txt' | (string & {});
```

## RouteId

A union of all the route IDs in your app. Used for `page.route.id` and `event.route.id`.

```dts
type RouteId = '/' | '/my-route' | '/my-other-route/[param]';
```

## Pathname

A union of all valid pathnames in your app.

```dts
type Pathname = '/' | '/my-route' | `/my-other-route/${string}` & {};
```

## ResolvedPathname

Similar to `Pathname`, but possibly prefixed with a [base path](configuration#paths). Used for `page.url.pathname`.

```dts
type ResolvedPathname = `${'' | `/${string}`}/` | `${'' | `/${string}`}/my-route` | `${'' | `/${string}`}/my-other-route/${string}` | {};
```

## RouteParams

A utility for getting the parameters associated with a given route.

```ts
// @errors: 2552
type BlogParams = RouteParams<'/blog/[slug]'>; // { slug: string }
```

```dts
type RouteParams<T extends RouteId> = { /* generated */ } | Record<string, never>;
```

## LayoutParams

A utility for getting the parameters associated with a given layout, which is similar to `RouteParams` but also includes optional parameters for any child route.

```dts
type RouteParams<T extends RouteId> = { /* generated */ } | Record<string, never>;
```
