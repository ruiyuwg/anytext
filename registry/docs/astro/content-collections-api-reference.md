# Content Collections API Reference

**Added in:** `astro@2.0.0`

Build-time content collections offer APIs to configure, query, and render your local Markdown, MDX, Markdoc, YAML, TOML, or JSON files, as well as remote content.

**Added in:** `astro@6.0.0` New

Live content collections offer APIs to configure, query, and render fresh, up-to-the-moment live data from remote sources.

For features and usage examples, [see our content collections guide](/en/guides/content-collections/).

## Imports from `astro:content`

[Section titled “Imports from astro:content”](#imports-from-astrocontent)

```js
import {
  defineCollection,
  defineLiveCollection,
  getCollection,
  getLiveCollection,
  getEntry,
  getLiveEntry,
  getEntries,
  reference,
  render
} from 'astro:content';
```

### `defineCollection()`

[Section titled “defineCollection()”](#definecollection)

**Type:** `(input: CollectionConfig) => CollectionConfig`

**Added in:** `astro@2.0.0`

A utility to configure a collection in a `src/content.config.*` file.

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    title: z.string(),
    permalink: z.string().optional(),
  }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog };
```

This function accepts the following properties:

#### `loader`

[Section titled “loader”](#loader)

**Type:** `() => Promise<Array<{ id: string, [key: string]: any }> | Record<string, Record<string, any>>> | Loader`

**Added in:** `astro@5.0.0`

Either an object or a function that allows you to load data from any source, local or remote, into a build-time content collection. (For live collections, see the [live `loader`](#loader-1) property.)

Learn about [build-time collection loaders](/en/guides/content-collections/#build-time-collection-loaders) with guided explanations and example usage.

#### `schema`

[Section titled “schema”](#schema)

**Type:** `ZodType | (context: SchemaContext) => ZodType`

**Added in:** `astro@2.0.0`

An optional Zod object or function that returns a Zod object to configure the type and shape of document frontmatter for a collection. Each value must use [a Zod validator](/en/reference/modules/astro-zod/#common-data-type-validators). (For live collections, see the [live `schema`](#schema-1) property.)

Learn about [defining a collection schema](/en/guides/content-collections/#defining-the-collection-schema) using Zod with guided explanations, example usage, and common datatypes.

### `defineLiveCollection()`

[Section titled “defineLiveCollection()”](#definelivecollection)

**Type:** `(config: LiveCollectionConfig) => LiveCollectionConfig`

**Added in:** `astro@6.0.0` New

A utility to configure a live collection in a `src/live.config.*` file.

src/live.config.ts

```ts
import { defineLiveCollection } from 'astro:content';
import { storeLoader } from '@example/astro-loader';


