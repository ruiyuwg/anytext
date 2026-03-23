## Querying build-time collections

[Section titled “Querying build-time collections”](#querying-build-time-collections)

Astro provides helper functions to query a build-time collection and return one or more content entries.

- [`getCollection()`](/en/reference/modules/astro-content/#getcollection) fetches an entire collection and returns an array of entries.
- [`getEntry()`](/en/reference/modules/astro-content/#getentry) fetches a single entry from a collection.

These return entries with a unique `id`, a `data` object with all defined properties, and will also return a `body` containing the raw, uncompiled body of a Markdown, MDX, or Markdoc document.

src/pages/index.astro

```astro
---
import { getCollection, getEntry } from 'astro:content';


// Get all entries from a collection.
// Requires the name of the collection as an argument.
const allBlogPosts = await getCollection('blog');


// Get a single entry from a collection.
// Requires the name of the collection and `id`
const poodleData = await getEntry('dogs', 'poodle');
---
```

The sort order of generated collections is non-deterministic and platform-dependent. This means that if you are calling `getCollection()` and need your entries returned in a specific order (e.g. blog posts sorted by date), you must sort the collection entries yourself:

src/pages/blog.astro

```astro
---
import { getCollection } from 'astro:content';


const posts = (await getCollection('blog')).sort(
  (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
);
---
```

See the full list of properties returned by the [`CollectionEntry` type](/en/reference/modules/astro-content/#collectionentry).

### Using content in Astro templates

[Section titled “Using content in Astro templates”](#using-content-in-astro-templates)

After querying your collections, you can access each entry’s content and metadata directly inside of your Astro component template.

For example, you can create a list of links to your blog posts, displaying information from your entry’s frontmatter using the `data` property:

src/pages/index.astro

```astro
---
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
---
<h1>My posts</h1>
<ul>
  {posts.map(post => (
    <li><a href={`/blog/${post.id}`}>{post.data.title}</a></li>
  ))}
</ul>
```

### Rendering body content

[Section titled “Rendering body content”](#rendering-body-content)

Once queried, you can render Markdown and MDX entries to HTML using the [`render()`](/en/reference/modules/astro-content/#render) function from `astro:content`. Calling this function gives you access to rendered HTML content, including both a `<Content />` component and a list of all rendered headings.

src/pages/blog/post-1.astro

```astro
---
import { getEntry, render } from 'astro:content';


const entry = await getEntry('blog', 'post-1');


const { Content } = await render(entry);
---
<h1>{entry.data.title}</h1>
<p>Published on: {entry.data.published.toDateString()}</p>
<Content />
```

When working with MDX entries, you can also [pass your own components to `<Content />`](/en/guides/integrations-guide/mdx/#passing-components-to-mdx-content) to replace HTML elements with custom alternatives.

#### Passing content as props

[Section titled “Passing content as props”](#passing-content-as-props)

A component can also pass an entire collection entry as a prop.

You can use the [`CollectionEntry`](/en/reference/modules/astro-content/#collectionentry) utility to correctly type your component’s props using TypeScript. This utility takes a string argument that matches the name of your collection schema and will inherit all of the properties of that collection’s schema.

src/components/BlogCard.astro

```astro
---
import type { CollectionEntry } from 'astro:content';
interface Props {
  post: CollectionEntry<'blog'>;
}


// `post` will match your 'blog' collection schema type
const { post } = Astro.props;
---
```

### Filtering collection queries

[Section titled “Filtering collection queries”](#filtering-collection-queries)

`getCollection()` takes an optional “filter” callback that allows you to filter your query based on an entry’s `id` or `data` properties.

You can use this to filter by any content criteria you like. For example, you can filter by properties like `draft` to prevent any draft blog posts from publishing to your blog:

src/pages/blog.astro

```astro
---
// Example: Filter out content entries with `draft: true`
import { getCollection } from 'astro:content';
const publishedBlogEntries = await getCollection('blog', ({ data }) => {
  return data.draft !== true;
});
---
```

You can also create draft pages that are available when running the dev server, but not built in production:

src/pages/blog.astro

```astro
---
// Example: Filter out content entries with `draft: true` only when building for production
import { getCollection } from 'astro:content';
const blogEntries = await getCollection('blog', ({ data }) => {
  return import.meta.env.PROD ? data.draft !== true : true;
});
---
```

The filter argument also supports filtering by nested directories within a collection. Since the `id` includes the full nested path, you can filter by the start of each `id` to only return items from a specific nested directory:

src/pages/blog.astro

```astro
---
// Example: Filter entries by sub-directory in the collection
import { getCollection } from 'astro:content';
const englishDocsEntries = await getCollection('docs', ({ id }) => {
  return id.startsWith('en/');
});
---
```

### Accessing referenced data

[Section titled “Accessing referenced data”](#accessing-referenced-data)

To access [references defined in your schema](#defining-collection-references), first query your collection entry. Your references will be available on the returned `data` object. (e.g. `entry.data.author` and `entry.data.relatedPosts`)

Then, you can use the `getEntry()` function again (or `getEntries()` to retrieve multiple referenced entries) by passing those returned values. The `reference()` function in your schema transforms those values into one or more `collection` and `id` objects as a convenient way to query this related data.

src/pages/blog/adventures-in-space.astro

```astro
---
import { getEntry, getEntries } from 'astro:content';


// First, query a blog post
const blogPost = await getEntry('blog', 'Adventures in Space');


// Retrieve a single reference item: the blog post's author
// Equivalent to querying `{collection: "authors", id: "ben-holmes"}`
const author = await getEntry(blogPost.data.author);


// Retrieve an array of referenced items: all the related posts
// Equivalent to querying `[{collection: "blog", id: "visiting-mars"}, {collection: "blog", id: "leaving-earth-for-the-first-time"}]`
const relatedPosts = await getEntries(blogPost.data.relatedPosts);
---


<h1>{blogPost.data.title}</h1>
<p>Author: {author.data.name}</p>


<!-- ... -->


<h2>You might also like:</h2>
{relatedPosts.map(post => (
  <a href={post.id}>{post.data.title}</a>
))}
```
