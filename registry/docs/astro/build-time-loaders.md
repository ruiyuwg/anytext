## Build-time loaders

[Section titled “Build-time loaders”](#build-time-loaders)

Build-time loaders are objects with a [`load()` method](#loaderload) that is called at build time to fetch data and update the data store. This object can also define a schema for the entries, which can be used to validate the data and generate static types.

Astro’s [`glob()`](#glob-loader) and [`file()`](#file-loader) loaders are examples of object loaders that are provided out-of-the-box for use with local content. For remote content, no prebuilt loaders are provided. You will have to build an object loader or use a [community-published loader](https://astro.build/integrations/?search=\&categories%5B%5D=loaders) to retrieve remote content and interact with the data store.

For simple data fetching, you can also [define a loader as an async function](#defining-a-loader-as-a-function) that returns an array or object containing entries.

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
});
const blog = defineCollection({
  /* Retrieve all Markdown and MDX files in your blog directory. */
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/blog" }),
});
const notes = defineCollection({
  /* Retrieve all Markdown files in your notes directory and prevent
   * the raw body of content files from being stored in the data store. */
  loader: glob({
    pattern: '**/*.md',
    base: './src/data/notes',
    retainBody: false
  }),
});
const authors = defineCollection({
  /* Retrieve all JSON files in your authors directory while retaining
   * uppercase letters in the ID. */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
});


export const collections = { pages, blog, authors };
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

When `retainBody` is `false`, [`entry.body`](/en/reference/modules/astro-content/#collectionentrybody) will be `undefined` instead of containing the raw file contents.

Setting this property to `false` significantly reduces the deployed size of the data store and helps avoid hitting size limits for sites with very large collections.

For Markdown files, the rendered body will still be available in the [`entry.rendered.html` property](#dataentryrenderedhtml), and the [`entry.filePath` property](#dataentryfilepath) will still point to the original file.

For MDX collections, this will dramatically reduce the size of the collection, as there will no longer be any body retained in the store.

### `file()` loader

[Section titled “file() loader”](#file-loader)

**Type:** `(fileName: string, options?: FileOptions) => Loader`

**Added in:** `astro@5.0.0`

The `file()` loader creates entries from a single file that contains an array of objects with a unique `id` field, or an object with IDs as keys and entries as values.

It supports JSON, YAML, or TOML files and you can provide a custom `parser` for data files it cannot parse by default, or to parse data asynchronously.

This loader accepts a `fileName` property and an optional options object as second argument:

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';


const authors = defineCollection({
  /* Retrieve all entries from a JSON file. */
  loader: file("src/data/authors.json"),
});
const products = defineCollection({
  /* Retrieve all entries from a CSV file using a custom parser. */
  loader: file("src/data/products.csv", {
    parser: (fileContent) => { /* your parser logic */ },
  }),
});


export const collections = { authors, products };
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

A callback function to create a collection from a file’s contents. Use it when you need to process files other than JSON, YAML, or TOML that not supported by default (e.g. `.csv`) or when using [nested `.json` documents](/en/guides/content-collections/#nested-json-documents).

### Building a loader

[Section titled “Building a loader”](#building-a-loader)

The Content Loader API is flexible and full-featured, allowing for a variety of data fetching options. It is possible to build both simple and complex loaders. Your custom loader will depend on both the source and the shape of your data, as well as how you choose to manage the persistent data storage layer.

Most loaders will export a function that accepts configuration options and returns a [loader object](#the-loader-object) including a `name` for your loader, a `load()` method, and a `schema` defining your entries.

#### Loading collections into the data store

[Section titled “Loading collections into the data store”](#loading-collections-into-the-data-store)

The [`load()`](#loaderload) function returned in the loader object defines how your content is fetched, parsed, validated and updated. It accepts a `context` object that allows you to customize your data handling in a variety of ways and interact with the data store. A typical `load()` function will:

- Fetch your data from a source.
- Clear the existing data store.
- Parse and validate your data entries according to a provided schema.
- Update the data store with new entries.

The `load()` method also provides helpers to log messages to the console, render content to HTML, watch for changes in dev mode and reload data, provide access to metadata and even the full Astro config, and more.

See the full [`LoaderContext`](#loadercontext) list of properties for all options available to the `load()` function.

#### Providing a schema

[Section titled “Providing a schema”](#providing-a-schema)

Providing a Zod [`schema`](#loaderschema) in your loader allows you to validate your fetched content entries with [`parseData()`](#loadercontextparsedata) before adding them to the data [store](#loadercontextstore). This schema will also be used as the collection’s default schema when one does not exist in `src/content.config.ts` to provide type safety and editor tooling. You do not also need a schema defined in the content collection if the loader provides this property.

However, if the content collection also [defines a schema](/en/guides/content-collections/#defining-the-collection-schema), that schema will be used instead of your loader’s schema. This is to allow users of your loader to extend its schema, or transform data for use in their project. If you are [publishing and distributing a loader](#distributing-your-loader) for others to use, you may wish to document this behavior and encourage users not to define a collection schema themselves, or how to do so safely if they need data returned in a different format.

If you need to dynamically generate the schema based on the configuration options or by introspecting an API, you can use [`createSchema()`](#loadercreateschema) instead.

#### Loader example

[Section titled “Loader example”](#loader-example)

The following example shows a loader that fetches data from a provided feed URL (using a custom `loadFeedData` utility) and updates the data store with new entries each time the site is built:

src/feed-loader.ts

```ts
// 1. Import the `Loader` type and any other dependencies needed
import type { Loader } from 'astro/loaders';
import { z } from 'astro/zod';
import { loadFeedData } from "./feed.js";


// 2. Define any options that your loader needs
export function feedLoader(options: { url: string, apiKey: string }) {
  const feedUrl = new URL(options.url);
  // 3. Return a loader object
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
    // 4. Define the schema of an entry.
    schema: z.object({
      // ...
    })
  } satisfies Loader;
}
```

#### Defining your collection with your loader

[Section titled “Defining your collection with your loader”](#defining-your-collection-with-your-loader)

Use your custom loader as the value of the `loader` property when you define your collection in `src/content.config.ts`. Configuration options can be passed to your loader as arguments:

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { feedLoader } from './feed-loader.ts';


const blog = defineCollection({
  loader: feedLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),
});


export const collections = { blog };
```

### Defining a loader as a function

[Section titled “Defining a loader as a function”](#defining-a-loader-as-a-function)

For simple data fetches that do not need custom data store handling, validation, logging, or any other helpers provided by the [build-time loader object](#the-loader-object), you can define your loader as a function.

The function can be async and must return either an array of entries that each contain a unique `id` field, or an object where each key is a unique ID and each value is the entry.

This pattern provides a convenient shorthand to accomplish the basic tasks normally performed by the `load()` function to [load collections into the data store](#loading-collections-into-the-data-store). At build-time, the loader will automatically clear the data store and reload all the entries. No further customization options or helpers for data handling are provided.

These loaders are often simple enough that you may choose to define them inline in the `src/content.config.ts` file:

src/content.config.ts

```ts
import { defineCollection } from "astro:content";


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
});


export const collections = { countries };
```
