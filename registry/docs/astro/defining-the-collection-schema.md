## Defining the collection schema

[Section titled “Defining the collection schema”](#defining-the-collection-schema)

Schemas enforce consistent frontmatter or entry data within a collection through Zod validation. A schema **guarantees** that this data exists in a predictable form when you need to reference or query it. If any file violates its collection schema, Astro will provide a helpful error to let you know.

Schemas also power Astro’s automatic TypeScript typings for your content. When you define a schema for your collection, Astro will automatically generate and apply a TypeScript interface to it. The result is full TypeScript support when you query your collection, including property autocompletion and type-checking.

Tip

In order for Astro to recognize a new or updated schema, you may need to restart the dev server or [sync the content layer](/en/reference/cli-reference/#astro-dev) (`s + enter`) to define the `astro:content` module.

Providing a `schema` is optional, but highly recommended! If you choose to use a schema, then every frontmatter or data property of your collection entries must be defined using a [Zod data type](/en/reference/modules/astro-zod/#common-data-type-validators):

src/content.config.ts

```ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';


const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});
const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: z.object({
    id: z.string(),
    breed: z.string(),
    temperament: z.array(z.string()),
  }),
});


export const collections = { blog, dogs };
```

### Defining datatypes with Zod

[Section titled “Defining datatypes with Zod”](#defining-datatypes-with-zod)

Astro uses [Zod](https://github.com/colinhacks/zod) to power its content schemas. With Zod, Astro is able to validate every file’s data within a collection *and* provide automatic TypeScript types when you query content from inside your project.

To use Zod in Astro, import the `z` utility from `"astro/zod"`. This is a re-export of the Zod library, and it supports all of the features of Zod 4.

See the [`z` utility reference](/en/reference/modules/astro-zod/) for a cheatsheet of common datatypes and to learn how Zod works and what features are available.

#### Zod schema methods

[Section titled “Zod schema methods”](#zod-schema-methods)

All [Zod schema methods](/en/reference/modules/astro-zod/#using-zod-methods) (e.g. `.parse()`, `.transform()`) are available, with some limitations. Notably, performing custom validation checks on images using `image().refine()` is unsupported.

### Defining collection references

[Section titled “Defining collection references”](#defining-collection-references)

Collection entries can also “reference” other related entries.

With the [`reference()` function](/en/reference/modules/astro-content/#reference), you can define a property in a collection schema as an entry from another collection. For example, you can require that every `space-shuttle` entry includes a `pilot` property which uses the `pilot` collection’s own schema for type checking, autocomplete, and validation.

A common example is a blog post that references reusable author profiles stored as JSON, or related post URLs stored in the same collection:

src/content.config.ts

```ts
import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // Reference a single author from the `authors` collection by `id`
    author: reference('authors'),
    // Reference an array of related posts from the `blog` collection by `id`
    relatedPosts: z.array(reference('blog')),
  })
});


const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    portfolio: z.url(),
  })
});


export const collections = { blog, authors };
```

This example blog post specifies the `id`s of related posts and the `id` of the post author:

src/content/blog/welcome.md

```yaml
---
title: "Welcome to my blog"
author: ben-holmes # references `src/data/authors/ben-holmes.json`
relatedPosts:
- about-me # references `src/content/blog/about-me.md`
- my-year-in-review # references `src/content/blog/my-year-in-review.md`
---
```

These references will be transformed into objects containing a `collection` key and an `id` key, allowing you to easily [query them in your templates](#accessing-referenced-data).
