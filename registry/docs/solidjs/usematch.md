Primitives

# useMatch

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-match.mdx)

The `useMatch` function checks whether the current path matches a provided path pattern.

***

## [Import](/solid-router/reference/primitives/use-match#import)

```
import { useMatch } from "@solidjs/router";
```

***

## [Type](/solid-router/reference/primitives/use-match#type)

```
const useMatch: <S extends string>(  path: () => S,  matchFilters?: MatchFilters<S>): Accessor<PathMatch | undefined>;
type MatchFilters<P extends string | readonly string[] = any> = P extends string  ? { [K in PathParams<P>[number]]?: MatchFilter }  : Record<string, MatchFilter>;
interface PathMatch {  params: Params;  path: string;}
```

***

## [Parameters](/solid-router/reference/primitives/use-match#parameters)

### [`path`](/solid-router/reference/primitives/use-match#path)

- **Type:** `() => S`
- **Required:** Yes

An accessor function that returns the path pattern to match against the current route. Uses the same syntax as the `path` prop in the [`<Route>`](/solid-router/reference/components/route) component. Supports [path parameters](/solid-router/concepts/path-parameters), [optional parameters](/solid-router/concepts/path-parameters#optional-parameters), and [wildcard parameters](/solid-router/concepts/path-parameters#wildcard-routes).

### [`filters`](/solid-router/reference/primitives/use-match#filters)

- **Type:** `MatchFilters<S>`
- **Required:** No

An object where keys correspond to route parameter names and values define match filters. Each filter can be:

- An array of allowed strings
- A regular expression pattern
- A function that receives the parameter value as a string and returns true if the parameter should match

***

## [Return value](/solid-router/reference/primitives/use-match#return-value)

`useMatch` returns a memo containing a `PathMatch` object when the path matches, or `undefined` when there's no match.

The `PathMatch` object contains:

### [`params`](/solid-router/reference/primitives/use-match#params)

- **Type:** `Record<string, string>`

An object containing the matched path parameters as key-value pairs.

### [`path`](/solid-router/reference/primitives/use-match#path-1)

- **Type:** `string`

The matched path.

***

## [Examples](/solid-router/reference/primitives/use-match#examples)

### [Basic usage](/solid-router/reference/primitives/use-match#basic-usage)

```
import { useMatch } from "@solidjs/router";import { type JSXElement } from "solid-js";
type NavLinkProps = {  href: string;  children: JSXElement;};
function NavLink(props: NavLinkProps) {  const match = useMatch(() => props.href);
  return (    <a href={props.href} classList={{ active: Boolean(match()) }}>      {props.children}    </a>  );}
```

### [With filters](/solid-router/reference/primitives/use-match#with-filters)

```
import { useMatch } from "@solidjs/router";import { Show } from "solid-js";
function BlogPost() {  const match = useMatch(() => "/:lang?/blog/:slug", {    lang: ["en", "es", "fr"],    slug: /^[a-z0-9-]+$/, // Only allow lowercase letters, numbers, and hyphens  });
  const lang = () => match()?.params.lang || "en";
  return (    <Show when={match()}>      <article lang={lang()}>        <p>Blog slug: {match()?.params.slug}</p>      </article>    </Show>  );}
```

### [With custom filter functions](/solid-router/reference/primitives/use-match#with-custom-filter-functions)

```
import { useMatch } from "@solidjs/router";
function FileInfo() {  const match = useMatch(() => "/files/:type/:name", {    type: ["images", "documents", "videos"],    name: (name) => name.length > 5 && name.endsWith(".html"),  });
  return <div>File: {match()?.params.name}</div>;}
```

***

## [Related](/solid-router/reference/primitives/use-match#related)

- [`useParams`](/solid-router/reference/primitives/use-params)
- [`useLocation`](/solid-router/reference/primitives/use-location)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-match.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-match)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [path](#path)
   2. [filters](#filters)
5. [Return value](#return-value)
   1. [params](#params)
   2. [path](#path-1)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [With filters](#with-filters)
   3. [With custom filter functions](#with-custom-filter-functions)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/reference/primitives/use-match.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/reference/primitives/use-match.mdx\&page=https://docs.solidjs.com/solid-router/reference/primitives/use-match)