const products = defineLiveCollection({
  loader: storeLoader({
    apiKey: process.env.STORE_API_KEY,
    endpoint: 'https://api.example.com/v1',
  }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { products };
```

This function accepts the following properties:

#### `loader`

[Section titled “loader”](#loader-1)

**Type:** `LiveLoader`

**Added in:** `astro@6.0.0` New

An object that allows you to load data at runtime from a remote source into a live content collection. (For build-time collections, see the [build-time `loader`](#loader) property.)

Learn how to [create a live loader](/en/guides/content-collections/#creating-a-live-loader) with guided explanations and example usage.

#### `schema`

[Section titled “schema”](#schema-1)

**Type:** `ZodType`

**Added in:** `astro@6.0.0` New

An optional Zod object to configure the type and shape of your data for a live collection. Each value must use [a Zod validator](https://github.com/colinhacks/zod). (For build-time collections, see the [build-time `schema`](#schema) property.)

When you define a schema, it will take precedence over the [live loader’s types](/en/reference/content-loader-reference/#live-loader-api) when you query the collection.

Learn about [using Zod schemas with live collections](/en/guides/content-collections/#using-zod-schemas-with-live-collections) through guided explanations and usage examples.

### `reference()`

[Section titled “reference()”](#reference)

**Type:** `(collection: CollectionKey) => ZodEffects<ZodString, { collection: CollectionKey, id: string }>`

**Added in:** `astro@2.5.0`

A function used in the content config to define a relationship, or “reference”, from one collection to another. This accepts a collection name and transforms the reference into an object containing the collection name and the reference id.

This example defines references from a blog author to the `authors` collection and an array of related posts to the same `blog` collection:

src/content.config.ts

```ts
import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: z.object({
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog')),
  })
});


const authors = defineCollection({
  loader: file("src/data/authors.json"),
  schema: z.object({ /* ... */ })
});


export const collections = { blog, authors };
```

Validation of referenced entries happens at runtime when using `getEntry()` or `getEntries()`:

src/pages/\[posts].astro

```astro
// if a referenced entry is invalid, this will return undefined.
const relatedPosts = await getEntries(blogPost.data.relatedPosts);
```

Learn how to [define and use collection references](/en/guides/content-collections/#defining-collection-references) with guided explanations and usage examples.

### `getCollection()`

[Section titled “getCollection()”](#getcollection)

**Type:** `(collection: CollectionKey, filter?: (entry: CollectionEntry) => boolean) => CollectionEntry[]`

**Added in:** `astro@2.0.0`

A function that retrieves a list of content collection entries by collection name.

It returns all items in the collection by default, and accepts an optional `filter` function to narrow by entry properties. This allows you to query for only some items in a collection based on `id` or frontmatter values via the `data` object.

src/pages/blog/index.astro

```astro
---
import { getCollection } from 'astro:content';


// Get all `src/data/blog/` entries
const allBlogPosts = await getCollection('blog');


// Only return posts with `draft: true` in the frontmatter
const draftBlogPosts = await getCollection('blog', ({ data }) => {
  return data.draft === true;
});
---
```

Learn how to [query build time collections](/en/guides/content-collections/#querying-build-time-collections) with guided explanations and example usage.

### `getLiveCollection()`

[Section titled “getLiveCollection()”](#getlivecollection)

**Type:** `(collection: string, filter?: LiveLoaderCollectionFilterType) => Promise<LiveDataCollectionResult>`

**Added in:** `astro@6.0.0` New

A function that retrieves a list of live content collection entries by collection name.

It returns all items in the collection by default, and accepts an optional `filter` object whose shape is defined by the collection’s loader. This allows you to query for only some items in a collection or retrieve data in a different form, depending on your API’s capabilities.

src/pages/shop/index.astro

```astro
---
import { getLiveCollection } from 'astro:content';


// Get all `products` entries from your API
const { entries: allProducts } = await getLiveCollection('products');


// Only return `products` that should be featured
const { entries: featuredProducts } = await getLiveCollection('products', { featured: true });
---
```

Learn how to [access live collections data](/en/guides/content-collections/#accessing-live-data) with guided explanations and example usage.

### `getEntry()`

[Section titled “getEntry()”](#getentry)

**Types:**

- `(collection: CollectionKey, id: string) => Promise<CollectionEntry | undefined>`
- `({ collection: CollectionKey, id: string }) => Promise<CollectionEntry | undefined>`

**Added in:** `astro@2.5.0`

A function that retrieves a single collection entry by collection name and the entry `id`. `getEntry()` can also be used to get referenced entries to access the `data` or `body` properties:

src/pages/index.astro

```astro
---
import { getEntry } from 'astro:content';


// Get `src/content/blog/enterprise.md`
const enterprisePost = await getEntry('blog', 'enterprise');


// Get `src/content/captains/picard.json`
const picardProfile = await getEntry('captains', 'picard');


// Get the profile referenced by `data.captain`
const enterpriseCaptainProfile = await getEntry(enterprisePost.data.captain);
---
```

Learn more about [querying build time collections](/en/guides/content-collections/#querying-build-time-collections) with guided explanations and example usage.

### `getLiveEntry()`

[Section titled “getLiveEntry()”](#getliveentry)

**Type:** `(collection: string, filter: string | LiveLoaderEntryFilterType) => Promise<LiveDataEntryResult>`

**Added in:** `astro@6.0.0` New

A function that retrieves a single live collection entry by collection name and an optional filter, either as an `id` string or as a type-safe object.

src/pages/blog/\[id].astro

```astro
---
import { getLiveEntry } from 'astro:content';


const { entry: liveCollectionsPost } = await getLiveEntry('blog', Astro.params.id);
const { entry: mattDraft } = await getLiveEntry('blog', {
  status: 'draft',
  author: 'matt',
});
---
```

Learn how to [access live collections data](/en/guides/content-collections/#accessing-live-data) with guided explanations and example usage.

### `getEntries()`

[Section titled “getEntries()”](#getentries)

**Type:** `({ collection: CollectionKey, id: string }[]) => CollectionEntry[]`

**Added in:** `astro@2.5.0`

A function that retrieves multiple collection entries from the same collection. This is useful for [returning an array of referenced entries](/en/guides/content-collections/#defining-collection-references) to access their associated `data` and `body` properties.

src/pages/blog/enterprise/index.astro

```astro
---
import { getEntries, getEntry } from 'astro:content';


const enterprisePost = await getEntry('blog', 'enterprise');


// Get related posts referenced by `data.relatedPosts`
const enterpriseRelatedPosts = await getEntries(enterprisePost.data.relatedPosts);
---
```

### `render()`

[Section titled “render()”](#render)

**Type:** `(entry: CollectionEntry) => Promise<RenderResult>`

**Added in:** `astro@5.0.0`

A function to compile a given entry for rendering. This returns the following properties:

- `<Content />` - A component used to render the document’s contents in an Astro file.
- `headings` - A generated list of headings, [mirroring Astro’s `getHeadings()` utility](/en/guides/markdown-content/#available-properties) on Markdown and MDX imports.
- `remarkPluginFrontmatter `- The modified frontmatter object after any [remark or rehype plugins have been applied](/en/guides/markdown-content/#modifying-frontmatter-programmatically). Set to type `any`.

src/pages/blog/entry-1.astro

```astro
---
import { getEntry, render } from 'astro:content';
const entry = await getEntry('blog', 'entry-1');


if (!entry) {
   // Handle Error, for example:
  throw new Error('Could not find blog post 1');
}
const { Content, headings, remarkPluginFrontmatter } = await render(entry);
---
```

Learn how to [render the body content of entries](/en/guides/content-collections/#rendering-body-content) with guided explanations and example usage.

## `astro:content` types

[Section titled “astro:content types”](#astrocontent-types)

```ts
import type {
  CollectionEntry,
  CollectionKey,
  SchemaContext,
} from 'astro:content';
```

### `CollectionEntry`

[Section titled “CollectionEntry”](#collectionentry)

Query functions including [`getCollection()`](#getcollection), [`getEntry()`](#getentry), and [`getEntries()`](#getentries) each return entries with the `CollectionEntry` type. This type is available as a utility from `astro:content`:

```ts
import type { CollectionEntry } from 'astro:content';
```

A generic type to use with the name of the collection you’re querying to represent a single entry in that collection. For example, an entry in your `blog` collection would have the type `CollectionEntry<'blog'>`.

Each `CollectionEntry` is an object with the following values:

#### `CollectionEntry.id`

[Section titled “CollectionEntry.id”](#collectionentryid)

**Type:** `string`

A unique ID. Note that all IDs from Astro’s built-in `glob()` loader are slugified.

#### `CollectionEntry.collection`

[Section titled “CollectionEntry.collection”](#collectionentrycollection)

**Type:** [`CollectionKey`](#collectionkey)

The name of a collection in which entries are located. This is the name used to reference the collection in your schema and in querying functions.

#### `CollectionEntry.data`

[Section titled “CollectionEntry.data”](#collectionentrydata)

**Type:** `CollectionSchema<TCollectionName>`

An object of frontmatter properties inferred from your collection schema ([see `defineCollection()` reference](#definecollection)). Defaults to `any` if no schema is configured.

#### `CollectionEntry.body`

[Section titled “CollectionEntry.body”](#collectionentrybody)

**Type:** `string | undefined`

A string containing the raw, uncompiled body of the Markdown or MDX document.

Note that if [`retainBody`](/en/reference/content-loader-reference/#retainbody) is set to `false`, this value will be `undefined` instead of containing the raw file contents.

#### `CollectionEntry.rendered`

[Section titled “CollectionEntry.rendered”](#collectionentryrendered)

**Type:** `RenderedContent | undefined`

The rendered content of an entry as [stored by your loader](/en/reference/content-loader-reference/#dataentryrendered). For example, this can be the rendered content of a Markdown entry, or HTML from a CMS.

#### `CollectionEntry.filePath`

[Section titled “CollectionEntry.filePath”](#collectionentryfilepath)

**Type:** `string | undefined`

The path to an entry relative to your project directory. This value is only available for local entries.

### `CollectionKey`

[Section titled “CollectionKey”](#collectionkey)

**Example Type:** `'blog' | 'authors' | ...`

**Added in:** `astro@3.1.0`

A string union of all collection names defined in your `src/content.config.*` file. This type can be useful when defining a generic function wrapping the built-in `getCollection()`.

src/utils/collections.ts

```ts
import { type CollectionKey, getCollection } from 'astro:content';


export async function queryCollection(collection: CollectionKey) {
  return getCollection(collection, ({ data }) => {
    return data.draft !== true;
  });
}
```

### `SchemaContext`

[Section titled “SchemaContext”](#schemacontext)

The `context` object that `defineCollection` uses for the function shape of `schema`. This type can be useful when building reusable schemas for multiple collections.

This includes the following property:

- `image` - The `image()` schema helper that allows you [to use local images in Content Collections](/en/guides/images/#images-in-content-collections)

src/content.config.ts

```ts
import { defineCollection, type SchemaContext } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';


export const imageSchema = ({ image }: SchemaContext) =>
    z.object({
        image: image(),
        description: z.string().optional(),
    });


const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    permalink: z.string().optional(),
    image: imageSchema({ image })
  }),
});
```

## `astro` types

[Section titled “astro types”](#astro-types)

```ts
import type {
  LiveDataCollectionResult,
  LiveDataEntryResult,
} from "astro";
```

### `LiveDataCollectionResult`

[Section titled “LiveDataCollectionResult”](#livedatacollectionresult)

**Type:** `{ entries?: Array<LiveDataEntry<TData>>; error?: TError | LiveCollectionError; cacheHint?: CacheHint; }`

**Added in:** `astro@6.0.0` New

An object returned by [`getLiveCollection()`](#getlivecollection) containing the data fetched by the live loader. It has the following properties:

#### `LiveDataCollectionResult.entries`

[Section titled “LiveDataCollectionResult.entries”](#livedatacollectionresultentries)

**Type:** `Array<LiveDataEntry<TData>> | undefined`

An array of [`LiveDataEntry`](/en/reference/content-loader-reference/#livedataentry) objects returned by the loader.

The following example accesses the returned entries for a live collection named `products`:

src/pages/shop/index.astro

```astro
---
import { getLiveCollection } from 'astro:content';


