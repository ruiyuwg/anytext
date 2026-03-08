# Astro Content Loader API

Astro’s Content Loader API allows you to load your data from any source, local or remote, and interact with Astro’s content layer to manage your [content collections](/en/guides/content-collections/).

## What is a loader?

[Section titled “What is a loader?”](#what-is-a-loader)

Astro loaders allow you to load data into [content collections](/en/guides/content-collections/), which can then be used in pages and components. The [built-in `glob()` and `file()` loaders](/en/guides/content-collections/#built-in-loaders) are used to load content from the file system, and you can create your own loaders to load content from other sources.

Each collection needs [a loader defined in its schema](/en/guides/content-collections/#defining-the-collection-loader). You can define a loader inline in your project’s `src/content.config.ts` file, share one loader between multiple collections, or even [publish your loader to NPM as a package](/en/reference/publish-to-npm/) to share with others and be included in our integrations library.

## Built-in loaders

[Section titled “Built-in loaders”](#built-in-loaders)

Astro provides two built-in loaders to help you fetch your collections. Both offer options to suit a wide range of use cases.

### `glob()` loader

[Section titled “glob() loader”](#glob-loader)

**Type:** `(options: GlobOptions) => Loader`

**Added in:** `astro@5.0.0`

The `glob()` loader creates entries from directories of files from anywhere on the filesystem. The supported file types are Markdown, MDX, Markdoc, JSON, YAML, and TOML files.

This loader accepts an object with the following properties: `pattern`, `base` (optional), `generateId` (optional), and `retainBody` (optional).

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';


const pages = defineCollection({
  /* Retrieve all Markdown files in your pages directory. */
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
  schema: /* ... */
});
const blog = defineCollection({
  /* Retrieve all Markdown and MDX files in your blog directory. */
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/blog" }),
  schema: /* ... */
});
const notes = defineCollection({
  /* Retrieve all Markdown files in your notes directory and prevent
   * the raw body of content files from being stored in the data store. */
  loader: glob({
    pattern: '**/*.md',
    base: './src/data/notes',
    retainBody: false
  }),
  schema: /* ... */
});
const authors = defineCollection({
  /* Retrieve all JSON files in your authors directory while retaining
   * uppercase letters in the ID. */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: /* ... */
});
```

#### `pattern`

[Section titled “pattern”](#pattern)

**Type:** `string | string[]`

The `pattern` property accepts a string or an array of strings using glob matching (e.g. wildcards, globstars). The patterns must be relative to the base directory of entry files to match.

You can learn more about the syntax to use in the [micromatch documentation](https://github.com/micromatch/micromatch#matching-features). You can also verify the validity of your pattern using an online tool like the [DigitalOcean Glob Tool](https://www.digitalocean.com/community/tools/glob).

#### `base`

[Section titled “base”](#base)

**Type:** `string | URL`\
**Default:** `"."`

A relative path or [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) to the directory from which to resolve the `pattern`.

#### `generateId()`

[Section titled “generateId()”](#generateid)

**Type:** `(options: GenerateIdOptions) => string`

A callback function that returns a unique string per entry in a collection. It accepts an object as parameter with the following properties:

- `entry` - the path to the entry file, relative to the base directory
- `base` - the base directory [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- `data` - the parsed, unvalidated data of the entry

By default it uses [`github-slugger`](https://github.com/Flet/github-slugger) to generate a slug with [kebab-cased](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case) words.

#### `retainBody`

[Section titled “retainBody”](#retainbody)

**Type:** `boolean`\
**Default:** `true`

**Added in:** `astro@5.17.0`

Whether or not to store the raw body of content files in the data store.

When `retainBody` is `false`, [`entry.body`](/en/reference/modules/astro-content/#body) will be `undefined` instead of containing the raw file contents.

Setting this property to `false` significantly reduces the deployed size of the data store and helps avoid hitting size limits for sites with very large collections.

For Markdown files, the rendered body will still be available in the [`entry.rendered.html` property](/en/reference/content-loader-reference/#rendered), and the [`entry.filePath` property](/en/reference/content-loader-reference/#filepath) will still point to the original file.

For MDX collections, this will dramatically reduce the size of the collection, as there will no longer be any body retained in the store.

### `file()` loader

[Section titled “file() loader”](#file-loader)

**Type:** `(fileName: string, options?: FileOptions) => Loader`

**Added in:** `astro@5.0.0`

The `file()` loader creates entries from a single file that contains an array of objects with a unique `id` field, or an object with IDs as keys and entries as values. It supports JSON, YAML, or TOML files and you can provide a custom `parser` for data files it cannot parse by default.

This loader accepts a `fileName` property and an optional object as second argument:

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';


const authors = defineCollection({
  /* Retrieve all entries from a JSON file. */
  loader: file("src/data/authors.json"),
  schema: /* ... */
});
const products = defineCollection({
  /* Retrieve all entries from a CSV file using a custom parser. */
  loader: file("src/data/products.csv", {
    parser: (fileContent) => { /* your parser logic */ },
  }),
  schema: /* ... */
});
```

#### `fileName`

[Section titled “fileName”](#filename)

**Type:** `string`

Sets the path to the file to load, relative to the root directory.

#### Options

[Section titled “Options”](#options)

**Type:** `FileOptions`

An optional object with the following properties:

##### `parser()`

[Section titled “parser()”](#parser)

**Type:** `(text: string) => Record<string, Record<string, unknown>> | Array<Record<string, unknown>> | Promise<Record<string, Record<string, unknown>> | Array<Record<string, unknown>>>`

A callback function to create a collection from a file’s contents. Use it when you need to process file not supported by default (e.g. `.csv`) or when using [nested `.json` documents](/en/guides/content-collections/#nested-json-documents).

## Loader types

[Section titled “Loader types”](#loader-types)

Loaders can be defined either as a simple function that returns an array of entries or with the more powerful object Content Loader API for more control over the loading process.

### Inline loaders

[Section titled “Inline loaders”](#inline-loaders)

An inline loader is an async function that returns an array or object containing entries. Use this for simple loaders, particularly those that are defined inline in the `src/content.config.ts` file.

The function can be async and must return either an array of entries that each contain a unique `id` field, or an object where each key is a unique ID and each value is the entry. Whenever the loader is invoked, it will clear the store and reload all the entries.

src/content.config.ts

```ts
const countries = defineCollection({
  loader: async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    // Must return an array of entries with an id property
    // or an object with IDs as keys and entries as values
    return data.map((country) => ({
      id: country.cca3,
      ...country,
    }));
  },
  schema: /* ... */
});
```

### Object loaders

[Section titled “Object loaders”](#object-loaders)

A loader is an object with a `load()` method that is called at build time to fetch data and update the data store. It allows entries to be updated incrementally, or for the store to be cleared only when necessary. It can also define a schema for the entries, which can be used to validate the data and generate static types.

The recommended pattern is to define a function that accepts configuration options and returns the loader object, in the same way that you would normally define an Astro integration or Vite plugin.

loader.ts

```ts
import type { Loader, LoaderContext } from 'astro/loaders';
import { z } from 'astro/zod';
import { loadFeedData } from "./feed.js";


// Define any options that the loader needs
export function myLoader(options: { url: string, apiKey: string }): Loader {
  // Configure the loader
  const feedUrl = new URL(options.url);
  // Return a loader object
  return {
    name: "my-loader",
    // Called when updating the collection.
    load: async (context: LoaderContext): Promise<void> => {
      // Load data and update the store
      const response = await loadFeedData(feedUrl, options.apiKey);
    },
    // Optionally, define the schema of an entry.
    // It will be overridden by user-defined schema.
    schema: async () => z.object({
      // ...
    })
  };
}
```

These configuration options can then be set when defining a collection:

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import myLoader from '../../loader.ts';


const blog = defineCollection({
  loader: myLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),
  schema: /* ... */
});
```

## Object loader API

[Section titled “Object loader API”](#object-loader-api)

The API for [inline loaders](#inline-loaders) is very simple, and is shown above. This section shows the API for defining an object loader.

### The `Loader` object

[Section titled “The Loader object”](#the-loader-object)

The loader object has the following properties:

#### `name`

[Section titled “name”](#name)

**Type**: `string`

A unique name for the loader, used in logs and [for conditional loading](/en/reference/integrations-reference/#refreshcontent-option).

#### `load`

[Section titled “load”](#load)

**Type**: `(context: LoaderContext) => Promise<void>`

An async function that is called at build time to load data and update the store. See [`LoaderContext`](#loadercontext) for more information.

#### `schema`

[Section titled “schema”](#schema)

**Type**: `ZodSchema | Promise<ZodSchema> | (() => ZodSchema | Promise<ZodSchema>)`

An optional [Zod schema](/en/guides/content-collections/#defining-datatypes-with-zod) that defines the shape of the entries. It is used to both validate the data and also to generate TypeScript types for the collection.

If a function is provided, it will be called at build time before `load()` to generate the schema. You can use this to dynamically generate the schema based on the configuration options or by introspecting an API.

### `LoaderContext`

[Section titled “LoaderContext”](#loadercontext)

This object is passed to the `load()` method of the loader, and contains the following properties:

#### `collection`

[Section titled “collection”](#collection)

**Type**: `string`

The unique name of the collection. This is the key in the `collections` object in the `src/content.config.ts` file.

#### `store`

[Section titled “store”](#store)

**Type**: [`DataStore`](#datastore)

A database to store the actual data. Use this to update the store with new entries. See [`DataStore`](#datastore) for more information.

#### `meta`

[Section titled “meta”](#meta)

**Type**: `MetaStore`

A key-value store scoped to the collection, designed for things like sync tokens and last-modified times. This metadata is persisted between builds alongside the collection data but is only available inside the loader.

```ts
const lastModified = meta.get("lastModified");
// ...
meta.set("lastModified", new Date().toISOString());
```

#### `logger`

[Section titled “logger”](#logger)

**Type**: [`AstroIntegrationLogger`](/en/reference/integrations-reference/#astrointegrationlogger)

A logger that can be used to log messages to the console. Use this instead of `console.log` for more helpful logs that include the loader name in the log message. See [`AstroIntegrationLogger`](/en/reference/integrations-reference/#astrointegrationlogger) for more information.

#### `config`

[Section titled “config”](#config)

**Type**: `AstroConfig`

The full, resolved Astro configuration object with all defaults applied. See [the configuration reference](/en/reference/configuration-reference/) for more information.

#### `parseData`

[Section titled “parseData”](#parsedata)

**Type**: `(props: ParseDataOptions<TData>) => Promise<TData>`

Validates and parses the data according to the collection schema. Pass data to this function to validate and parse it before storing it in the data store.

loader.ts

```ts
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";


export function feedLoader({ url }): Loader {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();


      for (const item of feed.items) {
        const data = await parseData({
          id: item.guid,
          data: item,
        });
        store.set({
          id,
          data,
        });
      }
    },
  };
}
```

#### `renderMarkdown`

[Section titled “renderMarkdown”](#rendermarkdown)

**Type**: `(markdown: string) => Promise<RenderedContent>`

**Added in:** `astro@5.9.0`

Renders a Markdown string to HTML, returning a `RenderedContent` object.

This allows you to render Markdown content directly within your loaders using the same Markdown processing as Astro’s built-in `glob` loader and provides access to the `render()` function and `<Content />` component for [rendering body content](/en/guides/content-collections/#rendering-body-content).

Assign this object to the [rendered](#rendered) field of the [DataEntry](#dataentry) object to allow users to [render the content in a page](/en/guides/content-collections/#rendering-body-content).

loader.ts

```ts
import type { Loader } from 'astro/loaders';
import { loadFromCMS } from './cms.js';


export function myLoader(settings): Loader {
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
  };
}
```

#### `generateDigest`

[Section titled “generateDigest”](#generatedigest)

**Type**: `(data: Record<string, unknown> | string) => string`

Generates a non-cryptographic content digest of an object or string. This can be used to track if the data has changed by setting [the `digest` field](#digest) of an entry.

loader.ts

```ts
import type { Loader } from "astro/loaders";
import { loadFeed } from "./feed.js";


export function feedLoader({ url }): Loader {
  const feedUrl = new URL(url);
  return {
    name: "feed-loader",
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      logger.info("Loading posts");
      const feed = loadFeed(feedUrl);
      store.clear();


      for (const item of feed.items) {
        const data = await parseData({
          id: item.guid,
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
  };
}
```

#### `watcher`

[Section titled “watcher”](#watcher)

**Type**: `FSWatcher`

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

#### `refreshContextData`

[Section titled “refreshContextData”](#refreshcontextdata)

**Type**: `Record<string, unknown>`

If the loader has been triggered by an integration, this may optionally contain extra data set by that integration. It is only set when the loader is triggered by an integration. See the [`astro:server:setup`](/en/reference/integrations-reference/#refreshcontent-option) hook reference for more information.

loader.ts

```ts
export function myLoader(options: { url: string }): Loader {
  return {
    name: "my-loader",
    load: async ({ refreshContextData, store, logger }) => {
      if(refreshContextData?.webhookBody) {
        logger.info("Webhook triggered with body");
        processWebhook(store, refreshContextData.webhookBody);
      }
      // ...
    },
  };
}
```

### `DataStore`

[Section titled “DataStore”](#datastore)

The data store is a loader’s interface to the content collection data. It is a key-value (KV) store, scoped to the collection, and therefore a loader can only access the data for its own collection.

#### `get`

[Section titled “get”](#get)

**Type**: `(key: string) => DataEntry | undefined`

Get an entry from the store by its ID. Returns `undefined` if the entry does not exist.

```ts
const existingEntry = store.get("my-entry");
```

The returned object is a [`DataEntry`](#dataentry) object.

#### `set`

[Section titled “set”](#set)

**Type**: `(entry: DataEntry) => boolean`

Used after data has been [validated and parsed](#parsedata) to add an entry to the store, returning `true` if the entry was set. This returns `false` when the [`digest`](#digest) property determines that an entry has not changed and should not be updated.

loader.ts

```ts
    for (const item of feed.items) {
      const data = await parseData({
        id: item.guid,
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

#### `entries`

[Section titled “entries”](#entries)

**Type**: `() => Array<[id: string, DataEntry]>`

Get all entries in the collection as an array of key-value pairs.

#### `keys`

[Section titled “keys”](#keys)

**Type**: `() => Array<string>`

Get all the keys of the entries in the collection.

#### `values`

[Section titled “values”](#values)

**Type**: `() => Array<DataEntry>`

Get all entries in the collection as an array.

#### `delete`

[Section titled “delete”](#delete)

**Type**: `(key: string) => void`

Delete an entry from the store by its ID.

#### `clear`

[Section titled “clear”](#clear)

**Type**: `() => void`

Clear all entries from the collection.

#### `has`

[Section titled “has”](#has)

**Type**: `(key: string) => boolean`

Check if an entry exists in the store by its ID.

### `DataEntry`

[Section titled “DataEntry”](#dataentry)

This is the type of the object that is stored in the data store. It has the following properties:

#### `id`

[Section titled “id”](#id)

**Type**: `string`

An identifier for the entry, which must be unique within the collection. This is used to look up the entry in the store and is the key used with `getEntry` for that collection.

#### `data`

[Section titled “data”](#data)

**Type**: `Record<string, unknown>`

The actual data for the entry. When a user accesses the collection, this will have TypeScript types generated according to the collection schema.

It is the loader’s responsibility to use [`parseData`](#parsedata) to validate and parse the data before storing it in the data store: no validation is done when getting or setting the data.

#### `filePath`

[Section titled “filePath”](#filepath)

**Type**: `string | undefined`

A path to the file that is the source of this entry, relative to the root of the site. This only applies to file-based loaders and is used to resolve paths such as images or other assets.

If not set, then any fields in the schema that use [the `image()` helper](/en/guides/images/#images-in-content-collections) will be treated as [public paths](/en/guides/images/#where-to-store-images) and not transformed.

#### `body`

[Section titled “body”](#body)

**Type**: `string | undefined`

The raw body of the entry, if applicable. If the entry includes [rendered content](#rendered), then this field can be used to store the raw source. This is optional and is not used internally.

#### `digest`

[Section titled “digest”](#digest)

**Type**: `string | undefined`

An optional content digest for the entry. This can be used to check if the data has changed.

When [setting an entry](#set), the entry will only update if the digest does not match an existing entry with the same ID.

The format of the digest is up to the loader, but it must be a string that changes when the data changes. This can be done with the [`generateDigest`](#generatedigest) function.

#### `rendered`

[Section titled “rendered”](#rendered)

**Type**: `RenderedContent | undefined`

Stores an object with an entry’s rendered content and metadata if it has been rendered to HTML. For example, this can be used to store the rendered content of a Markdown entry, or HTML from a CMS.

If this field is provided, then [the `render()` function and `<Content />` component](/en/guides/content-collections/#rendering-body-content) are available to render the entry in a page.

The format of the `RenderedContent` object is:

```ts
{
  /** Rendered HTML string. If present then `render(entry)` will return a component that renders this HTML. */
  html: string;
  metadata?: {
    /** Any images that are present in this entry. Relative to the DataEntry filePath. */
    imagePaths?: Array<string>;
    /** Any headings that are present in this file. Returned as `headings` from `render()` */
    headings?: MarkdownHeading[];
    /** Raw frontmatter, parsed from the file. This may include data from remark plugins. */
    frontmatter?: Record<string, any>;
    /** Any other metadata that is present in this file. */
    [key: string]: unknown;
  };
}
```

If the entry has Markdown content then you can use the [`renderMarkdown()`](#rendermarkdown) function to generate this object from the Markdown string.
