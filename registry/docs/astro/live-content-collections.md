## Live content collections

[Section titled “Live content collections”](#live-content-collections)

Live collections use a different API than build-time content collections, although the configuration and helper functions are designed to feel familiar.

Key differences include:

1. **Execution time**: Run at request time instead of build time
2. **Configuration file**: Use `src/live.config.ts` instead of `src/content.config.ts`
3. **Collection definition**: Use `defineLiveCollection()` instead of `defineCollection()`
4. **Loader API**: Implement `loadCollection` and `loadEntry` methods instead of the `load` method
5. **Data return**: Return data directly instead of storing in the data store
6. **User-facing functions**: Use `getLiveCollection()`/`getLiveEntry()` instead of `getCollection()`/`getEntry()`

Additionally, you must have an adapter configured for [on-demand rendering](/en/guides/on-demand-rendering/) of live collection data.

Define your live collections in the special file `src/live.config.ts` (separate from your `src/content.config.ts` for build-time collections, if you have one).

Each individual collection configures:

- a [live `loader`](#creating-a-live-loader) for your data source, and optionally for type safety (required)
- a [live collection `schema`](#using-zod-schemas-with-live-collections) for type safety (optional)

Unlike for build-time collections, there are no built-in live loaders available. You will need to [create a custom live loader](#creating-a-live-loader) for your specific data source or find a third-party loader to pass to your live collection’s `loader` property.

You can optionally [include type safety in your live loaders](/en/reference/content-loader-reference/#the-liveloader-object). Therefore, [defining a Zod `schema`](#using-zod-schemas-with-live-collections) for live collections is optional. However, if you provide one, it will take precedence over the live loader’s types.

src/live.config.ts

```ts
// Define live collections for accessing real-time data
import { defineLiveCollection } from 'astro:content';
import { storeLoader } from '@mystore/astro-loader';


const products = defineLiveCollection({
  loader: storeLoader({
    apiKey: process.env.STORE_API_KEY,
    endpoint: 'https://api.mystore.com/v1',
  }),
});


// Export a single `collections` object to register your collection(s)
export const collections = { products };
```

You can then use the dedicated `getLiveCollection()` and `getLiveEntry()` functions to [access your live data](#accessing-live-data) and render your content.

You can [generate page routes](#generating-routes-from-content) from your live collection entries on demand, fetching your data fresh at runtime upon each request without needing a rebuild of your site like [build-time collections](#defining-build-time-content-collections) do. This is useful when accessing live, up-to-the-moment data is more important than having your content available in a performant data storage layer that persists between site builds.

### Creating a live loader

[Section titled “Creating a live loader”](#creating-a-live-loader)

You can build a custom [live loader](/en/reference/content-loader-reference/#live-loaders) using the Live Loader API to fetch remote content fresh upon request from any data source, such as a CMS, a database or an API endpoint. You will have to tell your live loader how to fetch and return content entries from your desired data source, as well as provide error handling for unsuccessful data requests.

Using a live loader to fetch your data will automatically create a collection from your remote data. This gives you all the benefits of Astro’s content collections, including collection-specific API helpers such as `getLiveCollection()` and `render()` to [query and display your data](#querying-build-time-collections), as well as helpful error handling.

Tip

Find community-built and third-party live loaders in the [Astro integrations directory](https://astro.build/integrations/?search=\&categories%5B%5D=loaders).

See the basics of [building a live loader](/en/reference/content-loader-reference/#building-a-live-loader) using the Live Loader API

### Using Zod schemas with live collections

[Section titled “Using Zod schemas with live collections”](#using-zod-schemas-with-live-collections)

You can use Zod schemas with live collections to validate and transform data at runtime. This Zod validation works the same way as [schemas for build-time collections](#defining-the-collection-schema).

When you define a schema for a live collection, it takes precedence over [the live loader’s types](/en/reference/content-loader-reference/#the-liveloader-object) when you query the collection:

src/live.config.ts

```ts
import { defineLiveCollection } from 'astro:content';
import { z } from 'astro/zod';
import { apiLoader } from './loaders/api-loader';


const products = defineLiveCollection({
  loader: apiLoader({ endpoint: process.env.API_URL }),
  schema: z
    .object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      // Transform the API's category format
      category: z.string().transform((str) => str.toLowerCase().replace(/\s+/g, '-')),
      // Coerce the date to a Date object
      createdAt: z.coerce.date(),
    })
    .transform((data) => ({
      ...data,
      // Add a formatted price field
      displayPrice: `$${data.price.toFixed(2)}`,
    })),
});


export const collections = { products };
```

When using Zod schemas with live collections, validation errors are automatically caught and returned as `AstroError` objects:

src/pages/store/index.astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { LiveCollectionValidationError } from 'astro/content/runtime';
import { getLiveEntry } from 'astro:content';


const { entry, error } = await getLiveEntry('products', '123');


// You can handle validation errors specifically
if (LiveCollectionValidationError.is(error)) {
  console.error(error.message);
  return Astro.rewrite('/500');
}


// TypeScript knows entry.data matches your Zod schema, not the loader's type
console.log(entry?.data.displayPrice); // e.g., "$29.99"
---
```

See [Zod’s README](https://github.com/colinhacks/zod) for complete documentation on how Zod works and what features are available.

### Accessing live data

[Section titled “Accessing live data”](#accessing-live-data)

Astro provides live collection helper functions to access live data on each request and return one (or more) content entries. These can be used similarly to their [build-time collection counterparts](#querying-build-time-collections).

- [`getLiveCollection()`](/en/reference/modules/astro-content/#getlivecollection) fetches an entire collection and returns an array of entries.
- [`getLiveEntry()`](/en/reference/modules/astro-content/#getliveentry) fetches a single entry from a collection.

These return entries with a unique `id`, and `data` object with all defined properties from the live loader. When using third-party or community loaders distributed as npm packages, check their own documentation for the expected shape of data returned.

You can use these functions to access your live data, passing the name of the collection and optionally filtering conditions.

src/pages/store/\[slug].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveCollection, getLiveEntry } from 'astro:content';


// Use loader-specific filters
const { entries: draftArticles } = await getLiveCollection('articles', {
  status: 'draft',
  author: 'john-doe',
});


// Get a specific product by ID
const { entry: product } = await getLiveEntry('products', Astro.params.slug);
---
```

#### Rendering content

[Section titled “Rendering content”](#rendering-content)

If your live loader [returns a `rendered` property](/en/reference/content-loader-reference/#livedataentryrendered), you can use [the `render()` function and `<Content />` component](#rendering-body-content) to render your content directly in your pages, using the same method as build-time collections.

You also have access to any [error returned by the live loader](/en/reference/content-loader-reference/#error-handling-in-live-loaders), for example, to rewrite to a 404 page when content cannot be displayed:

src/pages/store/\[id].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveEntry, render } from 'astro:content';
const { entry, error } = await getLiveEntry('articles', Astro.params.id);
if (error) {
  return Astro.rewrite('/404');
}


const { Content } = await render(entry);
---


<h1>{entry.data.title}</h1>
<Content />
```

#### Error handling

[Section titled “Error handling”](#error-handling)

Live loaders can fail due to network issues, API errors, or validation problems. The API is designed to make error handling explicit.

When you call `getLiveCollection()` or `getLiveEntry()`, the error will be one of:

- The error type defined by the loader (if it returned an error)
- A `LiveEntryNotFoundError` if the entry was not found
- A `LiveCollectionValidationError` if the collection data does not match the expected schema
- A `LiveCollectionCacheHintError` if the cache hint is invalid
- A `LiveCollectionError` for other errors, such as uncaught errors thrown in the loader

You can use `instanceof` to check the type of an error at runtime:

src/pages/store/\[id].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { LiveEntryNotFoundError } from 'astro/content/runtime';
import { getLiveEntry } from 'astro:content';


const { entry, error } = await getLiveEntry('products', Astro.params.id);


if (error) {
  if (error instanceof LiveEntryNotFoundError) {
    console.error(`Product not found: ${error.message}`);
    Astro.response.status = 404;
  } else {
    console.error(`Error loading product: ${error.message}`);
    return Astro.redirect('/500');
  }
}
---
```