const { entries: allProducts } = await getLiveCollection('products');
---
```

Learn how to [access live data](/en/guides/content-collections/#accessing-live-data) with guided explanations and example usage.

#### `LiveDataCollectionResult.error`

[Section titled “LiveDataCollectionResult.error”](#livedatacollectionresulterror)

**Type:** `TError | LiveCollectionError | undefined`

An error returned when the loader failed to load the collection. This can be a custom error defined by the loader or a built-in error.

The following example accesses the error returned when retrieving data from a live collection named `products`:

src/pages/shop/index.astro

```astro
---
import { getLiveCollection } from 'astro:content';


const { error } = await getLiveCollection('products');
---
```

Learn more about [error handling](/en/guides/content-collections/#error-handling) with guided explanations and example usage.

#### `LiveDataCollectionResult.cacheHint`

[Section titled “LiveDataCollectionResult.cacheHint”](#livedatacollectionresultcachehint)

**Type:** `CacheHint | undefined`

An object providing guidance on how to cache this collection.

If you have [experimental route caching](/en/reference/experimental-flags/route-caching/) enabled, pass the cache hint directly to `Astro.cache.set()`:

src/pages/shop/index.astro

```astro
---
import { getLiveCollection } from 'astro:content';
export const prerender = false; // Not needed in 'server' mode


