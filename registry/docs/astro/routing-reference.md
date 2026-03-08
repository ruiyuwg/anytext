# Routing Reference

There is no separate routing configuration in Astro.

Every [supported page file](/en/basics/astro-pages/#supported-page-files) located within the special `src/pages/` directory creates a route. When the file name contains a [parameter](#params), a route can create multiple pages dynamically, otherwise it creates a single page.

By default, all Astro page routes and endpoints are generated and prerendered at build time. [On-demand server rendering](/en/guides/on-demand-rendering/) can be set for individual routes, or as the default.

## `prerender`

[Section titled “prerender”](#prerender)

**Type:** `boolean`\
**Default:** `true` in static mode (default); `false` with `output: 'server'` configuration

**Added in:** `astro@1.0.0`

A value exported from each individual route to determine whether or not it is prerendered.

By default, all pages and endpoints are prerendered and will be statically generated at build time. You can opt out of prerendering on one or more routes, and you can have both static and on-demand rendered routes in the same project.

### Per-page override

[Section titled “Per-page override”](#per-page-override)

You can override the default value to enable [on demand rendering](/en/guides/on-demand-rendering/) for an individual route by exporting `prerender` with the value `false` from that file:

src/pages/rendered-on-demand.astro

```astro
---
export const prerender = false
---
<!-- server-rendered content -->
<!-- the rest of my site is static -->
```

### Switch to `server` mode

[Section titled “Switch to server mode”](#switch-to-server-mode)

You can override the default value for all routes by configuring [`output: 'server'`](/en/reference/configuration-reference/#output). In this output mode, all pages and endpoints will be generated on the server upon request by default instead of being prerendered.

In `server` mode, enable prerendering for an individual route by exporting `prerender` with the value `true` from that file:

src/pages/static-about-page.astro

```astro
---
// with `output: 'server'` configured
export const prerender = true
---
<!-- My static about page -->
<!-- All other pages are rendered on demand -->
```

## `partial`

[Section titled “partial”](#partial)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `astro@3.4.0`

A value exported from an individual route to determine whether or not it should be rendered as a full HTML page.

By default, all files located within the reserved `src/pages/` directory automatically include the `<!DOCTYPE html>` declaration and additional `<head>` content such as Astro’s scoped styles and scripts.

You can override the default value to designate the content as a [page partial](/en/basics/astro-pages/#page-partials) for an individual route by exporting a value for `partial` from that file:

src/pages/my-page-partial.astro

```astro
---
export const partial = true
---
<!-- Generated HTML available at a URL -->
<!-- Available to a rendering library -->
```

The `export const partial` must be identifiable statically. It can have the value of:

- The boolean **`true`**.
- An environment variable using import.meta.env such as `import.meta.env.USE_PARTIALS`.

## `getStaticPaths()`

[Section titled “getStaticPaths()”](#getstaticpaths)

**Type:** `(options: GetStaticPathsOptions) => Promise<GetStaticPathsResult> | GetStaticPathsResult`

**Added in:** `astro@1.0.0`

A function to generate multiple, prerendered page routes from a single `.astro` page component with one or more [parameters](#params) in its file path. Use this for routes that will be created at build time, also known as static site building.

The `getStaticPaths()` function must return an array of objects to determine which URL paths will be prerendered by Astro. Each object must include a `params` object, to specify route paths. The object may optionally contain a `props` object with [data to be passed](#data-passing-with-props) to each page template.

src/pages/blog/\[post].astro

```astro
---
// In 'server' mode, opt in to prerendering:
// export const prerender = true


export async function getStaticPaths() {
  return [
    // { params: { /* required */ }, props: { /* optional */ } },
    { params: { post: '1' } }, // [post] is the parameter
    { params: { post: '2' } }, // must match the file name
    // ...
  ];
}
---
<!-- Your HTML template here. -->
```

`getStaticPaths()` can also be used in static file endpoints for [dynamic routing](/en/guides/endpoints/#params-and-dynamic-routing).

Tip

When using TypeScript, use the [`GetStaticPaths`](/en/guides/typescript/#infer-getstaticpaths-types) type utility to ensure type-safe access of your `params` and `props`.

Caution

The `getStaticPaths()` function executes in its own isolated scope once, before any page loads. Therefore you can’t reference anything from its parent scope, other than file imports. The compiler will warn you if you break this requirement.

### `params`

[Section titled “params”](#params)

The `params` key of each object in the array returned by `getStaticPaths()` tells Astro what routes to build.

The keys in `params` must match the parameters defined in your component file path. The value for each `params` object must match the parameters used in the page name. `params` are encoded into the URL, so only strings are supported as values.

For example,`src/pages/posts/[id].astro`has an `id` parameter in its file name. The following `getStaticPaths()` function in this `.astro` component tells Astro to statically generate `posts/1`, `posts/2`, and `posts/3` at build time.

src/pages/posts/\[id].astro

```astro
---
export async function getStaticPaths() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } }
  ];
}


const { id } = Astro.params;
---
<h1>{id}</h1>
```

### Data passing with `props`

[Section titled “Data passing with props”](#data-passing-with-props)

To pass additional data to each generated page, you can set a `props` value on each object in the array returned by `getStaticPaths()`. Unlike `params`, `props` are not encoded into the URL and so aren’t limited to only strings.

For example, if you generate pages with data fetched from a remote API, you can pass the full data object to the page component inside of `getStaticPaths()`. The page template can reference the data from each post using `Astro.props`.

src/pages/posts/\[id].astro

```astro
---
export async function getStaticPaths() {
  const response = await fetch('...');
  const data = await response.json();


  return data.map((post) => {
    return {
      params: { id: post.id },
      props: { post },
    };
  });
}


const { id } = Astro.params;
const { post } = Astro.props;
---
<h1>{id}: {post.name}</h1>
```

### `routePattern`

[Section titled “routePattern”](#routepattern)

**Type:** `string`

**Added in:** `astro@5.14.0`

A property available in [`getStaticPaths()`](#getstaticpaths) options to access the current [`routePattern`](/en/reference/api-reference/#routepattern) as a string.

This provides data from the [Astro render context](/en/reference/api-reference/) that would not otherwise be available within the scope of `getStaticPaths()` and can be useful to calculate the `params` and `props` for each page route.

`routePattern` always reflects the original dynamic segment definition in the file path (e.g. `/[...locale]/[files]/[slug]`), unlike `params`, which are explicit values for a page (e.g. `/fr/fichiers/article-1/`).

The following example shows how to localize your route segments and return an array of static paths by passing `routePattern` to a custom `getLocalizedData()` helper function. The [params](/en/reference/routing-reference/#params) object will be set with explicit values for each route segment: `locale`, `files`, and `slug`. Then, these values will be used to generate the routes and can be used in your page template via `Astro.params`.

src/pages/\[...locale]/\[files]/\[slug].astro

```astro
---
import { getLocalizedData } from "../../../utils/i18n";


export async function getStaticPaths({ routePattern }) {
  const response = await fetch('...');
  const data = await response.json();


  console.log(routePattern); // [...locale]/[files]/[slug]


  // Call your custom helper with `routePattern` to generate the static paths
  return data.flatMap((file) => getLocalizedData(file, routePattern));
}


const { locale, files, slug } = Astro.params;
---
```

### `paginate()`

[Section titled “paginate()”](#paginate)

**Added in:** `astro@1.0.0`

A function that can be returned from [`getStaticPaths()`](#getstaticpaths) to divide a collection of content items into separate pages.

`paginate()` will automatically generate the necessary array to return from `getStaticPaths()` to create one URL for every page of your paginated collection. The page number will be passed as a `param`, and the page data will be passed as a `page` prop.

The following example fetches and passes 150 items to the `paginate` function, and creates static, prerendered pages at build time that will display 10 items per page:

src/pages/pokemon/\[page].astro

```astro
---
export async function getStaticPaths({ paginate }) {
  // Load your data with fetch(), getCollection(), etc.
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  const result = await response.json();
  const allPokemon = result.results;


  // Return a paginated collection of paths for all items
  return paginate(allPokemon, { pageSize: 10 });
}


const { page } = Astro.props;
---
```

`paginate()` has the following arguments:

- `data` - array containing the page’s data passed to the `paginate()` function

- `options` - Optional object with the following properties:

  - `pageSize` - The number of items shown per page (`10` by default)
  - `params` - Send additional parameters for creating dynamic routes
  - `props` - Send additional props to be available on each page

`paginate()` assumes a file name of `[page].astro` or `[...page].astro`. The `page` param becomes the page number in your URL:

- `/posts/[page].astro` would generate the URLs `/posts/1`, `/posts/2`, `/posts/3`, etc.
- `/posts/[...page].astro` would generate the URLs `/posts`, `/posts/2`, `/posts/3`, etc.

#### The pagination `page` prop

[Section titled “The pagination page prop”](#the-pagination-page-prop)

**Type:** `Page<TData>`

Pagination will pass a `page` prop to every rendered page that represents a single page of data in the paginated collection. This includes the data that you’ve paginated (`page.data`) as well as metadata for the page (`page.url`, `page.start`, `page.end`, `page.total`, etc). This metadata is useful for things like a “Next Page” button or a “Showing 1-10 of 100” message.

##### `page.data`

[Section titled “page.data”](#pagedata)

**Type:** `Array<TData>`

Array of data returned from the `paginate()` function for the current page.

##### `page.start`

[Section titled “page.start”](#pagestart)

**Type:** `number`

Index of the first item on the current page, starting at `0`. (e.g. if `pageSize: 25`, this would be `0` on page 1, `25` on page 2, etc.)

##### `page.end`

[Section titled “page.end”](#pageend)

**Type:** `number`

Index of the last item on the current page.

##### `page.size`

[Section titled “page.size”](#pagesize)

**Type:** `number`\
**Default:** `10`

The total number of items per page.

##### `page.total`

[Section titled “page.total”](#pagetotal)

**Type:** `number`

The total number of items across all pages.

##### `page.currentPage`

[Section titled “page.currentPage”](#pagecurrentpage)

**Type:** `number`

The current page number, starting with `1`.

##### `page.lastPage`

[Section titled “page.lastPage”](#pagelastpage)

**Type:** `number`

The total number of pages.

##### `page.url.current`

[Section titled “page.url.current”](#pageurlcurrent)

**Type:** `string`

Get the URL of the current page (useful for canonical URLs). If a value is set for [`base`](/en/reference/configuration-reference/#base), the URL starts with that value.

##### `page.url.prev`

[Section titled “page.url.prev”](#pageurlprev)

**Type:** `string | undefined`

Get the URL of the previous page (will be `undefined` if on page 1). If a value is set for [`base`](/en/reference/configuration-reference/#base), prepend the base path to the URL.

##### `page.url.next`

[Section titled “page.url.next”](#pageurlnext)

**Type:** `string | undefined`

Get the URL of the next page (will be `undefined` if no more pages). If a value is set for [`base`](/en/reference/configuration-reference/#base), prepend the base path to the URL.

##### `page.url.first`

[Section titled “page.url.first”](#pageurlfirst)

**Type:** `string | undefined`

**Added in:** `astro@4.12.0`

Get the URL of the first page (will be `undefined` if on page 1). If a value is set for [`base`](/en/reference/configuration-reference/#base), prepend the base path to the URL.

##### `page.url.last`

[Section titled “page.url.last”](#pageurllast)

**Type:** `string | undefined`

**Added in:** `astro@4.12.0`

Get the URL of the last page (will be `undefined` if no more pages). If a value is set for [`base`](/en/reference/configuration-reference/#base), prepend the base path to the URL.

# Build your first Astro Blog

> Learn the basics of Astro with a project-based tutorial. All the background knowledge you need to get started!

In this tutorial, you’ll learn Astro’s key features by building a fully-functioning blog, from zero to full launch! 🚀

Along the way, you’ll:

- Set up your development environment
- Create pages and blog posts for your website
- Build with Astro components
- Query and work with local files
- Add interactivity to your site
- Deploy your site to the web

Want a preview of what you’re going to build? You can view the final project on [GitHub](https://github.com/withastro/blog-tutorial-demo) or open a working version in an online coding environment such as [IDX](https://idx.google.com/import?url=https:%2F%2Fgithub.com%2Fwithastro%2Fblog-tutorial-demo%2F) or [StackBlitz](https://stackblitz.com/github/withastro/blog-tutorial-demo/tree/complete?file=src%2Fpages%2Findex.astro).

Note

If you would rather start exploring Astro with a pre-built Astro site, you can visit <https://astro.new> and choose a starter template to open and edit in an online editor.

## Checklist

[Section titled “Checklist”](#checklist)

- Looks great! I’m ready to get started!
