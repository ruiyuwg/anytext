## Live loader API

[Section titled “Live loader API”](#live-loader-api)

**Added in:** `astro@6.0.0` New

This section shows the API for defining a [live loader](#live-loaders).

### The `LiveLoader` object

[Section titled “The LiveLoader object”](#the-liveloader-object)

**Type:** `LiveLoader<TData, TEntryFilter, TCollectionFilter, TError>`

**Added in:** `astro@6.0.0` New

A live loader function returns an object with three required live loader properties. In addition to providing a name for the loader, this object describes how to fetch both single entries and an entire collection from your live data source.

Use the `LiveLoader` generic type to provide type safety in your loader. This type accepts the following type parameters, in this order:

- **`TData`** (defaults to `Record<string, unknown>`): The data structure of each entry returned by the loader.
- **`TEntryFilter`** (defaults to `never`): The filter object type accepted by [`getLiveEntry()`](/en/reference/modules/astro-content/#getliveentry) and accessible in [`loadEntry()`](#liveloaderloadentry). Use `never` when you don’t support filtering single entries.
- **`TCollectionFilter`** (defaults to `never`): The filter object type accepted by [`getLiveCollection()`](/en/reference/modules/astro-content/#getlivecollection) and accessible in [`loadCollection()`](#liveloaderloadcollection). Use `never` when you don’t support filtering collections.
- **`TError`** (defaults to `Error`): A [custom `Error` class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types) that can be returned by the loader for more granular error handling.

#### `LiveLoader.name`

[Section titled “LiveLoader.name”](#liveloadername)

**Type:** `string`

**Added in:** `astro@6.0.0` New

A unique name for the loader, used in logs.

#### `LiveLoader.loadCollection()`

[Section titled “LiveLoader.loadCollection()”](#liveloaderloadcollection)

**Type:** `(context: LoadCollectionContext<TCollectionFilter>) => Promise<LiveDataCollection<TData> | { error: TError; }>`

**Added in:** `astro@6.0.0` New

Defines a method to load a collection of entries. This function receives a [context object](#loadcollectioncontext) containing an optional `filter` property and must return the data associated with this collection or the errors.

#### `LiveLoader.loadEntry()`

[Section titled “LiveLoader.loadEntry()”](#liveloaderloadentry)

**Type:** `(context: LoadEntryContext<TEntryFilter>) => Promise<LiveDataEntry<TData> | undefined | { error: TError; }>`

**Added in:** `astro@6.0.0` New

Defines a method to load a single entry. This function receives a [context object](#loadentrycontext) containing a `filter` property and returns either the data associated with the requested entry, `undefined` when the entry cannot be found, or the errors.

### `LoadCollectionContext`

[Section titled “LoadCollectionContext”](#loadcollectioncontext)

**Type:** `{ filter?: TCollectionFilter; }`

**Added in:** `astro@6.0.0` New

This object is passed to the [`loadCollection()` method](#liveloaderloadcollection) of the loader and contains the following properties:

#### `LoadCollectionContext.filter`

[Section titled “LoadCollectionContext.filter”](#loadcollectioncontextfilter)

**Type:** `Record<string, any> | never`\
**Default:** `never`

**Added in:** `astro@6.0.0` New

An object describing the [filters supported by your loader](#defining-custom-filter-types).

### `LoadEntryContext`

[Section titled “LoadEntryContext”](#loadentrycontext)

**Type:** `{ filter: TEntryFilter; }`

**Added in:** `astro@6.0.0` New

This object is passed to the [`loadEntry()` method](#liveloaderloadentry) of the loader and contains the following properties:

#### `LoadEntryContext.filter`

[Section titled “LoadEntryContext.filter”](#loadentrycontextfilter)

**Type:** `Record<string, any> | never`\
**Default:** `never`

**Added in:** `astro@6.0.0` New

An object describing the [filters supported by your loader](#defining-custom-filter-types).

### `LiveDataEntry`

[Section titled “LiveDataEntry”](#livedataentry)

**Type:** `{ id: string; data: TData; rendered?: { html: string }; cacheHint?: CacheHint; }`

**Added in:** `astro@6.0.0` New

This is the type object that is returned by the [`loadEntry()`](#liveloaderloadentry) method. It contains the following properties:

#### `LiveDataEntry.id`

[Section titled “LiveDataEntry.id”](#livedataentryid)

**Type:** `string`

**Added in:** `astro@6.0.0` New

An identifier for the entry, which must be unique within the collection. This is the key used with [`getLiveEntry()`](/en/reference/modules/astro-content/#getliveentry) for that collection.

#### `LiveDataEntry.data`

[Section titled “LiveDataEntry.data”](#livedataentrydata)

**Type:** `Record<string, unknown>`

**Added in:** `astro@6.0.0` New

The actual data for the entry. When a user accesses the collection, this will have TypeScript types generated according to the collection schema.

It is the loader’s responsibility to validate and parse the data before returning it.

#### `LiveDataEntry.rendered`

[Section titled “LiveDataEntry.rendered”](#livedataentryrendered)

**Type:** `{ html: string }`

**Added in:** `astro@6.0.0` New

An object with an entry’s rendered content if it has been rendered to HTML. For example, this can be the rendered content of a Markdown entry, or HTML from a CMS.

If this field is provided, then [the `render()` function and `<Content />` component](/en/guides/content-collections/#rendering-body-content) are available to render the entry in a page.

If the loader does not return a `rendered` property for an entry, the `<Content />` component will render nothing.

#### `LiveDataEntry.cacheHint`

[Section titled “LiveDataEntry.cacheHint”](#livedataentrycachehint)

**Type:** [`CacheHint`](#cachehint)

**Added in:** `astro@6.0.0` New

An optional object to provide a hint for how to cache this specific entry.

### `LiveDataCollection`

[Section titled “LiveDataCollection”](#livedatacollection)

**Type:** `{ entries: Array<LiveDataEntry<TData>>; cacheHint?: CacheHint; }`

**Added in:** `astro@6.0.0` New

This is the type object that is returned by the [`loadCollection()`](#liveloaderloadcollection) method. It contains the following properties:

#### `LiveDataCollection.entries`

[Section titled “LiveDataCollection.entries”](#livedatacollectionentries)

**Type:** `Array<LiveDataEntry<TData>>`

**Added in:** `astro@6.0.0` New

An array of [`LiveDataEntry`](#livedataentry) objects.

#### `LiveDataCollection.cacheHint`

[Section titled “LiveDataCollection.cacheHint”](#livedatacollectioncachehint)

**Type:** [`CacheHint`](#cachehint)

**Added in:** `astro@6.0.0` New

An optional object providing guidance on how to cache this collection. This object will be merged with the cache hints defined for each individual entry, if provided.

### `CacheHint`

[Section titled “CacheHint”](#cachehint)

An object that loaders can return through the `cacheHint` property in [`LiveDataCollection`](#livedatacollection) or [`LiveDataEntry`](#livedataentry) to provide hints to assist in caching the response. This contains the following properties:

#### `CacheHint.tags`

[Section titled “CacheHint.tags”](#cachehinttags)

**Type:** `Array<string>`

**Added in:** `astro@6.0.0` New

An array of string identifiers allowing fine-grained cache control. This allows you to group related content and selectively invalidate cached responses when specific content changes.

The following example defines cache hint tags for a collection of posts filtered by author:

```ts
return {
  /* ... */
  cacheHint: {
    tags: ["posts", `posts-${filter.author}`],
  },
};
```

#### `CacheHint.lastModified`

[Section titled “CacheHint.lastModified”](#cachehintlastmodified)

**Type:** `Date`

**Added in:** `astro@6.0.0` New

The date of the last modification of the content (e.g., the last update of an entry in a collection). This can be used to set HTTP cache headers like [`Last-Modified`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Last-Modified) and [`If-Modified-Since`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/If-Modified-Since).

The following example defines a cache hint for a single product using its last update date:

```ts
return {
  /* ... */
  cacheHint: {
    lastModified: new Date(product.updatedAt)
  },
};
```
