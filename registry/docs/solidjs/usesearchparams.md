Primitives

# useSearchParams

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-search-params.mdx)

The `useSearchParams` function reads the URL query parameters for the current route and provides a function to update them.

***

## [Import](/solid-router/reference/primitives/use-search-params#import)

```
import { useSearchParams } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-search-params#type)

```
function useSearchParams<T extends Record<string, string | string[]>>(): [  Partial<T>,  (params: SetSearchParams, options?: Partial<NavigateOptions>) => void,];
```

***

## [Parameters](/solid-router/reference/primitives/use-search-params#parameters)

`useSearchParams` takes no arguments.

***

## [Return value](/solid-router/reference/primitives/use-search-params#return-value)

- **Type:** `[ Partial<T>, (params: SetSearchParams, options?: Partial<NavigateOptions>) => void ]`

`useSearchParams` returns an array with two items.

The first item is a reactive object containing the current query parameters. Accessing a property within a tracking scope registers a dependency, causing the computation to re-run when the parameter changes. Values are always strings.

The second item is a function that updates the query string. It merges the object provided as its first argument with the current query parameters. Passing an empty string (`""`), an empty array (`[]`), `undefined`, or `null` as a value removes the key. It accepts the same options as [`useNavigate`](/solid-router/reference/primitives/use-navigate) as the second parameter. By default, the `resolve` and `scroll` options are set to `false`.

***

## [Examples](/solid-router/reference/primitives/use-search-params#examples)

### [Basic usage](/solid-router/reference/primitives/use-search-params#basic-usage)

```
import { useSearchParams } from "@solidjs/router";
function Paginator() {  const [params, setParams] = useSearchParams();
  const page = () => Number(params.page || "1");
  return (    <div>      <span>Current Page: {page()}</span>      <button onClick={() => setParams({ page: page() + 1 })}>Next</button>    </div>  );}
```

***

## [Related](/solid-router/reference/primitives/use-search-params#related)

- [`useParams`](/solid-router/reference/primitives/use-params)
- [`useLocation`](/solid-router/reference/primitives/use-location)
- [`useNavigate`](/solid-router/reference/primitives/use-navigate)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-search-params.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-search-params)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-search-params.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-search-params.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-search-params)
