# Combine layouts to get the best of both worlds

> Tutorial: Build your first Astro blog —
> Add your basic page layout to the layout that formats your blog posts

Now that you have added a layout to each blog post, it’s time to make your posts look like the rest of the pages on your website!

Get ready to…

- Nest your blog post layout inside your main page layout

## Nest your two layouts

[Section titled “Nest your two layouts”](#nest-your-two-layouts)

You already have a `BaseLayout.astro` for defining the overall layout of your pages.

`MarkdownPostLayout.astro` gives you some additional templating for common blog post properties such as `title` and `date`, but your blog posts don’t look like the other pages on your site. You can match the look of your blog posts to the rest of your site by **nesting layouts**.

1. In `src/layouts/MarkdownPostLayout.astro`, import `BaseLayout.astro` and use it to wrap the entire template content. Don’t forget to pass the `pageTitle` prop:

   src/layouts/MarkdownPostLayout.astro

   ```diff
   ---
   +import BaseLayout from './BaseLayout.astro';
   const { frontmatter } = Astro.props;
   ---
   +
     
     {frontmatter.title}
     {frontmatter.pubDate.toString().slice(0,10)}
     {frontmatter.description}
     Written by: {frontmatter.author}
     
     
   +
   ```

2. In `src/layouts/MarkdownPostLayout.astro`, you can now remove the `meta` tag as it is already included in your `BaseLayout`:

   src/layouts/MarkdownPostLayout.astro

   ```diff
   ---
   import BaseLayout from './BaseLayout.astro';
   const { frontmatter } = Astro.props;
   ---

     
     {frontmatter.title}
     {frontmatter.pubDate.toString().slice(0,10)}
     {frontmatter.description}
     Written by: {frontmatter.author}
     
     

   ```

3. Check your browser preview at `http://localhost:4321/posts/post-1`. Now you should see content rendered by:

   - Your **main page layout**, including your styles, navigation links, and social footer.
   - Your **blog post layout**, including frontmatter properties like the description, date, title, and image.
   - Your **individual blog post Markdown content**, including just the text written in this post.

4. Notice that your page title is now displayed twice, once by each layout.

   Remove the line that displays your page title from `MarkdownPostLayout.astro`:

   src/layouts/MarkdownPostLayout.astro

   ```diff

     {frontmatter.title}
     {frontmatter.pubDate.toString().slice(0,10)}
     {frontmatter.description}
     Written by: {frontmatter.author}
     
     

   ```

5. Check your browser preview again at `http://localhost:4321/posts/post-1` and verify that this line is no longer displayed and that your title is only displayed once. Make any other adjustments necessary to ensure that you do not have any duplicated content.

Make sure that:

- Each blog post shows the same page template, and no content is missing. (If one of your blog posts is missing content, check its frontmatter properties.)

- No content is duplicated on a page. (If something is being rendered twice, then be sure to remove it from `MarkdownPostLayout.astro`.)

If you’d like to customize your page template, you can.

### Test your knowledge

[Section titled “Test your knowledge”](#test-your-knowledge)

1. This allows you to nest one layout inside another and take advantage of working with modular pieces.

   1. continuous deployment
   2. responsive design
   3. component-based design

   Submit

2. Multiple layouts are particularly useful for projects that contain Markdown pages, like a…

   1. blog
   2. dashboard
   3. chat app

   Submit

3. Which of these provides templating for all your pages?

   1. `index.astro`
   2. `BaseLayout.astro`
   3. `post-1.md`

   Submit

## Checklist

[Section titled “Checklist”](#checklist)

- I can nest layouts, checking for any duplicated elements.

### Resources

[Section titled “Resources”](#resources)

- [Nesting Layouts in Astro](/en/basics/layouts/#nesting-layouts)

# Check in: Unit 5 - Astro API

> Tutorial: Build your first Astro blog —
> Fetching and using data from project files to dynamically generate pages content and routes

Now that you have some blog posts, it’s time to use Astro’s API to work with your files!

## Looking ahead

[Section titled “Looking ahead”](#looking-ahead)

In this unit, you’ll supercharge your blog with an index page, tag pages, and an RSS feed.

Along the way, you’ll learn how to use:

- `import.meta.glob()` to access data from files in your project
- `getStaticPaths()` to create multiple pages (routes) at once
- The Astro RSS package to create an RSS feed

## Checklist

[Section titled “Checklist”](#checklist)

- I am ready to add some blog features to my Astro project!
