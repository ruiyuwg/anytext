Primitives

# useParams

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-params.mdx)

The `useParams` function reads the path parameters of the current route.

***

## [Import](/solid-router/reference/primitives/use-params#import)

```
import { useParams } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-params#type)

```
function useParams<T extends Record<string, string>>(): T;
```

***

## [Parameters](/solid-router/reference/primitives/use-params#parameters)

`useParams` takes no arguments.

***

## [Return value](/solid-router/reference/primitives/use-params#return-value)

- **Type**: `T`

`useParams` returns a reactive object where keys match the dynamic segments defined in the route path. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes.

***

## [Examples](/solid-router/reference/primitives/use-params#examples)

### [Basic usage](/solid-router/reference/primitives/use-params#basic-usage)

```
import { createMemo } from "solid-js";import { useParams } from "@solidjs/router";
// Rendered via <Route path="/users/:id" component={UserPage} />function UserPage() {  const params = useParams();
  // Derived value updates when the route parameter changes.  const title = createMemo(() => `Profile for ${params.id}`);
  return <h1>{title()}</h1>;}
```

***

## [Related](/solid-router/reference/primitives/use-params#related)

- [useLocation](/solid-router/reference/primitives/use-location)
- [useSearchParams](/solid-router/reference/primitives/use-search-params)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-params.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-params)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-params.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-params.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-params)
