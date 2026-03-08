# Build a tag index page

> Tutorial: Build your first Astro blog —
> Use everything you've learned so far to build a Tag Index page

Now that you have individual pages for every tag, it’s time to make links to them.

Get ready to…

- Add a new page using the `/pages/folder/index.astro` routing pattern
- Display a list of all your unique tags, linking to each tag page
- Update your site with navigation links to this new Tags page

## Use the `/pages/folder/index.astro` routing pattern

[Section titled “Use the /pages/folder/index.astro routing pattern”](#use-the-pagesfolderindexastro-routing-pattern)

To add a Tag Index page to your website, you could create a new file at `src/pages/tags.astro`.

But, since you already have the directory `/tags/`, you can take advantage of another routing pattern in Astro, and keep all your files related to tags together.

## Try it yourself - Make a Tag Index page

[Section titled “Try it yourself - Make a Tag Index page”](#try-it-yourself---make-a-tag-index-page)

1. Create a new file `index.astro` in the directory `src/pages/tags/`.

2. Navigate to `http://localhost:4321/tags` and verify that your site now contains a page at this URL. It will be empty, but it will exist.

3. Create a minimal page at `src/pages/tags/index.astro` that uses your layout. You have done this before!

   Expand to see the steps

   1. Create a new page component in `src/pages/tags/`.

      Show the filename

      ```plaintext
      index.astro
      ```

   2. Import and use your `<BaseLayout>`.

      Show the code

      src/pages/tags/index.astro

      ```astro
      ---
      import BaseLayout from '../../layouts/BaseLayout.astro';
      ---

      ```

   3. Define a page title, and pass it to your layout as a component attribute.

      Show the code

      src/pages/tags/index.astro

      ```diff
      ---
      import BaseLayout from '../../layouts/BaseLayout.astro';
      +const pageTitle = "Tag Index";
      ---

      ```

4. Check your browser preview again and you should have a formatted page, ready to add content to!

## Create an array of tags

[Section titled “Create an array of tags”](#create-an-array-of-tags)

You have previously displayed items in a list from an array using `map()`. What would it look like to define an array of all your tags, then display them in a list on this page?

See the code

src/pages/tags/index.astro

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const tags = ['astro', 'blogging', 'learning in public', 'successes', 'setbacks', 'community']
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <ul>
    {tags.map((tag) => <li>{tag}</li>)}
  </ul>
</BaseLayout>
```

You could do this, but then you would need to come back to this file and update your array every time you use a new tag in a future blog post.

Fortunately, you already know a way to grab the data from all your Markdown files in one line of code, then return a list of all your tags.

1. In `src/pages/tags/index.astro`, add the line of code to the frontmatter script that will give your page access to the data from every `.md` blog post file.

   See the code

   src/pages/tags/index.astro

   ```diff
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   +const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
   const pageTitle = "Tag Index";
   ---
   ```

2. Next, add the following line of JavaScript to your page component. This is the same code relying on Astro’s built-in TypeScript support you used in `src/pages/tags/[tag].astro` to return a list of unique tags.

   src/pages/tags/index.astro

   ```diff
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro';
   const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
   +const tags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
   const pageTitle = "Tag Index";
   ---
   ```

## Create your list of tags

[Section titled “Create your list of tags”](#create-your-list-of-tags)

Instead of creating items in an unordered list this time, create one `<p>` for each item, inside a `<div>`. The pattern should look familiar!

1. Add the following code to your component template:

   src/pages/tags/index.astro

   ```diff

     {tags.map((tag) => {tag})}

   ```

   In your browser preview, verify that you can see your tags listed. If any blog posts are missing tags, or they are improperly formatted, Astro’s built-in TypeScript support will show you errors so you can check and correct your code.

2. To make each tag link to its own page, add the following `<a>` link to each tag name:

   src/pages/tags/index.astro

   ```astro

     
       {tags.map((tag) => (
         {tag}
       ))}
     

   ```

## Add styles to your tag list

[Section titled “Add styles to your tag list”](#add-styles-to-your-tag-list)

1. Add the following CSS classes to style both your `<div>` and each `<p>` that will be generated. Note: Astro uses HTML syntax for adding class names!

   src/pages/tags/index.astro

   ```astro

     
       {tags.map((tag) => (
         {tag}
       ))}
     

   ```

2. Define these new CSS classes by adding the following `<style>` tag to this page:

   src/pages/tags/index.astro

   ```astro

     a {
       color: #00539F;
     }


     .tags {
       display: flex;
       flex-wrap: wrap;
     }


     .tag {
       margin: 0.25em;
       border: dotted 1px #a1a1a1;
       border-radius: .5em;
       padding: .5em 1em;
       font-size: 1.15em;
       background-color: #F8FCFD;
     }

   ```

3. Check your browser preview at `http://localhost:4321/tags` to verify that you have some new styles and that each of the tags on the page has a working link to its own individual tag page.

### Code Check-In

[Section titled “Code Check-In”](#code-check-in)

Here is what your new page should look like:

src/pages/tags/index.astro

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
const allPosts = Object.values(import.meta.glob('../posts/*.md', { eager: true }));
const tags = [...new Set(allPosts.map((post: any) => post.frontmatter.tags).flat())];
const pageTitle = "Tag Index";
---
<BaseLayout pageTitle={pageTitle}>
  <div class="tags">
    {tags.map((tag) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>
</BaseLayout>
<style>
  a {
    color: #00539F;
  }


  .tags {
    display: flex;
    flex-wrap: wrap;
  }


  .tag {
    margin: 0.25em;
    border: dotted 1px #a1a1a1;
    border-radius: .5em;
    padding: .5em 1em;
    font-size: 1.15em;
    background-color: #F8FCFD;
  }
</style>
```

## Add this page to your navigation

[Section titled “Add this page to your navigation”](#add-this-page-to-your-navigation)

Right now, you can navigate to `http://localhost:4321/tags` and see this page. From this page, you can click on links to your individual tag pages.

But, you still need to make these pages discoverable from other pages on your website.

1. In your `Navigation.astro` component, include a link to this new tag index page.

   Show me the code

   src/components/Navigation.astro

   ```diff
   Home
   About
   Blog
   Tags
   ```

## Challenge: Include tags in your blog post layout

[Section titled “Challenge: Include tags in your blog post layout”](#challenge-include-tags-in-your-blog-post-layout)

You have now written all the code you need to also display a list of tags on each blog post, and link them to their tag pages. You have existing work that you can reuse!

Follow the steps below, then check your work by comparing it to the [final code sample](#code-check-in-markdownpostlayout).

1. Copy the `<div class="tags">...</div>` and `<style>...</style>` from `src/pages/tags/index.astro` and reuse it inside `MarkdownPostLayout.astro`:

   src/layouts/MarkdownPostLayout.astro

   ```diff
   ---
   import BaseLayout from './BaseLayout.astro';
   const { frontmatter } = Astro.props;
   ---

     {frontmatter.pubDate.toString().slice(0,10)}
     {frontmatter.description}
     Written by: {frontmatter.author}
     


     
       +{tags.map((tag: string) => (
         {tag}
   +    ))}
     


     


     +a {
       +color: #00539F;
   +  }


     +.tags {
       +display: flex;
       +flex-wrap: wrap;
   +  }


     +.tag {
       +margin: 0.25em;
       +border: dotted 1px #a1a1a1;
       +border-radius: .5em;
       +padding: .5em 1em;
       +font-size: 1.15em;
       +background-color: #F8FCFD;
   +  }

   ```

Before this code will work, you need to make **one small edit** to the code you pasted into `MarkdownPostLayout.astro`. Can you figure out what it is?

Give me a hint

How are the other props (e.g. title, author, etc.) written in your layout template? How does your layout receive props from an individual blog post?

Give me another hint!

In order to use props (values passed) from a `.md` blog post in your layout, like tags, you need to prefix the value with a certain word.

Show me the code!

src/layouts/MarkdownPostLayout.astro

```astro
    <div class="tags">
      {frontmatter.tags.map((tag: string) => (
        <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
      ))}
    </div>
```

### Code Check-in: MarkdownPostLayout

[Section titled “Code Check-in: MarkdownPostLayout”](#code-check-in-markdownpostlayout)

To check your work, or if you just want complete, correct code to copy into `MarkdownPostLayout.astro`, here is what your Astro component should look like:

src/layouts/MarkdownPostLayout.astro

```astro
---
import BaseLayout from './BaseLayout.astro';
const { frontmatter } = Astro.props;
---
<BaseLayout pageTitle={frontmatter.title}>
  <p><em>{frontmatter.description}</em></p>
  <p>{frontmatter.pubDate.toString().slice(0,10)}</p>


  <p>Written by: {frontmatter.author}</p>


  <img src={frontmatter.image.url} width="300" alt={frontmatter.image.alt} />


  <div class="tags">
    {frontmatter.tags.map((tag: string) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>


  <slot />
</BaseLayout>
<style>
  a {
    color: #00539F;
  }


  .tags {
    display: flex;
    flex-wrap: wrap;
  }


  .tag {
    margin: 0.25em;
    border: dotted 1px #a1a1a1;
    border-radius: .5em;
    padding: .5em 1em;
    font-size: 1.15em;
    background-color: #F8FCFD;
  }
</style>
```

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

Match each file path with a second file path that will create a page at the same route.

1. `src/pages/categories.astro`

   1. `src/pages/posts/post.astro`
   2. `src/pages/posts/index.astro`
   3. `src/components/shoes/Shoe.astro`
   4. `src/pages/categories/index.astro`

   Submit

2. `src/pages/posts.astro`

   1. `src/pages/products/shoes.astro`
   2. `src/pages/posts/post.astro`
   3. `src/pages/posts/index.astro`
   4. `src/pages/categories/index.astro`

   Submit

3. `src/pages/products/shoes/index.astro`

   1. `src/pages/products/shoes.astro`
   2. `src/pages/posts/post.astro`
   3. `src/pages/posts/index.astro`
   4. `src/components/shoes/Shoe.astro`

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can use Astro’s `/pages/folder/index.astro` routing feature.

### Resources

[Section titled “Resources”](#resources)

- [Static Routing in Astro](/en/guides/routing/#static-routes)
