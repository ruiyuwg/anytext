## Generating Routes from Content

[Section titled “Generating Routes from Content”](#generating-routes-from-content)

Content collections are stored outside of the `src/pages/` directory. This means that no pages or routes are generated for your collection items by default by Astro’s [file-based routing](/en/guides/routing/).

You will need to manually create a new [dynamic route](/en/guides/routing/#dynamic-routes) if you want to generate HTML pages for each of your collection entries, such as individual blog posts. Your dynamic route will map the incoming request param (e.g. `Astro.params.id` in `src/pages/blog/[...id].astro`) to fetch the correct entry for each page.

The exact method for generating routes will depend on whether your pages are prerendered (default) or rendered on demand by a server.

### Building for static output (default)

[Section titled “Building for static output (default)”](#building-for-static-output-default)

If you are building a static website (Astro’s default behavior) with build-time collections, use the [`getStaticPaths()`](/en/reference/routing-reference/#getstaticpaths) function to create multiple pages from a single page component (e.g. `src/pages/[id].astro`) during your build.

Call `getCollection()` inside of `getStaticPaths()` to have your collection data available for building static routes. Then, create the individual URL paths using the `id` property of each content entry. Each page receives the entire collection entry as a prop for [use in your page template](#using-content-in-astro-templates).

src/pages/posts/\[id].astro

```astro
---
import { getCollection, render } from 'astro:content';
// 1. Generate a new path for every collection entry
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { id: post.id },
    props: { post },
  }));
}
// 2. For your template, you can get the entry directly from the prop
const { post } = Astro.props;
const { Content } = await render(post);
---
<h1>{post.data.title}</h1>
<Content />
```

This will generate a page route for every entry in the `blog` collection. For example, an entry at `src/blog/hello-world.md` will have an `id` of `hello-world`, and therefore its final URL will be `/posts/hello-world/`.

Note

If your custom slugs contain the `/` character to produce URLs with multiple path segments, you must use a [rest parameter (e.g. `[...id]`)](/en/guides/routing/#rest-parameters) in the `.astro` filename for this dynamic routing page.

### Building routes on demand at request time

[Section titled “Building routes on demand at request time”](#building-routes-on-demand-at-request-time)

With an adapter installed for [on-demand rendering](/en/guides/on-demand-rendering/), you can generate your dynamic page routes at request time. First, examine the request (using `Astro.request` or `Astro.params`) to find the slug on demand, and then fetch it using one of Astro’s content collection helper functions:

- [`getEntry()`](/en/reference/modules/astro-content/#getentry) for build-time collection pages that are generated once, upon first request.
- [`getLiveEntry()`](/en/reference/modules/astro-content/#getliveentry) for live collection pages where data is (re)fetched at each request time.

src/pages/posts/\[id].astro

```astro
---
export const prerender = false; // Not needed in 'server' mode


import { getEntry, render } from "astro:content";


// 1. Get the slug from the incoming server request
const { id } = Astro.params;
if (id === undefined) {
  return Astro.redirect("/404");
}


// 2. Query for the entry directly using the request slug
const post = await getEntry("blog", id);


// 3. Redirect if the entry does not exist
if (post === undefined) {
  return Astro.redirect("/404");
}


// 4. Render the entry to HTML in the template
const { Content } = await render(post);
---
<h1>{post.data.title}</h1>
<Content />
```

Tip

Explore the `src/pages/` folder of the [blog tutorial demo code on GitHub](https://github.com/withastro/blog-tutorial-demo/tree/content-collections/src/pages) to see full examples of creating dynamic pages from your collections for blog features like a list of blog posts, tags pages, and more!
