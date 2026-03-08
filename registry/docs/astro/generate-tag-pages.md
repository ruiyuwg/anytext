# Generate tag pages

> Tutorial: Build your first Astro blog —
> Use getStaticPaths() to create multiple pages (routes) at once

Get ready to…

- Create a page to generate multiple pages
- Specify which page routes to build, and pass each page its own props

## Dynamic page routing

[Section titled “Dynamic page routing”](#dynamic-page-routing)

You can create entire sets of pages dynamically using `.astro` files that export a `getStaticPaths()` function.

## Create pages dynamically

[Section titled “Create pages dynamically”](#create-pages-dynamically)

1. Create a new file at `src/pages/tags/[tag].astro`. (You will have to create a new folder.) Notice that the file name (`[tag].astro`) uses square brackets. Paste the following code into the file:

   src/pages/tags/\[tag].astro

   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';


   export async function getStaticPaths() {
     return [
       { params: { tag: "astro" } },
       { params: { tag: "successes" } },
       { params: { tag: "community" } },
       { params: { tag: "blogging" } },
       { params: { tag: "setbacks" } },
       { params: { tag: "learning in public" } },
     ];
   }


   const { tag } = Astro.params;
   ---

     Posts tagged with {tag}

   ```

   The `getStaticPaths` function returns an array of page routes, and all of the pages at those routes will use the same template defined in the file.

2. If you have customized your blog posts, then replace the individual tag values (e.g. “astro”, “successes”, “community”, etc.) with the tags used in your own posts.

3. Make sure that every blog post contains at least one tag, written as an array, e.g. `tags: ["blogging"]`.

4. Visit `http://localhost:4321/tags/astro` in your browser preview and you should see a page, generated dynamically from `[tag].astro`. Check that you also have pages created for each of your tags at `/tags/successes`, `/tags/community`, and `/tags/learning%20in%20public`, etc., or at each of your custom tags. You may need to first quit and restart the dev server to see these new pages.

## Use props in dynamic routes

[Section titled “Use props in dynamic routes”](#use-props-in-dynamic-routes)

1. Add the following props to your `getStaticPaths()` function in order to make data from all your blog posts available to each page route.

   Be sure to give each route in your array the new props, and then make those props available to your component template outside of your function.

   src/pages/tags/\[tag].astro

   ```diff
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';


   export async function getStaticPaths() {
     +const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));


     return [
       {params: {tag: "astro"}, props: {posts: allPosts}},
       {params: {tag: "successes"}, props: {posts: allPosts}},
       {params: {tag: "community"}, props: {posts: allPosts}},
       {params: {tag: "blogging"}, props: {posts: allPosts}},
       {params: {tag: "setbacks"}, props: {posts: allPosts}},
       {params: {tag: "learning in public"}, props: {posts: allPosts}}
     ];
   }


   const { tag } = Astro.params;
   +const { posts } = Astro.props;
   ---
   ```

2. Filter your list of posts, using Astro’s built-in TypeScript support, to only include posts that contain the page’s own tag.

   src/pages/tags/\[tag].astro

   ```diff
   ---
   const { tag } = Astro.params;
   const { posts } = Astro.props;
   +const filteredPosts = posts.filter((post: any) => post.frontmatter.tags?.includes(tag));
   ---
   ```

3. Now you can update your HTML template to show a list of each blog post containing the page’s own tag. Add the following code to `[tag].astro`:

   src/pages/tags/\[tag].astro

   ```diff

     Posts tagged with {tag}
     
       +{filteredPosts.map((post: any) => {post.frontmatter.title})}
     

   ```

4. You can even refactor this to use your `<BlogPost />` component instead! (Don’t forget to import this component at the top of `[tag].astro`.)

   src/pages/tags/\[tag].astro

   ```diff

     Posts tagged with {tag}
     
       -{filteredPosts.map((post: any) => {post.frontmatter.title})}
       +{filteredPosts.map((post: any) => )}
     

   ```

5. Check your browser preview for your individual tag pages, and you should now see a list of all of your blog posts containing that particular tag.

### Analyze the pattern

[Section titled “Analyze the pattern”](#analyze-the-pattern)

For each of the following, state whether the code is written **inside** the `getStaticPaths()` function, or **outside** of it.

1. The `import.meta.glob()` call to receive information about all your `.md` files to pass to each page route.

   1. inside `getStaticPaths`
   2. outside `getStaticPaths`

   Submit

2. The list of routes to be generated (returned) by `getStaticPaths()`

   1. inside `getStaticPaths`
   2. outside `getStaticPaths`

   Submit

3. The received values of `props` and `params` to be used in the HTML template.

   1. inside `getStaticPaths`
   2. outside `getStaticPaths`

   Submit

Takeaway

If you need information to construct the page routes, write it **inside** `getStaticPaths()`.

To receive information in the HTML template of a page route, write it **outside** `getStaticPaths()`.

## Advanced JavaScript: Generate pages from existing tags

[Section titled “Advanced JavaScript: Generate pages from existing tags”](#advanced-javascript-generate-pages-from-existing-tags)

Your tag pages are now defined statically in `[tag].astro`. If you add a new tag to a blog post, you will also have to revisit this page and update your page routes.

The following example shows how to replace your code on this page with code that will automatically look for, and generate pages for, each tag used on your blog pages.

Note

Even if it looks challenging, you can try following along with the steps to build this function yourself! If you don’t want to walk through the JavaScript required right now, you can skip ahead to the [finished version of the code](#final-code-sample) and use it directly in your project, replacing the existing content.

1. Check that all your blog posts contain tags

   Revisit each of your existing Markdown pages and ensure that every post contains a `tags` array in its frontmatter. Even if you only have one tag, it should still be written as an array, e.g. `tags: ["blogging"]`.

2. Create an array of all your existing tags using Astro’s built-in TypeScript support.

   Add the following code to provide you with a list of every tag used in your blog posts.

   src/pages/tags/\[tag].astro

   ```diff
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';


   export async function getStaticPaths() {
     const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));


     +const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
   }
   ```

   Tell me what this line of code is doing in more detail!

   It’s OK if this isn’t something you would have written yourself yet!

   It goes through each Markdown post, one by one, and combines each array of tags into one single larger array. Then, it makes a new `Set` from all the individual tags it found (to ignore repeated values). Finally, it turns that set into an array (with no duplications), that you can use to show a list of tags on your page.

   You now have an array `uniqueTags` with element items `"astro"`, `"successes"`, `"community"`, `"blogging"`, `"setbacks"`, `"learning in public"`

3. Replace the `return` value of the `getStaticPaths` function

   src/pages/tags/\[tag].astro

   ```diff
   -return [
   -  {params: {tag: "astro"}, props: {posts: allPosts}},
   -  {params: {tag: "successes"}, props: {posts: allPosts}},
   -  {params: {tag: "community"}, props: {posts: allPosts}},
   -  {params: {tag: "blogging"}, props: {posts: allPosts}},
   -  {params: {tag: "setbacks"}, props: {posts: allPosts}},
   -  {params: {tag: "learning in public"}, props: {posts: allPosts}}
   -]


   +return uniqueTags.map((tag) => {
     +const filteredPosts = allPosts.filter((post: any) => post.frontmatter.tags.includes(tag));
     +return {
   +    params: { tag },
   +    props: { posts: filteredPosts },
   +  };
   +});
   ```

4. A `getStaticPaths` function should always return a list of objects containing `params` (what to call each page route) and optionally any `props` (data that you want to pass to those pages). Earlier, you defined each tag name that you knew was used in your blog and passed the entire list of posts as props to each page.

   Now, you generate this list of objects automatically using your `uniqueTags` array to define each parameter.

   And, now the list of all blog posts is filtered **before** it is sent to each page as props. Be sure to remove the previous line of code filtering the posts, and update your HTML template to use `posts` instead of `filteredPosts`.

   src/pages/tags/\[tag].astro

   ```diff
   const { tag } = Astro.params;
   const { posts } = Astro.props;
   -const filteredPosts = posts.filter((post) => post.frontmatter.tags?.includes(tag));
   ---


     -{filteredPosts.map((post: any) => )}
     +{posts.map((post: any) => )}

   ```

### Final code sample

[Section titled “Final code sample”](#final-code-sample)

To check your work, or if you just want complete, correct code to copy into `[tag].astro`, here is what your Astro component should look like:

src/pages/tags/\[tag].astro

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import BlogPost from '../../components/BlogPost.astro';


export async function getStaticPaths() {
  const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));


  const uniqueTags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];


  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post: any) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}


const { tag } = Astro.params;
const { posts } = Astro.props;
---
<BaseLayout pageTitle={tag}>
  <p>Posts tagged with {tag}</p>
  <ul>
    {posts.map((post: any) => <BlogPost url={post.url} title={post.frontmatter.title}/>)}
  </ul>
</BaseLayout>
```

Now, you should be able to visit any of your tag pages in your browser preview.

Navigate to `http://localhost:4321/tags/community` and you should see a list of only your blog posts with the tag `community`. Similarly `http://localhost:4321/tags/learning%20in%20public` should display a list of the blog posts tagged `learning in public`.

In the next section, you will create navigation links to these pages.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

Choose the term that matches the description.

1. A function that returns an array of page routes.

   1. params
   2. dynamic routing
   3. `getStaticPaths()`
   4. props

   Submit

2. The process of creating multiple page routes from one file in Astro.

   1. params
   2. dynamic routing
   3. `getStaticPaths()`
   4. props

   Submit

3. A value that defines the name of a page route generated dynamically.

   1. params
   2. dynamic routing
   3. `getStaticPaths()`
   4. props

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can generate pages dynamically.
- I can pass `props` to each page route.

### Resources

[Section titled “Resources”](#resources)

- [Dynamic Page Routing in Astro](/en/guides/routing/#dynamic-routes)

- [`getStaticPaths()` API documentation](/en/reference/routing-reference/#getstaticpaths)
