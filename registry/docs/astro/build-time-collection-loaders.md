## Build-time collection loaders

[Section titled “Build-time collection loaders”](#build-time-collection-loaders)

Astro provides two built-in loaders (`glob()` and `file()`) for fetching your local content at build time. Pass the location of your data in your project or on your filesystem, and these loaders will automatically handle your data and update the persistent data store content layer.

To fetch remote data at build time, you can [build a custom loader](#custom-build-time-loaders) to retrieve your data and update the data store. Or, you can use any [third-party or community-published loader integration](https://astro.build/integrations/2/?search=\&categories%5B%5D=loaders). Several already exist for popular content management systems as well as common data sources such as Obsidian vaults, GitHub repositories, or Bluesky posts.

### The `glob()` loader

[Section titled “The glob() loader”](#the-glob-loader)

The [`glob()` loader](/en/reference/content-loader-reference/#glob-loader) fetches entries from directories of Markdown, MDX, Markdoc, JSON, YAML, or TOML files from anywhere on the filesystem. If you store your content entries locally as separate files, such as a directory of blog posts, then the `glob()` loader is all you need to access your content.

This loader requires a `pattern` of entry files to match using glob patterns supported by [micromatch](https://github.com/micromatch/micromatch#matching-features), and a `base` file path of where your files are located. A unique `id` for each entry will be automatically generated from its file name, but you can [define custom IDs](#defining-custom-ids) if needed.

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
});


export const collections = { blog };
```

#### Defining custom IDs

[Section titled “Defining custom IDs”](#defining-custom-ids)

When using the [`glob()` loader](#the-glob-loader) with Markdown, MDX, Markdoc, JSON, or TOML files, every content entry [`id`](/en/reference/modules/astro-content/#collectionentryid) is automatically generated in an URL-friendly format based on the content filename. This unique `id` is used to query the entry directly from your collection. It is also useful when [creating new pages and URLs from your content](#generating-routes-from-content).

You can override a single entry’s generated `id` by adding your own `slug` property to the file frontmatter or data object for JSON files. This is similar to the “permalink” feature of other web frameworks.

src/blog/1.md

```md
# My Blog Post
Your blog post content here.
```

src/categories/1.json

```json
{
  "title": "My Category",
  "slug": "my-custom-id/supports/slashes",
  "description": "Your category description here."
}
```

You can also pass options to the `glob()` loader’s [`generateID()` helper function](/en/reference/content-loader-reference/#generateid) when you define your build-time collection to adjust how `id`s are generated. For example, you may wish to revert the default behavior of converting uppercase letters to lowercase for each collection entry:

src/content.config.ts

```js
const authors = defineCollection({
  /* Retrieve all JSON files in your authors directory while retaining
   * uppercase letters in the ID. */
  loader: glob({
    pattern: '**/*.json',
    base: "./src/data/authors",
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
});
```

### The `file()` loader

[Section titled “The file() loader”](#the-file-loader)

The [`file()` loader](/en/reference/content-loader-reference/#file-loader) fetches multiple entries from a single local file defined in your collection. The `file()` loader will automatically detect and parse (based on the file extension) a single array of objects from JSON and YAML files, and will treat each top-level table as an independent entry in TOML files.

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';


const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
});


export const collections = { dogs };
```

Each entry object in the file must have a unique `id` key property so that the entry can be identified and queried. Unlike the `glob()` loader, the `file()` loader will not automatically generate IDs for each entry.

You can provide your entries as an array of objects with an `id` property, or in object form where the unique `id` is the key:

src/data/dogs.json

```json
// Specify an `id` property in each object of an array
[
  { "id": "poodle", "coat": "curly", "shedding": "low" },
  { "id": "afghan", "coat": "short", "shedding": "low" }
]
```

src/data/dogs.json

```json
// Each key will be used as the `id`
{
  "poodle": { "coat": "curly", "shedding": "low" },
  "afghan": { "coat": "silky", "shedding": "low" }
}
```

#### Parsing other data formats

[Section titled “Parsing other data formats”](#parsing-other-data-formats)

Support for parsing single JSON, YAML, and TOML files into collection entries with the `file()` loader is built-in (unless you have a [nested JSON document](#nested-json-documents)). To load your collection from unsupported file types, such as `.csv`, you will need to create a [parser function](/en/reference/content-loader-reference/#parser). This function can be made async if required (e.g. to fetch files from the web, or if your parser is asyncronous).

The following example shows importing a third-party CSV parser then passing a custom `parser` function to the `file()` loader:

src/content.config.ts

```typescript
import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { parse as parseCsv } from "csv-parse/sync";


const cats = defineCollection({
  loader: file("src/data/cats.csv", {
    parser: (text) => parseCsv(text, { columns: true, skipEmptyLines: true }),
  }),
});
```

##### Nested `.json` documents

[Section titled “Nested .json documents”](#nested-json-documents)

The `parser()` argument can be used to load a single collection from a nested JSON document. For example, this JSON file contains multiple collections:

src/data/pets.json

```json
{"dogs": [{}], "cats": [{}]}
```

You can separate these collections by passing a custom `parser()` function to the `file()` loader for each collection, using Astro’s built-in JSON parsing:

src/content.config.ts

```typescript
import { file } from "astro/loaders";
import { defineCollection } from "astro:content";


const dogs = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).dogs })
});
const cats = defineCollection({
  loader: file("src/data/pets.json", { parser: (text) => JSON.parse(text).cats })
});
```

### Custom build-time loaders

[Section titled “Custom build-time loaders”](#custom-build-time-loaders)

You can [build a custom loader](/en/reference/content-loader-reference/#building-a-loader) using the Content Loader API to fetch remote content from any data source, such as a CMS, a database, or an API endpoint.

Then you can import and define your custom loader in your collections config, passing any required values:

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { myLoader } from './loader.ts';


const blog = defineCollection({
  loader: myLoader({
    url: "https://api.example.com/posts",
    apiKey: "my-secret",
  }),
});
```

Tip

Find community-built and third-party loaders in the [Astro integrations directory](https://astro.build/integrations/?search=\&categories%5B%5D=loaders).

Using a custom loader to fetch your data will automatically create a collection from your remote data. This gives you all the benefits of local collections, including collection-specific API helpers such as `getCollection()` and `render()` to [query and display your data](#querying-build-time-collections), as well as schema validation.

Similar to creating an Astro integration or Vite plugin, you can [distribute your loader as an npm package](/en/reference/publish-to-npm/) that others can use in their projects.

See the full [Content Loader API](/en/reference/content-loader-reference/) for examples of how to build your own loader.
