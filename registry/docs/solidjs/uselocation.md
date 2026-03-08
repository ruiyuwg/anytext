Primitives

# useLocation

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-location.mdx)

The `useLocation` function provides information about the current URL, including pathname, query strings, hash, and navigation state.

***

## [Import](/solid-router/reference/primitives/use-location#import)

```
import { useLocation } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-location#type)

```
const useLocation: <S = unknown>() => Location<S>;
interface Location<S = unknown> extends Path {  query: SearchParams;  state: Readonly<Partial<S>> | null;}
interface Path {  pathname: string;  search: string;  hash: string;}
```

***

## [Parameters](/solid-router/reference/primitives/use-location#parameters)

None.

***

## [Return value](/solid-router/reference/primitives/use-location#return-value)

`useLocation` returns a reactive `Location` object containing the current URL information.

The `Location` object contains:

### [`pathname`](/solid-router/reference/primitives/use-location#pathname)

**Type:** `string`

The path portion of the URL, beginning with a `/` and excluding the query string and hash.

### [`search`](/solid-router/reference/primitives/use-location#search)

**Type:** `string`

The query string portion of the URL, including the leading `?` character if a parameter exists.

### [`hash`](/solid-router/reference/primitives/use-location#hash)

**Type:** `string`

The hash fragment of the URL, including the leading `#` character if a hash exists.

### [`state`](/solid-router/reference/primitives/use-location#state)

**Type:** `Readonly<Partial<S>> | null`

Custom state passed from [`useNavigate`](/solid-router/reference/primitives/use-navigate).

### [`query`](/solid-router/reference/primitives/use-location#query)

**Type:** `SearchParams`

A reactive object containing the parsed query parameters from the URL.

***

## [Examples](/solid-router/reference/primitives/use-location#examples)

### [Basic usage](/solid-router/reference/primitives/use-location#basic-usage)

```
import { useLocation } from "@solidjs/router";
function ProductFilter() {  const location = useLocation();
  const category = () => location.query.category || "all";  const page = () => location.query.page || "1";
  return (    <div>      <p>        Filtering by: {category()}, Page {page()}      </p>    </div>  );}
```

***

## [Related](/solid-router/reference/primitives/use-location#related)

- [`useNavigate`](/solid-router/reference/primitives/use-navigate)
- [`useParams`](/solid-router/reference/primitives/use-params)
- [`useSearchParams`](/solid-router/reference/primitives/use-search-params)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-location.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-location)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
5. [Return value](#return-value)
   1. [pathname](#pathname)
   2. [search](#search)
   3. [hash](#hash)
   4. [state](#state)
   5. [query](#query)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-location.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-location.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-location)