const { cacheHint } = await getLiveCollection('products');


if (cacheHint) {
  Astro.cache.set(cacheHint);
}
Astro.cache.set({ maxAge: 600 });
---
```

You can also use cache hints to set response headers manually:

src/pages/shop/index.astro

```astro
---
import { getLiveCollection } from 'astro:content';


const { cacheHint } = await getLiveCollection('products');


if (cacheHint?.tags) {
  Astro.response.headers.set('Cache-Tag', cacheHint.tags.join(','));
}
if (cacheHint?.lastModified) {
  Astro.response.headers.set('Last-Modified', cacheHint.lastModified.toUTCString());
}
---
```

### `LiveDataEntryResult`

[Section titled “LiveDataEntryResult”](#livedataentryresult)

**Type:** `{ entry?: LiveDataEntry<TData>; error?: TError | LiveCollectionError; cacheHint?: CacheHint; }`

**Added in:** `astro@6.0.0` New

An object returned by [`getLiveEntry()`](#getliveentry) containing the data fetched by the live loader. It has the following properties:

#### `LiveDataEntryResult.entry`

[Section titled “LiveDataEntryResult.entry”](#livedataentryresultentry)

**Type:** `LiveDataEntry<TData> | undefined`

The [`LiveDataEntry`](/en/reference/content-loader-reference/#livedataentry) object returned by the loader.

The following example accesses the requested entry in a live collection named `products`:

src/pages/shop/\[id].astro

```astro
---
import { getLiveEntry } from 'astro:content';


