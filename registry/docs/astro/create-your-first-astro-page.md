# Create your first Astro page

> Tutorial: Build your first Astro blog —
> Add new pages to your site with navigation links between them

Now that you know that `.astro` files are responsible for pages on your website, it’s time to create one!

Get ready to…

- Create two new pages on your website: About and Blog
- Add navigation links to your pages
- Deploy an updated version of your website to the web

## Create a new `.astro` file

[Section titled “Create a new .astro file”](#create-a-new-astro-file)

1. In the files pane of your code editor, navigate to the folder `src/pages/` where you will see the existing file `index.astro`

2. In that same folder, create a new file named `about.astro`.

3. Copy, or retype the contents of `index.astro` into your new `about.astro` file.

   Tip

   Your editor might show a solid white circle on the tab label for this file. This means that the file is not yet saved. Under the File menu in VS Code, enable “Auto Save” and you should no longer need to save any files manually.

4. Add `/about` to the end of your website preview’s URL in the address bar and check that you can see a page load there. (e.g. `http://localhost:4321/about`)

Right now, your “About” page should look exactly the same as the first page, but we’re going to change that!

## Edit your page

[Section titled “Edit your page”](#edit-your-page)

Edit the HTML content to make this page about you.

To change or add more content to your About page, add more HTML element tags containing content. You can copy and paste the HTML code below between the existing `<body></body>` tags, or create your own.

src/pages/about.astro

```diff
<body>
  <h1>My Astro Site</h1>
  <h1>About Me</h1>
  <h2>... and my new Astro site!</h2>


  <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p>


  <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p>
</body>
```

Now, visit your `/about` page in your browser tab again, and you should see your updated content.

## Add navigation links

[Section titled “Add navigation links”](#add-navigation-links)

To make it easier to preview all your pages, add HTML page navigation links before your `<h1>` at the top of both of your pages (`index.astro` and `about.astro`):

src/pages/about.astro

```diff
<a href="/">Home</a>
<a href="/about/">About</a>


<h1>About Me</h1>
<h2>... and my new Astro site!</h2>
```

Check that you can click these links to move back and forth between pages on your site.

Note

Unlike many frameworks, Astro uses standard HTML `<a>` elements to navigate between pages (also called *routes*), with traditional page refreshes.

## Try it yourself - Add a Blog page

[Section titled “Try it yourself - Add a Blog page”](#try-it-yourself---add-a-blog-page)

Add a third page `blog.astro` to your site, following the [same steps as above](#create-a-new-astro-file).

(Don’t forget to add a third navigation link to every page.)

Show me the steps.

1. Create a new file at `src/pages/blog.astro`.
2. Copy the entire contents of `index.astro` and paste them into `blog.astro`.
3. [Add a third navigation link](#add-navigation-links) to the top of every page:

src/pages/index.astro

```diff
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>


  <h1>My Astro Site</h1>
</body>
```

You should now have a website with three pages that all link to each other. It’s time to add some content to the Blog page.

Update the page content at `blog.astro` with:

src/pages/blog.astro

```diff
<body>
  <a href="/">Home</a>
  <a href="/about/">About</a>
  <a href="/blog/">Blog</a>


  <h1>My Astro Site</h1>
  <h1>My Astro Learning Blog</h1>
  <p>This is where I will post about my journey learning Astro.</p>
</body>
```

Preview your entire site by visiting all three pages in your browser preview and check that:

- Every page correctly links to all three pages
- Your two new pages each have their own descriptive heading
- Your two new pages each have their own paragraph text

## Publish your changes to the web

[Section titled “Publish your changes to the web”](#publish-your-changes-to-the-web)

If you’ve followed our setup in Unit 1, you can publish your changes to your live website through Netlify.

When you are happy with the way your preview looks, **commit** your changes to your online repository at GitHub.

1. In VS Code, preview the files that have changed since your last commit to GitHub.

   - Go to the **Source Control tab** in the left menu. It should have a small “3” displayed.

   - You should see `index.astro`, `about.astro`, and `blog.astro` listed as files that have changed.

2. Enter a commit message (e.g. “Added two new pages - about and blog”) in the text box, and press `Ctrl + Enter` (macOS: `Cmd ⌘ + Enter`) to commit the change to your current workspace.

3. Click the button to `Sync Changes` to GitHub.

4. After waiting a few minutes, visit your Netlify URL to verify that your changes are published live.

Commit and deploy regularly

Follow these steps every time you pause working! Your changes will be updated in your GitHub repository. If you’ve deployed to a Netlify website, it will be rebuilt and republished.

## Checklist

[Section titled “Checklist”](#checklist)

- I can create a new page for my website and link to it from an existing page.
- I can commit my changes back to GitHub and update my live site on Netlify.

### Resources

[Section titled “Resources”](#resources)

- [File-based Routing in Astro](/en/basics/astro-pages/#file-based-routing)

- [Astro page HTML](/en/basics/astro-pages/#astro-pages)
