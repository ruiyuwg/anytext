# Cosmic & Astro

> Add content to your Astro project using Cosmic as a CMS

[Cosmic](https://www.cosmicjs.com/) is a [headless CMS](https://www.cosmicjs.com/headless-cms) that provides an admin dashboard to manage content and an API that can integrate with a diverse range of frontend tools.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

1. **An Astro project**- If you’d like to start with a fresh Astro project, read the [installation guide](/en/install-and-setup/). This guide follows a simplified version of the [Astro Headless CMS Theme](https://astro.build/themes/details/cosmic-cms-blog/) with [Tailwind CSS](https://tailwindcss.com/) for styling.
2. **A Cosmic account and Bucket** - [Create a free Cosmic account](https://app.cosmicjs.com/signup) if you don’t have one. After creating your account, you’ll be prompted to create a new empty project. There’s also a [Simple Astro Blog template](https://www.cosmicjs.com/marketplace/templates/simple-astro-blog) available (this is the same template as the Astro Headless CMS Theme) to automatically import all of the content used in this guide.
3. **Your Cosmic API keys** - From your Cosmic dashboard, you will need to locate both the **Bucket slug** and **Bucket read key** in order to connect to Cosmic.

## Integrating Cosmic with Astro

[Section titled “Integrating Cosmic with Astro”](#integrating-cosmic-with-astro)

### Installing Necessary Dependencies

[Section titled “Installing Necessary Dependencies”](#installing-necessary-dependencies)

Add the [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk) to fetch data from your Cosmic Bucket.

- npm

  ```shell
  npm install @cosmicjs/sdk
  ```

- pnpm

  ```shell
  pnpm add @cosmicjs/sdk
  ```

- Yarn

  ```shell
  yarn add @cosmicjs/sdk
  ```

### Configuring API Keys

[Section titled “Configuring API Keys”](#configuring-api-keys)

Create a `.env` file at the root of your Astro project (if it does not already exist). Add both the **Bucket slug** and **Bucket read key** available from your Cosmic dashboard as public environment variables.

.env

```ini
PUBLIC_COSMIC_BUCKET_SLUG=YOUR_BUCKET_SLUG
PUBLIC_COSMIC_READ_KEY=YOUR_READ_KEY
```

## Fetching Data from Cosmic

[Section titled “Fetching Data from Cosmic”](#fetching-data-from-cosmic)

1. Create a new file called `cosmic.js`. Place this file inside of the `src/lib` folder in your project.

2. Add the following code to fetch data from Cosmic using the SDK and your environment variables.

   The example below creates a function called `getAllPosts()` to fetch metadata from Cosmic `posts` objects:

   src/lib/cosmic.js

   ```js
   import { createBucketClient } from '@cosmicjs/sdk'


   const cosmic = createBucketClient({
     bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
     readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
   })


   export async function getAllPosts() {
     const data = await cosmic.objects
       .find({
         type: 'posts'
       })
       .props('title,slug,metadata,created_at')
     return data.objects
   }
   ```

   Read more about [queries in the Cosmic documentation](https://www.cosmicjs.com/docs/api/queries).

3. Import your query function in a `.astro` component. After fetching data, the results from the query can be used in your Astro template.

   The following example shows fetching metadata from Cosmic `posts` and passing these values as props to a `<Card />` component to create a list of blog posts:

   src/pages/index.astro

   ```astro
   ---
   import Card from '../components/Card.astro'
   import { getAllPosts } from '../lib/cosmic'


   const data = await getAllPosts()
   ---



     
       {
         data.map((post) => (
           <Card
             title={post.title}
             href={post.slug}
             body={post.metadata.excerpt}
             tags={post.metadata.tags.map((tag) => tag)}
           />
         ))
       }
     

   ```

   [View source code for the Card component](https://github.com/cosmicjs/simple-astro-blog/blob/main/src/components/Card.astro)

## Building a Blog with Astro and Cosmic

[Section titled “Building a Blog with Astro and Cosmic”](#building-a-blog-with-astro-and-cosmic)

You can manage your Astro blog’s content using Cosmic and create webhooks to automatically redeploy your website when you update or add new content.

### Cosmic Content Objects

[Section titled “Cosmic Content Objects”](#cosmic-content-objects)

The following instructions assume that you have an **Object Type** in Cosmic called **posts**. Each individual blog post is a `post` that is defined in the Cosmic dashboard with the following Metafields:

1. **Text input** - Author
2. **Image** - Cover Image
3. **Repeater** - Tags
   - **Text input** - Title
4. **Text area** - Excerpt
5. **Rich Text** - Content

### Displaying a List of Blog Posts in Astro

[Section titled “Displaying a List of Blog Posts in Astro”](#displaying-a-list-of-blog-posts-in-astro)

Using the same [data-fetching method](#fetching-data-from-cosmic) as above, import the `getAllPosts()` query from your script file and await the data. This function provides metadata about each `post` which can be displayed dynamically.

The example below passes these values to a `<Card />` component to display a formatted list of blog posts:

src/pages/index.astro

```astro
---
import Card from '../components/Card.astro'
import { getAllPosts } from '../lib/cosmic'


const data = await getAllPosts()
---


<section>
  <ul class="grid gap-8 md:grid-cols-2">
    {
      data.map((post) => (
        <Card
          title={post.title}
          href={post.slug}
          body={post.metadata.excerpt}
          tags={post.metadata.tags.map((tag) => tag)}
        />
      ))
    }
  </ul>
</section>
```

### Generating Individual Blog Posts with Astro

[Section titled “Generating Individual Blog Posts with Astro”](#generating-individual-blog-posts-with-astro)

To generate an individual page with full content for each blog post, create a [dynamic routing page](/en/guides/routing/#dynamic-routes) at `src/pages/blog/[slug].astro`.

This page will export a `getStaticPaths()` function to generate a page route at the `slug` returned from each `post` object. This function is called at build time and generates and renders all of your blog posts at once.

To access your data from Cosmic:

- Query Cosmic inside of `getStaticPaths()` to fetch data about each post and provide it to the function.
- Use each `post.slug` as a route parameter, creating the URLs for each blog post.
- Return each `post` inside of `Astro.props`, making the post data available to HTML template portion of the page component for rendering.

The HTML markup below uses various data from Cosmic, such as the post title, cover image, and the **rich text content** (full blog post content). Use [set:html](/en/reference/directives-reference/#sethtml) on the element displaying the rich text content from Cosmic to render HTML elements on the page exactly as fetched from Cosmic.

src/pages/blog/\[slug].astro

```astro
---
import { getAllPosts } from '../../lib/cosmic'
import { Image } from 'astro:assets'


export async function getStaticPaths() {
  const data = (await getAllPosts()) || []


  return data.map((post) => {
    return {
      params: { slug: post.slug },
      props: { post }
    }
  })
}


const { post } = Astro.props
---


<article class="mx-auto max-w-screen-md pt-20">
  <section class="border-b pb-8">
    <h1 class="text-4xl font-bold">{post.title}</h1>
    <div class="my-4"></div>
    <span class="text-sm font-semibold">{post.metadata.author?.title}</span>
  </section>
  {
    post.metadata.cover_image && (
      <Image
        src={post.metadata.cover_image.imgix_url}
        format="webp"
        width={1200}
        height={675}
        aspectRatio={16 / 9}
        quality={50}
        alt={`Cover image for the blog ${post.title}`}
        class={'my-12 rounded-md shadow-lg'}
      />
    )
  }
  <div set:html={post.metadata.content} />
</article>
```

### Publishing your site

[Section titled “Publishing your site”](#publishing-your-site)

To deploy your website, visit the [deployment guides](/en/guides/deploy/) and follow the instructions for your preferred hosting provider.

#### Rebuild on Cosmic content updates

[Section titled “Rebuild on Cosmic content updates”](#rebuild-on-cosmic-content-updates)

You can set up a webhook in Cosmic directly to trigger a redeploy of your site on your hosting platform (e.g. Vercel) whenever you update or add content Objects.

Under “Settings” > “webhooks”, add the URL endpoint from Vercel and select the Object Type you would like to trigger the webhook. Click “Add webhook” to save it.

##### Netlify

[Section titled “Netlify”](#netlify)

To set up a webhook in Netlify:

1. Go to your site dashboard and click on **Build & deploy**.

2. Under the **Continuous Deployment** tab, find the **Build hooks** section and click on **Add build hook**.

3. Provide a name for your webhook and select the branch you want to trigger the build on. Click on **Save** and copy the generated URL.

##### Vercel

[Section titled “Vercel”](#vercel)

To set up a webhook in Vercel:

1. Go to your project dashboard and click on **Settings**.

2. Under the **Git** tab, find the **Deploy Hooks** section.

3. Provide a name for your webhook and the branch you want to trigger the build on. Click **Add** and copy the generated URL.

## Themes

[Section titled “Themes”](#themes)

- [![](/_astro/simple-astro-blog.Dl86rePH_ZijHC7.webp) Astro Headless CMS Blog](https://astro.build/themes/details/cosmic-cms-blog/)

# Craft CMS & Astro

> Add content to your Astro project using Craft CMS as a CMS

[Craft CMS](https://craftcms.com/) is a flexible open source CMS with an accessible authoring experience. It includes its own front end, but can also be used as a headless CMS to provide content to your Astro project.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- Check out the official Craft CMS [GraphQL API guide](https://craftcms.com/docs/5.x/development/graphql.html)
- The official documentation for Craft’s [`headlessMode` config setting](https://craftcms.com/docs/5.x/reference/config/general.html#headlessmode)

## Community Resources

[Section titled “Community Resources”](#community-resources)

- [SSG Astro with Headless Craft CMS Content Fetched At Build Time](https://www.olets.dev/posts/ssg-astro-with-headless-craft-cms-content-fetched-at-build-time/)
- [SSG Astro with Headless Craft CMS Content Fetched At Build Time Or Cached In Advance](https://www.olets.dev/posts/ssg-astro-with-headless-craft-cms-content-fetched-at-build-time-or-cached-in-advance/)
- [SSR Astro With Headless Craft CMS](https://www.olets.dev/posts/ssr-astro-with-headless-craft-cms/)

# Craft Cross CMS & Astro

> Add content to your Astro project using Craft Cross CMS

[Craft Cross CMS](https://ecosystem.plaid.co.jp/product/karte-craft/xcms) is an API-based headless CMS from the KARTE ecosystem.

## Official Resources

[Section titled “Official Resources”](#official-resources)

- Blog: [Build an Astro Website with Craft Cross CMS](https://solution.karte.io/blog/2025/10/build-website-with-astro-using-xcms/)
- Sample code (GitHub): [Craft Cross CMS with Astro (sample)](https://github.com/plaidev/craft-codes/tree/main/astro/cross-cms-astro-sample)

# Crystallize & Astro

> Add content to your Astro project using Crystallize as a CMS

[Crystallize](https://crystallize.com/) is a headless content management system for eCommerce that exposes a GraphQL API.

## Example

[Section titled “Example”](#example)

src/pages/index.astro

```astro
---
// Fetch your catalogue paths from Crystallize GraphQL API


import BaseLayout from '../../layouts/BaseLayout.astro';
import { createClient } from '@crystallize/js-api-client';


const apiClient = createClient({
  tenantIdentifier: 'furniture'
});


const query = `
  query getCataloguePaths{
    catalogue(language: "en", path: "/shop") {
      name
      children {
        name
        path
      }
    }
  }
`
const { data: { catalogue } } = await apiClient.catalogueApi(query)
---
<BaseLayout>
  <h1>{catalogue.name}</h1>
  <nav>
    <ul>
      {catalogue.children.map(child => (
        <li><a href={child.path}>{child.name}</a></li>
      ))}
    </ul>
  </nav>
</BaseLayout>
```
