## What are Content Collections?

[Section titled “What are Content Collections?”](#what-are-content-collections)

A content collection is a set of related, structurally identical data. This data can be stored in one or several files locally (e.g. a folder of individual Markdown files of blog posts, a single JSON file of product descriptions) or fetched from remote sources such as a database, CMS, or API endpoint. Each member of the collection is called an entry.

- src/

  - …

- **newsletter/** the “newsletter” collection

  - week-1.md a collection entry
  - week-2.md a collection entry
  - week-3.md a collection entry

- **authors/** the “author” collection

  - authors.json a single file containing all collection entries

Collections are defined by the location and shape of its entries and provide a convenient way to query and render your content and associated metadata. You can create a collection any time you have a group of related data or content, stored in the same location, that shares a common structure.

[Two types of content collections](#types-of-collections) are available to allow you to work with data fetched either at build time or at request time. Both build-time collections and live updating collections use:

- A required `loader` to retrieve your content and metadata from wherever it is stored and make it available to your project through content-focused APIs.
- An optional collection `schema` that allows you to define the expected shape of each entry for type safety, autocomplete, and validation in your editor.

Collections stored locally in your project or on your filesystem can use one of Astro’s [provided build-time loaders](#build-time-collection-loaders) to fetch data from Markdown, MDX, Markdoc, YAML, TOML, or JSON files. Point Astro to the location of your content, define your data shape, and you’re good to go with a blog or similarly content-heavy, mostly static site in no time!

With [community-built loaders](https://astro.build/integrations/?search=\&categories%5B%5D=loaders) or by building a [custom build-time collection loader](#custom-build-time-loaders) or [live loader](#creating-a-live-loader) yourself, you can fetch remote data from any external source, such as a CMS, database, or headless payment system, either at build time or live on demand.

### Types of collections

[Section titled “Types of collections”](#types-of-collections)

[Build-time content collections](#defining-build-time-content-collections) are updated at build time, and data is saved to a storage layer. This provides excellent performance for most content, but may not be suitable for frequently updating data sources requiring up-to-the-moment data freshness, such as live stock prices.

For the best performance and scalability, use build-time content collections when one or more of these is true:

- **Performance is critical** and you want to prerender data at build time.
- **Your data is relatively static** (e.g., blog posts, documentation, product descriptions).
- **You want to benefit from build-time optimization** and caching.
- **You need to process MDX** or **perform image optimization**.
- **Your data can be fetched once and reused** across multiple builds.

Quick start

See [the official Astro blog starter template](https://github.com/withastro/astro/tree/latest/examples/blog) to get up and running quickly with an example of using the [built-in `glob()` loader](#the-glob-loader) and [defining a schema](#defining-the-collection-schema) for a collection of local Markdown or MDX blog posts.

[Live content collections](#live-content-collections) fetch their data at runtime rather than build time. This allows you to access frequently updated data from CMSs, APIs, databases, or other sources using a unified API, without needing to rebuild your site when the data changes. However, this can come at a performance cost since data is fetched at each request and returned directly with no data store persistence.

Live content collections are designed for data that changes frequently and needs to be up-to-date when a page is requested. Consider using them when one or more of these is true:

- **You need real-time information** (e.g. user-specific data, current stock levels).
- **You want to avoid constant rebuilds** for content that changes often.
- **Your data updates frequently** (e.g. up-to-the-minute product inventory, prices, availability).
- **You need to pass dynamic filters** to your data source based on user input or request parameters.
- **You’re building preview functionality** for a CMS where editors need to see draft content immediately.

Both kinds of collections can exist in the same project, so you can always choose the best type of collection for each individual data source. For example, a build-time collection can manage product descriptions, while a live collection can manage content inventory.

Both types of collections use similar APIs (e.g. `getCollection()` and `getLiveCollection()`), so that working with collections will feel familiar no matter which one you choose, while still ensuring that you always know which type of collection you are working with.

We suggest using build-time content collections whenever possible, and using live collections when your content needs updating in real time and the performance tradeoffs are acceptable. Additionally, live content collections have some limitations compared to build-time collections:

- **No MDX support**: MDX cannot be rendered at runtime
- **No image optimization**: Images cannot be processed at runtime
- **Performance considerations**: Data is fetched on each request (unless cached)
- **No data store persistence**: Data is not saved to the content layer data store

### When to create a collection

[Section titled “When to create a collection”](#when-to-create-a-collection)

Define your data as a collection when:

- You have multiple files or data to organize that share the same overall structure (e.g. a directory of blog posts written in Markdown which all have the same frontmatter properties).
- You have existing content stored remotely, such as in a CMS, and want to take advantage of the collections helper functions instead of using `fetch()` or SDKs.
- You need to fetch (tens of) thousands of related pieces of data at build time, and need a querying and caching method that handles at scale.

Much of the benefit of using collections comes from:

- Defining a common data shape to validate that an individual entry is “correct” or “complete”, avoiding errors in production.
- Content-focused APIs designed to make querying intuitive (e.g. `getCollection()` instead of `import.meta.glob()`) when importing and rendering content on your pages.
- Access to both built-in loaders and access to the low-level [Content Loader API](/en/reference/content-loader-reference/) for retrieving your content. There are additionally several third-party and community-built loaders available, and you can build your own custom loader to fetch data from anywhere.
- Performance and scalability. Build-time content collections data can be cached between builds and is suitable for tens of thousands of content entries.

### When not to create a collection

[Section titled “When not to create a collection”](#when-not-to-create-a-collection)

Collections provide excellent structure, safety, and organization when you have multiple pieces of content that must share the same properties.

Collections may not be your solution if:

- You have only one or a small number of different content pages. Consider [making individual page components](/en/basics/astro-pages/) such as `src/pages/about.astro` with your content directly instead.
- You are displaying files that are not processed by Astro, such as PDFs. Place these static assets in the [`public/` directory](/en/basics/project-structure/#public) of your project instead.
- Your data source has its own SDK/client library for imports that is incompatible with or does not offer a content loader, and you prefer to use it directly.

## TypeScript configuration for collections

[Section titled “TypeScript configuration for collections”](#typescript-configuration-for-collections)

Content collections rely on TypeScript to provide Zod validation, Intellisense, and type checking in your editor. By default, Astro configures a [`strict` TypeScript template](/en/guides/typescript/#tsconfig-templates) when you create a new project using the `create astro` CLI command. Both of Astro’s `strict` and `strictest` templates include the TypeScript settings your project needs for content collections.

If you changed this setting to `base` because you are not writing TypeScript in your project, or are not using any of Astro’s built-in templates, you will need to also add the following `compilerOptions` in your `tsconfig.json` to use content collections:

tsconfig.json

```diff
{
  "extends": "astro/tsconfigs/base",
  // not needed for `strict` or `strictest`
  +"compilerOptions": {
    +"strictNullChecks": true,
    +"allowJs": true
+  }
}
```

## Defining build-time content collections

[Section titled “Defining build-time content collections”](#defining-build-time-content-collections)

All of your build-time content collections are defined in a special `src/content.config.ts` file (`.js` and `.mjs` extensions are also supported) using `defineCollection()`, and then a single collections object is exported for use in your project.

Each individual collection configures:

- [a build-time `loader`](#build-time-collection-loaders) for a data source (required)
- [a build-time `schema`](#defining-the-collection-schema) for type safety (optional, but highly recommended!)

src/content.config.ts

```ts
// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';


// 2. Import loader(s)
import { glob, file } from 'astro/loaders';


// 3. Import Zod
import { z } from 'astro/zod';


// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});


// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
```

You can then use the dedicated `getCollection()` and `getEntry()` functions to [query your content collections data](#querying-build-time-collections) and render your content.

You can choose to [generate page routes](#generating-routes-from-content) from your build-time collection entries at build time for an entirely static, prerendered site. Or, you can render your build-time collections on demand, choosing to delay building your page until it is first requested. This is useful when you have a large number of pages (e.g. thousands or tens of thousands) and want to delay building a static page until it is needed.
