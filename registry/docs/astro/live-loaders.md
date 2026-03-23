## Live Loaders

[Section titled “Live Loaders”](#live-loaders)

The Live Loader API is built to handle querying any data in real time. Live loaders can filter incoming data and verify content with type safety. Since live loaders fetch data fresh upon every request, there is no data store to update. These loaders are designed to return either data or an `Error` object to allow you to handle errors gracefully.

### Building a live loader

[Section titled “Building a live loader”](#building-a-live-loader)

Most live loaders will export a function that accepts configuration options and returns a [live loader object](#the-liveloader-object) including a `name` for your loader and two methods to define how to load your collection of entries and how to load a single entry: `loadCollection()` and `loadEntry()`.

#### Loading live data

[Section titled “Loading live data”](#loading-live-data)

To return data about your collection, you must provide a [`loadCollection()`](#liveloaderloadcollection) function that fetches data, and returns an array of content [`entries`](#livedatacollectionentries) or an error.

To return a single live collection entry, you must provide a [`loadEntry()`](#liveloaderloadentry) function that fetches data filtered for a given `id`, and returns a single [`entry`](#livedataentry), `undefined`, or an error.

The data fetching for both of these functions is typically done using a [`try...catch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) to [handle errors when accessing live data](#error-handling-in-live-loaders).

See the full [Live Loader API](#live-loader-api) for more about the functions and types available for building your live loader.

#### Providing a schema for live loaders

[Section titled “Providing a schema for live loaders”](#providing-a-schema-for-live-loaders)

Live loaders do not include a schema property. Instead, you can provide type safety by [defining a Zod schema for your collection](/en/guides/content-collections/#using-zod-schemas-with-live-collections) in `src/live.config.ts`, or by passing generic types to the `LiveLoader` interface for the data they return.

#### Example live loader

[Section titled “Example live loader”](#example-live-loader)

The following example shows a live loader that defines data fetching from a CMS (using a custom `fetchFromCMS` utility) for both a collection of entries and a single entry, including type safety and error handling:

src/article-loader.ts

```ts
import type { LiveLoader } from 'astro/loaders';
import { fetchFromCMS } from './cms-client.js';


interface Article {
  id: string;
  title: string;
  htmlContent: string;
  author: string;
}


interface EntryFilter {
  id: string;
}


interface CollectionFilter {
  author?: string;
}


export function articleLoader(config: { apiKey: string }): LiveLoader<Article, EntryFilter, CollectionFilter> {
  return {
    name: 'article-loader',
    loadCollection: async ({ filter }) => {
      try {
        const articles = await fetchFromCMS({
          apiKey: config.apiKey,
          type: 'article',
          filter,
        });


        return {
          entries: articles.map((article) => ({
            id: article.id,
            data: article,
          })),
        };
      } catch (error) {
        return {
          error: new Error('Failed to load articles', { cause: error }),
        };
      }
    },
    loadEntry: async ({ filter }) => {
      try {
        // filter will be { id: "some-id" } when called with a string
        const article = await fetchFromCMS({
          apiKey: config.apiKey,
          type: 'article',
          id: filter.id,
        });


        if (!article) {
          return {
            error: new Error('Article not found'),
          };
        }


        return {
          id: article.id,
          data: article,
          rendered: {
            html: article.htmlContent,
          },
        };
      } catch (error) {
        return {
          error: new Error('Failed to load article', { cause: error }),
        };
      }
    },
  };
}
```

#### Defining your live collection with your loader

[Section titled “Defining your live collection with your loader”](#defining-your-live-collection-with-your-loader)

Use your custom live loader as the value of the `loader` property when you define your collection in `src/live.config.ts`. Configuration options can be passed to your loader as arguments:

src/live.config.ts

```ts
import { defineLiveCollection } from 'astro:content';
import { articleLoader } from './article-loader.ts';


const blog = defineLiveCollection({
  loader: articleLoader({
    apiKey: "my-secret",
  }),
});


export const collections = { blog };
```

#### Error handling in live loaders

[Section titled “Error handling in live loaders”](#error-handling-in-live-loaders)

Live loaders return an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) subclass for errors. You can create [custom error types](#creating-live-loader-error-types) and use them for more specific error handling if needed. If an error is thrown in the live loader, it will be caught and returned, wrapped in a `LiveCollectionError`.

Astro will generate some errors itself, depending on the response from the live loader:

- If `loadEntry` returns `undefined`, Astro will return a `LiveEntryNotFoundError` to the user.
- If a schema is defined for the collection and the data does not match the schema, Astro will return a `LiveCollectionValidationError`.
- If the loader returns an invalid cache hint, Astro will return a `LiveCollectionCacheHintError`. The `cacheHint` field is optional, so if you do not have valid data to return, you can simply omit it.

my-loader.ts

```ts
import type { LiveLoader } from 'astro/loaders';
import type { MyData } from "./types";
import { MyLoaderError } from './errors';


export function myLoader(config): LiveLoader<MyData, never, never, MyLoaderError> {
  return {
    name: 'my-loader',
    loadCollection: async () => {
      // Return your custom error type
      return {
        error: new MyLoaderError('Failed to load', 'LOAD_ERROR'),
      };
    },
    // ...
  };
}
```

##### Creating live loader error types

[Section titled “Creating live loader error types”](#creating-live-loader-error-types)

You can create custom error types for [errors returned by your loader](#error-handling-in-live-loaders) and pass them as a generic to get proper typing:

my-loader.ts

```ts
import type { LiveLoader } from "astro/loaders";
import type { MyData } from "./types"


export class MyLoaderError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'MyLoaderError';
  }
}


export function myLoader(config): LiveLoader<MyData, never, never, MyLoaderError> {
  return {
    name: 'my-loader',
    loadCollection: async () => {
      // Return your custom error type
      return {
        error: new MyLoaderError('Failed to load', 'LOAD_ERROR'),
      };
    },
    // ...
  };
}
```

When you use `getLiveCollection()` or `getLiveEntry()`, TypeScript will infer the custom error type, allowing you to handle it appropriately:

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveEntry } from 'astro:content';
import { MyLoaderError } from "../my-loader";


const { entry, error } = await getLiveEntry('products', '123');


if (error) {
  if (error instanceof MyLoaderError) {
    console.error(`Loader error: ${error.message} (code: ${error.code})`);
  } else {
    console.error(`Unexpected error: ${error.message}`);
  }
  return Astro.rewrite('/500');
}
---
```

#### Defining custom filter types

[Section titled “Defining custom filter types”](#defining-custom-filter-types)

Live loaders can define custom filter types for both `getLiveCollection()` and `getLiveEntry()`. This enables type-safe querying that matches your API’s capabilities, making it easier for users to discover available filters and ensure they are used correctly. If you include JSDoc comments in your filter types, the user will see these in their IDE as hints when using the loader.

store-loader.ts

```ts
import type { LiveLoader } from 'astro/loaders';
import { fetchProduct, fetchCategory, type Product } from './store-client';


interface CollectionFilter {
  category?: string;
  /** Minimum price to filter products */
  minPrice?: number;
  /** Maximum price to filter products */
  maxPrice?: number;
}


interface EntryFilter {
  /** Alias for `sku` */
  id?: string;
  slug?: string;
  sku?: string;
}


export function productLoader(config: {
  apiKey: string;
  endpoint: string;
}): LiveLoader<Product, EntryFilter, CollectionFilter> {
  return {
    name: 'product-loader',
    loadCollection: async ({ filter }) => {
      // filter is typed as CollectionFilter
      const data = await fetchCategory({
        apiKey: config.apiKey,
        category: filter?.category ?? 'all',
        minPrice: filter?.minPrice,
        maxPrice: filter?.maxPrice,
      });


      return {
        entries: data.products.map((product) => ({
          id: product.sku,
          data: product,
        })),
      };
    },
    loadEntry: async ({ filter }) => {
      // filter is typed as EntryFilter | { id: string }
      const product = await fetchProduct({
        apiKey: config.apiKey,
        slug: filter.slug,
        sku: filter.sku || filter.id,
      });
      if (!product) {
        return {
          error: new Error('Product not found'),
        };
      }
      return {
        id: product.sku,
        data: product,
      };
    },
  };
}
```

#### Cache hints

[Section titled “Cache hints”](#cache-hints)

Live loaders can provide cache hints to help with response caching. You can use this data to send HTTP cache headers or otherwise inform your caching strategy.

my-loader.ts

```ts
import type { LiveLoader } from "astro/loaders";
import { loadStoreProduct, loadStoreProducts, getLastModifiedDate } from "./store";
import type { Product, ProductEntryFilter, ProductCollectionFilter } from "./types";


export function myLoader(config): LiveLoader<Product, ProductEntryFilter, ProductCollectionFilter> {
  return {
    name: 'cached-loader',
    loadCollection: async ({ filter }) => {
      const products = await loadStoreProducts(filter);
      return {
        entries: products.map((item) => ({
          id: item.id,
          data: item,
          // You can optionally provide cache hints for each entry
          cacheHint: {
            tags: [`product-${item.id}`, `category-${item.category}`],
          },
        })),
        cacheHint: {
          // All fields are optional, and are combined with each entry's cache hints
          // tags are merged from all entries
          // lastModified is the most recent lastModified of all entries and the collection
          lastModified: getLastModifiedDate(products),
          tags: ['products'],
        },
      };
    },
    loadEntry: async ({ filter }) => {
      const item = await loadStoreProduct(filter);
      return {
        id: item.id,
        data: item,
        cacheHint: {
          lastModified: new Date(item.lastModified),
          tags: [`product-${item.id}`, `category-${item.category}`],
        },
      };
    },
  };
}
```

You can then use these hints in your pages. If you have [experimental route caching](/en/reference/experimental-flags/route-caching/) enabled, pass cache hints directly to `Astro.cache.set()`:

src/pages/store/\[id].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveEntry } from 'astro:content';


const { entry, error, cacheHint } = await getLiveEntry('products', Astro.params.id);


if (error) {
  return Astro.redirect('/404');
}


// Pass cache hints to route caching
if (cacheHint) {
  Astro.cache.set(cacheHint);
}
Astro.cache.set({ maxAge: 300 });
---


<h1>{entry.data.name}</h1>
<p>{entry.data.description}</p>
```

Without route caching enabled, you can use cache hints to set response headers manually for your own caching strategy:

src/pages/store/\[id].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getLiveEntry } from 'astro:content';


const { entry, error, cacheHint } = await getLiveEntry('products', Astro.params.id);


if (error) {
  return Astro.redirect('/404');
}


if (cacheHint?.tags) {
  Astro.response.headers.set('Cache-Tag', cacheHint.tags.join(','));
}


if (cacheHint?.lastModified) {
  Astro.response.headers.set('Last-Modified', cacheHint.lastModified.toUTCString());
}
---


<h1>{entry.data.name}</h1>
<p>{entry.data.description}</p>
```

Note

Cache hints do not automatically cause the response to be cached by Astro. They provide values you can pass to [route caching](/en/reference/experimental-flags/route-caching/) or use to implement your own caching strategy.

## Distributing your loader

[Section titled “Distributing your loader”](#distributing-your-loader)

Loaders can be defined in your site or as a separate npm package. If you want to share your loader with the community, you can [publish it to npm with the `withastro` and `astro-loader` keywords](/en/reference/publish-to-npm/#packagejson-data).

A loader should export a function that returns a `LiveLoader` object for live loaders or a `Loader` object for build-time loaders, allowing users to configure it with their own settings.
