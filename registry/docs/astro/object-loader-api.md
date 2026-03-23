## Object loader API

[Section titled “Object loader API”](#object-loader-api)

**Added in:** `astro@5.0.0`

This section shows the API for defining a [build-time object loader](#building-a-loader).

### The `Loader` object

[Section titled “The Loader object”](#the-loader-object)

**Type:** `Loader`

A loader function returns an object with two required properties. In addition to providing a name for the loader, this object describes how to fetch the collection data.

Optionally, you can return a third property defining a schema to validate your collection entries. Use the [Typescript `satisfies` operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator) instead of a return type annotation to provide type safety inside your loader object and to preserve type inference when your loader is used in a collection.

#### `Loader.name`

[Section titled “Loader.name”](#loadername)

**Type:** `string`

**Added in:** `astro@5.0.0`

A unique name for the loader, used in logs and [for conditional loading](/en/reference/integrations-reference/#refreshcontent-option).

#### `Loader.load()`

[Section titled “Loader.load()”](#loaderload)

**Type:** `(context: LoaderContext) => Promise<void>`

**Added in:** `astro@5.0.0`

An async function that is called at build time to load data and update the store. It is passed a [`LoaderContext`](#loadercontext) object that contains helper functions and properties for writing your loader’s implementation logic, as well as the `store` database and methods for interacting with it.

#### `Loader.schema`

[Section titled “Loader.schema”](#loaderschema)

**Type:** `ZodSchema`

**Added in:** `astro@5.0.0`

An optional [Zod schema](/en/guides/content-collections/#defining-datatypes-with-zod) that defines the shape of the entries. It is used to both validate the data and also to generate TypeScript types for the collection.

When you need to dynamically generate the schema at build time based on configuration options or by introspecting an API, use [`createSchema()`](#loadercreateschema) instead.

If present, it will be overridden by any Zod `schema` defined for the collection in the `src/content.config.ts` file.

#### `Loader.createSchema()`

[Section titled “Loader.createSchema()”](#loadercreateschema)

**Type:** `() => Promise<{ schema: ZodSchema; types: string }>`

**Added in:** `astro@6.0.0` New

An optional async function that returns an object containing a [Zod schema](/en/guides/content-collections/#defining-datatypes-with-zod) and types. It is used to dynamically generate the schema at build time based on the configuration options or by introspecting an API.

When you only need to provide a static schema, provide a Zod validation object using [`schema`](#loaderschema) instead.

If present, it will be overridden by any Zod `schema` defined for the collection in the `src/content.config.ts` file.

The returned `types` contents will be written to a TypeScript file, and must export an `Entry` type or interface:

src/feed-loader.ts

```diff
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { loadFeedData, getSchema, getTypes } from "./feed.js";


export function myLoader(options: { url: string, apiKey: string }) {
  const feedUrl = new URL(options.url);


  return {
    name: "feed-loader",
    load: async ({ store, parseData }) => {
      const feed = await loadFeedData(feedUrl, options.apiKey);


      store.clear();


      for (const item of feed.items) {
        const id = item.guid;
        const data = await parseData({
          id,
          data: item,
        });
        store.set({
          id,
          data,
        });
      }
    },
    +createSchema: async () => {
      +const schema = await getSchema();
      +const types = await getTypes();


      +return {
+        schema,
+        types: `export type Entry = ${types}`,
+      };
+    },
  } satisfies Loader;
}
```

### `LoaderContext`

[Section titled “LoaderContext”](#loadercontext)

This object is passed to the [`load()`](#loaderload) method of the loader, and contains the following properties:

#### `LoaderContext.collection`

[Section titled “LoaderContext.collection”](#loadercontextcollection)

**Type:** `string`

**Added in:** `astro@5.0.0`

The unique name of the collection. This is the key in the `collections` object in the `src/content.config.ts` file.

#### `LoaderContext.store`

[Section titled “LoaderContext.store”](#loadercontextstore)

**Type:** [`DataStore`](#datastore)

**Added in:** `astro@5.0.0`

A database to store the actual data. Use this to update the store with new entries. See [`DataStore`](#datastore) for more information.

#### `LoaderContext.meta`

[Section titled “LoaderContext.meta”](#loadercontextmeta)

**Type:** `MetaStore`

**Added in:** `astro@5.0.0`

A key-value store scoped to the collection, designed for things like sync tokens and last-modified times. This metadata is persisted between builds alongside the collection data but is only available inside the loader.

```ts
const lastModified = meta.get("lastModified");
// ...
meta.set("lastModified", new Date().toISOString());
```

#### `LoaderContext.logger`

[Section titled “LoaderContext.logger”](#loadercontextlogger)

**Type:** [`AstroIntegrationLogger`](/en/reference/integrations-reference/#astrointegrationlogger)

**Added in:** `astro@5.0.0`

A logger that can be used to log messages to the console. Use this instead of `console.log` for more helpful logs that include loader-specific content such as the loader name or information about the loading process in the log message. See [`AstroIntegrationLogger`](/en/reference/integrations-reference/#astrointegrationlogger) for more information.

Extract from the file() loader

```ts
return {
  name: 'file-loader',
  load: async ({ config, store, logger, watcher }) => {
    const url = new URL(fileName, config.root);
    const filePath = fileURLToPath(url);
    await syncData(filePath, store);


    watcher?.on('change', async (changedPath) => {
      if (changedPath === filePath) {
        logger.info(`Reloading data from ${fileName}`);
        await syncData(filePath, store);
      }
    });
  },
};
```

#### `LoaderContext.config`

[Section titled “LoaderContext.config”](#loadercontextconfig)

**Type:** `AstroConfig`

**Added in:** `astro@5.0.0`

The full, resolved Astro configuration object with all defaults applied. See [the configuration reference](/en/reference/configuration-reference/) for more information.

Extract from the file() loader

```ts
return {
  name: 'file-loader',
  load: async ({ config, store, logger, watcher }) => {
    const url = new URL(fileName, config.root);
    const filePath = fileURLToPath(url);
    await syncData(filePath, store);


    watcher?.on('change', async (changedPath) => {
      if (changedPath === filePath) {
        logger.info(`Reloading data from ${fileName}`);
        await syncData(filePath, store);
      }
    });
  },
};
```

#### `LoaderContext.parseData()`

[Section titled “LoaderContext.parseData()”](#loadercontextparsedata)

**Type:** `(props: ParseDataOptions<TData>) => Promise<TData>`

**Added in:** `astro@5.0.0`

Validates and parses the data according to the collection schema. Pass data to this function to validate and parse it before storing it in the data store.

loader.ts

```ts
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";


export function feedLoader({ url }) {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();


      for (const item of feed.items) {
        const id = item.guid;
        const data = await parseData({
          id,
          data: item,
        });
        store.set({
          id,
          data,
        });
      }
    },
  } satisfies Loader;
}
```

#### `LoaderContext.renderMarkdown()`

[Section titled “LoaderContext.renderMarkdown()”](#loadercontextrendermarkdown)

**Type:** `(content: string, options?: { fileURL?: URL }) => Promise<RenderedContent>`

**Added in:** `astro@5.9.0`

Renders a Markdown string to HTML, returning a `RenderedContent` object.

This allows you to render Markdown content directly within your loaders using the same Markdown processing as Astro’s built-in `glob()` loader and provides access to the `render()` function and `<Content />` component for [rendering body content](/en/guides/content-collections/#rendering-body-content).

Assign this object to the [rendered](#dataentryrendered) field of the [DataEntry](#dataentry) object to allow users to [render the content in a page](/en/guides/content-collections/#rendering-body-content). If the Markdown content includes frontmatter, it will be parsed and available in `metadata.frontmatter`. The frontmatter will be excluded from the HTML output.

loader.ts

```ts
import type { Loader } from 'astro/loaders';
import { loadFromCMS } from './cms.js';


export function myLoader(settings) {
  return {
    name: 'cms-loader',
    async load({ renderMarkdown, store }) {
      const entries = await loadFromCMS();


      store.clear();


      for (const entry of entries) {
        store.set({
          id: entry.id,
          data: entry,
          // Assume each entry has a 'content' field with markdown content
          rendered: await renderMarkdown(entry.content),
        });
      }
    },
  } satisfies Loader;
}
```

##### `fileURL`

[Section titled “fileURL”](#fileurl)

**Type:** `URL`

**Added in:** `astro@6.0.0` New

Specifies the file path to use for resolving relative image paths in Markdown content.

The following example uses the [configured root directory](/en/reference/configuration-reference/#root) to resolve image paths:

loader.ts

```ts
for (const file of files) {
  const content = await readFile(file.path, 'utf8');
  store.set({
    id: file.id,
    data: file.data,
    rendered: await renderMarkdown(content, {
      fileURL: new URL(file.path, config.root),
    }),
  });
}
```

#### `LoaderContext.generateDigest()`

[Section titled “LoaderContext.generateDigest()”](#loadercontextgeneratedigest)

**Type:** `(data: Record<string, unknown> | string) => string`

**Added in:** `astro@5.0.0`

Generates a non-cryptographic content digest of an object or string. This can be used to track if the data has changed by setting [the `digest` field](#dataentrydigest) of an entry.

loader.ts

```ts
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";


export function feedLoader({ url }) {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();


      for (const item of feed.items) {
        const id = item.guid;
        const data = await parseData({
          id,
          data: item,
        });


        const digest = generateDigest(data);


        store.set({
          id,
          data,
          digest,
        });
      }
    },
  } satisfies Loader;
}
```

#### `LoaderContext.watcher`

[Section titled “LoaderContext.watcher”](#loadercontextwatcher)

**Type:** `FSWatcher`

**Added in:** `astro@5.0.0`

When running in dev mode, this is a filesystem watcher that can be used to trigger updates. See [`ViteDevServer`](https://vite.dev/guide/api-javascript.html#vitedevserver) for more information.

Extract from the file() loader

```ts
return {
  name: 'file-loader',
  load: async ({ config, store, watcher }) => {
    const url = new URL(fileName, config.root);
    const filePath = fileURLToPath(url);
    await syncData(filePath, store);


    watcher?.on('change', async (changedPath) => {
      if (changedPath === filePath) {
        logger.info(`Reloading data from ${fileName}`);
        await syncData(filePath, store);
      }
    });
  },
};
```

#### `LoaderContext.refreshContextData`

[Section titled “LoaderContext.refreshContextData”](#loadercontextrefreshcontextdata)

**Type:** `Record<string, unknown>`

**Added in:** `astro@5.0.0`

If the loader has been triggered by an integration, this may optionally contain extra data set by that integration. It is only set when the loader is triggered by an integration. See the [`astro:server:setup`](/en/reference/integrations-reference/#refreshcontent-option) hook reference for more information.

loader.ts

```ts
import type { Loader } from "astro/loaders";
import { processWebhook } from "./lib/webhooks";


export function myLoader(options: { url: string }) {
  return {
    name: "my-loader",
    load: async ({ refreshContextData, store, logger }) => {
      if(refreshContextData?.webhookBody) {
        logger.info("Webhook triggered with body");
        processWebhook(store, refreshContextData.webhookBody);
      }
      // ...
    },
  } satisfies Loader;
}
```

### `DataStore`

[Section titled “DataStore”](#datastore)

The data store is a loader’s interface to the content collection data. It is a key-value (KV) store, scoped to the collection, and therefore a loader can only access the data for its own collection.

#### `DataStore.get()`

[Section titled “DataStore.get()”](#datastoreget)

**Type:** `(key: string) => DataEntry | undefined`

**Added in:** `astro@5.0.0`

Get an entry from the store by its ID. Returns `undefined` if the entry does not exist.

```ts
const existingEntry = store.get("my-entry");
```

The returned object is a [`DataEntry`](#dataentry) object.

#### `DataStore.set()`

[Section titled “DataStore.set()”](#datastoreset)

**Type:** `(entry: DataEntry) => boolean`

**Added in:** `astro@5.0.0`

Used after data has been [validated and parsed](#loadercontextparsedata) to add an entry to the store, returning `true` if the entry was set. This returns `false` when the [`digest`](#dataentrydigest) property determines that an entry has not changed and should not be updated.

loader.ts

```ts
    for (const item of feed.items) {
      const id = item.guid;
      const data = await parseData({
        id,
        data: item,
      });
      const digest = generateDigest(data);
      store.set({
        id,
        data,
        rendered: {
          html: data.description ?? "",
        },
        digest,
      });
    }
```

#### `DataStore.entries()`

[Section titled “DataStore.entries()”](#datastoreentries)

**Type:** `() => Array<[id: string, DataEntry]>`

**Added in:** `astro@5.0.0`

Get all entries in the collection as an array of key-value pairs.

#### `DataStore.keys()`

[Section titled “DataStore.keys()”](#datastorekeys)

**Type:** `() => Array<string>`

**Added in:** `astro@5.0.0`

Get all the keys of the entries in the collection.

#### `DataStore.values()`

[Section titled “DataStore.values()”](#datastorevalues)

**Type:** `() => Array<DataEntry>`

**Added in:** `astro@5.0.0`

Get all entries in the collection as an array.

#### `DataStore.delete()`

[Section titled “DataStore.delete()”](#datastoredelete)

**Type:** `(key: string) => void`

**Added in:** `astro@5.0.0`

Delete an entry from the store by its ID.

#### `DataStore.clear()`

[Section titled “DataStore.clear()”](#datastoreclear)

**Type:** `() => void`

**Added in:** `astro@5.0.0`

Clear all entries from the collection.

#### `DataStore.has()`

[Section titled “DataStore.has()”](#datastorehas)

**Type:** `(key: string) => boolean`

**Added in:** `astro@5.0.0`

Check if an entry exists in the store by its ID.

### `DataEntry`

[Section titled “DataEntry”](#dataentry)

This is the type of the object that is stored in the data store. It has the following properties:

#### `DataEntry.id`

[Section titled “DataEntry.id”](#dataentryid)

**Type:** `string`

**Added in:** `astro@5.0.0`

An identifier for the entry, which must be unique within the collection. This is used to look up the entry in the store and is the key used with [`getEntry()`](/en/reference/modules/astro-content/#getentry) for that collection.

#### `DataEntry.data`

[Section titled “DataEntry.data”](#dataentrydata)

**Type:** `Record<string, unknown>`

**Added in:** `astro@5.0.0`

The actual data for the entry. When a user accesses the collection, this will have TypeScript types generated according to the collection schema.

It is the loader’s responsibility to use [`parseData()`](#loadercontextparsedata) to validate and parse the data before storing it in the data store: no validation is done when getting or setting the data.

#### `DataEntry.filePath`

[Section titled “DataEntry.filePath”](#dataentryfilepath)

**Type:** `string | undefined`

**Added in:** `astro@5.0.0`

A path to the file that is the source of this entry, relative to the root of the site. This only applies to file-based loaders and is used to resolve paths such as images or other assets.

If not set, then any fields in the schema that use [the `image()` helper](/en/guides/images/#images-in-content-collections) will be treated as [public paths](/en/guides/images/#where-to-store-images) and not transformed.

#### `DataEntry.body`

[Section titled “DataEntry.body”](#dataentrybody)

**Type:** `string | undefined`

**Added in:** `astro@5.0.0`

The raw body of the entry, if applicable. If the entry includes [rendered content](#dataentryrendered), then this field can be used to store the raw source. This is optional and is not used internally.

#### `DataEntry.digest`

[Section titled “DataEntry.digest”](#dataentrydigest)

**Type:** `string | undefined`

**Added in:** `astro@5.0.0`

An optional content digest for the entry. This can be used to check if the data has changed.

When [setting an entry](#datastoreset), the entry will only update if the digest does not match an existing entry with the same ID.

The format of the digest is up to the loader, but it must be a string that changes when the data changes. This can be done with the [`generateDigest`](#loadercontextgeneratedigest) function.

#### `DataEntry.rendered`

[Section titled “DataEntry.rendered”](#dataentryrendered)

**Type:** `RenderedContent | undefined`

**Added in:** `astro@5.0.0`

Stores an object with an entry’s rendered content and metadata if it has been rendered to HTML. For example, this can be used to store the rendered content of a Markdown entry, or HTML from a CMS.

If this field is provided, then [the `render()` function and `<Content />` component](/en/guides/content-collections/#rendering-body-content) are available to render the entry in a page.

If the entry has Markdown content then you can use the [`renderMarkdown()`](#loadercontextrendermarkdown) function to generate this object from the Markdown string.

##### `DataEntry.rendered.html`

[Section titled “DataEntry.rendered.html”](#dataentryrenderedhtml)

**Type:** `string`

Contains the rendered HTML string. This is used by [`render()`](/en/reference/modules/astro-content/#render) to return a component that renders this HTML.

##### `DataEntry.rendered.metadata`

[Section titled “DataEntry.rendered.metadata”](#dataentryrenderedmetadata)

**Type:** `object | undefined`

Describes the metadata present in this file. This includes the `imagePaths`, the `headings`, the `frontmatter`, and any other metadata present in the file. When the file has not been rendered as HTML, this value will be `undefined`.

###### `DataEntry.rendered.metadata.imagePaths`

[Section titled “DataEntry.rendered.metadata.imagePaths”](#dataentryrenderedmetadataimagepaths)

**Type:** `string[]`

Specifies the list of images paths present in this entry. Each path is relative to the [entry `filePath`](#dataentryfilepath).

###### `DataEntry.rendered.metadata.headings`

[Section titled “DataEntry.rendered.metadata.headings”](#dataentryrenderedmetadataheadings)

**Type:** `MarkdownHeading[]`

Specifies the list of headings present in this file. Each heading is described by a `depth` determined by the heading level (`h1 -> h6`), a `slug` generated with [`github-slugger`](https://github.com/Flet/github-slugger), and its `text` content.

###### `DataEntry.rendered.metadata.frontmatter`

[Section titled “DataEntry.rendered.metadata.frontmatter”](#dataentryrenderedmetadatafrontmatter)

**Type:** `Record<string, any>`

Describes the raw frontmatter, parsed from the file. This may include [programmatically injected data from remark plugins](/en/guides/markdown-content/#modifying-frontmatter-programmatically).