const { entry } = await getLiveEntry('products', Astro.params.id);
---
```

Learn how to [access live data](/en/guides/content-collections/#accessing-live-data) with guided explanations and example usage.

#### `LiveDataEntryResult.error`

[Section titled “LiveDataEntryResult.error”](#livedataentryresulterror)

**Type:** `TError | LiveCollectionError | undefined`

An error returned when the loader failed to load the entry. This can be a custom error defined by the loader or a built-in error.

The following example accesses the requested entry in a live collection named `products` and any error, and redirects to the 404 page if an error exists:

src/pages/shop/\[id].astro

```astro
---
import { getLiveEntry } from 'astro:content';


const { entry, error } = await getLiveEntry('products', Astro.params.id);


if (error) {
  return Astro.redirect('/404');
}
---
<h1>{entry.data.name}</h1>
```

Learn more about [error handling](/en/guides/content-collections/#error-handling) with guided explanations and example usage.

#### `LiveDataEntryResult.cacheHint`

[Section titled “LiveDataEntryResult.cacheHint”](#livedataentryresultcachehint)

**Type:** `CacheHint | undefined`

An object providing data that can be used to inform a caching strategy.

If you have [experimental route caching](/en/reference/experimental-flags/route-caching/) enabled, pass the cache hint directly to `Astro.cache.set()`:

src/pages/shop/\[id].astro

```astro
---
import { getLiveEntry } from 'astro:content';


export const prerender = false; // Not needed in 'server' mode


const { cacheHint } = await getLiveEntry('products', Astro.params.id);


if (cacheHint) {
  Astro.cache.set(cacheHint);
}
Astro.cache.set({ maxAge: 300 });
---
```

You can also use cache hints to set response headers manually:

src/pages/shop/\[id].astro

```astro
---
import { getLiveEntry } from 'astro:content';


const { cacheHint } = await getLiveEntry('products', Astro.params.id);


if (cacheHint?.tags) {
  Astro.response.headers.set('Cache-Tag', cacheHint.tags.join(','));
}
if (cacheHint?.lastModified) {
  Astro.response.headers.set('Last-Modified', cacheHint.lastModified.toUTCString());
}
---
```

# Environment Variables API Reference

**Added in:** `astro@5.0.0`

The `astro:env` API lets you configure a type-safe schema for environment variables you have set. This allows you to indicate whether they should be available on the server or the client, and define their data type and additional properties. For examples and usage instructions, [see the `astro:env` guide](/en/guides/environment-variables/#type-safe-environment-variables).

## Imports from `astro:env`

[Section titled “Imports from astro:env”](#imports-from-astroenv)

```js
import {
  getSecret,
 } from 'astro:env/server';
```

### `getSecret()`

[Section titled “getSecret()”](#getsecret)

**Added in:** `astro@5.0.0`

The `getSecret()` helper function allows retrieving the raw value of an environment variable by its key.

For example, you can retrieve a boolean value as a string:

```js
import {
  FEATURE_FLAG, // boolean
  getSecret
} from 'astro:env/server'


getSecret('FEATURE_FLAG') // string | undefined
```

This can also be useful to get a secret not defined in your schema, for example one that depends on dynamic data from a database or API.

If you need to retrieve environment variables programmatically, we recommend using `getSecret()` instead of `process.env` (or equivalent). Because its implementation is provided by your adapter, you won’t need to update all your calls if you switch adapters. It defaults to `process.env` in dev and build.
