Primitives

# usePreloadRoute

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-preload-route.mdx)

The `usePreloadRoute` function is a utility for manually preloading a route.

***

## [Import](/solid-router/reference/primitives/use-preload-route#import)

```
import { usePreloadRoute } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-preload-route#type)

```
const usePreloadRoute: () => (  url: string | URL,  options?: { preloadData?: boolean }) => void;
```

***

## [Parameters](/solid-router/reference/primitives/use-preload-route#parameters)

### [`url`](/solid-router/reference/primitives/use-preload-route#url)

**Type:** `string | URL` **Required:** Yes

The route path to preload. Accepts either a `string` path or a [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) object.

### [`options`](/solid-router/reference/primitives/use-preload-route#options)

- **Type:** `{ preloadData?: boolean }`
- **Required:** No

A configuration object with the following properties:

#### [`preloadData`](/solid-router/reference/primitives/use-preload-route#preloaddata)

- **Type:** `boolean`
- **Default:** `false`

When `true`, triggers the route's data loading in addition to preloading the route itself.

***

## [Return value](/solid-router/reference/primitives/use-preload-route#return-value)

None.

***

## [Examples](/solid-router/reference/primitives/use-preload-route#examples)

### [Basic usage](/solid-router/reference/primitives/use-preload-route#basic-usage)

```
import { usePreloadRoute } from "@solidjs/router";
function SettingsButton() {  const preload = usePreloadRoute();
  return (    <button onClick={() => preload("/users/settings", { preloadData: true })}>      Load settings    </button>  );}
```

***

## [Related](/solid-router/reference/primitives/use-preload-route#related)

- [`<A>`](/solid-router/reference/components/a)
- [`preload`](/solid-router/reference/preload-functions/preload)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-preload-route.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-preload-route)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [url](#url)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-preload-route.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-preload-route.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-preload-route)
